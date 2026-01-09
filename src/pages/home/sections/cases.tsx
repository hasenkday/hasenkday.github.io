import { cases } from '@/api/cases'
import { CaseCard } from '@/components/organisms/case-card'

export default function CasesSection() {
  const cardBase = 'min-h-[320px] md:min-h-[300px] lg:h-auto'
  const interactionClasses =
    'hover:ring hover:shadow-xl cursor-pointer hover:ring-dark/60 focus-visible:ring focus-visible:outline-none'

  return (
    <section id="cases" className="w-full">
      <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-8 px-4 pt-8 pb-18 md:px-12">
        <h2 className="text-center">Cases</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:gap-6 lg:grid-rows-[repeat(4,330px)]">
          {cases.map((item) => (
            <CaseCard
              key={item.id}
              item={item}
              cardBase={cardBase}
              interactionClasses={interactionClasses}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
