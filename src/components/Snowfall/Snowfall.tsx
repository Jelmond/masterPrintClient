'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Shader for fake bloom effect - simple and visible
const bloomVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const bloomFragmentShader = `
  uniform float uIntensity;
  uniform vec3 uCameraPosition;
  uniform vec3 uColor;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  
  void main() {
    // Simple approach: create a glow that's strongest at the edges
    // Use the normal to create a fresnel-like effect
    vec3 viewDirection = normalize(uCameraPosition - vWorldPosition);
    vec3 normal = normalize(vNormal);
    
    // Fresnel effect - edges glow more
    float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), 1.5);
    
    // Also add a simple distance-based glow from center
    // For a unit sphere, position length gives us distance from center
    float distFromCenter = length(vPosition);
    float centerGlow = 1.0 - smoothstep(0.2, 0.5, distFromCenter);
    
    // Combine both effects
    float finalGlow = (fresnel * 0.7 + centerGlow * 0.3) * uIntensity;
    
    // Use the random color tint
    gl_FragColor = vec4(uColor, finalGlow);
  }
`

interface SnowflakeProps {
  position: [number, number, number]
  speed: number
  size: number
  scrollVelocity: number
  zDepth: number
  color: [number, number, number]
}

function Snowflake({ position, speed, size, scrollVelocity, zDepth, color }: SnowflakeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const bloomMaterialRef = useRef<THREE.ShaderMaterial | null>(null)
  const initialY = position[1]
  const initialX = position[0]
  const initialZ = position[2]
  const parallaxOffsetRef = useRef(0)
  
  // Create bloom material uniforms
  const bloomUniforms = useMemo(() => ({
    uIntensity: { value: 2.5 },
    uCameraPosition: { value: new THREE.Vector3(0, 0, 5) },
    uColor: { value: new THREE.Vector3(color[0], color[1], color[2]) },
  }), [color])

  useFrame((state, delta) => {
    if (meshRef.current && typeof window !== 'undefined') {
      // Normalize z depth for influence calculations
      const normalizedZ = (initialZ + 5) / 10 // 0 to 1, where 0 is closest
      
      // ALWAYS falling - base movement
      let currentY = meshRef.current.position.y
      currentY -= speed * 0.01 // Always fall
      
      // Parallax effect based on scroll velocity - accumulate and decay
      const parallaxFactor = 1 - normalizedZ
      const parallaxInfluence = 0.08 * parallaxFactor
      parallaxOffsetRef.current += scrollVelocity * parallaxInfluence * delta * 60
      
      // Decay parallax offset back to zero
      parallaxOffsetRef.current *= 0.94
      
      // Apply parallax offset on top of falling motion
      currentY += parallaxOffsetRef.current
      
      // Natural drift
      const naturalX = initialX + Math.sin(state.clock.elapsedTime + position[0]) * 0.001
      
      // Apply positions (snowflake is always falling)
      meshRef.current.position.x = naturalX
      meshRef.current.position.y = currentY
      meshRef.current.position.z = initialZ 
      
      // Rotate the snowflake
      meshRef.current.rotation.z += 0.01
      
      // Animate bloom intensity for pulsing glow effect
      if (bloomMaterialRef.current) {
        const intensity = 2.0 + Math.sin(state.clock.elapsedTime * 1.5 + position[0] * 10) * 0.8
        bloomMaterialRef.current.uniforms.uIntensity.value = intensity
        
        // Update camera position for fresnel calculation
        if (state.camera) {
          bloomMaterialRef.current.uniforms.uCameraPosition.value.copy(state.camera.position)
        }
      }
      
      // Reset position when it goes below the viewport
      if (meshRef.current.position.y < -10) {
        meshRef.current.position.y = initialY + 20
        meshRef.current.position.x = initialX + (Math.random() - 0.5) * 2
        meshRef.current.position.z = initialZ
        parallaxOffsetRef.current = 0
      }
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <shaderMaterial
        ref={bloomMaterialRef}
        attach="material"
        uniforms={bloomUniforms}
        vertexShader={bloomVertexShader}
        fragmentShader={bloomFragmentShader}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  )
}

function SnowScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const smoothMousePositionRef = useRef({ x: 0, y: 0 })
  
  // Initialize mouse position to center on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      setMousePosition({ x: centerX, y: centerY })
      smoothMousePositionRef.current = { x: centerX, y: centerY }
    }
  }, [])
  const scrollVelocityRef = useRef(0)
  const targetScrollVelocityRef = useRef(0)
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const lastScrollYRef = useRef<number | null>(null)
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  // Smoothly interpolate mouse position in useFrame
  useFrame((state, delta) => {
    // Smoothly interpolate current position towards target position
    const lerpFactor = 0.1
    smoothMousePositionRef.current.x = THREE.MathUtils.lerp(
      smoothMousePositionRef.current.x,
      mousePosition.x,
      lerpFactor
    )
    smoothMousePositionRef.current.y = THREE.MathUtils.lerp(
      smoothMousePositionRef.current.y,
      mousePosition.y,
      lerpFactor
    )
  })
  
  // Track scroll velocity (delta)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      
      if (lastScrollYRef.current === null) {
        lastScrollYRef.current = currentScrollY
        return
      }
      
      // Calculate scroll velocity (delta)
      const deltaY = currentScrollY - lastScrollYRef.current
      
      // Normalize to screen height for consistent reaction
      const normalizedDeltaY = deltaY / window.innerHeight
      
      // Update target scroll velocity
      targetScrollVelocityRef.current = normalizedDeltaY
      
      lastScrollYRef.current = currentScrollY
    }
    
    // Check if Lenis is available
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.on('scroll', handleScroll)
      return () => lenis.off('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Smoothly interpolate scroll velocity in useFrame
  useFrame((state, delta) => {
    // Smoothly interpolate current scroll velocity towards target velocity
    const lerpFactor = 0.2
    scrollVelocityRef.current = THREE.MathUtils.lerp(
      scrollVelocityRef.current,
      targetScrollVelocityRef.current,
      lerpFactor
    )
    
    // Decay target scroll velocity towards zero (when scrolling stops)
    targetScrollVelocityRef.current *= 0.85
    
    // Decay current scroll velocity
    scrollVelocityRef.current *= 0.9
    
    // Update state
    setScrollVelocity(scrollVelocityRef.current)
  })
  
  // Generate random color tints - blue-based pastel shades with variations
  const generateRandomColor = (): [number, number, number] => {
    const colors = [
      [0.85, 0.90, 1.0],      // Soft blue
      [0.88, 0.92, 1.0],      // Light blue
      [0.82, 0.88, 1.0],      // Sky blue
      [0.90, 0.93, 1.0],      // Pale blue
      [0.86, 0.91, 1.0],      // Powder blue
      [0.84, 0.89, 0.98],     // Blue with slight green
      [0.87, 0.90, 1.0],      // Periwinkle blue
      [0.88, 0.91, 0.99],     // Light blue-gray
      [0.85, 0.92, 1.0],      // Baby blue
      [0.86, 0.90, 1.0],      // Ice blue
    ]
    return colors[Math.floor(Math.random() * colors.length)] as [number, number, number]
  }

  const snowflakes = useMemo(() => {
    const count = 200
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 30 - 5,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 0.5,
      size: (0.01 + Math.random() * 0.023) * 1.2, // Scaled up
      color: generateRandomColor(),
    }))
  }, [])

  // Group offset for mouse movement
  const groupRef = useRef<THREE.Group>(null)
  const groupOffsetRef = useRef({ x: 0, z: 0 })
  
  // Update group position based on mouse
  useFrame(() => {
    if (groupRef.current && typeof window !== 'undefined') {
      // Convert mouse position to normalized coordinates (-1 to 1)
      const normalizedMouseX = (smoothMousePositionRef.current.x / window.innerWidth) * 2 - 1
      const normalizedMouseY = -(smoothMousePositionRef.current.y / window.innerHeight) * 2 + 1
      
      // Calculate target group offset
      const mouseInfluence = 0.3
      const targetOffsetX = normalizedMouseX * mouseInfluence
      
      // 3D effect: z position based on mouse distance from center
      const mouseDistance = Math.sqrt(normalizedMouseX * normalizedMouseX + normalizedMouseY * normalizedMouseY)
      const zInfluence = 0.25
      const targetOffsetZ = mouseDistance * zInfluence
      
      // Also add subtle effect based on mouse Y position
      const verticalZInfluence = normalizedMouseY * 0.1
      const finalTargetZ = targetOffsetZ + verticalZInfluence
      
      // Smoothly interpolate group offset
      groupOffsetRef.current.x = THREE.MathUtils.lerp(
        groupOffsetRef.current.x,
        targetOffsetX,
        0.075
      )
      groupOffsetRef.current.z = THREE.MathUtils.lerp(
        groupOffsetRef.current.z,
        finalTargetZ,
        0.075
      )
      
      // Decay group offset back to zero when mouse stops
      groupOffsetRef.current.x *= 0.95
      groupOffsetRef.current.z *= 0.93
      
      // Apply group offset
      groupRef.current.position.x = groupOffsetRef.current.x
      groupRef.current.position.z = groupOffsetRef.current.z
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <group ref={groupRef}>
        {snowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            position={flake.position}
            speed={flake.speed}
            size={flake.size}
            scrollVelocity={scrollVelocity}
            zDepth={flake.position[2]}
            color={flake.color}
          />
        ))}
      </group>
    </>
  )
}

export function Snowfall() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100,
      }}
      gl={{ alpha: true, antialias: true }}
    >
      <SnowScene />
    </Canvas>
  )
}

