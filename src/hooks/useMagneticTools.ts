import { useCallback, useEffect, useRef, useState } from 'react'

import type { Tool } from '@/pages/home/tools/types'

type Params = {
  containerRef: React.RefObject<HTMLDivElement | null>
  activeStack: string | null
  mouse: { x: number; y: number }
  initial: Omit<Tool, 'x' | 'y'>[]
}

const TOOL_SIZE = 88
const GAP = 12
const MIN_DISTANCE = TOOL_SIZE + 8

const GRAVITY_FREE = 12
const GRAVITY_STACK = 2

function resolveCollisions(tools: Tool[]) {
  const next = [...tools]

  for (let i = 0; i < next.length; i++) {
    for (let j = i + 1; j < next.length; j++) {
      const a = next[i]
      const b = next[j]

      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist === 0 || dist >= MIN_DISTANCE) continue

      const overlap = (MIN_DISTANCE - dist) / 2
      const nx = dx / dist
      const ny = dy / dist

      a.x += nx * overlap
      a.y += ny * overlap
      b.x -= nx * overlap
      b.y -= ny * overlap
    }
  }

  return next
}

export function useMagneticTools({ containerRef, activeStack, mouse, initial }: Params) {
  const [tools, setTools] = useState<Tool[]>([])
  const raf = useRef<number | null>(null)

  const [bounds, setBounds] = useState({ width: 0, height: 0 })

  /* medir container + inicializar tools no chão */
  useEffect(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setBounds({ width: rect.width, height: rect.height })

    setTools((prev) =>
      prev.length
        ? prev
        : initial.map((tool) => ({
            ...tool,
            x: Math.random() * (rect.width - TOOL_SIZE),
            y: rect.height - TOOL_SIZE - 6 + Math.random() * 4,
          }))
    )
  }, [containerRef, initial])

  const floorY = bounds.height - TOOL_SIZE - 6
  const pullStartY = bounds.height * 0.25

  const clampX = useCallback(
    (x: number) => Math.max(0, Math.min(x, bounds.width - TOOL_SIZE)),
    [bounds.width]
  )
  const clampY = useCallback(
    (y: number) => Math.max(0, Math.min(y, bounds.height - TOOL_SIZE)),
    [bounds.height]
  )

  /* LOOP PRINCIPAL (gravidade + magnetismo) */
  useEffect(() => {
    if (!bounds.width || !bounds.height) return

    const update = () => {
      setTools((prev) => {
        const gravity = activeStack ? GRAVITY_STACK : GRAVITY_FREE
        const activeTools = activeStack ? prev.filter((t) => t.stack === activeStack) : []

        const moved = prev.map((tool) => {
          /* sem stack OU tool fora da stack → cai */
          if (!activeStack || tool.stack !== activeStack) {
            const nextY = Math.min(tool.y + gravity, floorY)
            return { ...tool, y: nextY }
          }

          /* magnetismo */
          if (mouse.y <= pullStartY) return tool

          const index = activeTools.findIndex((t) => t.id === tool.id)
          if (index === -1) return tool

          const cols = Math.max(1, Math.floor(bounds.width / (TOOL_SIZE + GAP)))
          const col = index % cols
          const row = Math.floor(index / cols)

          const rowItems = activeTools.slice(row * cols, row * cols + cols)
          const rowWidth = rowItems.length * TOOL_SIZE + (rowItems.length - 1) * GAP

          const anchorX = mouse.x - rowWidth / 2
          const anchorY = mouse.y + 10

          const targetX = anchorX + col * (TOOL_SIZE + GAP)
          const targetY = anchorY + row * (TOOL_SIZE + GAP)

          return {
            ...tool,
            x: clampX(tool.x + (targetX - tool.x) * 0.08),
            y: clampY(tool.y + (targetY - tool.y) * 0.08),
          }
        })

        return resolveCollisions(moved)
      })

      raf.current = requestAnimationFrame(update)
    }

    raf.current = requestAnimationFrame(update)

    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [mouse, activeStack, bounds, pullStartY, clampX, clampY, floorY])

  /* SCATTER — só quando mouse passa perto */
  const scatter = (mouseX: number, mouseY: number) => {
    if (activeStack) return

    const DEAD_ZONE = 60
    const MAX_DIST = 140

    setTools((prev) =>
      resolveCollisions(
        prev.map((tool) => {
          const dx = tool.x - mouseX
          const dy = tool.y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < DEAD_ZONE || dist > MAX_DIST) return tool

          const force = (MAX_DIST - dist) / MAX_DIST

          return {
            ...tool,
            x: clampX(tool.x + dx * force * 0.6),
            y: clampY(tool.y + dy * force * 0.6 - force * 22),
          }
        })
      )
    )
  }

  return { tools, scatter }
}
