import { useNavigate } from 'react-router-dom'

import { Card } from '@/components/molecules/card'
import { useRevealElement } from '@/hooks/revealBehavior'
import { cn } from '@/lib/utils'

import type { CaseCardProps } from './types'

export function CaseCard({ item, cardBase, interactionClasses }: CaseCardProps) {
  const navigate = useNavigate()
  const { ref, revealClass } = useRevealElement<HTMLDivElement>()

  const { title, description, badge, padded, titleClass, descriptionClass, descriptionDataSize } =
    item.content

  return (
    <Card
      ref={ref}
      onClick={() => navigate(item.route)}
      className={cn(cardBase, interactionClasses, revealClass, item.className)}
      backdrop
      backdropColor={item.backdropColor}
    >
      <div className={padded ? 'p-6 md:p-8' : 'p-6'}>
        {/* Title */}
        <p>
          <strong className={titleClass}>{title}</strong>
          {badge && (
            <span className="bg-dark text-light ml-2 rounded-lg px-2 pb-[2px] text-xs">
              {badge}
            </span>
          )}
        </p>

        {/* Description */}
        <p className={descriptionClass} data-size={descriptionDataSize}>
          {description}
        </p>
      </div>
    </Card>
  )
}
