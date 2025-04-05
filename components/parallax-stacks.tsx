"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ParallaxStacks() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full">
      {/* Section 1 */}
      <section
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center z-10 mb-64 tracking-tight">
            Stack <span className="text-yellow-300">01</span>
          </h1>
        </div>
        <div
          className="relative w-80 h-80 md:w-96 md:h-96 transform-gpu"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Image
            src="/images/stack_01.png"
            alt="Stack 1"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00c6fb 0%, #005bea 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center z-10 mb-64 tracking-tight">
            Stack <span className="text-yellow-300">02</span>
          </h1>
        </div>
        <div
          className="relative w-80 h-80 md:w-96 md:h-96 transform-gpu"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - window.innerHeight) * 0.1)}px)`,
          }}
        >
          <Image
            src="/images/stack_02.png"
            alt="Stack 2"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0061ff 0%, #60efff 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center z-10 mb-64 tracking-tight">
            Stack <span className="text-yellow-300">03</span>
          </h1>
        </div>
        <div
          className="relative w-80 h-80 md:w-96 md:h-96 transform-gpu"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - window.innerHeight * 2) * 0.1)}px)`,
          }}
        >
          <Image
            src="/images/stack_03.png"
            alt="Stack 3"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Combined Section */}
      <section
        className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-tight">
          All Stacks Combined
        </h1>

        <div className="relative w-full max-w-3xl h-[600px]">
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 md:w-96"
            style={{
              transform: `translate(-50%, ${Math.max(0, (scrollY - window.innerHeight * 3) * 0.05)}px)`,
              zIndex: 30,
            }}
          >
            <Image
              src="/images/stack_01.png"
              alt="Stack 1"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-80 md:w-96"
            style={{
              transform: `translate(-50%, ${Math.max(0, (scrollY - window.innerHeight * 3) * 0.1)}px)`,
              zIndex: 20,
            }}
          >
            <Image
              src="/images/stack_02.png"
              alt="Stack 2"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>

          <div
            className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-80 md:w-96"
            style={{
              transform: `translate(-50%, ${Math.max(0, (scrollY - window.innerHeight * 3) * 0.15)}px)`,
              zIndex: 10,
            }}
          >
            <Image
              src="/images/stack_03.png"
              alt="Stack 3"
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

