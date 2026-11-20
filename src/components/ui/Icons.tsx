// Icons come from Phosphor (light weight), per the design system.
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChatCircle,
  CheckCircle,
  Code,
  FileText,
  GridFour,
  Info,
  MapTrifold,
  Pulse,
} from "@phosphor-icons/react/dist/ssr";

const props = { size: 22, weight: "light" } as const;

export function IconCode()  { return <Code {...props} /> }
export function IconAI()    { return <Brain {...props} /> }
export function IconMap()   { return <MapTrifold {...props} /> }
export function IconGrid()  { return <GridFour {...props} /> }
export function IconInfo()  { return <Info {...props} /> }
export function IconBook()  { return <BookOpen {...props} /> }
export function IconChat()  { return <ChatCircle {...props} size={20} /> }
export function IconDoc()   { return <FileText {...props} size={20} /> }
export function IconPulse() { return <Pulse {...props} size={20} /> }
export function IconCheck() { return <CheckCircle {...props} size={20} /> }
export function IconArrow() { return <ArrowRight size={14} weight="bold" /> }

export function getIcon(key: string) {
  const map: Record<string, JSX.Element> = {
    code: <IconCode />, ai: <IconAI />, map: <IconMap />,
    grid: <IconGrid />, info: <IconInfo />, book: <IconBook />,
    chat: <IconChat />, doc: <IconDoc />, pulse: <IconPulse />, check: <IconCheck />,
  }
  return map[key] ?? null
}
