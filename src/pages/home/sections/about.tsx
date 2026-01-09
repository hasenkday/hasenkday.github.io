import { Image } from '@/components/molecules/image'
import { useRevealElement } from '@/hooks/revealBehavior'
import { cn } from '@/lib/utils'

export default function AboutSection() {
  const { ref, revealClass } = useRevealElement<HTMLDivElement>()
  const image =
    'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <section id="about" data-scroll-target className="bg-tertiary/20 w-full">
      <div
        ref={ref}
        className={cn(
          revealClass,
          'mx-auto flex max-w-[84rem] flex-col items-center gap-12 px-6 pt-18 pb-14 md:flex-row md:px-12 md:py-30 lg:gap-12'
        )}
      >
        <div className="aspect-square w-[200px] overflow-hidden rounded-lg md:aspect-2/4 md:h-full md:w-full lg:aspect-square">
          <Image src={image} alt="" fit="cover" />
        </div>
        <div className="p-0 md:py-8 lg:px-10">
          <h2 className="text-center md:text-start">About Nadia H. Kavashima</h2>
          <p className="mt-4 text-justify">
            My work is shaped by a background in front-end development, which influences how I think
            about interfaces, systems, and feasibility. I care about solutions that can be built,
            maintained, and evolved without unnecessary complexity. <br />
            <br /> I value clarity and good communication in design. Not extreme minimalism, but
            interfaces that help people understand what{'’'}s happening without feeling overwhelmed.{' '}
            <br />
            <br /> Alongside UX and interface design, I sometimes work with illustration, motion,
            and visual identity when they help clarify ideas or interactions.
          </p>
        </div>
      </div>
    </section>
  )
}
