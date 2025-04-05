// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"
// import { useSpring, animated, config } from "@react-spring/web"

// export default function QummitStack() {
//   const [scrollY, setScrollY] = useState(0)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [containerHeight, setContainerHeight] = useState(0)
//   const [windowHeight, setWindowHeight] = useState(0)

//   // Calculate normalized scroll progress (0 to 1)
//   const scrollProgress = Math.min(1, Math.max(0, scrollY / (containerHeight - windowHeight)))

//   // Define scroll thresholds for each stack
//   const stack1Threshold = 0.05
//   const stack2Threshold = 0.15
//   const stack3Threshold = 0.25
//   const stack4Threshold = 0.35
//   const stack5Threshold = 0.45
//   const stack6Threshold = 0.55
//   const stack7Threshold = 0.65
//   const stack8Threshold = 0.75

//   // Calculate individual progress for each stack (0 to 1)
//   const stack1Progress = Math.min(1, Math.max(0, (scrollProgress - 0) / (stack2Threshold - 0)))
//   const stack2Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack2Threshold) / (stack3Threshold - stack2Threshold)),
//   )
//   const stack3Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack3Threshold) / (stack4Threshold - stack3Threshold)),
//   )
//   const stack4Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack4Threshold) / (stack5Threshold - stack4Threshold)),
//   )
//   const stack5Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack5Threshold) / (stack6Threshold - stack5Threshold)),
//   )
//   const stack6Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack6Threshold) / (stack7Threshold - stack6Threshold)),
//   )
//   const stack7Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack7Threshold) / (stack8Threshold - stack7Threshold)),
//   )
//   const stack8Progress = Math.min(
//     1,
//     Math.max(0, (scrollProgress - stack8Threshold) / (1 - stack8Threshold)),
//   )

//   // Spring animations for each stack with improved smoothness
//   const stack1Spring = useSpring({
//     opacity: stack1Progress,
//     y: stack1Progress * 0,
//     scale: 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack2Spring = useSpring({
//     opacity: stack2Progress,
//     y: stack2Progress < 0.1 ? -20 : stack2Progress * 35,
//     scale: stack2Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack3Spring = useSpring({
//     opacity: stack3Progress,
//     y: stack3Progress < 0.1 ? -20 : stack3Progress * 70,
//     scale: stack3Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack4Spring = useSpring({
//     opacity: stack4Progress,
//     y: stack4Progress < 0.1 ? -20 : stack4Progress * 105,
//     scale: stack4Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack5Spring = useSpring({
//     opacity: stack5Progress,
//     y: stack5Progress < 0.1 ? -20 : stack5Progress * 140,
//     scale: stack5Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack6Spring = useSpring({
//     opacity: stack6Progress,
//     y: stack6Progress < 0.1 ? -20 : stack6Progress * 175,
//     scale: stack6Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack7Spring = useSpring({
//     opacity: stack7Progress,
//     y: stack7Progress < 0.1 ? -20 : stack7Progress * 210,
//     scale: stack7Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   const stack8Spring = useSpring({
//     opacity: stack8Progress,
//     y: stack8Progress < 0.1 ? -20 : stack8Progress * 245,
//     scale: stack8Progress < 0.1 ? 0.95 : 1,
//     config: {
//       tension: 80,
//       friction: 12,
//     },
//   })

//   // Spring animations for labels with improved smoothness
//   const leftLabel1Spring = useSpring({
//     opacity: stack1Progress,
//     x: stack1Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel2Spring = useSpring({
//     opacity: stack2Progress,
//     x: stack2Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel3Spring = useSpring({
//     opacity: stack3Progress,
//     x: stack3Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel4Spring = useSpring({
//     opacity: stack4Progress,
//     x: stack4Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel5Spring = useSpring({
//     opacity: stack5Progress,
//     x: stack5Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel6Spring = useSpring({
//     opacity: stack6Progress,
//     x: stack6Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel7Spring = useSpring({
//     opacity: stack7Progress,
//     x: stack7Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const leftLabel8Spring = useSpring({
//     opacity: stack8Progress,
//     x: stack8Progress < 0.1 ? -20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel1Spring = useSpring({
//     opacity: stack1Progress,
//     x: stack1Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel2Spring = useSpring({
//     opacity: stack2Progress,
//     x: stack2Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel3Spring = useSpring({
//     opacity: stack3Progress,
//     x: stack3Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel4Spring = useSpring({
//     opacity: stack4Progress,
//     x: stack4Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel5Spring = useSpring({
//     opacity: stack5Progress,
//     x: stack5Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel6Spring = useSpring({
//     opacity: stack6Progress,
//     x: stack6Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel7Spring = useSpring({
//     opacity: stack7Progress,
//     x: stack7Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   const rightLabel8Spring = useSpring({
//     opacity: stack8Progress,
//     x: stack8Progress < 0.1 ? 20 : 0,
//     config: config.gentle,
//   })

//   // Animated background values
//   const bgSpring = useSpring({
//     bgProgress: scrollProgress,
//     config: {
//       tension: 40,
//       friction: 15,
//     },
//   })

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     const handleResize = () => {
//       if (containerRef.current) {
//         setContainerHeight(containerRef.current.scrollHeight)
//       }
//       setWindowHeight(window.innerHeight)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     window.addEventListener("resize", handleResize)

//     // Initial measurements
//     handleResize()
//     handleScroll()

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-[500vh] w-full relative pt-16"
//     >
//       <animated.div 
//         className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
//         style={{
//           background: bgSpring.bgProgress.to((progress) => {
//             if (progress < stack3Threshold) {
//               // Initial gradient (light teal to light purple)
//               return "linear-gradient(135deg, #e6f7f5 0%, #f0e6f7 100%)"
//             } else if (progress < stack5Threshold) {
//               // Space background (dark blue with stars effect)
//               return "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)"
//             } else if (progress < stack7Threshold) {
//               // Quantum realm (purple to blue gradient)
//               return "linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)"
//             } else {
//               // Deep space (dark with nebula effect)
//               return "linear-gradient(135deg, #000428 0%, #004e92 100%)"
//             }
//           }),
//         }}
//       >
//         {/* Animated particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           <animated.div 
//             className="quantum-particles"
//             style={{
//               opacity: bgSpring.bgProgress.to(progress => {
//                 if (progress < stack3Threshold) return 0;
//                 if (progress < stack5Threshold) return 0.7;
//                 if (progress < stack7Threshold) return 0.8;
//                 return 1;
//               })
//             }}
//           />
          
//           {/* Animated grid for quantum effect */}
//           <animated.div 
//             className="quantum-grid"
//             style={{
//               opacity: bgSpring.bgProgress.to(progress => {
//                 if (progress < stack3Threshold) return 0;
//                 if (progress < stack5Threshold) return 0.3;
//                 if (progress < stack7Threshold) return 0.5;
//                 return 0.7;
//               })
//             }}
//           />
          
//           {/* Animated glow effect */}
//           <animated.div 
//             className="absolute inset-0"
//             style={{
//               background: bgSpring.bgProgress.to(progress => {
//                 if (progress < stack3Threshold) {
//                   return "radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0), rgba(0, 200, 255, 0))";
//                 } else if (progress < stack5Threshold) {
//                   return "radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0.1), rgba(0, 0, 0, 0))";
//                 } else if (progress < stack7Threshold) {
//                   return "radial-gradient(circle at 50% 50%, rgba(100, 0, 255, 0.15), rgba(0, 0, 0, 0))";
//                 } else {
//                   return "radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.2), rgba(0, 0, 0, 0))";
//                 }
//               }),
//             }}
//           />
//         </div>

//         <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center">
//           {/* Left side labels */}
//           <div className="absolute left-4 md:left-16 lg:left-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 items-end text-right z-20">
//             {/* Layer 1 label */}
//             <animated.div style={leftLabel1Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">QuNexus</h3>
//               <p className="text-label-secondary">Quantum Platform</p>
//             </animated.div>

//             {/* Layer 2 label */}
//             <animated.div style={leftLabel2Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Equations</h3>
//               <p className="text-label-secondary">Mathematical Foundation</p>
//             </animated.div>

//             {/* Layer 3 label */}
//             <animated.div style={leftLabel3Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Circuits</h3>
//               <p className="text-label-secondary">Circuit Implementation</p>
//             </animated.div>

//             {/* Layer 4 label */}
//             <animated.div style={leftLabel4Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Core</h3>
//               <p className="text-label-secondary">Processing Unit</p>
//             </animated.div>

//             {/* Layer 5 label */}
//             <animated.div style={leftLabel5Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Bridge</h3>
//               <p className="text-label-secondary">Interface Layer</p>
//             </animated.div>

//             {/* Layer 6 label */}
//             <animated.div style={leftLabel6Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Memory</h3>
//               <p className="text-label-secondary">State Storage</p>
//             </animated.div>

//             {/* Layer 7 label */}
//             <animated.div style={leftLabel7Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum Bus</h3>
//               <p className="text-label-secondary">Data Transfer</p>
//             </animated.div>

//             {/* Layer 8 label */}
//             <animated.div style={leftLabel8Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Quantum I/O</h3>
//               <p className="text-label-secondary">External Interface</p>
//             </animated.div>
//           </div>

//           {/* Stack visualization with glow effects */}
//           <div className="relative w-80 h-80 md:w-96 md:h-96">
//             {/* Stack 1 - Top */}
//             <animated.div
//               style={{
//                 ...stack1Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack1Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 80,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_1.png"
//                 alt="QuNexus Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 2 */}
//             <animated.div
//               style={{
//                 ...stack2Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack2Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 70,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_2.png"
//                 alt="Quantum Equations Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 3 */}
//             <animated.div
//               style={{
//                 ...stack3Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack3Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 60,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_3.png"
//                 alt="Quantum Circuits Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 4 */}
//             <animated.div
//               style={{
//                 ...stack4Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack4Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 50,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_4.png"
//                 alt="Quantum Core Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 5 */}
//             <animated.div
//               style={{
//                 ...stack5Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack5Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 40,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_5.png"
//                 alt="Quantum Bridge Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 6 */}
//             <animated.div
//               style={{
//                 ...stack6Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack6Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 30,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_6.png"
//                 alt="Quantum Memory Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 7 */}
//             <animated.div
//               style={{
//                 ...stack7Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack7Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 20,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_7.png"
//                 alt="Quantum Bus Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>

//             {/* Stack 8 - Bottom */}
//             <animated.div
//               style={{
//                 ...stack8Spring,
//                 position: "absolute",
//                 left: "50%",
//                 transform: stack8Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
//                 zIndex: 10,
//               }}
//               className="stack-glow"
//             >
//               <Image
//                 src="/images/layer_8.png"
//                 alt="Quantum I/O Layer"
//                 width={400}
//                 height={120}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//             </animated.div>
//           </div>

//           {/* Right side labels */}
//           <div className="absolute right-4 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 items-start z-20">
//             {/* Layer 1 label */}
//             <animated.div style={rightLabel1Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 1</h3>
//               <p className="text-label-secondary">User Interface</p>
//             </animated.div>

//             {/* Layer 2 label */}
//             <animated.div style={rightLabel2Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 2</h3>
//               <p className="text-label-secondary">Theoretical Framework</p>
//             </animated.div>

//             {/* Layer 3 label */}
//             <animated.div style={rightLabel3Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 3</h3>
//               <p className="text-label-secondary">Quantum Programming</p>
//             </animated.div>

//             {/* Layer 4 label */}
//             <animated.div style={rightLabel4Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 4</h3>
//               <p className="text-label-secondary">Quantum Processing</p>
//             </animated.div>

//             {/* Layer 5 label */}
//             <animated.div style={rightLabel5Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 5</h3>
//               <p className="text-label-secondary">Middleware</p>
//             </animated.div>

//             {/* Layer 6 label */}
//             <animated.div style={rightLabel6Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 6</h3>
//               <p className="text-label-secondary">Quantum Storage</p>
//             </animated.div>

//             {/* Layer 7 label */}
//             <animated.div style={rightLabel7Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 7</h3>
//               <p className="text-label-secondary">Communication</p>
//             </animated.div>

//             {/* Layer 8 label */}
//             <animated.div style={rightLabel8Spring}>
//               <h3 className="text-2xl font-bold mb-1 text-label">Layer 8</h3>
//               <p className="text-label-secondary">Hardware Interface</p>
//             </animated.div>
//           </div>

//           {/* Progress indicator with glow effect */}
//           <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack1Threshold ? "bg-teal-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack2Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack3Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack4Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack5Threshold ? "bg-teal-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack6Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack7Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//             <div
//               className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                 scrollProgress >= stack8Threshold ? "bg-blue-400 indicator-glow" : "bg-gray-400"
//               }`}
//             />
//           </div>
//         </div>
//       </animated.div>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSpring, animated, config } from "@react-spring/web"

export default function QummitStack() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState(1) // 1, 2, or 3 for different content sections

  // Define dynamic content for each section
  const sectionContent = {
    1: {
      title: "QUANTUM FUNDAMENTALS",
      description: "The building blocks of quantum computing architecture",
      leftContent: [
        { title: "QUANTUM NEXUS", subtitle: "Quantum Platform" },
        { title: "QUANTUM EQUATIONS", subtitle: "Mathematical Foundation" },
        { title: "QUANTUM CIRCUITS", subtitle: "Circuit Implementation" },
      ],
      rightContent: [
        { title: "", subtitle: "User Interface" },
        { title: "", subtitle: "Theoretical Framework" },
        { title: "", subtitle: "Quantum Programming" },
      ],
    },
    2: {
      title: "QUANTUM MIDDLEWARE",
      description: "The core processing and interface components",
      leftContent: [
        { title: "QUANTUM CORE", subtitle: "Processing Unit" },
        { title: "QUANTUM BRIDGE", subtitle: "Interface Layer" },
        { title: "QUANTUM MEMORY", subtitle: "State Storage" },
      ]
     
    },
    3: {
      title: "QUANTUM INFRASTRUCTURE",
      description: "The communication and hardware interface layers",
      leftContent: [
        { title: "QUANTUM BUS", subtitle: "Data Transfer" },
        { title: "QUANTUM I/O", subtitle: "External Interface" },
      ],
      rightContent: [
        { title: "", subtitle: "Communication" },
        { title: "", subtitle: "Hardware Interface" },
      ],
    },
  }

  // Calculate normalized scroll progress (0 to 1)
  const scrollProgress = Math.min(1, Math.max(0, scrollY / (containerHeight - windowHeight)))

  // Define scroll thresholds for each stack
  const stack1Threshold = 0.05
  const stack2Threshold = 0.15
  const stack3Threshold = 0.25
  const stack4Threshold = 0.35
  const stack5Threshold = 0.45
  const stack6Threshold = 0.55
  const stack7Threshold = 0.65
  const stack8Threshold = 0.75

  // Calculate individual progress for each stack (0 to 1)
  const stack1Progress = Math.min(1, Math.max(0, (scrollProgress - 0) / (stack2Threshold - 0)))
  const stack2Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack2Threshold) / (stack3Threshold - stack2Threshold)),
  )
  const stack3Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack3Threshold) / (stack4Threshold - stack3Threshold)),
  )
  const stack4Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack4Threshold) / (stack5Threshold - stack4Threshold)),
  )
  const stack5Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack5Threshold) / (stack6Threshold - stack5Threshold)),
  )
  const stack6Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack6Threshold) / (stack7Threshold - stack6Threshold)),
  )
  const stack7Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack7Threshold) / (stack8Threshold - stack7Threshold)),
  )
  const stack8Progress = Math.min(1, Math.max(0, (scrollProgress - stack8Threshold) / (1 - stack8Threshold)))

  // Spring animations for each stack with improved smoothness
  const stack1Spring = useSpring({
    opacity: stack1Progress,
    y: stack1Progress * 0,
    scale: 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack2Spring = useSpring({
    opacity: stack2Progress,
    y: stack2Progress < 0.1 ? -20 : stack2Progress * 35,
    scale: stack2Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack3Spring = useSpring({
    opacity: stack3Progress,
    y: stack3Progress < 0.1 ? -20 : stack3Progress * 70,
    scale: stack3Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack4Spring = useSpring({
    opacity: stack4Progress,
    y: stack4Progress < 0.1 ? -20 : stack4Progress * 105,
    scale: stack4Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack5Spring = useSpring({
    opacity: stack5Progress,
    y: stack5Progress < 0.1 ? -20 : stack5Progress * 140,
    scale: stack5Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack6Spring = useSpring({
    opacity: stack6Progress,
    y: stack6Progress < 0.1 ? -20 : stack6Progress * 175,
    scale: stack6Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack7Spring = useSpring({
    opacity: stack7Progress,
    y: stack7Progress < 0.1 ? -20 : stack7Progress * 210,
    scale: stack7Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  const stack8Spring = useSpring({
    opacity: stack8Progress,
    y: stack8Progress < 0.1 ? -20 : stack8Progress * 245,
    scale: stack8Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 80,
      friction: 12,
    },
  })

  // Spring animations for labels with improved smoothness
  const leftLabel1Spring = useSpring({
    opacity: stack1Progress,
    x: stack1Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel2Spring = useSpring({
    opacity: stack2Progress,
    x: stack2Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel3Spring = useSpring({
    opacity: stack3Progress,
    x: stack3Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel4Spring = useSpring({
    opacity: stack4Progress,
    x: stack4Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel5Spring = useSpring({
    opacity: stack5Progress,
    x: stack5Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel6Spring = useSpring({
    opacity: stack6Progress,
    x: stack6Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel7Spring = useSpring({
    opacity: stack7Progress,
    x: stack7Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const leftLabel8Spring = useSpring({
    opacity: stack8Progress,
    x: stack8Progress < 0.1 ? -20 : 0,
    config: config.gentle,
  })

  const rightLabel1Spring = useSpring({
    opacity: stack1Progress,
    x: stack1Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel2Spring = useSpring({
    opacity: stack2Progress,
    x: stack2Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel3Spring = useSpring({
    opacity: stack3Progress,
    x: stack3Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel4Spring = useSpring({
    opacity: stack4Progress,
    x: stack4Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel5Spring = useSpring({
    opacity: stack5Progress,
    x: stack5Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel6Spring = useSpring({
    opacity: stack6Progress,
    x: stack6Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel7Spring = useSpring({
    opacity: stack7Progress,
    x: stack7Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  const rightLabel8Spring = useSpring({
    opacity: stack8Progress,
    x: stack8Progress < 0.1 ? 20 : 0,
    config: config.gentle,
  })

  // Animated background values
  const bgSpring = useSpring({
    bgProgress: scrollProgress,
    config: {
      tension: 40,
      friction: 15,
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll progress
      if (scrollProgress < stack3Threshold) {
        setActiveSection(1)
      } else if (scrollProgress < stack6Threshold) {
        setActiveSection(2)
      } else {
        setActiveSection(3)
      }
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight)
      }
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    // Initial measurements
    handleResize()
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [scrollProgress])

  return (
    <div ref={containerRef} className="min-h-[500vh] w-full relative pt-16">
      <animated.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          background: bgSpring.bgProgress.to((progress) => {
            if (progress < stack3Threshold) {
              // Deep space blue background like in the reference image
              return "linear-gradient(135deg, #0a1128 0%, #1a2980 100%)"
            } else if (progress < stack5Threshold) {
              // Deeper blue with slight purple
              return "linear-gradient(135deg, #0a1128 0%, #1a237e 100%)"
            } else if (progress < stack7Threshold) {
              // Deep blue with teal accents
              return "linear-gradient(135deg, #0a1128 0%, #004d7a 100%)"
            } else {
              // Darkest deep space
              return "linear-gradient(135deg, #0a1128 0%, #001233 100%)"
            }
          }),
        }}
      >
        {/* Stars background effect */}
        <div className="absolute inset-0 stars-bg"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <animated.div
            className="quantum-particles"
            style={{
              opacity: bgSpring.bgProgress.to((progress) => {
                if (progress < stack3Threshold) return 0.5
                if (progress < stack5Threshold) return 0.7
                if (progress < stack7Threshold) return 0.8
                return 1
              }),
            }}
          />

          {/* Animated grid for quantum effect */}
          <animated.div
            className="quantum-grid"
            style={{
              opacity: bgSpring.bgProgress.to((progress) => {
                if (progress < stack3Threshold) return 0.2
                if (progress < stack5Threshold) return 0.3
                if (progress < stack7Threshold) return 0.4
                return 0.5
              }),
            }}
          />
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center">
          {/* Left side labels - Dynamic based on active section */}
          <div className="absolute left-4 md:left-16 lg:left-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 items-end text-right z-20">
            <animated.div
              style={{ opacity: scrollProgress < 0.1 ? scrollProgress * 10 : 1 }}
              className="text-right mb-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-3 text-cyan-400 quantum-text">
                {sectionContent[activeSection].title}
              </h2>
              <p className="text-xl md:text-2xl text-cyan-300/70">{sectionContent[activeSection].description}</p>
            </animated.div>

            {sectionContent[activeSection].leftContent.map((content, index) => {
              const layerIndex = activeSection === 1 ? index + 1 : activeSection === 2 ? index + 4 : index + 7

              const springProps = [
                leftLabel1Spring,
                leftLabel2Spring,
                leftLabel3Spring,
                leftLabel4Spring,
                leftLabel5Spring,
                leftLabel6Spring,
                leftLabel7Spring,
                leftLabel8Spring,
              ][layerIndex - 1]

              return (
                <animated.div key={`left-${layerIndex}`} style={springProps} className="text-right">
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 text-cyan-400 quantum-text">{content.title}</h3>
                  <p className="text-lg md:text-xl text-cyan-300/70">{content.subtitle}</p>
                </animated.div>
              )
            })}
          </div>

          {/* Stack visualization with glow effects */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Stack 1 - Top */}
            <animated.div
              style={{
                ...stack1Spring,
                position: "absolute",
                left: "50%",
                transform: stack1Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 80,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(1)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_1.png"
                alt="QuNexus Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 1 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 1 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 2 */}
            <animated.div
              style={{
                ...stack2Spring,
                position: "absolute",
                left: "50%",
                transform: stack2Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 70,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(2)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_2.png"
                alt="Quantum Equations Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 2 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 2 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 3 */}
            <animated.div
              style={{
                ...stack3Spring,
                position: "absolute",
                left: "50%",
                transform: stack3Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 60,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(3)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_3.png"
                alt="Quantum Circuits Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 3 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 3 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 4 */}
            <animated.div
              style={{
                ...stack4Spring,
                position: "absolute",
                left: "50%",
                transform: stack4Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 50,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(4)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_4.png"
                alt="Quantum Core Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 4 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 4 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 5 */}
            <animated.div
              style={{
                ...stack5Spring,
                position: "absolute",
                left: "50%",
                transform: stack5Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 40,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(5)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_5.png"
                alt="Quantum Bridge Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 5 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 5 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 6 */}
            <animated.div
              style={{
                ...stack6Spring,
                position: "absolute",
                left: "50%",
                transform: stack6Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 30,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(6)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_6.png"
                alt="Quantum Memory Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 6 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 6 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 7 */}
            <animated.div
              style={{
                ...stack7Spring,
                position: "absolute",
                left: "50%",
                transform: stack7Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 20,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(7)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_7.png"
                alt="Quantum Bus Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 7 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 7 ? "active" : ""}`}></div>
            </animated.div>

            {/* Stack 8 - Bottom */}
            <animated.div
              style={{
                ...stack8Spring,
                position: "absolute",
                left: "50%",
                transform: stack8Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 10,
              }}
              className="layer-glow"
              onMouseEnter={() => setHoveredLayer(8)}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <Image
                src="/images/layer_8.png"
                alt="Quantum I/O Layer"
                width={400}
                height={120}
                className={`w-full h-auto object-contain transition-all duration-1000 ${
                  hoveredLayer === 8 ? "scale-105 duration-300" : ""
                }`}
                priority
              />
              <div className={`layer-glow-effect ${hoveredLayer === 8 ? "active" : ""}`}></div>
            </animated.div>
          </div>

          {/* Right side labels - Dynamic based on active section */}
          <div className="absolute right-4 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 items-start z-20">
            {sectionContent[activeSection].rightContent?.map((content, index) => {
              const layerIndex = activeSection === 1 ? index + 1 : activeSection === 2 ? index + 4 : index + 7

              const springProps = [
                rightLabel1Spring,
                rightLabel2Spring,
                rightLabel3Spring,
                rightLabel4Spring,
                rightLabel5Spring,
                rightLabel6Spring,
                rightLabel7Spring,
                rightLabel8Spring,
              ][layerIndex - 1]

              return (
                <animated.div key={`right-${layerIndex}`} style={springProps}>
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 text-cyan-400 quantum-text">{content.title}</h3>
                  <p className="text-lg md:text-xl text-cyan-300/70">{content.subtitle}</p>
                </animated.div>
              )
            })}
          </div>

          {/* Progress indicator with glow effect */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack1Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack2Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack3Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack4Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack5Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack6Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack7Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack8Threshold ? "bg-cyan-400 indicator-glow" : "bg-gray-600"
              }`}
            />
          </div>
        </div>
      </animated.div>
    </div>
  )
}



