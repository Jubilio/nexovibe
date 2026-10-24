'use client'
import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; z: number }

// Evenly spread points on a unit sphere (Fibonacci lattice).
function spherePoints(count: number): Point[] {
  const points: Point[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const a = golden * i
    points.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r })
  }
  return points
}

function ringPoints(count: number, radius: number): Point[] {
  const points: Point[] = []
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2
    points.push({ x: Math.cos(a) * radius, y: 0, z: Math.sin(a) * radius })
  }
  return points
}

export default function Background3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let ctx: CanvasRenderingContext2D | null = null
    try { ctx = canvas.getContext('2d') } catch { ctx = null }
    if (!ctx) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduced = motion.matches
    let width = 0, height = 0, dpr = 1, small = false
    let globe: Point[] = [], ringA: Point[] = [], ringB: Point[] = []
    let raf = 0, last = 0, angle = 0.6, running = false
    let tiltX = 0, tiltY = 0, targetX = 0, targetY = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      small = width < 760
      dpr = Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      globe = spherePoints(small ? 360 : 900)
      ringA = ringPoints(small ? 90 : 160, 1.45)
      ringB = ringPoints(small ? 70 : 120, 1.8)
    }

    const project = (p: Point, rotY: number, rotX: number, cx: number, cy: number, scale: number) => {
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
      const x1 = p.x * cosY - p.z * sinY
      const z1 = p.x * sinY + p.z * cosY
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX)
      const y2 = p.y * cosX - z1 * sinX
      const z2 = p.y * sinX + z1 * cosX
      const persp = 3.2 / (3.2 + z2)
      return { x: cx + x1 * scale * persp, y: cy + y2 * scale * persp, z: z2, s: persp }
    }

    const draw = (time: number) => {
      ctx!.clearRect(0, 0, width, height)
      const scale = small ? Math.min(width * 0.5, 240) : Math.min(width * 0.24, height * 0.36, 360)
      const cx = small ? width * 0.78 : width * 0.72
      const cy = small ? height * 0.24 : height * 0.46
      const rotX = -0.32 + tiltY

      for (const p of globe) {
        const q = project(p, angle + tiltX, rotX, cx, cy, scale)
        const depth = (1 - q.z) / 2 // 1 at the front, 0 at the back
        ctx!.fillStyle = `rgba(139,230,200,${small ? 0.06 + depth * 0.36 : 0.12 + depth * 0.62})`
        const size = (small ? 0.7 : 0.9) * (1 + depth * 1.5) * q.s
        ctx!.fillRect(q.x - size / 2, q.y - size / 2, size, size)
      }

      const rings: [Point[], number, number, string][] = [
        [ringA, 0.42, -angle * 0.6, '139,230,200'],
        [ringB, -0.28, angle * 0.35, '201,165,90'],
      ]
      for (const [ring, tilt, spin, rgb] of rings) {
        for (const p of ring) {
          const q = project(p, spin, rotX + tilt, cx, cy, scale)
          const depth = (1 - q.z / 1.8) / 2
          ctx!.fillStyle = `rgba(${rgb},${0.08 + depth * 0.4})`
          const size = (small ? 1 : 1.3) * q.s
          ctx!.fillRect(q.x - size / 2, q.y - size / 2, size, size)
        }
        const sat = project(ring[Math.floor((time / 90) % ring.length)] ?? ring[0], spin, rotX + tilt, cx, cy, scale)
        ctx!.fillStyle = `rgba(${rgb},0.85)`
        ctx!.beginPath()
        ctx!.arc(sat.x, sat.y, 2.4 * sat.s, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const frame = (time: number) => {
      raf = 0
      if (!running) return
      if (!last) last = time
      const delta = Math.min(time - last, 64)
      // Throttle small screens to ~30 fps to save battery.
      if (small && delta < 30) { raf = requestAnimationFrame(frame); return }
      last = time
      angle += delta * 0.00012
      tiltX += (targetX - tiltX) * 0.04
      tiltY += (targetY - tiltY) * 0.04
      draw(time)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (reduced || document.hidden) { running = false; draw(0); return }
      if (running) return
      running = true
      last = 0
      draw(performance.now())
      raf = requestAnimationFrame(frame)
    }
    const stop = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0 }

    const onResize = () => { resize(); if (!running) draw(0) }
    const onVisibility = () => { if (document.hidden) stop(); else start() }
    const onMotion = () => { reduced = motion.matches; stop(); start() }
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      targetX = (e.clientX / width - 0.5) * 0.35
      targetY = (e.clientY / height - 0.5) * 0.2
    }

    resize()
    start()
    canvas.classList.add('is-ready')
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pointermove', onPointer, { passive: true })
    motion.addEventListener?.('change', onMotion)

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointer)
      motion.removeEventListener?.('change', onMotion)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-3d-canvas" />
}
