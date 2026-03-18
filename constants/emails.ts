export interface Email {
  id: number
  subject: string
  body: string
  isRead: boolean
  isArchived: boolean
}

export const SEED_EMAILS: Email[] = [
  {
    id: 1,
    subject: 'Welcome to your new inbox',
    body: 'Congratulations on setting up your new email client! We hope you enjoy the experience. Feel free to explore all the features available to you.',
    isRead: false,
    isArchived: false,
  },
  {
    id: 2,
    subject: 'Your weekly report is ready',
    body: 'Hi there, your weekly productivity report is now available. You completed 15 tasks this week, which is a 20% improvement over last week. Keep up the great work!',
    isRead: false,
    isArchived: false,
  },
  {
    id: 3,
    subject: 'Meeting tomorrow at 10 AM',
    body: 'Just a reminder that we have a team meeting scheduled for tomorrow at 10 AM. Please review the agenda document that was shared earlier this week and come prepared with your updates.',
    isRead: false,
    isArchived: false,
  },
  {
    id: 4,
    subject: 'New feature announcement',
    body: 'We are excited to announce a new feature in our platform. Keyboard shortcuts are now available! Press "r" to mark as read and "a" to archive selected emails.',
    isRead: false,
    isArchived: false,
  },
  {
    id: 5,
    subject: 'Invoice #1234 from Acme Corp',
    body: 'Please find attached your invoice #1234 for the month of March. The total amount due is $2,500.00. Payment is due within 30 days of receipt.',
    isRead: true,
    isArchived: false,
  },
  {
    id: 6,
    subject: 'Your subscription has been renewed',
    body: 'Your annual subscription has been successfully renewed. Your next billing date is March 18, 2027. Thank you for being a loyal customer.',
    isRead: true,
    isArchived: false,
  },
  {
    id: 7,
    subject: 'Feedback requested on Q1 goals',
    body: 'Hi team, as we approach the end of Q1, I would like to gather everyone\'s feedback on our progress toward our quarterly goals. Please fill out the survey by end of week.',
    isRead: false,
    isArchived: false,
  },
  {
    id: 8,
    subject: 'Security alert: New login detected',
    body: 'A new login to your account was detected from a new device. If this was you, no action is needed. If you did not authorize this login, please change your password immediately.',
    isRead: false,
    isArchived: true,
  },
  {
    id: 9,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: true,
    isArchived: true,
  },
    {
    id: 10,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: true,
    isArchived: true,
  },
    {
    id: 11,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: true,
    isArchived: false,
  },
   {
    id: 12,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: true,
    isArchived: false,
  },
     {
    id: 13,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: true,
    isArchived: false,
  },
     {
    id: 14,
    subject: 'Project kickoff next Monday',
    body: 'The new project officially kicks off next Monday. Please make sure you have access to all the shared repositories and documentation. Reach out if you need any permissions.',
    isRead: false,
    isArchived: false,
  },
]
