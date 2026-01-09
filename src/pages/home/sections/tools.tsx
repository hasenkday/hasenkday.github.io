import { useRef, useState } from 'react'

import { useMagneticTools } from '@/hooks/useMagneticTools'
import { useMousePosition } from '@/hooks/useMousePosition'
import { cn } from '@/lib/utils'
import { initialTools } from '@/pages/home/tools/data'

export default function ToolsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStack, setActiveStack] = useState<string | null>(null)

  const mouse = useMousePosition(containerRef)

  const { tools, scatter } = useMagneticTools({
    containerRef,
    activeStack,
    mouse,
    initial: initialTools,
  })

  return (
    <section id="tools" className="bg-dark w-full">
      <div className="mx-auto max-w-[84rem] px-4 pt-14 pb-10 md:px-12 md:pt-30 md:pb-8">
        {/* header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-primary max-w-[540px]">
            Tools and practices I use across design, delivery, and implementation.
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {['Core UX', 'Dev Context', 'Prototyping', 'Visual & Motion'].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveStack((p) => (p === tag ? null : tag))}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition',
                  activeStack === tag ? 'bg-primary text-dark' : 'bg-light/10 text-light'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* playground */}
        <div
          ref={containerRef}
          className={cn(
            'relative mx-auto mt-12 min-h-[420px] max-w-[84rem] overflow-hidden',
            activeStack && 'cursor-none'
          )}
          onMouseMove={(e) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            scatter(e.clientX - rect.left, e.clientY - rect.top)
          }}
        >
          {/* mão */}
          {activeStack && (
            <div
              className="pointer-events-none absolute text-3xl"
              style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
            >
              👉
            </div>
          )}

          {/* tools */}
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={cn(
                'absolute flex h-[88px] w-[88px] items-center justify-center rounded-full text-xs font-medium transition-colors',
                activeStack === tool.stack ? 'bg-primary text-dark' : 'bg-light text-dark/80'
              )}
              style={{ transform: `translate(${tool.x}px, ${tool.y}px)` }}
            >
              <span className="px-2 text-center leading-tight">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
