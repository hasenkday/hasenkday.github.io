import { TextareaField } from '@/components/atoms/textarea-field'

export default function PlaygroundAtomTextareaField() {
  return (
    <div
      id="playground-atom-textarea-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Textarea Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <TextareaField label="Message" placeholder="Write your message here" />
        <TextareaField
          label="Feedback"
          placeholder="Tell us what you think"
          defaultValue="Pre-filled content"
        />
        <TextareaField
          label="Error example"
          placeholder="Minimum 20 characters"
          error="Minimum 20 characters required"
        />
      </div>
    </div>
  )
}
