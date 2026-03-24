const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const

export function IconCode()  { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> }
export function IconAI()    { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> }
export function IconMap()   { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg> }
export function IconGrid()  { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> }
export function IconInfo()  { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg> }
export function IconBook()  { return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> }
export function IconChat()  { return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> }
export function IconDoc()   { return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> }
export function IconPulse() { return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> }
export function IconCheck() { return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
export function IconArrow() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg> }

export function getIcon(key: string) {
  const map: Record<string, JSX.Element> = {
    code: <IconCode />, ai: <IconAI />, map: <IconMap />,
    grid: <IconGrid />, info: <IconInfo />, book: <IconBook />,
    chat: <IconChat />, doc: <IconDoc />, pulse: <IconPulse />, check: <IconCheck />,
  }
  return map[key] ?? null
}
