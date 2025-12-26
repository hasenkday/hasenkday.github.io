import { Button } from '@/components/atoms/button'
import { cn } from '@/lib/cn'

export default function PlaygroundPage() {
  const containerClasses = 'section-container px-4 py-8 text-center md:px-12 md:pt-18 md:pb-12'
  return (
    <div id="playground" className="page-section min-h-[700px]">
      <div className={containerClasses}>
        <h1>Components Playground</h1>
      </div>

      <div className={cn(containerClasses, 'flex flex-col items-center gap-8')}>
        <h2>Button</h2>

        <div className="flex flex-wrap">
          <Button>Primary</Button>
        </div>
      </div>
    </div>
  )
}
