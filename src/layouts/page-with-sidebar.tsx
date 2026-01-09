import Footer from '@/components/organisms/footer'

type PageWithSidebarProps = {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export function PageWithSidebar({ sidebar, children }: PageWithSidebarProps) {
  return (
    <div className="grid lg:grid-cols-[320px_1fr]">
      {/* Sidebar */}
      <aside className="relative">{sidebar}</aside>

      {/* Content */}
      <div className="flex flex-col">
        <main className="flex-1 pb-12">
          <div className="section-container">{children}</div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
