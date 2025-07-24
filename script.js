// Dummy data for the application table
const appData = [
{
id: 1,
application: 'CRM Plus',
category: 'Sales',
usage: 'Medium',
seats: 28,
license: `Downgraded in M6`,
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-01-15T10:00:00Z',
lastInvoiceDate: '2025-07-01', // Dummy data for recent purchase
nextRenewalDate: '2025-10-15', // Dummy data for next renewal
monthlyData: [
{ month: 'M1', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M3', seats: 29, change: '-1', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M6', seats: 28, change: '-1', revenue: 1400, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 2,
application: 'Voice',
category: 'Sales',
usage: 'Low',
seats: 21,
license: 'Downgraded in M6',
paymentFailureCount: 3,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-02-01T11:00:00Z',
lastInvoiceDate: '2025-06-20',
nextRenewalDate: '2025-11-01',
monthlyData: [
{ month: 'M1', seats: 25, change: '0', revenue: 1250, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M2', seats: 24, change: '-1', revenue: 1200, revenueChange: '-50', competitorIntegrations: 'High' },
{ month: 'M3', seats: 23, change: '-1', revenue: 1150, revenueChange: '-50', competitorIntegrations: 'High' },
{ month: 'M4', seats: 22, change: '-1', revenue: 1100, revenueChange: '-50', competitorIntegrations: 'High' },
{ month: 'M5', seats: 22, change: '0', revenue: 1100, revenueChange: '0', competitorIntegrations: 'High' },
{ month: 'M6', seats: 21, change: '-1', revenue: 1050, revenueChange: '-50', competitorIntegrations: 'High' },
]
},
{
id: 3,
application: 'One',
category: 'Sales',
usage: 'High',
seats: 33,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-sales-ops',
createdTime: '2023-03-10T12:00:00Z',
lastInvoiceDate: '2025-05-10',
nextRenewalDate: '2026-03-10',
monthlyData: [
{ month: 'M1', seats: 30, change: '0', revenue: 3000, revenueChange: '0', competitorIntegrations: 'Low' },
{ month: 'M2', seats: 31, change: '+1', revenue: 3100, revenueChange: '+100', competitorIntegrations: 'Low' },
{ month: 'M3', seats: 31, change: '0', revenue: 3100, revenueChange: '0', competitorIntegrations: 'Low' },
{ month: 'M4', seats: 32, change: '+1', revenue: 3200, revenueChange: '+100', competitorIntegrations: 'Medium' },
{ month: 'M5', seats: 32, change: '0', revenue: 3200, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M6', seats: 33, change: '+1', revenue: 3300, revenueChange: '+100', competitorIntegrations: 'Medium' },
]
},
{
id: 4,
application: 'Desk',
category: 'Marketing',
usage: 'Medium',
seats: 41,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Mailchimp'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-04-05T13:00:00Z',
lastInvoiceDate: '2025-04-01',
nextRenewalDate: '2025-09-05',
monthlyData: [
{ month: 'M1', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
{ month: 'M2', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'High' },
{ month: 'M6', seats: 41, change: '0', revenue: 410, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
]
},
{
id: 5,
application: 'Inventory',
category: 'Marketing',
usage: 'High',
seats: 46,
license: 'Downgraded in M6',
paymentFailureCount: 6,
pauseScheduledCount: 0,
competitors: ['MailChimp'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-05-20T14:00:00Z',
lastInvoiceDate: '2025-03-15',
nextRenewalDate: '2025-08-20',
monthlyData: [
{ month: 'M1', seats: 50, change: '0', revenue: 2500, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
{ month: 'M2', seats: 49, change: '-1', revenue: 2450, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 48, change: '-1', revenue: 2400, revenueChange: '-50', competitorIntegrations: 'High' },
{ month: 'M4', seats: 47, change: '-1', revenue: 2350, revenueChange: '-50', competitorIntegrations: 'High' },
{ month: 'M5', seats: 47, change: '0', revenue: 2350, revenueChange: '0', competitorIntegrations: 'High' },
{ month: 'M6', seats: 46, change: '-1', revenue: 2300, revenueChange: '-50', competitorIntegrations: 'High' },
]
},
{
id: 6,
application: 'FSM',
category: 'Marketing',
usage: 'High',
seats: 29,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Mailchimp', 'Active campaign'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-06-10T15:00:00Z',
lastInvoiceDate: '2025-02-28',
nextRenewalDate: '2025-09-10',
monthlyData: [
{ month: 'M1', seats: 25, change: '0', revenue: 1250, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 26, change: '+1', revenue: 1300, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M3', seats: 27, change: '+1', revenue: 1350, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M4', seats: 28, change: '+1', revenue: 1400, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M5', seats: 28, change: '0', revenue: 1400, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M6', seats: 29, change: '+1', revenue: 1450, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 7,
application: 'People Plus',
category: 'Support',
usage: 'High',
seats: 46,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-07-01T16:00:00Z',
lastInvoiceDate: '2025-01-20',
nextRenewalDate: '2025-12-01',
monthlyData: [
{ month: 'M1', seats: 40, change: '0', revenue: 2000, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M2', seats: 41, change: '+1', revenue: 2050, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M3', seats: 42, change: '+1', revenue: 2100, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M4', seats: 44, change: '+2', revenue: 2200, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M5', seats: 45, change: '+1', revenue: 2250, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M6', seats: 46, change: '+1', revenue: 2300, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 8,
application: 'Payroll',
category: 'Support',
usage: 'Medium',
seats: 48,
license: 'Downgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 4,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-08-12T17:00:00Z',
lastInvoiceDate: '2024-12-01',
nextRenewalDate: '2026-01-12',
monthlyData: [
{ month: 'M1', seats: 52, change: '0', revenue: 260, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 51, change: '-1', revenue: 255, revenueChange: '-5', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 50, change: '-1', revenue: 250, revenueChange: '-5', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 49, change: '-1', revenue: 245, revenueChange: '-5', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 49, change: '0', revenue: 245, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M6', seats: 48, change: '-1', revenue: 240, revenueChange: '-5', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 9,
application: 'Invoice',
category: 'Support',
usage: 'High',
seats: 41,
license: 'Downgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2023-09-01T18:00:00Z',
lastInvoiceDate: '2025-07-20',
nextRenewalDate: '2025-10-01',
monthlyData: [
{ month: 'M1', seats: 45, change: '0', revenue: 450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 44, change: '-1', revenue: 440, revenueChange: '-10', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 43, change: '-1', revenue: 430, revenueChange: '-10', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 42, change: '-1', revenue: 420, revenueChange: '-10', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 42, change: '0', revenue: 420, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M6', seats: 41, change: '-1', revenue: 410, revenueChange: '-10', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 10,
application: 'Expense',
category: 'Finance',
usage: 'Low',
seats: 20,
license: 'Downgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-finance',
createdTime: '2023-10-20T09:00:00Z',
lastInvoiceDate: '2025-06-01',
nextRenewalDate: '2025-09-20',
monthlyData: [
{ month: 'M1', seats: 22, change: '0', revenue: 2200, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M2', seats: 22, change: '0', revenue: 2200, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 21, change: '-1', revenue: 2100, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 21, change: '0', revenue: 2100, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 21, change: '0', revenue: 2100, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M6', seats: 20, change: '-1', revenue: 2000, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 11,
application: 'Creator',
category: 'Finance',
usage: 'Medium',
seats: 12,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-finance',
createdTime: '2023-11-05T10:00:00Z',
lastInvoiceDate: '2025-07-10',
nextRenewalDate: '2025-10-05',
monthlyData: [
{ month: 'M1', seats: 10, change: '0', revenue: 100, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M2', seats: 11, change: '+1', revenue: 110, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M3', seats: 11, change: '0', revenue: 110, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M4', seats: 12, change: '+1', revenue: 120, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M5', seats: 12, change: '0', revenue: 120, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M6', seats: 12, change: '0', revenue: 120, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
]
},
{
id: 12,
application: 'Cliq',
category: 'Finance',
usage: 'High',
seats: 31,
license: 'Downgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-finance',
createdTime: '2023-12-01T11:00:00Z',
lastInvoiceDate: '2025-05-25',
nextRenewalDate: '2025-11-01',
monthlyData: [
{ month: 'M1', seats: 35, change: '0', revenue: 3500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M2', seats: 34, change: '-1', revenue: 3400, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 33, change: '-1', revenue: 3300, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 32, change: '-1', revenue: 3200, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 32, change: '0', revenue: 3200, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
{ month: 'M6', seats: 31, change: '-1', revenue: 3100, revenueChange: '-100', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 13,
application: 'CRM',
category: 'Operations',
usage: 'High',
seats: 47,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-01-10T12:00:00Z',
lastInvoiceDate: '2025-07-05',
nextRenewalDate: '2025-10-10',
monthlyData: [
{ month: 'M1', seats: 45, change: '0', revenue: 4500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M2', seats: 46, change: '+1', revenue: 4600, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M3', seats: 46, change: '0', revenue: 4600, revenueChange: '0', competitorIntegrator: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M4', seats: 47, change: '+1', revenue: 4700, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M5', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M6', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 14,
application: 'BooksZohoGST',
category: 'Operations',
usage: 'High',
seats: 29,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-02-14T13:00:00Z',
lastInvoiceDate: '2025-06-10',
nextRenewalDate: '2026-02-14',
monthlyData: [
{ month: 'M1', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M3', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M4', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M5', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M6', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 15,
application: 'Workplace',
category: 'Human Resources',
usage: 'Low',
seats: 26,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: [],
details: [],
relevantDepartmentId: 'dept-hr',
createdTime: '2024-03-01T14:00:00Z',
lastInvoiceDate: '2025-07-18',
nextRenewalDate: '2025-10-01',
monthlyData: [
{ month: 'M1', seats: 24, change: '0', revenue: 1200, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M2', seats: 25, change: '+1', revenue: 1250, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M3', seats: 25, change: '0', revenue: 1250, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M4', seats: 26, change: '+1', revenue: 1300, revenueChange: '+50', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M5', seats: 26, change: '0', revenue: 1300, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
{ month: 'M6', seats: 26, change: '0', revenue: 1300, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 16,
application: 'WorkDrive',
category: 'Productivity',
usage: 'High',
seats: 120,
license: 'Upgraded in M6',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Dropbox', 'Google Drive'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-04-20T15:00:00Z',
lastInvoiceDate: '2025-07-22',
nextRenewalDate: '2025-09-20',
monthlyData: [
{ month: 'M1', seats: 100, change: '0', revenue: 500, revenueChange: '0', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
{ month: 'M2', seats: 105, change: '+5', revenue: 525, revenueChange: '+25', competitorIntegrations: 'Dropbox', zohoConversionOpportunities: 'High' },
{ month: 'M3', seats: 110, change: '+5', revenue: 550, revenueChange: '+25', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
{ month: 'M4', seats: 115, change: '+5', revenue: 575, revenueChange: '+25', competitorIntegrations: 'Google Drive', zohoConversionOpportunities: 'High' },
{ month: 'M5', seats: 120, change: '+5', revenue: 600, revenueChange: '+25', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M6', seats: 120, change: '0', revenue: 600, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
]
},
{
id: 17,
application: 'Sites',
category: 'Communication',
usage: 'Medium',
seats: 75,
license: 'No changes',
paymentFailureCount: 0,
pauseScheduledCount: 0,
competitors: ['Zoom', 'Microsoft Teams'],
details: [],
relevantDepartmentId: 'dept-it-support',
createdTime: '2024-05-01T16:00:00Z',
lastInvoiceDate: '2025-01-05',
nextRenewalDate: '2026-05-01',
monthlyData: [
{ month: 'M1', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M2', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M3', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M4', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M5', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
{ month: 'M6', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
]
},
{
    id: 18,
    application: 'Sign',
    category: 'Productivity',
    usage: 'High',
    seats: 50,
    license: 'Upgraded in M6',
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support',
    createdTime: '2024-06-10T17:00:00Z',
    lastInvoiceDate: '2025-07-12',
    nextRenewalDate: '2025-08-10',
    monthlyData: [
        { month: 'M1', seats: 45, change: '0', revenue: 450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M2', seats: 46, change: '+1', revenue: 460, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M3', seats: 47, change: '+1', revenue: 470, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M4', seats: 48, change: '+1', revenue: 480, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M5', seats: 49, change: '+1', revenue: 490, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M6', seats: 50, change: '+1', revenue: 500, revenueChange: '+10', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    ]
},
{
    id: 19,
    application: 'Meeting',
    category: 'Communication',
    usage: 'Medium',
    seats: 80,
    license: 'No changes',
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Google Meet'],
    details: [],
    relevantDepartmentId: 'dept-it-support',
    createdTime: '2024-07-01T18:00:00Z',
    lastInvoiceDate: '2025-07-01',
    nextRenewalDate: '2025-09-01',
    monthlyData: [
        { month: 'M1', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
        { month: 'M2', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
        { month: 'M3', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
        { month: 'M4', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
        { month: 'M5', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
        { month: 'M6', seats: 80, change: '0', revenue: 800, revenueChange: '0', competitorIntegrations: 'Google Meet', zohoConversionOpportunities: 'High' },
    ]
},
{
    id: 20,
    application: 'Mail Suite',
    category: 'Communication',
    usage: 'High',
    seats: 150,
    license: 'Upgraded in M6',
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Outlook', 'Gmail'],
    details: [],
    relevantDepartmentId: 'dept-it-support',
    createdTime: '2024-07-15T19:00:00Z',
    lastInvoiceDate: '2025-06-25',
    nextRenewalDate: '2025-11-15',
    monthlyData: [
        { month: 'M1', seats: 140, change: '0', revenue: 1400, revenueChange: '0', competitorIntegrations: 'Outlook', zohoConversionOpportunities: 'Medium' },
        { month: 'M2', seats: 142, change: '+2', revenue: 1420, revenueChange: '+20', competitorIntegrations: 'Outlook', zohoConversionOpportunities: 'Medium' },
        { month: 'M3', seats: 144, change: '+2', revenue: 1440, revenueChange: '+20', competitorIntegrations: 'Gmail', zohoConversionOpportunities: 'Medium' },
        { month: 'M4', seats: 146, change: '+2', revenue: 1460, revenueChange: '+20', competitorIntegrations: 'Gmail', zohoConversionOpportunities: 'Medium' },
        { month: 'M5', seats: 148, change: '+2', revenue: 1480, revenueChange: '+20', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
        { month: 'M6', seats: 150, change: '+2', revenue: 1500, revenueChange: '+20', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
    ]
}
];
function assignInitialAppStatus(data) {
    data.forEach(app => {
        if (app.paymentFailureCount > 0 || app.pauseScheduledCount > 0) {
            app.status = 'Renewal risk detected';
        } else if (app.license.includes('Downgraded') || app.usage === 'Low') {
            app.status = 'Inactive';
        } else if (app.usage === 'Medium') {
            app.status = 'Inactive';
        } else {
            app.status = 'Active';
        }
    });
}
assignInitialAppStatus(appData);
function assignTagsFromSummary(summary) {
    const tags = [];
    const lowerSummary = summary.toLowerCase();
    if (lowerSummary.includes('dissatisfaction') || lowerSummary.includes('complaint') || lowerSummary.includes('unhappy') || lowerSummary.includes('frustrated') || lowerSummary.includes('poor service')) {
        tags.push('Dissatisfaction/Complaint');
    }
    if (lowerSummary.includes('escalation') || lowerSummary.includes('urgent') || lowerSummary.includes('critical')) {
        tags.push('Escalation Request');
    }
    if (lowerSummary.includes('repeated follow-up') || lowerSummary.includes('still waiting') || lowerSummary.includes('no response')) {
        tags.push('Repeated Follow-up');
    }
    if (lowerSummary.includes('slow support') || lowerSummary.includes('delay') || lowerSummary.includes('lagging') || lowerSummary.includes('unresponsive') || lowerSummary.includes('pending')) {
        tags.push('Slow Support / Delay');
    }
    if (lowerSummary.includes('feature request') || lowerSummary.includes('missing feature') || lowerSummary.includes('feature gap')) {
        tags.push('Feature Gap');
    }
    if (lowerSummary.includes('cancel') || lowerSummary.includes('churn') || lowerSummary.includes('leaving') || lowerSummary.includes('terminate subscription')) {
        tags.push('Cancel Threat/Churn Threat');
    }
    if (lowerSummary.includes('competitor') || lowerSummary.includes('switching to') || lowerSummary.includes('moving to')) {
        tags.push('Competitor Switch');
    }
    if (lowerSummary.includes('regret') || lowerSummary.includes('disappointed with product') || lowerSummary.includes('not meeting expectations')) {
        tags.push('Product Regret');
    }
    if (lowerSummary.includes('outage') || lowerSummary.includes('down') || lowerSummary.includes('emergency') || lowerSummary.includes('not working') || lowerSummary.includes('service disruption') || lowerSummary.includes('access issue') || lowerSummary.includes('cannot log in') || lowerSummary.includes('connectivity problem') || lowerSummary.includes('unreachable')) {
        tags.push('Service Outage/Emergency');
    }
    if (lowerSummary.includes('security') || lowerSummary.includes('data breach') || lowerSummary.includes('unauthorized access') || lowerSummary.includes('vulnerability') || lowerSummary.includes('trust concern') || lowerSummary.includes('privacy issue')) {
        tags.push('Security/Data Breach');
    }
    if (lowerSummary.includes('evaluating alternatives') || lowerSummary.includes('looking elsewhere') || lowerSummary.includes('considering other options') || lowerSummary.includes('comparing solutions')) {
        tags.push('Evaluating Alternatives');
    }
    return tags;
}
const ticketDetailsData = [
{
id: 'dept-it-support',
department: "IT Support",
openStatus: 3,
closedStatus: 2,
openTicketOwnership: "Loganathan",
executiveSummary: "High volume of open IT support tickets, with a focus on software bugs and user training requests. Requires urgent attention to reduce backlog.",
tickets: [
{ id: "TKT-001-IT", summary: "Network connectivity issue in Sales department. Urgent!", url: "#", status: "Open" },
{ id: "TKT-002-IT", summary: "Missing feature: unable to export reports to PDF. Repeated follow-up needed.", url: "#", status: "Open" },
{ id: "TKT-003-IT", summary: "User is frustrated with slow support response times.", url: "#", status: "Open" },
{ id: "TKT-CLOSED-001-IT", summary: "Resolved: User account lockout issue.", url: "#", status: "Closed" },
{ id: "TKT-CLOSED-002-IT", summary: "Completed: Software update for design team.", url: "#", status: "Closed" }
]
},
{
id: 'dept-sales-ops',
department: "Sales Operations",
openStatus: 1,
closedStatus: 0,
openTicketOwnership: "Foumin",
executiveSummary: "A single open ticket related to CRM data synchronization impacting sales reporting accuracy. Critical for end-of-quarter metrics.",
tickets: [
{ id: "TKT-004-SO", summary: "CRM data sync failure with reporting tool, user considering competitor switch.", url: "#", status: "Open" }
]
},
{
id: 'dept-finance',
department: "Finance",
openStatus: 1,
closedStatus: 0,
openTicketOwnership: "Dhana",
executiveSummary: "Outstanding query on invoice reconciliation. Requires clarification to close monthly books.",
tickets: [
{ id: "TKT-005-FIN", summary: "Query on Q2 invoice reconciliation discrepancies, dissatisfaction with current system.", url: "#", status: "Open" }
]
},
{
id: 'dept-development',
department: "Development",
openStatus: 3,
closedStatus: 0,
openTicketOwnership: "Sivanesan",
executiveSummary: "Multiple active bugs reported in the latest software release. Prioritization and swift resolution are essential to maintain user satisfaction.",
tickets: [
{ id: "TKT-006-DEV", summary: "Critical bug in user authentication module leading to service outage. Users experiencing access issue.", url: "#", status: "Open" },
{ id: "TKT-007-DEV", "summary": "UI bug: button misaligned on dashboard page, product regret reported, evaluating alternatives.", url: "#", "status": "Open" },
{ id: "TKT-008-DEV", summary: "Customer threatening to cancel due to security vulnerability. Trust concern raised.", url: "#", status: "Open" }
]
},
{
id: 'dept-hr',
department: "Human Resources",
openStatus: 0,
closedStatus: 5,
openTicketOwnership: "Laxman",
executiveSummary: "No open tickets. All HR-related requests and queries have been resolved promptly.",
tickets: [
{ id: "TKT-CLOSED-HR-001", summary: "Onboarding process completed for new employee.", url: "#", status: "Closed" },
{ id: "TKT-CLOSED-HR-002", summary: "Payroll discrepancy resolved for John Doe.", url: "#", status: "Closed" },
{ id: "TKT-CLOSED-HR-003", summary: "Policy clarification provided for leave request.", url: "#", "status": "Closed" },
{ id: "TKT-CLOSED-HR-004", summary: "Benefits enrollment assistance provided.", url: "#", status: "Closed" },
{ id: "TKT-CLOSED-HR-005", summary: "Performance review scheduling completed.", url: "#", status: "Closed" }
]
}
];
ticketDetailsData.forEach(dept => {
dept.tickets.forEach(ticket => {
ticket.tags = assignTagsFromSummary(ticket.summary);
});
});
let applicationTableContainer = null;
let ticketDetailsTableContainer = null;
let applicationTableBody = null;
let applicationTableHeader = null;
let ticketDetailsTableBody = null;
let crossSellBtn = null;
let allAppsBtn = null;
let downgradesBtn = null;
let competitorsBtn = null;
let anomaliesBtn = null;
let ticketDetailsBtn = null;
let crossSellCountSpan = null;
let allAppsCountSpan = null;
let downgradesCountSpan = null;
let competitorsCountSpan = null;
let anomaliesCountSpan = null;
let criticalIssuesCountSpan = null;
let warningSignsCountSpan = null;
let deskTicketsCountSpan = null;
let arrLessThan5kCountSpan = null;
let arrGreaterThan5kCountSpan = null;
let arrLessThan5kSegment = null;
let arrGreaterThan5kSegment = null;
let criticalIssuesCard = null;
let warningSignsCard = null;
let competitorExposureCard = null; // Corrected declaration
let downgradeRisksCard = null; // Corrected declaration
let deskTicketsCard = null;
let healthScoreCircle = null;
let healthScoreValue = null;
let healthScoreStatus = null;
let healthScoreCheck = null;
let competitorExposureCountElement = null;
let downgradeRisksCountElement = null;
let currentOpenDropdown = null;
let currentOpenDropdownToggle = null;
let currentOpenThreatPopup = null;
let currentOpenThreatPopupToggle = null;
const npsScore = 70;

// New elements for popups
let recentPurchasesCountSpan = null;
let nextRenewalsCountSpan = null;
let recentPurchasesPopup = null;
let nextRenewalsPopup = null;
let recentPurchasesList = null;
let nextRenewalsList = null;
let expandedRowId = null; // Define expandedRowId
let expandedTicketRowId = null; // Define expandedTicketRowId
let activeSection = 'all-apps'; // Define activeSection


function closeAllDropdowns() {
    if (currentOpenDropdown) {
        currentOpenDropdown.classList.remove('show');
        currentOpenDropdown.querySelectorAll('.glass-button').forEach(button => {
            button.style.animation = '';
        });
        if (currentOpenDropdown.id === 'need-help-dropdown-menu' && currentOpenDropdownToggle) {
            currentOpenDropdownToggle.classList.remove('show-arrow');
        }
        currentOpenDropdown = null;
        currentOpenDropdownToggle = null;
    }
}
function closeAllThreatPopups() {
    if (currentOpenThreatPopup) {
        currentOpenThreatPopup.classList.remove('show');
        currentOpenThreatPopup = null;
        currentOpenThreatPopupToggle = null;
    }
}

function closeAllModals() {
    if (recentPurchasesPopup) recentPurchasesPopup.classList.remove('show');
    if (nextRenewalsPopup) nextRenewalsPopup.classList.remove('show');
}

function initializeDOMElements() {
    applicationTableContainer = document.getElementById('applicationTableContainer');
    ticketDetailsTableContainer = document.getElementById('ticketDetailsTableContainer');
    applicationTableBody = document.getElementById('applicationTableBody');
    applicationTableHeader = document.querySelector('#applicationTable thead');
    ticketDetailsTableBody = document.getElementById('ticketDetailsTableBody');
    crossSellBtn = document.getElementById('crossSellBtn');
    allAppsBtn = document.getElementById('allAppsBtn');
    downgradesBtn = document.getElementById('downgradesBtn');
    competitorsBtn = document.getElementById('competitorsBtn');
    anomaliesBtn = document.getElementById('anomaliesBtn');
    ticketDetailsBtn = document.getElementById('ticketDetailsBtn');
    crossSellCountSpan = document.getElementById('crossSellCount');
    allAppsCountSpan = document.getElementById('allAppsCount');
    downgradesCountSpan = document.getElementById('downgradesCount');
    competitorsCountSpan = document.getElementById('competitorsCount');
    anomaliesCountSpan = document.getElementById('anomaliesCount');
    criticalIssuesCountSpan = document.getElementById('criticalIssuesCount');
    warningSignsCountSpan = document.getElementById('warningSignsCount');
    arrLessThan5kCountSpan = document.getElementById('arrLessThan5kCount');
    arrGreaterThan5kCountSpan = document.getElementById('arrGreaterThan5kCount');
    arrLessThan5kSegment = document.getElementById('arrLessThan5kSegment');
    arrGreaterThan5kSegment = document.getElementById('arrGreaterThan5kSegment');
    criticalIssuesCard = document.getElementById('criticalIssuesCard');
    warningSignsCard = document.getElementById('warningSignsCard');
    competitorExposureCard = document.getElementById('competitorExposureCard');
    downgradeRisksCard = document.getElementById('downgradeRisksCard');
    deskTicketsCard = document.getElementById('deskTicketsCard');
    const openTicketsCountInCard = document.getElementById('openTicketsCount');
    const closedTicketsCountInCard = document.getElementById('closedTicketsCount');
    healthScoreCircle = document.getElementById('healthScoreCircle');
    healthScoreValue = document.getElementById('healthScoreValue');
    healthScoreStatus = document.getElementById('healthScoreStatus');
    healthScoreCheck = document.getElementById('healthScoreCheck');
    subscriptionChatModal = document.getElementById('subscriptionChatModal');
    closeSubscriptionChatModalBtn = document.getElementById('closeSubscriptionChatModal');
    subscriptionChatIframe = document.getElementById('subscriptionChatIframe');
    competitorExposureCountElement = document.getElementById('competitorExposureCount');
    downgradeRisksCountElement = document.getElementById('downgradeRisksCount');

    // Initialize new elements
    recentPurchasesCountSpan = document.getElementById('recentPurchasesCount');
    nextRenewalsCountSpan = document.getElementById('nextRenewalsCount');
    recentPurchasesPopup = document.getElementById('recentPurchasesPopup');
    nextRenewalsPopup = document.getElementById('nextRenewalsPopup');
    recentPurchasesList = document.getElementById('recentPurchasesList');
    nextRenewalsList = document.getElementById('nextRenewalsList');

    if (!applicationTableContainer) {
        console.error('Application table container not found!');
        return false;
    }
    if (!applicationTableBody) {
        console.error('Application table body not found!');
        return false;
    }
    if (!applicationTableHeader) {
        console.error('Application table header (thead) not found!');
        return false;
    }
    if (!subscriptionChatModal) {
        console.error('Subscription chat modal element (subscriptionChatModal) not found!');
        return false;
    }
    return true;
}
let allAppsFilteredData = [];
let crossSellFilteredData = [];
let downgradesFilteredData = [];
let competitorsFilteredData = [];
let criticalIssuesFilteredData = [];
let warningSignsFilteredData = [];
let anomaliesFilteredData = [];
let anomaliesCriticalOnlyData = [];
let anomaliesWarningOnlyData = [];
let arrLessThan5kFilteredData = [];
let arrGreaterThan5kFilteredData = [];

// New data arrays for popups
let recentPurchasesData = [];
let nextRenewalsData = [];

function calculateTotalArr(app) {
    const currentMonthData = app.monthlyData[app.monthlyData.length - 1];
    return currentMonthData ? currentMonthData.revenue : 0;
}

function filterDataArrays() {
    allAppsFilteredData = appData;
    let initialSignupApp = null;
    let earliestTime = Infinity;
    appData.forEach(app => {
        const appCreatedTime = new Date(app.createdTime).getTime();
        if (appCreatedTime < earliestTime) {
            earliestTime = appCreatedTime;
            initialSignupApp = app;
        }
    });
    crossSellFilteredData = appData.filter(app => app.id !== initialSignupApp.id);
    const problematicTicketTagsList = [
        "Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
        "Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
        "Competitor Switch", "Product Regret", "Service Outage/Emergency",
        "Security/Data Breach", "Evaluating Alternatives"
    ].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'));
    const findDepartment = (deptId) => ticketDetailsData.find(dept => dept.id === deptId);

    // Declare totalInactiveApps here
    const totalInactiveApps = appData.filter(app => app.status === 'Inactive').length;

    anomaliesCriticalOnlyData = appData.filter(app => {
        let isCritical = false;
        const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
        if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
            isCritical = true;
        }
        if (app.usage === 'Low' && app.license.includes('Downgraded')) {
            isCritical = true;
        }
        let totalRecentDecline = 0;
        const startIndex = app.monthlyData.length - 3;
        const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];
        if (relevantMonths.length === 3) {
            relevantMonths.forEach(month => {
                const change = parseInt(month.change);
                if (change < 0) {
                    totalRecentDecline += change;
                }
            });
        }
        if (totalRecentDecline <= -3) {
            isCritical = true;
        }
        if (app.paymentFailureCount >= 5 || app.pauseScheduledCount >= 5) {
            isCritical = true;
        }
        let maxSeatsLast6Months = 0;
        if (app.monthlyData.length >= 6) {
            const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
            maxSeatsLast6Months = Math.max(...seatsInLast6Months);
            if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.40) {
                isCritical = true;
            }
        }
        if (totalInactiveApps > 4) { // Use the defined totalInactiveApps
            isCritical = true;
        }
        if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                if (percentageChange < -0.40) {
                    isCritical = true;
                }
            }
        }
        const relevantDepartment = findDepartment(app.relevantDepartmentId);
        if (relevantDepartment && relevantDepartment.openStatus > 3) {
            isCritical = true;
        }
        if (relevantDepartment) {
            const openTicketsInDept = relevantDepartment.tickets.filter(tkt => tkt.status === 'Open');
            const hasCriticalProblematicTag = openTicketsInDept.some(tkt =>
                tkt.tags.some(tag => ['cancel threat/churn threat', 'competitor switch', 'service outage/emergency', 'security/data breach'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
            );
            if (hasCriticalProblematicTag) {
                isCritical = true;
            }
        }
        return isCritical;
    });
    anomaliesWarningOnlyData = appData.filter(app => {
        const isAlreadyCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
        if (isAlreadyCritical) return false;
        let isWarning = false;
        if ((app.paymentFailureCount > 0 && app.paymentFailureCount < 5) ||
            (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5)) {
            isWarning = true;
        }
        let maxSeatsLast6Months = 0;
        if (app.monthlyData.length >= 6) {
            const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
            maxSeatsLast6Months = Math.max(...seatsInLast6Months);
            if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.70) {
                isWarning = true;
            }
        }
        if (totalInactiveApps > 2) { // Use the defined totalInactiveApps
            isWarning = true;
        }
        if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                if (percentageChange < -0.30) {
                    isWarning = true;
                }
            }
        }
        const relevantDepartment = findDepartment(app.relevantDepartmentId);
        if (relevantDepartment && relevantDepartment.openStatus > 1) {
            isWarning = true;
        }
        if (relevantDepartment) {
            const openTicketsInDept = relevantDepartment.tickets.filter(tkt => tkt.status === 'Open');
            const hasWarningProblematicTag = openTicketsInDept.some(tkt =>
                tkt.tags.some(tag => ['dissatisfaction/complaint', 'escalation request', 'repeated follow-up', 'slow support / delay', 'feature gap', 'product regret', 'evaluating alternatives'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
            );
            if (hasWarningProblematicTag) {
                isWarning = true;
            }
        }
        return isWarning;
    });
    downgradesFilteredData = appData.filter(app => app.license.includes('Downgraded'));
    competitorsFilteredData = appData.filter(app => app.competitors && app.competitors.length > 0);
    const anomaliesSet = new Set();
    anomaliesCriticalOnlyData.forEach(app => anomaliesSet.add(app));
    anomaliesWarningOnlyData.forEach(app => anomaliesSet.add(app));
    anomaliesFilteredData = Array.from(anomaliesSet);
    arrLessThan5kFilteredData = appData.filter(app => calculateTotalArr(app) < 5000);
    arrGreaterThan5kFilteredData = appData.filter(app => calculateTotalArr(app) >= 5000);

    // Populate recent purchases and next renewals data
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);

    const availableRecentPurchases = appData.filter(app => {
        if (app.lastInvoiceDate) {
            const invoiceDate = new Date(app.lastInvoiceDate);
            return invoiceDate >= sixMonthsAgo && invoiceDate <= new Date();
        }
        return false;
    }).map(app => ({
        name: app.application,
        revenue: app.monthlyData[app.monthlyData.length - 1].revenue
    }));

    const availableNextRenewals = appData.filter(app => {
        if (app.nextRenewalDate) {
            const renewalDate = new Date(app.nextRenewalDate);
            return renewalDate > new Date() && renewalDate <= threeMonthsFromNow;
        }
        return false;
    }).map(app => ({
        name: app.application,
        date: app.nextRenewalDate,
        revenue: app.monthlyData[app.monthlyData.length - 1].revenue
    }));

    // Fixed numbers for Recent Purchases (2) and Next Renewals (4)
    recentPurchasesData = availableRecentPurchases.slice(0, 2);
    nextRenewalsData = availableNextRenewals.slice(0, 4);
}

function updateCounts(specificAnomaliesCount = null) {
    console.log('Updating counts...');
    if (crossSellCountSpan) crossSellCountSpan.textContent = crossSellFilteredData.length;
    if (allAppsCountSpan) allAppsCountSpan.textContent = allAppsFilteredData.length;
    if (downgradesCountSpan) downgradesCountSpan.textContent = downgradesFilteredData.length;
    if (competitorsCountSpan) competitorsCountSpan.textContent = competitorsFilteredData.length;
    if (anomaliesCountSpan) {
        if (specificAnomaliesCount !== null) {
            anomaliesCountSpan.textContent = specificAnomaliesCount;
        } else {
            anomaliesCountSpan.textContent = anomaliesFilteredData.length;
        }
    }
    if (criticalIssuesCountSpan) criticalIssuesCountSpan.textContent = anomaliesCriticalOnlyData.length;
    if (warningSignsCountSpan) warningSignsCountSpan.textContent = anomaliesWarningOnlyData.length;
    if (competitorExposureCountElement) {
        competitorExposureCountElement.textContent = competitorsFilteredData.length;
    }
    if (downgradeRisksCountElement) {
        downgradeRisksCountElement.textContent = downgradesFilteredData.length;
    }
    const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
    const totalClosedTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.closedStatus, 0);
    const openTicketsCountSpan = document.getElementById('openTicketsCount');
    const closedTicketsCountSpan = document.getElementById('closedTicketsCount');
    if (openTicketsCountSpan) openTicketsCountSpan.textContent = totalOpenTickets;
    if (closedTicketsCountSpan) closedTicketsCountSpan.textContent = totalClosedTickets;
    if (openTicketsCountSpan) {
        openTicketsCountSpan.style.minWidth = '50px';
        openTicketsCountSpan.style.textAlign = 'center';
    }
    if (closedTicketsCountSpan) {
        closedTicketsCountSpan.style.minWidth = '50px';
        closedTicketsCountSpan.style.textAlign = 'center';
    }
    if (arrLessThan5kCountSpan) arrLessThan5kCountSpan.textContent = `(${arrLessThan5kFilteredData.length})`;
    if (arrGreaterThan5kCountSpan) arrGreaterThan5kCountSpan.textContent = `(${arrGreaterThan5kFilteredData.length})`;

    // Update new card counts with fixed numbers
    if (recentPurchasesCountSpan) recentPurchasesCountSpan.textContent = recentPurchasesData.length;
    if (nextRenewalsCountSpan) nextRenewalsCountSpan.textContent = nextRenewalsData.length;
}

function getStatusTagHtml(status) {
    let colorClass = '';
    let displayText = status;
    if (status === 'Active') {
        colorClass = 'status-tag-active';
    } else if (status === 'Inactive') {
        colorClass = 'status-tag-inactive';
    } else if (status === 'Renewal risk detected') {
        colorClass = 'status-tag-renewal-risk';
        displayText = 'Renewal risk';
    }
    return `<span class="status-tag ${colorClass}">${displayText}</span>`;
}
function renderApplicationTable(data) {
    console.log('Starting to render application table with', data.length, 'items');
    if (!applicationTableBody) {
        console.error("Application table body element (applicationTableBody) not found!");
        return;
    }
    applicationTableBody.innerHTML = '';
    expandedRowId = null;
    if (data.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="10" class="text-center py-4 text-muted">No data available for this category.</td>`;
        applicationTableBody.appendChild(noDataRow);
        return;
    }
    data.forEach((app) => {
        const row = document.createElement('tr');
        row.setAttribute('data-app-id', app.id);
        row.className = 'clickable-row';
        let crossSellCompetitors = [];
        let threatCompetitors = [];
        const crossSellList = ['Mailchimp', 'Dropbox'];
        const threatList = ['Active campaign', 'Zoom', 'Microsoft Teams', 'Google Drive', 'Sqauare POS'];
        if (app.competitors && app.competitors.length > 0) {
            app.competitors.forEach(comp => {
                if (crossSellList.includes(comp)) {
                    crossSellCompetitors.push(comp);
                } else if (threatList.includes(comp)) {
                    threatCompetitors.push(comp);
                } else {
                    threatCompetitors.push(comp);
                }
            });
        }
        let competitorsCellContent = '';
        if (crossSellCompetitors.length === 0 && threatCompetitors.length === 0) {
            competitorsCellContent = `<div class="competitors-flex-container justify-content-center">
                                <span class="text-dark">None</span>
                              </div>`;
        } else {
            const crossSellTagsHtml = crossSellCompetitors.map(comp => `<span class="competitor-tag cross-sell-tag">${comp}</span>`).join('');
            let threatDisplayHtml = '';
            let threatPopupHtml = '';
            if (threatCompetitors.length > 0) {
                threatDisplayHtml += `<span class="threat-tag-display">${threatCompetitors[0]}</span>`;
                if (threatCompetitors.length > 1) {
                    const remainingThreatsCount = threatCompetitors.length - 1;
                    threatDisplayHtml += `<span class="threat-more-indicator">+${remainingThreatsCount}</span>`;
                    threatPopupHtml = threatCompetitors.map(comp => `<span class="threat-popup-item">${comp}</span>`).join('');
                    threatPopupHtml = `
                <div class="threat-popup-container">
                    ${threatPopupHtml}
                </div>
            `;
                }
            } else {
                threatDisplayHtml = '<span class="text-dark">None</span>';
            }
            competitorsCellContent = `
        <div class="competitors-flex-container">
            <div class="competitors-cross-sell-section">
                ${crossSellTagsHtml || '<span class="text-dark">None</span>'}
            </div>
            <span class="vertical-bar-in-table"></span>
            <div class="competitors-threat-section">
                <div class="threat-popup-wrapper">
                    ${threatDisplayHtml}
                    ${threatPopupHtml}
                </div>
            </div>
        </div>
    `;
        }
        let licenseTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
        if (app.license.includes('Downgraded')) {
            licenseTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
        } else if (app.license.includes('Upgraded')) {
            licenseTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
        }
        let usageDisplayText = app.usage;
        let usageBackgroundColorClass = '';
        if (app.usage === 'Low') {
            usageBackgroundColorClass = 'bg-usage-low';
        } else if (app.usage === 'Medium') {
            usageBackgroundColorClass = 'bg-usage-medium';
        } else if (app.usage === 'High') {
            usageBackgroundColorClass = 'bg-usage-high';
        } else {
            usageBackgroundColorClass = '';
        }
        const usageHtml = `
<div class="usage-bar-container ${usageBackgroundColorClass}">
<span class="usage-bar-text">${usageDisplayText}</span>
</div>
`;
        const currentMonthData = app.monthlyData[app.monthlyData.length - 1];
        const currentArr = currentMonthData ? currentMonthData.revenue : 'N/A';
        let arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
        let arrPercentageChangeHtml = '';
        let arrPercentageClass = 'text-muted';
        if (app.monthlyData.length >= 2) {
            const previousMonthData = app.monthlyData[app.monthlyData.length - 2];
            const currentArrValue = currentMonthData.revenue;
            const previousArr = previousMonthData.revenue;
            if (previousArr !== 0) {
                const percentageChange = ((currentArrValue - previousArr) / previousArr) * 100;
                arrPercentageChangeHtml = `${percentageChange.toFixed(1)}%`;
                if (percentageChange > 0) {
                    arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
                    arrPercentageClass = 'text-success';
                    arrPercentageChangeHtml = `+${arrPercentageChangeHtml}`;
                } else if (percentageChange < 0) {
                    arrTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
                    arrPercentageClass = 'text-danger';
                } else {
                    arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
                    arrPercentageClass = 'text-muted';
                }
            } else if (currentArrValue > 0) {
                arrPercentageChangeHtml = `+Inf%`;
                arrPercentageClass = 'text-success';
                arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
            } else {
                arrPercentageChangeHtml = `N/A`;
                arrPercentageClass = 'text-muted';
            }
        } else {
            arrPercentageChangeHtml = 'N/A';
            arrPercentageClass = 'text-muted';
        }
        const arrRevenueCellContent = `
$${currentArr}<br>
<span class="${arrPercentageClass} arr-percentage-text">${arrPercentageChangeHtml}</span>
`;
        let appStatusArrowHtml = '';
        if (app.license.includes('Upgraded')) {
            appStatusArrowHtml = `<i class="bi bi-arrow-up text-success app-status-arrow"></i>`;
        } else if (app.license.includes('Downgraded')) {
            appStatusArrowHtml = `<i class="bi bi-arrow-down text-danger app-status-arrow"></i>`;
        } else {
            appStatusArrowHtml = `<i class="bi bi-arrow-right text-primary app-status-arrow"></i>`;
        }
        const appStatus = app.status;
        row.innerHTML = `
<td><span class="expand-toggle-arrow">▼</span></td>
<td style="min-width: 200px;">
${appStatusArrowHtml}${app.application} ${getStatusTagHtml(appStatus)}<br><span class="application-category">${app.category}</span>
</td>
<td>${usageHtml}</td>
<td>${arrRevenueCellContent}</td>
<td>${arrTrendIconHtml}</td>
<td>${app.seats}</td>
<td>${licenseTrendIconHtml} ${app.license}</td>
<td class="text-center">
    ${competitorsCellContent}
</td>
<td>N/A</td>
<td>
<div class="action-dropdown-wrapper">
    <i class="bi bi-exclamation-triangle text-danger action-toggle-element"></i>
    <div class="action-dropdown-menu">
        <button class="glass-button email-peer">
            <i class="bi bi-envelope-fill"></i> Email to Peer
        </button>
        <button class="glass-button email-client">
            <i class="bi bi-person-lines-fill"></i> Email to Client
        </button>
        <button class="glass-button connect-us" data-subscription-id="${app.id}" data-subscription-name="${app.application}">
            <i class="bi bi-chat-text-fill"></i> Chat with Agent (<span class="ai-text">AI</span>)
        </button>
    </div>
</div>
</td>
`;
        const actionToggleElement = row.querySelector('.action-toggle-element');
        const actionDropdownMenu = row.querySelector('.action-dropdown-menu');
        if (actionToggleElement && actionDropdownMenu) {
            actionToggleElement.addEventListener('click', (event) => {
                event.stopPropagation();
                if (currentOpenDropdown && currentOpenDropdown !== actionDropdownMenu) {
                    closeAllDropdowns();
                }
                closeAllThreatPopups();
                actionDropdownMenu.classList.toggle('show');
                if (actionDropdownMenu.classList.contains('show')) {
                    currentOpenDropdown = actionDropdownMenu;
                    currentOpenDropdownToggle = actionToggleElement;
                } else {
                    closeAllDropdowns();
                }
            });
            actionDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.stopPropagation();
                    console.log(`${button.textContent.trim()} clicked!`);
                    if (button.classList.contains('connect-us')) {
                        const subscriptionId = button.dataset.subscriptionId;
                        const subscriptionName = button.dataset.subscriptionName;
                        console.log(`Opening chat for Subscription ID: ${subscriptionId}, Name: ${subscriptionName}`);
                        openSubscriptionChatModal(subscriptionId, subscriptionName, event.target);
                    }
                    closeAllDropdowns();
                });
            });
        }
        const threatPopupWrapper = row.querySelector('.threat-popup-wrapper');
        if (threatPopupWrapper) {
            const threatTrigger = threatPopupWrapper.querySelector('.threat-tag-display') || threatPopupWrapper.querySelector('.threat-more-indicator');
            const threatPopup = threatPopupWrapper.querySelector('.threat-popup-container');
            if (threatTrigger && threatPopup) {
                threatTrigger.addEventListener('click', (event) => {
                    event.stopPropagation();
                    if (currentOpenThreatPopup && currentOpenThreatPopup !== threatPopup) {
                        closeAllThreatPopups();
                    }
                    closeAllDropdowns();
                    threatPopup.classList.toggle('show');
                    if (threatPopup.classList.contains('show')) {
                        currentOpenThreatPopup = threatPopup;
                        currentOpenThreatPopupToggle = threatTrigger;
                    } else {
                        closeAllThreatPopups();
                    }
                });
            }
        }
        row.addEventListener('click', (event) => {
            if (event.target.closest('.action-dropdown-wrapper') || event.target.closest('.threat-popup-wrapper')) {
                return;
            }
            closeAllDropdowns();
            closeAllThreatPopups();
            const appId = app.id;
            const currentExpandedId = expandedRowId;
            const arrowSpan = row.querySelector('.expand-toggle-arrow');
            if (appId === currentExpandedId) {
                const expandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${appId}"]`);
                if (expandedRowElement) {
                    expandedRowElement.remove();
                }
                expandedRowId = null;
                if (arrowSpan) arrowSpan.textContent = '▼';
            } else {
                if (currentExpandedId !== null) {
                    const previousExpandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${currentExpandedId}"]`);
                    if (previousExpandedRowElement) {
                        previousExpandedRowElement.remove();
                    }
                    const previousArrow = document.querySelector(`tr[data-app-id="${currentExpandedId}"] .expand-toggle-arrow`);
                    if (previousArrow) previousArrow.textContent = '▼';
                }
                const expandedRow = document.createElement('tr');
                expandedRow.className = 'expanded-row';
                expandedRow.setAttribute('data-parent-app-id', appId);
                const getRandomUsage = () => {
                    const usages = ['Low', 'Medium', 'High'];
                    return usages[Math.floor(Math.random() * usages.length)];
                };
                const getRandomUsageTrend = () => {
                    const trends = [
                        { icon: 'bi-graph-up', class: 'text-success' },
                        { icon: 'bi-graph-down', class: 'text-danger' },
                        { icon: 'bi-dash-lg', class: 'text-muted' }
                    ];
                    return trends[Math.floor(Math.random() * trends.length)];
                };
                let monthlyDataHtml = app.monthlyData.map((month, index) => {
                    const randomUsage = getRandomUsage();
                    const randomUsageTrend = getRandomUsageTrend();
                    let changeIcon = '';
                    let changeClass = 'text-muted';
                    if (month.change.includes('+')) {
                        changeIcon = `<i class="bi bi-graph-up text-success"></i>`;
                        changeClass = 'text-success';
                    } else if (month.change.includes('-')) {
                        changeIcon = `<i class="bi bi-graph-down text-danger"></i>`;
                        changeClass = 'text-danger';
                    } else {
                        changeIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                    }
                    let revenueTrendIcon = '';
                    let revenueTrendClass = 'text-muted';
                    let revenuePercentageChange = 'N/A';
                    if (index > 0) {
                        const previousMonthRevenue = app.monthlyData[index - 1].revenue;
                        const currentMonthRevenue = month.revenue;
                        if (previousMonthRevenue !== 0) {
                            const percentage = ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue) * 100;
                            revenuePercentageChange = `${percentage.toFixed(1)}%`;
                            if (percentage > 0) {
                                revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
                                revenueTrendClass = 'text-success';
                                revenuePercentageChange = `+${revenuePercentageChange}`;
                            } else if (percentage < 0) {
                                revenueTrendIcon = `<i class="bi bi-graph-down text-danger"></i>`;
                                revenueTrendClass = 'text-danger';
                            } else {
                                revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                                revenueTrendClass = 'text-muted';
                            }
                        } else if (currentMonthRevenue > 0) {
                            revenuePercentageChange = `+Inf%`;
                            revenueTrendIcon = `<i class="bi bi-graph-up text-success"></i>`;
                            revenueTrendClass = 'text-success';
                        } else {
                            revenuePercentageChange = `N/A`;
                            revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                            revenueTrendClass = 'text-muted';
                        }
                    } else {
                        revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                        revenueTrendClass = 'text-muted';
                        revenuePercentageChange = 'N/A';
                    }
                    return `
        <tr>
            <td>${month.month}</td>
            <td>${randomUsage}</td>
            <td><i class="bi ${randomUsageTrend.icon} ${randomUsageTrend.class}"></i></td>
            <td>${month.seats}</td>
            <td class="${changeClass}">${changeIcon} ${month.change}</td>
            <td>
                $${month.revenue}<br>
                <span class="${revenueTrendClass} arr-percentage-text">${revenuePercentageChange}</span>
            </td>
            <td>${revenueTrendIcon}</td> <!-- Fixed: Removed revenueTrendClass from td -->
        </tr>
    `;
                }).join('');
                let competitorIntegrationsContent = '';
                if (app.competitors && app.competitors.length > 0) {
                    competitorIntegrationsContent = app.competitors.map(comp => `<li>${comp}</li>`).join('');
                } else {
                    competitorIntegrationsContent = `No competitor integrations detected.`;
                }
                let anomaliesHtml = '';
                const detectedAnomalies = [];
                let isAppCritical = false;
                if (anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
                    isAppCritical = true;
                    const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
                    if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
                        detectedAnomalies.push(`<li>Recent Significant Seat Loss</li>`);
                    }
                    if (app.usage === 'Low' && app.license.includes('Downgraded')) {
                        detectedAnomalies.push(`<li>Very Low Usage with Downgraded License</li>`);
                    }
                    let totalRecentDecline = 0;
                    const startIndex = app.monthlyData.length - 3;
                    const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];
                    if (relevantMonths.length === 3) {
                        relevantMonths.forEach(month => {
                            const change = parseInt(month.change);
                            if (change < 0) {
                                totalRecentDecline += change;
                            }
                        });
                    }
                    if (totalRecentDecline <= -3) {
                        detectedAnomalies.push(`<li>Consistent Seat Decline</li>`);
                    }
                    if (app.paymentFailureCount >= 5) {
                        detectedAnomalies.push(`<li>Payment Failure: ${app.paymentFailureCount} (Critical)</li>`);
                    }
                    if (app.pauseScheduledCount >= 5) {
                        detectedAnomalies.push(`<li>Pause Scheduled: ${app.pauseScheduledCount} (Critical)</li>`);
                    }
                    let maxSeatsLast6MonthsForDisplay = 0;
                    if (app.monthlyData.length >= 6) {
                        const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
                        maxSeatsLast6MonthsForDisplay = Math.max(...seatsInLast6Months);
                    }
                    if (maxSeatsLast6MonthsForDisplay > 0 && (app.seats / maxSeatsLast6MonthsForDisplay) < 0.40) {
                        detectedAnomalies.push(`<li>Seats Utilization < 40% of max in last 6 months (Critical)</li>`);
                    }
                    const totalInactiveAppsForDisplay = appData.filter(a => a.status === 'Inactive').length;
                    if (totalInactiveAppsForDisplay > 4) {
                        detectedAnomalies.push(`<li>More than 4 applications are Inactive (Critical)</li>`);
                    }
                    if (app.monthlyData.length >= 6) {
                        const m6Revenue = app.monthlyData[5].revenue;
                        const m3Revenue = app.monthlyData[2].revenue;
                        if (m3Revenue > 0) {
                            const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                            if (percentageChange < -0.40) {
                                detectedAnomalies.push(`<li>ARR decreased by 40% or more (M3 to M6) (Critical)</li>`);
                            }
                        }
                    }
                    const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
                    if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 3) {
                        detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 3 open tickets (Critical)</li>`);
                    }
                    if (relevantDepartmentForDisplay) {
                        const openTicketsInDeptForDisplay = relevantDepartmentForDisplay.tickets.filter(tkt => tkt.status === 'Open');
                        const hasCriticalProblematicTagForDisplay = openTicketsInDeptForDisplay.some(tkt =>
                            tkt.tags.some(tag => ['cancel threat/churn threat', 'competitor switch', 'service outage/emergency', 'security/data breach'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
                        );
                        if (hasCriticalProblematicTagForDisplay) {
                            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has critical problematic tags (Critical)</li>`);
                        }
                    }
                }
                if (anomaliesWarningOnlyData.some(item => item.id === app.id) && !isAppCritical) {
                    if (app.paymentFailureCount > 0 && app.paymentFailureCount < 5) {
                        detectedAnomalies.push(`<li>Payment Failure: ${app.paymentFailureCount} (Warning)</li>`);
                    }
                    if (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5) {
                        detectedAnomalies.push(`<li>Pause Scheduled: ${app.pauseScheduledCount} (Warning)</li>`);
                    }
                    let maxSeatsLast6MonthsForDisplay = 0;
                    if (app.monthlyData.length >= 6) {
                        const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
                        maxSeatsLast6MonthsForDisplay = Math.max(...seatsInLast6Months);
                    }
                    if (maxSeatsLast6MonthsForDisplay > 0 && (app.seats / maxSeatsLast6MonthsForDisplay) < 0.70) {
                        detectedAnomalies.push(`<li>Seats Utilization < 70% of max in last 6 months (Warning)</li>`);
                    }
                    const totalInactiveAppsForDisplay = appData.filter(a => a.status === 'Inactive').length;
                    if (totalInactiveAppsForDisplay > 2) {
                        detectedAnomalies.push(`<li>More than 2 applications are Inactive (Warning)</li>`);
                    }
                    if (app.monthlyData.length >= 6) {
                        const m6Revenue = app.monthlyData[5].revenue;
                        const m3Revenue = app.monthlyData[2].revenue;
                        if (m3Revenue > 0) {
                            const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                            if (percentageChange < -0.30) {
                                detectedAnomalies.push(`<li>ARR decreased by 30% or more (M3 to M6) (Warning)</li>`);
                            }
                        }
                    }
                    const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
                    if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 1) {
                        detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 1 open ticket (Warning)</li>`);
                    }
                    if (relevantDepartmentForDisplay) {
                        const openTicketsInDeptForDisplay = relevantDepartmentForDisplay.tickets.filter(tkt => tkt.status === 'Open');
                        const hasWarningProblematicTagForDisplay = openTicketsInDeptForDisplay.some(tkt =>
                            tkt.tags.some(tag => ['dissatisfaction/complaint', 'escalation request', 'repeated follow-up', 'slow support / delay', 'feature gap', 'product regret', 'evaluating alternatives'].includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))
                        );
                        if (hasWarningProblematicTagForDisplay) {
                            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has problematic tags (Warning)</li>`);
                        }
                    }
                }
                if (detectedAnomalies.length > 0) {
                    anomaliesHtml = `
        <p class="mb-1 fw-bold text-danger">
            <i class="bi bi-exclamation-triangle-fill me-1"></i> Anomalies Detected:
        </p>
        <ul class="list-unstyled small ps-3">
            ${detectedAnomalies.join('')}
        </ul>
    `;
                } else {
                    anomaliesHtml = `
        <p class="mb-1 fw-bold text-success">
            <i class="bi bi-check-circle-fill me-1"></i> No Anomalies Detected
        </p>
    `;
                }
                expandedRow.innerHTML = `
    <td colspan="10">
        <div class="expanded-content p-3 bg-light rounded-bottom d-flex flex-wrap align-items-stretch">
            <div class="col-md-6 p-2"> <!-- Changed to col-md-6 -->
                <h6 class="mb-2 fw-bold">Usage & License History</h6>
                <div class="table-responsive">
                    <table class="table table-sm monthly-data-table mb-0">
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Usage</th>
                                <th>Trend</th>
                                <th>License</th>
                                <th>Trend</th>
                                <th>ARR</th>
                                <th>Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${monthlyDataHtml}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-3 p-2 border-start border-end"> <!-- Changed to col-md-3 -->
                <h6 class="mb-2 fw-bold">Competitor Integrations</h1>
                <p class="small text-muted mb-3">
                    ${competitorIntegrationsContent}
                </p>
                <h6 class="mb-2 fw-bold">Zoho Conversion Opportunities</h1>
                <p class="small text-dark">${app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities}</p>
                ${anomaliesHtml}
            </div>
            <div class="col-md-3 p-2 d-flex flex-column justify-content-between"> <!-- Changed to col-md-3 -->
                <div>
                    <h6 class="mb-2 fw-bold">Actions</h6>
                    <div class="action-dropdown-wrapper">
                        <!-- Removed the "More Actions" button -->
                        <div class="action-dropdown-menu show">
                            <a href="https://www.example.com/store" target="_blank" rel="noopener noreferrer" class="glass-button store-link">
                                <i class="bi bi-shop"></i> Store
                            </a>
                            <a href="https://www.example.com/mics" target="_blank" rel="noopener noreferrer" class="glass-button mics-link">
                                <i class="bi bi-file-earmark-text"></i> MICS
                            </a>
                            <button class="glass-button connect-us" data-subscription-id="${app.id}" data-subscription-name="${app.application}">
                                <i class="bi bi-chat-text-fill"></i> Chat with Agent (<span class="ai-text">AI</span>)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </td>
`;
                row.insertAdjacentElement('afterend', expandedRow);
                expandedRowId = appId;
                if (arrowSpan) arrowSpan.textContent = '▲';

                // Apply animation to buttons in the expanded row's dropdown
                const expandedRowDropdownMenu = expandedRow.querySelector('.action-dropdown-menu');
                if (expandedRowDropdownMenu) {
                    expandedRowDropdownMenu.querySelectorAll('.glass-button').forEach((button, index) => {
                        button.style.animation = `fadeInSlideUp 0.3s ease-out forwards ${index * 0.1}s`;
                    });

                    // Add event listeners for the buttons directly
                    expandedRowDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                        button.addEventListener('click', (event) => {
                            event.stopPropagation();
                            console.log(`${button.textContent.trim()} clicked from expanded row!`);
                            if (button.classList.contains('connect-us')) {
                                const subscriptionId = button.dataset.subscriptionId;
                                const subscriptionName = button.dataset.subscriptionName;
                                console.log(`Opening chat for Subscription ID: ${subscriptionId}, Name: ${subscriptionName}`);
                                openSubscriptionChatModal(subscriptionId, subscriptionName, event.target);
                            }
                            // No need to close dropdown as it's always visible
                        });
                    });
                }
            }
        });
        applicationTableBody.appendChild(row);
    });
}
function renderTicketDetailsTable() {
    if (!ticketDetailsTableBody) {
        console.error("Ticket details table body element (ticketDetailsTableBody) not found!");
        return;
    }
    ticketDetailsTableBody.innerHTML = '';
    expandedTicketRowId = null;
    if (ticketDetailsData.length === 0) {
        const noDataRow = document.createElement('tr');
        noDataRow.innerHTML = `<td colspan="5" class="text-center py-4 text-muted">No ticket details available.</td>`;
        ticketDetailsTableBody.appendChild(noDataRow);
        return;
    }
    ticketDetailsData.forEach(ticket => {
        const row = document.createElement('tr');
        row.setAttribute('data-ticket-dept-id', ticket.id);
        row.className = 'clickable-row';
        row.innerHTML = `
<td><span class="ticket-expand-toggle-arrow">▼</span></td>
<td>${ticket.department}</td>
<td>${ticket.openStatus}</td>
<td>${ticket.closedStatus}</td>
<td>${ticket.openTicketOwnership}</td>
`;
        row.addEventListener('click', (event) => {
            const deptId = ticket.id;
            const currentExpandedTicketId = expandedTicketRowId;
            const arrowSpan = row.querySelector('.ticket-expand-toggle-arrow');
            if (deptId === currentExpandedTicketId) {
                const expandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${deptId}"]`);
                if (expandedRowElement) {
                    expandedRowElement.remove();
                    row.classList.remove('expanded');
                }
                expandedTicketRowId = null;
                if (arrowSpan) arrowSpan.textContent = '▼';
            } else {
                if (currentExpandedTicketId !== null) {
                    const previousExpandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${currentExpandedTicketId}"]`);
                    if (previousExpandedRowElement) {
                        previousExpandedRowElement.remove();
                        const prevParentRow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"]`);
                        if(prevParentRow) prevParentRow.classList.remove('expanded');
                    }
                    const previousArrow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"] .ticket-expand-toggle-arrow`);
                    if (previousArrow) previousArrow.textContent = '▼';
                }
                const expandedTicketRow = document.createElement('tr');
                expandedTicketRow.className = 'ticket-detail-expanded-row';
                expandedTicketRow.setAttribute('data-parent-dept-id', deptId);
                row.classList.add('expanded');
                const openTickets = ticket.tickets.filter(tkt => tkt.status === 'Open');
                const closedTickets = ticket.tickets.filter(tkt => tkt.status === 'Closed');
                let openTicketsHtml = '';
                if (openTickets && openTickets.length > 0) {
                    openTicketsHtml = openTickets.map(tkt => {
                        const currentTicketTags = assignTagsFromSummary(tkt.summary);
                        const tagsHtml = currentTicketTags.map(tag => {
                            const classFriendlyTag = tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
                            return `<span class="ticket-tag tag-${classFriendlyTag}">${tag}</span>`;
                        }).join('');
                        return `
            <li class="ticket-item">
                <a href="${tkt.url}" target="_blank" class="ticket-id text-primary">${tkt.id}</a>
                <span class="ticket-summary">${tkt.summary}</span>
                <div class="ticket-tags">${tagsHtml}</div>
            </li>
        `;
                    }).join('');
                } else {
                    openTicketsHtml = `<p class="text-muted small mb-0">No open tickets for this department.</p>`;
                }
                let closedTicketsHtml = '';
                if (closedTickets && closedTickets.length > 0) {
                    closedTicketsHtml = closedTickets.map(tkt => {
                        const tagsHtml = assignTagsFromSummary(tkt.summary).map(tag => {
                            const classFriendlyTag = tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-');
                            return `<span class="ticket-tag tag-${classFriendlyTag}">${tag}</span>`;
                        }).join('');
                        return `
            <li class="ticket-item">
                <a href="${tkt.url}" target="_blank" class="ticket-id text-primary">${tkt.id}</a>
                <span class="ticket-summary">${tkt.summary}</span>
                <div class="ticket-tags">${tagsHtml}</div>
            </li>
        `;
                    }).join('');
                } else {
                    closedTicketsHtml = `<p class="text-muted small mb-0">No closed tickets for this department.</p>`;
                }
                expandedTicketRow.innerHTML = `
    <td colspan="5">
        <div class="ticket-dropdown-content">
            <div class="ticket-dropdown-section">
                <strong>Open Ticket Executive Summary:</strong>
                <p class="small text-dark mb-0">${ticket.executiveSummary}</p>
            </div>
            <div class="ticket-dropdown-section">
                <strong>Open Tickets:</strong>
                <ul class="ticket-list">
                    ${openTicketsHtml}
                </ul>
            </div>
            <div class="ticket-dropdown-section">
                <strong>Closed Tickets:</strong>
                <ul class="ticket-list">
                    ${closedTicketsHtml}
                </ul>
            </div>
        </div>
    </td>
`;
                row.insertAdjacentElement('afterend', expandedTicketRow);
                expandedTicketRowId = deptId;
                if (arrowSpan) arrowSpan.textContent = '▲';
            }
        });
        ticketDetailsTableBody.appendChild(row);
    });
}
function switchTab(selectedCategory, dataToRender = null) {
    closeAllDropdowns();
    closeAllThreatPopups();
    closeSubscriptionChatModal();
    clearAllButtonHighlights();
    clearAllArrSegmentHighlights();
    if (applicationTableContainer) {
        applicationTableContainer.classList.add('d-none');
        applicationTableContainer.style.display = 'none';
        if (applicationTableBody) applicationTableBody.innerHTML = '';
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'none';
            console.log('Hiding application table header.');
        }
        console.log('Hiding and clearing applicationTableContainer.');
    }
    if (ticketDetailsTableContainer) {
        ticketDetailsTableContainer.style.display = 'none';
        ticketDetailsTableContainer.classList.remove('d-none');
        console.log('Hiding ticketDetailsTableContainer.');
    }
    switch (selectedCategory) {
        case 'cross-sell':
            if (crossSellBtn) crossSellBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
            }
            renderApplicationTable(crossSellFilteredData);
            activeSection = 'cross-sell';
            updateCounts();
            break;
        case 'all-apps':
            if (allAppsBtn) allAppsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                    console.log('Showing application table header for All Apps.');
                }
                console.log('Showing applicationTableContainer for All Apps.');
            }
            renderApplicationTable(allAppsFilteredData);
            activeSection = 'all-apps';
            updateCounts();
            break;
        case 'downgrades':
            if (downgradesBtn) downgradesBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Downgrades.');
            }
            renderApplicationTable(downgradesFilteredData);
            activeSection = 'downgrades';
            updateCounts();
            break;
        case 'competitors':
            if (competitorsBtn) competitorsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Competitors.');
            }
            renderApplicationTable(competitorsFilteredData);
            activeSection = 'competitors';
            updateCounts();
            break;
        case 'anomalies':
            if (anomaliesBtn) anomaliesBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
                console.log('Showing applicationTableContainer for Anomalies.');
            }
            renderApplicationTable(dataToRender || anomaliesFilteredData);
            activeSection = 'anomalies';
            if (dataToRender !== null) {
                updateCounts(dataToRender.length);
            } else {
                updateCounts();
            }
            break;
        case 'ticket-details':
            if (ticketDetailsBtn) ticketDetailsBtn.classList.add('active');
            if (ticketDetailsTableContainer) {
                ticketDetailsTableContainer.style.display = 'block';
                console.log('Showing ticketDetailsTableContainer for Ticket Details.');
            }
            renderTicketDetailsTable();
            activeSection = 'ticket-details';
            updateCounts();
            break;
        case 'arr-less-than-5k':
            if (arrLessThan5kSegment) arrLessThan5kSegment.classList.add('active-arr-filter');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
            }
            renderApplicationTable(arrLessThan5kFilteredData);
            activeSection = 'arr-less-than-5k';
            updateCounts();
            break;
        case 'arr-greater-than-5k':
            if (arrGreaterThan5kSegment) arrGreaterThan5kSegment.classList.add('active-arr-filter');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
            }
            renderApplicationTable(arrGreaterThan5kFilteredData);
            activeSection = 'arr-greater-than-5k';
            updateCounts();
            break;
        default:
            console.warn('Unknown category selected:', selectedCategory);
            if (allAppsBtn) allAppsBtn.classList.add('active');
            if (applicationTableContainer) {
                applicationTableContainer.classList.remove('d-none');
                applicationTableContainer.style.display = 'block';
                if (applicationTableHeader) {
                    applicationTableHeader.style.display = 'table-header-group';
                }
            }
            renderApplicationTable(allAppsFilteredData);
            activeSection = 'all-apps';
            updateCounts();
            break;
    }
}
function clearAllButtonHighlights() {
    const allBtns = document.querySelectorAll('.btns');
    allBtns.forEach(btn => btn.classList.remove('active'));
}
function clearAllArrSegmentHighlights() {
    if (arrLessThan5kSegment) arrLessThan5kSegment.classList.remove('active-arr-filter');
    if (arrGreaterThan5kSegment) arrGreaterThan5kSegment.classList.remove('active-arr-filter');
}
function highlightActiveCard(activeCardElementId) {
    const allCards = [
        criticalIssuesCard,
        warningSignsCard,
        competitorExposureCard,
        downgradeRisksCard,
        deskTicketsCard
    ];
    allCards.forEach(card => {
        if (card) {
            card.classList.remove('active-highlight',
                'card-border-critical',
                'card-border-warning',
                'card-border-competitor',
                'card-border-downgrade',
                'card-border-tickets');
        }
    });
    if (activeCardElementId) {
        const activeCard = document.getElementById(activeCardElementId);
        if (activeCard) {
            activeCard.classList.add('active-highlight');
            console.log(`Adding active-highlight to: ${activeCardElementId}`);
            if (activeCardElementId === 'criticalIssuesCard') {
                activeCard.classList.add('card-border-critical');
                console.log(`Adding card-border-critical to: ${activeCardElementId}`);
            } else if (activeCardElementId === 'warningSignsCard') {
                activeCard.classList.add('card-border-warning');
                console.log(`Adding card-border-warning to: ${activeCardElementId}`);
            } else if (activeCardElementId === 'competitorExposureCard') {
                activeCard.classList.add('card-border-competitor');
                console.log(`Adding card-border-competitor to: ${activeCardElementId}`);
            } else if (activeCardElementId === 'downgradeRisksCard') {
                activeCard.classList.add('card-border-downgrade');
                console.log(`Adding card-border-downgrade to: ${activeCardElementId}`);
            } else if (activeCardElementId === 'deskTicketsCard') {
                console.log(`Adding card-border-tickets (if defined) to: ${activeCardElementId}`);
            }
            console.log(`Current classes on ${activeCardElementId}: ${activeCard.className}`);
        }
    }
}
let subscriptionChatModal = null;
let closeSubscriptionChatModalBtn = null;
let subscriptionChatIframe = null;
function openSubscriptionChatModal(subscriptionId, subscriptionName, clickedButton) {
    if (!subscriptionChatModal || !subscriptionChatIframe || !clickedButton) {
        console.error('Chat modal elements or clicked button not found!');
        return;
    }
    const row = clickedButton.closest('tr');
    if (!row) {
        console.error('Could not find parent row for clicked button.');
        return;
    }
    const rowRect = row.getBoundingClientRect();
    const modalTop = window.scrollY + rowRect.bottom + 10;
    subscriptionChatIframe.src = `chat_iframe_content.html?subscriptionId=${subscriptionId}`;
    subscriptionChatModal.style.top = `${modalTop}px`;
    subscriptionChatModal.style.right = '20px';
    subscriptionChatModal.classList.add('show');
}
function closeSubscriptionChatModal() {
    if (subscriptionChatModal) {
        subscriptionChatModal.classList.remove('show');
        subscriptionChatIframe.src = '';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    if (!initializeDOMElements()) {
        console.error('Failed to initialize DOM elements, stopping further initialization.');
        return;
    }
    filterDataArrays();
    console.log('Rendering initial table for "All Apps"');
    renderApplicationTable(allAppsFilteredData);
    if (allAppsBtn) {
        allAppsBtn.classList.add('active');
    }
    // Set health score to 100 as requested
    let calculatedHealthScore = 100;
    updateHealthScore(calculatedHealthScore);
    if (allAppsBtn) allAppsBtn.addEventListener('click', () => {
        switchTab('all-apps');
        highlightActiveCard(null);
    });
    if (crossSellBtn) crossSellBtn.addEventListener('click', () => {
        switchTab('cross-sell');
        highlightActiveCard(null);
    });
    if (downgradesBtn) downgradesBtn.addEventListener('click', () => {
        switchTab('downgrades');
        highlightActiveCard(null);
    });
    if (competitorsBtn) competitorsBtn.addEventListener('click', () => {
        switchTab('competitors');
        highlightActiveCard(null);
    });
    if (anomaliesBtn) anomaliesBtn.addEventListener('click', () => {
        switchTab('anomalies');
        highlightActiveCard(null);
    });
    if (ticketDetailsBtn) ticketDetailsBtn.addEventListener('click', () => {
        switchTab('ticket-details');
        highlightActiveCard(null);
    });
    if (arrLessThan5kSegment) {
        arrLessThan5kSegment.addEventListener('click', () => {
            switchTab('arr-less-than-5k');
            highlightActiveCard(null);
        });
    }
    if (arrGreaterThan5kSegment) {
        arrGreaterThan5kSegment.addEventListener('click', () => {
            switchTab('arr-greater-than-5k');
            highlightActiveCard(null);
        });
    }
    if (criticalIssuesCard) {
        criticalIssuesCard.addEventListener('click', () => {
            switchTab('anomalies', anomaliesCriticalOnlyData);
            highlightActiveCard('criticalIssuesCard');
        });
        criticalIssuesCard.style.cursor = 'pointer';
    }
    if (warningSignsCard) {
        warningSignsCard.addEventListener('click', () => {
            switchTab('anomalies', anomaliesWarningOnlyData);
            highlightActiveCard('warningSignsCard');
        });
        warningSignsCard.style.cursor = 'pointer';
    }
    if (competitorExposureCard) {
        competitorExposureCard.addEventListener('click', () => {
            switchTab('competitors');
            highlightActiveCard('competitorExposureCard');
        });
        competitorExposureCard.style.cursor = 'pointer';
    }
    if (downgradeRisksCard) {
        downgradeRisksCard.addEventListener('click', () => {
            switchTab('downgrades');
            highlightActiveCard('downgradeRisksCard');
        });
        downgradeRisksCard.style.cursor = 'pointer';
    }
    if (deskTicketsCard) {
        deskTicketsCard.addEventListener('click', () => {
            switchTab('ticket-details');
            highlightActiveCard('deskTicketsCard');
        });
        deskTicketsCard.style.cursor = 'pointer';
    }
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('d-none');
        applicationTableContainer.style.display = 'block';
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group';
        }
    }
    if (ticketDetailsTableContainer) {
        ticketDetailsTableContainer.style.display = 'none';
    }
    updateCounts();
    document.addEventListener('click', (event) => {
        if (currentOpenDropdown && !event.target.closest('.action-dropdown-menu') && !event.target.closest('.action-toggle-element')) {
            closeAllDropdowns();
        }
        if (currentOpenThreatPopup && !event.target.closest('.threat-popup-container') && !event.target.closest('.threat-popup-wrapper')) {
            closeAllThreatPopups();
        }
        if (subscriptionChatModal && subscriptionChatModal.classList.contains('show') &&
            !event.target.closest('.subscription-chat-modal')) {
            closeSubscriptionChatModal();
        }
        // Close popups on outside click
        if (recentPurchasesPopup.classList.contains('show') && !event.target.closest('.popup-content') && !event.target.closest('#recentPurchasesCount')) {
            closeAllModals();
        }
        if (nextRenewalsPopup.classList.contains('show') && !event.target.closest('.popup-content') && !event.target.closest('#nextRenewalsCount')) {
            closeAllModals();
        }
    });

    const clickableEyeIcon = document.querySelector('.clickable-eye-icon');
    const ratingDetailsPopup = document.getElementById('ratingDetailsPopup');
    if (clickableEyeIcon && ratingDetailsPopup) {
        clickableEyeIcon.addEventListener('click', (event) => {
            console.log('Eye icon clicked!');
            event.stopPropagation();
            if (ratingDetailsPopup.style.display === 'block') {
                ratingDetailsPopup.style.display = 'none';
            } else {
                ratingDetailsPopup.style.display = 'block';
            }
        });
        document.addEventListener('click', (event) => {
            if (ratingDetailsPopup.style.display === 'block' &&
                !clickableEyeIcon.contains(event.target) &&
                !ratingDetailsPopup.contains(event.target)) {
                console.log('Closing popup due to outside click.');
                ratingDetailsPopup.style.display = 'none';
            }
        });
    }
    const needHelpDropdownWrapper = document.getElementById('need-help-dropdown-wrapper');
    if (needHelpDropdownWrapper) {
        const needHelpToggleElement = needHelpDropdownWrapper.querySelector('.action-toggle-element');
        const needHelpDropdownMenu = needHelpDropdownWrapper.querySelector('.action-dropdown-menu');
        if (needHelpToggleElement && needHelpDropdownMenu) {
            needHelpToggleElement.addEventListener('click', (event) => {
                event.stopPropagation();
                if (currentOpenDropdown && currentOpenDropdown !== needHelpDropdownMenu) {
                    closeAllDropdowns();
                }
                closeAllThreatPopups();
                needHelpDropdownMenu.classList.toggle('show');
                if (needHelpDropdownMenu.classList.contains('show')) {
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach((button, index) => {
                        button.style.animation = `fadeInSlideUp 0.3s ease-out forwards ${index * 0.1}s`;
                    });
                    currentOpenDropdown = needHelpDropdownMenu;
                    currentOpenDropdownToggle = needHelpToggleElement;
                } else {
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                        button.style.animation = '';
                    });
                    closeAllDropdowns();
                }
            });
            needHelpDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.stopPropagation();
                    console.log(`${button.textContent.trim()} clicked from Need Help dropdown!`);
                    closeAllDropdowns();
                });
            });
        }
    }
    if (closeSubscriptionChatModalBtn) {
        closeSubscriptionChatModalBtn.addEventListener('click', closeSubscriptionChatModal);
    }

    // Event listeners for new popups
    if (recentPurchasesCountSpan) {
        recentPurchasesCountSpan.addEventListener('click', () => {
            closeAllModals(); // Close other popups
            recentPurchasesList.innerHTML = ''; // Clear previous content
            if (recentPurchasesData.length > 0) {
                recentPurchasesData.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="app-name">${item.name}</span> <span class="app-revenue">$${item.revenue}</span>`;
                    li.style.animationDelay = `${index * 0.1}s`; // Stagger animation
                    recentPurchasesList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No recent purchases in the last 6 months.';
                recentPurchasesList.appendChild(li);
            }
            recentPurchasesPopup.classList.add('show');
        });
    }

    if (nextRenewalsCountSpan) {
        nextRenewalsCountSpan.addEventListener('click', () => {
            closeAllModals(); // Close other popups
            nextRenewalsList.innerHTML = ''; // Clear previous content
            if (nextRenewalsData.length > 0) {
                nextRenewalsData.forEach((item, index) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="app-name">${item.name}</span> <span class="renewal-date">${item.date}</span> <span class="app-revenue">$${item.revenue}</span>`;
                    li.style.animationDelay = `${index * 0.1}s`; // Stagger animation
                    nextRenewalsList.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.textContent = 'No upcoming renewals in the next 3 months.';
                nextRenewalsList.appendChild(li);
            }
            nextRenewalsPopup.classList.add('show');
        });
    }

    // Close buttons for popups
    document.querySelectorAll('.popup-close-btn').forEach(button => {
        button.addEventListener('click', () => {
            closeAllModals();
        });
    });
});
