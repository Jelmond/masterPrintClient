import {
  animated,
  config,
  easings,
  SpringConfig,
  useSpring,
} from "@react-spring/web";
import {
  CSSProperties,
  ElementType,
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Tags } from "./Spring";
import { useWindowWidth } from "@/hooks/useWindowSize";
import { isMobileDisabled, springsConfig } from "./config";
import { isNotEmpty, VarTextTag } from "../Text/TextEngine";
import { interpolate } from "@/utils/math";
import { useLoopInView } from "@/hooks/useLoopInView";

export type TriggerPos =
  | "top top"
  | "center top"
  | "bottom top"
  | "top center"
  | "center center"
  | "bottom center"
  | "top bottom"
  | "center bottom"
  | "bottom bottom";

type ProgresstriggerProps = {
  children?: React.ReactNode;
  enabled?: boolean;
  trigger?: React.RefObject<HTMLElement> | undefined;
  start?: TriggerPos;
  end?: TriggerPos;
  onChange?: (state: {
    progress: number;
    interpolatedProgress: number;
  }) => void;
  from?: { [x: string]: string | number };
  to?: { [x: string]: string | number };
  disableOnMobile?: boolean;
  config?: SpringConfig;
  frameInterval?: number;
  innerTag?: Tags;
  innerClassName?: string;
  mode?: "toggle" | "scrub";
} & Omit<React.HTMLAttributes<HTMLElement>, "onChange">;

export interface VarTextTagProps {
  tag?: Tags;
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
const AnimatedVarTextTag = forwardRef<HTMLElement, VarTextTagProps>(
  ({ tag = "span", children, className, style, ...props }, outerRef) => {
    const ref = useRef<HTMLElement | null>(null);
    useImperativeHandle(outerRef, () => ref.current as HTMLElement);
    const Tag = animated[tag] as ElementType;

    return (
      <Tag ref={ref} className={className} style={style} {...props}>
        {children}
      </Tag>
    );
  }
);

AnimatedVarTextTag.displayName = "AnimatedVarTextTag";

export const SpringTrigger = memo(
  forwardRef<HTMLElement, ProgresstriggerProps & { tag?: Tags }>(
    (
      {
        tag: Tag = "div",
        children,
        start = "top bottom",
        end = "bottom top",
        trigger = undefined,
        from = {},
        to = {},
        onChange,
        enabled = true,
        disableOnMobile = false,
        frameInterval = 10,
        innerTag = "div",
        innerClassName,
        config: springConfig = { duration: 1, easing: easings.linear },
        mode = "scrub",
        ...props
      },
      ref
    ) => {
      const innerRef = useRef<HTMLElement>(null);
      const width = useWindowWidth();
      const savedProgress = useRef(-1);
      const activeRef = useRef(false);
      const dataRef = useRef({
        from: {},
        to: {},
      });
      useEffect(() => {
        dataRef.current.from = from;
        dataRef.current.to = to;
      }, [from, to]);

      const [{ interpolatedProgress }, springApi] = useSpring(() => ({
        interpolatedProgress: 0,
        config: springConfig,
      }));

      const [springs, api] = useSpring(() => ({
        from,
        config,
      }));

      useImperativeHandle(ref, () => innerRef.current as HTMLElement);

      const active = useMemo(() => {
        if (
          isMobileDisabled(
            springsConfig.disableOnMobile.springtrigger || disableOnMobile
          )
        ) {
          return false;
        }
        if (!enabled) {
          return false;
        }
        return true;
      }, [enabled, disableOnMobile, width]);

      useEffect(() => {
        activeRef.current = active;
      }, [active]);

      function animate(progress: number) {
        isNotEmpty(dataRef.current.to) &&
          api.start(() => {
            if (mode === "toggle") {
              if (progress >= 1) {
                return {
                  ...dataRef.current.to,
                  config: springConfig,
                };
              }
              return {
                ...dataRef.current.from,
                config: springConfig,
              };
            }

            const interpolatedValue = interpolate(
              dataRef.current.from,
              dataRef.current.to,
              progress
            );
            return {
              ...interpolatedValue,
              config: springConfig,
            };
          });
      }

      useLoopInView(
        // @ts-expect-error
        trigger || innerRef,
        () => {
          if (typeof window === "undefined") return;
          const _ref = trigger || innerRef;
          if (!activeRef.current || !_ref.current) return;

          const bb = _ref.current.getBoundingClientRect();
          const clientHeight = window.innerHeight;

          const poses = {
            top_top: bb.top,
            center_top: bb.top + bb.height / 2,
            bottom_top: bb.bottom,
            top_bottom: bb.top - clientHeight,
            center_bottom: bb.top + bb.height / 2 - clientHeight,
            bottom_bottom: bb.bottom - clientHeight,
            top_center: bb.top - clientHeight / 2,
            center_center: bb.top + bb.height / 2 - clientHeight / 2,
            bottom_center: bb.bottom - clientHeight / 2,
          };

          const scrollStart =
            poses[start.split(" ").join("_") as keyof typeof poses];
          const scrollEnd =
            poses[end.split(" ").join("_") as keyof typeof poses];
          const length = Math.abs(scrollStart - scrollEnd);
          const progress = Math.min(
            Math.max(0, 1 - (scrollStart + length) / length),
            1
          );

          if (progress !== savedProgress.current) {
            savedProgress.current = progress;
            springApi.start({ interpolatedProgress: progress });
            animate(progress);
            onChange?.({
              progress,
              interpolatedProgress: interpolatedProgress.get(),
            });
          }
        },
        { framerate: frameInterval }
      );

      if (trigger && Tag === undefined) {
        return <>{children}</>;
      }

      return (
        <VarTextTag tag={Tag} ref={innerRef} {...props}>
          <AnimatedVarTextTag
            tag={innerTag}
            style={springs}
            className={innerClassName}
          >
            {children}
          </AnimatedVarTextTag>
        </VarTextTag>
      );
    }
  )
);

SpringTrigger.displayName = "SpringTrigger";
