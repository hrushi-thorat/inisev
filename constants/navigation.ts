export interface NavItem {
  to: string
  label: string
  icon: string
  countKey: 'inboxCount' | 'archiveCount'
}

export const NAV_ITEMS: NavItem[] = [
  {
    to: '/inbox',
    label: 'Inbox',
    icon: '/icons/inbox-01.png',
    countKey: 'inboxCount',
  },
  {
    to: '/archive',
    label: 'Archive',
    icon: '/icons/archive.png',
    countKey: 'archiveCount',
  },
]
