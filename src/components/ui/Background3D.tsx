'use client'
import dynamic from 'next/dynamic'
import { Component, type ReactNode } from 'react'

// The canvas is client-only and loaded after hydration, so it never affects
// server rendering. The static gradient below stays as the fallback.
const Background3DCanvas = dynamic(() => import('./Background3DCanvas'), { ssr: false, loading: () => null })

class SilentBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() {}
  render() { return this.state.failed ? null : this.props.children }
}

export default function Background3D() {
  return (
    <div className="bg-3d" aria-hidden="true">
      <div className="bg-3d-fallback" />
      <SilentBoundary><Background3DCanvas /></SilentBoundary>
      <div className="bg-3d-veil" />
    </div>
  )
}
