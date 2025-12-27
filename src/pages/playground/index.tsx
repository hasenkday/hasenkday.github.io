import { Button } from '@/components/atoms/button'
import { Divider } from '@/components/atoms/divider'
import { InputField } from '@/components/atoms/input-field'
import { SwitchField } from '@/components/atoms/switch-field'
import { Tag } from '@/components/atoms/tag'
import { TextareaField } from '@/components/atoms/textarea-field'
import { Card } from '@/components/molecules/card'
import { CheckboxGoup } from '@/components/molecules/checkbox-goup'
import { Dropdown } from '@/components/molecules/dropdown'
import { FormField } from '@/components/molecules/form-field'
import { RadioGroup } from '@/components/molecules/radio-group'
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
          <FormField />
          <Card />
          <CheckboxGoup />
          <Dropdown />
          <Divider />
          <RadioGroup />
          <SwitchField />
          <TextareaField />
          <InputField />
          <Tag />
        </div>
      </div>
    </div>
  )
}
