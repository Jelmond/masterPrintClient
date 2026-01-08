"use client";

import { NextPage } from "next";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TransitionBg } from "./TransitionBg";
import { scrollTo } from "@/utils/scrollTo";

const AnimatedRouterContext = createContext({});
export const AnimatedRouterLayout: NextPage<{ children: any }> = ({
  children,
}) => {
  const changing = useRef(false);
  const router = useRouter();
  const transitionRef = useRef<{
    show: (callback?: () => void) => void;
    hide: () => void;
  }>();
  const [rerouting, setRerouting] = useState(false);
  const lastRoute = useRef<string[]>([]);
  const lastScrollPosition = useRef<Record<string, number>>({});
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathnameRef = useRef<string>("");
  const searchParamsRef = useRef<URLSearchParams | null>(null);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      pathnameRef.current = window.location.pathname;
      searchParamsRef.current = new URLSearchParams(window.location.search);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMounted) return;

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    routeChangeComplete();
    changing.current = false;
    document.body.style.cursor = "default";
    setRerouting(false);

    const handleRouteChange = () => {
      pathnameRef.current = window.location.pathname;
      searchParamsRef.current = new URLSearchParams(window.location.search);

      // Scroll to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' });

      routeChangeComplete();
      changing.current = false;
      document.body.style.cursor = "default";
      setRerouting(false);
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
    }, [pathname, searchParams, isMounted]);
  // }, [isMounted]);

  // Saves all the time, but could be desibled and then will be saved only on route
  useEffect(() => {
    if (!isMounted) return;
    if (typeof window === "undefined") {
      return;
    }
    const handleScroll = () => {
      lastScrollPosition.current[window.location.pathname] = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  // Always scroll to top on route change
  useLayoutEffect(() => {
    if (!isMounted) return;
    if (typeof window === "undefined") return;
    // Scroll to top immediately when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, isMounted]);

  const routeChangeStart = (href: string, backMode?: boolean) => {
    if (!isMounted) return;
    if (changing.current) return;
    if (typeof window === "undefined") return;
    
    // Don't process navigation for empty or hash-only links
    if (!href || href === "#" || href.trim() === "") return;
    
    const currentSearch = searchParamsRef.current?.toString() || "";
    const currentUrl = currentSearch
      ? `${pathnameRef.current}?${currentSearch}`
      : pathnameRef.current;

    // if (href === pathname || href === pathname + "?" + searchParams.toString())
    //   return;
    if (href === currentUrl) return;

    setRerouting(true);
    changing.current = true;
    const route = window.location.pathname;
    const scrollPosition = window.scrollY;
    const lastRouteName = lastRoute.current[lastRoute.current.length - 1];
    document.body.style.cursor = "progress";

    transitionRef.current?.show(() => {
      router.push(backMode && lastRouteName ? lastRouteName : href);
      if (!backMode) {
        lastRoute.current.pop();
      }
    });

    if (!backMode) {
      if (route !== lastRouteName) {
        lastRoute.current.push(route);
      }
      lastScrollPosition.current[route] = scrollPosition;
    }
  };
  const routeChangeComplete = () => {
    if (!isMounted) return;
    // Scroll to top when route change completes
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    transitionRef.current?.hide();
  };

  const value = {
    routeChangeStart,
    routeChangeComplete,
    rerouting,
    lastRoute,
  };

  return (
    <AnimatedRouterContext.Provider value={value}>
      {isMounted && <TransitionBg ref={transitionRef} />}
      {children}
    </AnimatedRouterContext.Provider>
  );
};

interface UseAnimatedRouter {
  routeChangeStart: (href: string, backMode?: boolean) => void;
  routeChangeComplete: () => void;
  rerouting: boolean;
}
// export const useAnimatedRouter = (): UseAnimatedRouter => {
//   const context = useContext(AnimatedRouterContext);
//   return context as UseAnimatedRouter;
// };

export const useAnimatedRouter = (): UseAnimatedRouter => {
  const context = useContext(AnimatedRouterContext) as UseAnimatedRouter & {
    isMounted?: boolean;
  };
  // Return a safe version that won't cause errors during SSR
  return {
    routeChangeStart: context.routeChangeStart ,
    routeChangeComplete:  context.routeChangeComplete,
    rerouting: context.rerouting,
  };
};

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: any;
  backMode?: boolean;
}

export const AnimLink = forwardRef<HTMLAnchorElement, Props>(
  ({ onClick, ...props }, outerRef) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    useImperativeHandle(outerRef, () => ref.current as HTMLAnchorElement);
    const { routeChangeStart } = useAnimatedRouter();
    const handleClick = (e: MouseEvent) => {
      // Don't process navigation for empty or hash-only links
      if (!props.href || props.href === "#" || props.href.trim() === "") {
        return;
      }
      routeChangeStart(props.href, props.backMode);
    };

    return (
      <Link
        ref={ref}
        onClick={(e) => {
          // Always prevent default to avoid unwanted navigation
          e.preventDefault();
          onClick?.(e as any);
          // Only trigger route change for valid links
          if (props.href && props.href !== "#" && props.href.trim() !== "") {
            handleClick(e as any);
          }
        }}
        {...props}
      >
        {props.children}
      </Link>
    );
  }
);
AnimLink.displayName = "AnimLink";

// function ClientOnly({ children }: any) {
//   const [mounted, mount] = useState(false);
//   useEffect(() => void mount(true), []);
//   if (!mounted) return null;
//   return <>{children}</>;
// }

export const useAnimRouter = () => {
  const router = useRouter();
  const { routeChangeStart, rerouting } = useAnimatedRouter();
  return useMemo(
    () => ({
      ...router,
      push: (href: string) => {
        routeChangeStart(href);
      },
      isRerouting: rerouting,
    }),
    [routeChangeStart, router, rerouting]
  );
};

export const useIsRerouting = (delayIn = 500, delayOut = 0) => {
  const { rerouting: _rerouting } = useAnimatedRouter();
  const [rerouting, setRerouting] = useState(_rerouting);
  const tmIn = useRef<any>(null);
  const tmOut = useRef<any>(null);
  useEffect(() => {
    clearTimeout(tmIn.current);
    clearTimeout(tmOut.current);
    if (_rerouting) {
      tmIn.current = setTimeout(() => {
        setRerouting(true);
      }, delayIn);
      return;
    }
    tmOut.current = setTimeout(() => {
      setRerouting(false);
    }, delayOut);
  }, [_rerouting, setRerouting]);
  return rerouting;
};
