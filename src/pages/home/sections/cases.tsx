import { useNavigate } from 'react-router-dom'

import { Card } from '@/components/molecules/card'
import { cn } from '@/lib/utils'

export default function CasesSection() {
  const cardBase = 'min-h-[320px] md:min-h-[300px] lg:h-auto'
  const interactionClasses =
    'hover:ring hover:shadow-xl cursor-pointer hover:ring-dark/60 focus-visible:ring focus-visible:outline-none'

  const navigate = useNavigate()

  return (
    <section id="cases" className="page-section">
      <div className="section-container flex flex-col items-center gap-8 px-4 pt-8 pb-18 md:px-12 md:pb-30">
        <h2 className="text-center">Cases</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:gap-6 lg:grid-rows-[repeat(4,330px)]">
          {/* A — 5x2 */}
          <Card
            onClick={() => navigate('/cases/ticomia-formaturas-app')}
            className={cn(
              cardBase,
              interactionClasses,
              'hover:ring-primary',
              'bg-dark order-1 md:col-span-8 lg:order-1 lg:col-span-5 lg:row-span-2'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-dark/80"
          >
            <div className="p-6 md:p-8">
              <p className="md:text-h3 text-light">Ticomia - Formaturas App</p>
              <p className="text-light/80 md:text-md mt-4 text-sm">
                Mobile B2C app adapting complex flows to a mobile-first experience, balancing
                clarity, trust, and ease of use in real purchase scenarios.
              </p>
            </div>
          </Card>

          {/* B — 3x1 */}
          <Card
            onClick={() => navigate('/cases/urban-inline-skating-app')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-secondary/60 order-2 md:col-span-4 lg:order-2 lg:col-span-3 lg:row-span-1'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-secondary/60"
          >
            <div className="p-6">
              <p>
                <strong>Urban Inline Skating App </strong>{' '}
                <span className="bg-dark text-light rounded-lg px-2 pb-[2px] text-xs">
                  Coming soon
                </span>
              </p>
              <p data-size="sm" className="mt-2">
                Personal project exploring orientation, group flow, and shared context in urban
                skating meetups.
              </p>
            </div>
          </Card>

          {/* C — 3x1 */}
          <Card
            onClick={() => navigate('/cases/budgeting-app-for-eletricians')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-tertiary order-3 md:col-span-4 lg:order-3 lg:col-span-3 lg:row-span-1'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-tertiary"
          >
            <div className="p-6">
              <p>
                <strong>Budgeting App for Electricians </strong>{' '}
                <span className="bg-dark text-light rounded-lg px-2 pb-[2px] text-xs">
                  Coming soon
                </span>
              </p>
              <p data-size="sm" className="mt-2">
                Academic project addressing usability issues and cognitive overload in budgeting
                tools for electricians.
              </p>
            </div>
          </Card>

          {/* D — 4x2 */}
          <Card
            onClick={() => navigate('/cases/kodus-ai-code-review-tool')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-primary order-4 md:col-span-8 lg:order-4 lg:col-span-4 lg:row-span-2'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-primary"
          >
            <div className="p-6 md:p-8">
              <p className="md:text-h3">
                <strong> Kodus – AI Code Review Tool</strong>
              </p>
              <p className="md:text-md mt-4 text-sm">
                Product developed by devs to help other devs · Interface design · Configuration
                flows · UI system transition · Wordpress
              </p>
            </div>
          </Card>

          {/* E — 2x1 */}
          <Card
            onClick={() => navigate('/cases/ticomia-internal-product-nda')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-secondary/20 order-5 md:col-span-4 lg:order-5 lg:col-span-2 lg:row-span-1'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-secondary/20"
          >
            <div className="p-6">
              <p>
                <strong>Ticomia – Internal Product (NDA)</strong>
              </p>
              <p data-size="sm" className="mt-2">
                B2C and B2B products · Web & Mobile designs · Visual identity · UI system ·
                Documentation
              </p>
            </div>
          </Card>

          {/* F — 2x2 */}
          <Card
            onClick={() => navigate('/cases/visual-and-graphic-projects')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-tertiary/20 order-7 md:col-span-8 lg:order-6 lg:col-span-2 lg:row-span-2'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-tertiary/20"
          >
            <div className="p-6">
              <p>
                <strong>Visual & Graphic Projects</strong>
              </p>
              <p data-size="sm" className="mt-2">
                A collection of graphic design, visual identity, packaging, and illustration
                projects exploring form, clarity, and communication.
              </p>
            </div>
          </Card>

          {/* G — 2x1 */}
          <Card
            onClick={() => navigate('/cases/learning-platform-for-devs')}
            className={cn(
              cardBase,
              interactionClasses,
              'bg-secondary/20 order-6 md:col-span-4 lg:order-7 lg:col-span-2 lg:row-span-1'
            )}
            // backgroundImage={exampleImage}
            backdrop
            backdropColor="from-secondary/20"
          >
            <div className="p-6">
              <p>
                <strong>Learning Platform for Developers</strong>
              </p>
              <p data-size="sm" className="mt-2">
                Onboarding · Study paths · Gamification · Visual system · Illustration · Mascot
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
