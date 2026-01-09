export type SummaryItem = {
  id: string
  label: string
}

export type SummaryGroup = {
  title?: string
  items: SummaryItem[]
}

type PageSummaryData = SummaryItem[] | Record<string, SummaryItem[]>

export type PageSummaryProps = {
  title: string
  items: PageSummaryData
  offset?: number
}
