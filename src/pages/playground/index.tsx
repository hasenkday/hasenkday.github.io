import React from 'react'

import { Button } from '@/components/atoms/button'
import { CheckboxField } from '@/components/atoms/checkbox-field'
import { InputField } from '@/components/atoms/input-field'
import { RadioField } from '@/components/atoms/radio-field'
import { SelectField } from '@/components/atoms/select-field'
import { Separator } from '@/components/atoms/separator'
import { SwitchField } from '@/components/atoms/switch-field'
import { Tag } from '@/components/atoms/tag'
import { TextareaField } from '@/components/atoms/textarea-field'
import { GithubIcon } from '@/components/icons'
import { PlaygroundSummary } from '@/components/molecules/playground-summary'
import { cn } from '@/lib/utils'

export default function PlaygroundPage() {
  const [checked, setChecked] = React.useState(false)
  const [plan, setPlan] = React.useState('free')
  const [enabled, setEnabled] = React.useState(false)

  const contentSectionClasses = 'items-center px-4 py-8 md:px-12 md:pt-18 md:pb-12'

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div
      id="playground"
      className="page-section grid min-h-[700px] md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px]"
    >
      {/* Sidebar */}
      <aside className="border-dark/10 bg-light relative self-start overflow-hidden border-b md:h-full md:border-r md:border-b-0">
        <div className="px-6 py-8 md:fixed md:px-12 md:pt-12 md:pb-12">
          <h1 className="mb-8 text-center md:text-start md:text-sm">Components Playground</h1>
          <PlaygroundSummary onSelect={scrollToSection} />
        </div>
      </aside>

      {/* Content */}
      <div className="section-container">
        <div id="button" className={cn(contentSectionClasses, 'flex flex-col gap-8')}>
          <h2>Atom: Button</h2>

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

        <div
          id="input-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: InputField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <InputField label="Email" placeholder="you@example.com" />
            <InputField label="Name" placeholder="Your name" error="This field is required" />
            <InputField placeholder="No label example" />
          </div>
        </div>

        <div
          id="textarea-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: TextareaField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <TextareaField label="Message" placeholder="Write your message here" />
            <TextareaField label="Feedback" error="Minimum 20 characters" />
          </div>
        </div>

        <div
          id="checkbox-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: CheckboxField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <CheckboxField
              label="Controlled checkbox"
              checked={checked}
              onCheckedChange={setChecked}
            />
          </div>
        </div>

        <div
          id="radio-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: RadioField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <RadioField
              label="Choose a plan"
              value={plan}
              onValueChange={setPlan}
              options={[
                { value: 'free', label: 'Free' },
                { value: 'pro', label: 'Pro' },
              ]}
            />
          </div>
        </div>

        <div
          id="select-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: SelectField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <SelectField
              label="Country"
              placeholder="Select a country"
              options={[
                { value: 'br', label: 'Brazil' },
                { value: 'us', label: 'United States' },
                { value: 'de', label: 'Germany' },
              ]}
            />
          </div>
        </div>

        <div
          id="separator"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: Separator</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Separator />
            text
            <Separator className="mb-6" />
            <div className="flex h-12 items-center gap-4">
              <span>Left</span>
              <Separator orientation="vertical" />
              <span>Right</span>
            </div>
          </div>
        </div>

        <div id="tag" className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}>
          <h2>Atom: Tag</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Tag>Default tag</Tag>
            <Tag variant="primary">Primary</Tag>
            <Tag variant="secondary">Secondary</Tag>
            <Tag variant="ghost">Ghost</Tag>
          </div>
        </div>

        <div
          id="switch-field"
          className={cn(contentSectionClasses, 'flex flex-col items-center gap-8')}
        >
          <h2>Atom: SwitchField</h2>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <SwitchField label="Enable notifications" />
            <SwitchField label="Dark mode" checked />
            <SwitchField label="Controlled switch" checked={enabled} onCheckedChange={setEnabled} />
          </div>
        </div>
      </div>
    </div>
  )
}
