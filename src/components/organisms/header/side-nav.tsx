// import { useState } from 'react'

// TODO: fix later

export default function HeaderSideNav() {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-0 z-50">
      {/* backdrop */}
      <div
        className="bg-dark/40 absolute inset-0"
        // onClick={() => setIsOpen(false)}
      />

      {/* side nav */}
      <aside className="bg-light absolute top-0 right-0 h-full w-[220px]">
        <div className="flex h-full flex-col p-6">
          <button
            type="button"
            aria-label="Close menu"
            // onClick={() => setIsOpen(false)}
            className="cursor-pointer self-end"
          >
            ✕
          </button>

          <nav className="mt-8 flex flex-col gap-4">
            <a href="#/">Home</a>
            <a href="#/gallery">Gallery</a>
            <a href="#/cases">Cases</a>
          </nav>
        </div>
      </aside>
    </div>
  )
}
