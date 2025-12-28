import { Button } from '@/components/atoms/button'
import { GithubIcon } from '@/components/icons'

export default function PlaygroundAtomButton() {
  return (
    <div
      id="playground-atom-button"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Button</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <Button>Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button size="sm">Small button</Button>
        <Button size="icon">
          <GithubIcon />
        </Button>
      </div>
    </div>
  )
}
