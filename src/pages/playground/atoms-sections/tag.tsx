import { Tag } from '@/components/atoms/tag'

export default function PlaygroundAtomTag() {
  return (
    <div
      id="playground-atom-tag"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Tag</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {' '}
        <Tag>Default tag</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="secondary">Secondary</Tag>
        <Tag variant="ghost">Ghost</Tag>
      </div>
    </div>
  )
}
