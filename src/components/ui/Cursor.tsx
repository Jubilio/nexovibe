'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      if (curRef.current)  { curRef.current.style.left  = mx+'px'; curRef.current.style.top  = my+'px' }
      rx += (mx - rx) * .12; ry += (my - ry) * .12
      if (ringRef.current) { ringRef.current.style.left = rx+'px'; ringRef.current.style.top = ry+'px' }
      raf = requestAnimationFrame(animate)
    }
    animate()

    const grow = () => {
      if (!ringRef.current) return
      ringRef.current.style.width  = '56px'
      ringRef.current.style.height = '56px'
      ringRef.current.style.borderColor = '#1fcfbe'
    }
    const shrink = () => {
      if (!ringRef.current) return
      ringRef.current.style.width  = '36px'
      ringRef.current.style.height = '36px'
      ringRef.current.style.borderColor = 'rgba(201,165,90,.4)'
    }

    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={curRef}  className="fixed top-0 left-0 z-[9999] w-2.5 h-2.5 bg-gold rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 hidden sm:block" />
      <div ref={ringRef} className="fixed top-0 left-0 z-[9998] w-9 h-9 border border-[rgba(201,165,90,.4)] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden sm:block" />
    </>
  )
}
