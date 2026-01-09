import { useRevealElement } from '@/hooks/revealBehavior'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const { ref, revealClass } = useRevealElement<HTMLDivElement>()

  return (
    <section className="w-full">
      <div
        ref={ref}
        className={cn(
          revealClass,
          'mx-auto flex max-w-[84rem] flex-col items-center gap-4 px-8 pt-12 pb-5 text-center md:px-12 md:pt-18 md:pb-8'
        )}
      >
        <span className="text-subhead font-light">Hi there!</span>
        <h1 className="text-h2 leading-sm max-w-full font-normal md:max-w-[672px]">
          I design <strong>digital products</strong> and enjoy turning <u>complex problems</u> into
          things people can <strong>actually use</strong>.
        </h1>
      </div>
    </section>
  )
}
