import { InputField } from '@/components/atoms/input-field'

export default function PlaygroundAtomInputField() {
  return (
    <div
      id="playground-atom-input-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Input Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <InputField label="Email" placeholder="you@example.com" />
        <InputField label="Name" placeholder="Your name" textAlign="center" />
        <InputField label="Company" placeholder="ACME Inc." defaultValue="Filled input" />
        <InputField
          label="Required field"
          placeholder="Type something"
          error="This field is required"
        />
      </div>
    </div>
  )
}
