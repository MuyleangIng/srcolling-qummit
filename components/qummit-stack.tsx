"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSpring, animated, config } from "@react-spring/web"

export default function QummitStack() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  // Calculate normalized scroll progress (0 to 1)
  const scrollProgress = Math.min(1, Math.max(0, scrollY / (containerHeight - windowHeight)))

  // Define scroll thresholds for each stack
  const stack1Threshold = 0.1
  const stack2Threshold = 0.4
  const stack3Threshold = 0.7

  // Calculate individual progress for each stack (0 to 1)
  const stack1Progress = Math.min(1, Math.max(0, (scrollProgress - 0) / (stack2Threshold - 0)))
  const stack2Progress = Math.min(
    1,
    Math.max(0, (scrollProgress - stack2Threshold) / (stack3Threshold - stack2Threshold)),
  )
  const stack3Progress = Math.min(1, Math.max(0, (scrollProgress - stack3Threshold) / (1 - stack3Threshold)))

  // Spring animations for each stack
  const stack1Spring = useSpring({
    opacity: stack1Progress,
    y: stack1Progress * 0,
    scale: 1,
    config: {
      tension: 120,
      friction: 14,
    },
  })

  const stack2Spring = useSpring({
    opacity: stack2Progress,
    y: stack2Progress < 0.1 ? -20 : stack2Progress * 120,
    scale: stack2Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 120,
      friction: 14,
    },
  })

  const stack3Spring = useSpring({
    opacity: stack3Progress,
    y: stack3Progress < 0.1 ? -20 : stack3Progress * 243,
    scale: stack3Progress < 0.1 ? 0.95 : 1,
    config: {
      tension: 120,
      friction: 14,
    },
  })

  // Spring animations for labels
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] w-full relative pt-16"
      style={{
        background: "linear-gradient(135deg, #e6f7f5 0%, #f0e6f7 100%)",
      }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto h-full flex items-center justify-center">
          {/* Left side labels */}
          <div className="absolute left-4 md:left-16 lg:left-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-24 items-end text-right">
            {/* QuFlow label */}
            <animated.div style={leftLabel1Spring}>
              <h3 className="text-teal-600 text-2xl font-bold mb-1">QuFlow</h3>
              <p className="text-gray-700">User Interface</p>
            </animated.div>

            {/* QuSpace label */}
            <animated.div style={leftLabel2Spring}>
              <h3 className="text-blue-600 text-2xl font-bold mb-1">QuSpace</h3>
              <p className="text-gray-700">Programming Environment</p>
            </animated.div>

            {/* QuMatics label */}
            <animated.div style={leftLabel3Spring}>
              <h3 className="text-pink-600 text-2xl font-bold mb-1">QuMatics</h3>
              <p className="text-gray-700">Hardware Interface</p>
            </animated.div>
          </div>

          {/* Stack visualization */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Stack 1 - Top */}
            <animated.div
              style={{
                ...stack1Spring,
                position: "absolute",
                left: "50%",
                transform: stack1Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 30,
              }}
            >
              <Image
                src="/images/stack_01.png"
                alt="QuFlow Stack"
                width={400}
                height={120}
                className="w-full h-auto object-contain"
                priority
              />
            </animated.div>

            {/* Stack 2 - Middle */}
            <animated.div
              style={{
                ...stack2Spring,
                position: "absolute",
                left: "50%",
                transform: stack2Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 20,
              }}
            >
              <Image
                src="/images/stack_02.png"
                alt="QuSpace Stack"
                width={400}
                height={120}
                className="w-full h-auto object-contain"
                priority
              />
            </animated.div>

            {/* Stack 3 - Bottom */}
            <animated.div
              style={{
                ...stack3Spring,
                position: "absolute",
                left: "50%",
                transform: stack3Spring.scale.to((s) => `translateX(-50%) scale(${s})`),
                zIndex: 10,
              }}
            >
              <Image
                src="/images/stack_03.png"
                alt="QuMatics Stack"
                width={400}
                height={120}
                className="w-full h-auto object-contain"
                priority
              />
            </animated.div>
          </div>

          {/* Right side labels */}
          <div className="absolute right-4 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 flex flex-col space-y-24 items-start">
            {/* Layer 1 label */}
            <animated.div style={rightLabel1Spring}>
              <h3 className="text-teal-600 text-2xl font-bold mb-1">Layer 1</h3>
              <p className="text-gray-700">Application Layer</p>
            </animated.div>

            {/* Layer 2 label */}
            <animated.div style={rightLabel2Spring}>
              <h3 className="text-blue-600 text-2xl font-bold mb-1">Layer 2</h3>
              <p className="text-gray-700">Quantum Algorithms</p>
            </animated.div>

            {/* Layer 3 label */}
            <animated.div style={rightLabel3Spring}>
              <h3 className="text-pink-600 text-2xl font-bold mb-1">Layer 3</h3>
              <p className="text-gray-700">Quantum Hardware</p>
            </animated.div>
          </div>

          {/* Progress indicator */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack1Threshold ? "bg-teal-500" : "bg-gray-300"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack2Threshold ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                scrollProgress >= stack3Threshold ? "bg-pink-500" : "bg-gray-300"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

