import { Separator } from '@/components/ui/separator'

export default function PlaygroundAtomSeparator() {
  return (
    <div
      id="playground-atom-Separator"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Separator</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <Separator />
        text
        <Separator className="bg-dark/20 mb-6" />
        <div className="flex h-12 items-center gap-4">
          <span>Left</span>
          <Separator className="bg-dark/20" orientation="vertical" />
          <span>Right</span>
        </div>
      </div>
    </div>
  )
}
