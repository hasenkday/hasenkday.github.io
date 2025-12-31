import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { CheckboxField } from '@/components/atoms/checkbox-field'
import { InputField } from '@/components/atoms/input-field'
import { TextareaField } from '@/components/atoms/textarea-field'
import { FormField } from '@/components/molecules/form-field'
import { Label } from '@/components/ui/label'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function ContactSection() {
  const [projectType, setProjectType] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  function onSubmit(data: ContactFormData) {
    console.log(data)
  }

  return (
    <section id="contact" className="page-section">
      <div className="section-container flex flex-col items-center gap-8 px-6 py-18 md:px-12">
        <h2 className="font-secondary max-w-[540px] text-center">
          Need a hand? Let’s <span className="font-primary">TALK</span>!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-4">
          <FormField label="Name" errorMessage={errors.name?.message}>
            <InputField label="Email" type="email" error={!!errors.email} {...register('email')} />
          </FormField>
          <FormField label="Email" errorMessage={errors.email?.message}>
            <InputField label="Email" type="email" error={!!errors.email} {...register('email')} />
          </FormField>

          <Label className="sr-only">What does your project involves?</Label>

          <CheckboxField
            variant="button"
            options={[
              { value: 'ux-ui', label: 'UX/UI' },
              { value: 'brand-identity', label: 'Brand Identity' },
              { value: '2d-ard', label: '2D Art' },
              { value: 'front-end', label: 'Front-end' },
              { value: 'dont-know-yet', label: 'I don’t know yet...' },
            ]}
            value={projectType}
            onValueChange={setProjectType}
          />
          <FormField
            label="Please describe your project or commission"
            errorMessage={errors.message?.message}
          >
            <TextareaField label="Message" error={!!errors.message} {...register('message')} />
          </FormField>
          <button type="submit" className="bg-dark mt-2 rounded-lg px-4 py-3 text-sm text-white">
            Send{'->'}
          </button>
          <button type="submit" className="bg-dark mt-2 rounded-lg px-4 py-3 text-sm text-white">
            Or schedule a meeting call
          </button>
        </form>
      </div>
    </section>
  )
}
