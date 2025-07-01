// Dummy data for the application table
setTimeout(function() {
const element = document.querySelector('.needHelp'); 
if (element) {
element.style.display = 'block'; 
}
}, 1000);
const appData = [
{
id: 1,
application: 'CRM Pro',
category: 'Sales',
usage: 'Medium', // Changed to string
seats: 28,
license: `Downgraded in M6`,
competitors: [],
details: [],
monthlyData: [
  { month: 'M1', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M2', seats: 30, change: '0', revenue: 1500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M3', seats: 29, change: '-1', revenue: 1450, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M4', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M5', seats: 29, change: '0', revenue: 1450, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M6', seats: 28, change: '-1', revenue: 1400, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 2,
application: 'Lead Management',
category: 'Sales',
usage: 'Low', // Changed to string
seats: 21,
license: 'Downgraded in M6',
competitors: [],
details: [],
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
application: 'Sales Analytics',
category: 'Sales',
usage: 'High', // Changed to string
seats: 33,
license: 'Upgraded in M6',
competitors: [],
details: [],
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
application: 'Email Platform',
category: 'Marketing',
usage: 'Medium', // Changed to string
seats: 41,
license: 'No changes',
competitors: ['Mailchimp'],
details: [],
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
application: 'Marketing Automation',
category: 'Marketing',
usage: 'High', // Changed to string
seats: 46,
license: 'Downgraded in M6',
competitors: ['MailChimp'],
details: [],
monthlyData: [
  { month: 'M1', seats: 50, change: '0', revenue: 2500, revenueChange: '0', competitorIntegrations: 'Mailchimp', zohoConversionOpportunities: 'High' },
  { month: 'M2', seats: 49, change: '-1', revenue: 2450, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M3', seats: 48, change: '-1', revenue: 2400, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M4', seats: 47, change: '-1', revenue: 2350, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M5', seats: 47, change: '0', revenue: 2350, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
  { month: 'M6', seats: 46, change: '-1', revenue: 2300, revenueChange: '-50', competitorIntegrations: 'None', zohoConversionOpportunities: 'High' },
]
},
{
id: 6,
application: 'Social Media',
category: 'Marketing',
usage: 'High', // Changed to string
seats: 29,
license: 'Upgraded in M6',
competitors: ['Mailchimp', 'Active campaign'],
details: [],
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
application: 'Helpdesk',
category: 'Support',
usage: 'High', // Changed to string
seats: 46,
license: 'Upgraded in M6',
competitors: [],
details: [],
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
application: 'Live Chat',
category: 'Support',
usage: 'Medium', // Changed to string
seats: 48,
license: 'Downgraded in M6',
competitors: [],
details: [],
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
application: 'Knowledge Base',
category: 'Support',
usage: 'High', // Changed to string
seats: 41,
license: 'Downgraded in M6',
competitors: [],
details: [],
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
application: 'Accounting',
category: 'Finance',
usage: 'Low', // Changed to string
seats: 20,
license: 'Downgraded in M6',
competitors: [],
details: [],
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
application: 'Expense Tracking',
category: 'Finance',
usage: 'Medium', // Changed to string
seats: 12,
license: 'Upgraded in M6',
competitors: [],
details: [],
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
application: 'Invoice',
category: 'Finance',
usage: 'High', // Changed to string
seats: 31,
license: 'Downgraded in M6',
competitors: [],
details: [],
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
application: 'Inventory',
category: 'Operations',
usage: 'High', // Changed to string
seats: 47,
license: 'Upgraded in M6',
competitors: [],
details: [],
monthlyData: [
  { month: 'M1', seats: 45, change: '0', revenue: 4500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
  { month: 'M2', seats: 46, change: '+1', revenue: 4600, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
  { month: 'M3', seats: 46, change: '0', revenue: 4600, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
  { month: 'M4', seats: 47, change: '+1', revenue: 4700, revenueChange: '+100', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
  { month: 'M5', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
  { month: 'M6', seats: 47, change: '0', revenue: 4700, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Low' },
]
},
{
id: 14,
application: 'Project Management',
category: 'Operations',
usage: 'High', // Changed to string
seats: 29,
license: 'No changes',
competitors: [],
details: [],
monthlyData: [
  { month: 'M1', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M2', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M3', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M4', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M5', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
  { month: 'M6', seats: 29, change: '0', revenue: 2900, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
]
},
{
id: 15,
application: 'HR',
category: 'Human Resources',
usage: 'Low', // Changed to string
seats: 26,
license: 'Upgraded in M6',
competitors: [],
details: [],
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
application: 'Cloud Storage',
category: 'Productivity',
usage: 'High', // Changed to string
seats: 120,
license: 'Upgraded in M6',
competitors: ['Dropbox', 'Google Drive'],
details: [],
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
application: 'Video Conferencing',
category: 'Communication',
usage: 'Medium', // Changed to string
seats: 75,
license: 'No changes',
competitors: ['Zoom', 'Microsoft Teams'],
details: [],
monthlyData: [
{ month: 'M1', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Zoom', zohoConversionOpportunities: 'Medium' },
{ month: 'M2', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Zoom', zohoConversionOpportunities: 'Medium' },
{ month: 'M3', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Microsoft Teams', zohoConversionOpportunities: 'Medium' },
{ month: 'M4', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Microsoft Teams', zohoConversionOpportunities: 'Medium' },
{ month: 'M5', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
{ month: 'M6', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'None', zohoConversionOpportunities: 'Medium' },
]
}
];

// Function to assign new tags based on ticket summary
function assignTagsFromSummary(summary) {
const tags = [];
const lowerSummary = summary.toLowerCase();

// Mapping keywords to new tags
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
// Updated Service Outage/Emergency to include 'access issue' related keywords
if (lowerSummary.includes('outage') || lowerSummary.includes('down') || lowerSummary.includes('emergency') || lowerSummary.includes('not working') || lowerSummary.includes('service disruption') || lowerSummary.includes('access issue') || lowerSummary.includes('cannot log in') || lowerSummary.includes('connectivity problem') || lowerSummary.includes('unreachable')) {
tags.push('Service Outage/Emergency');
}
// Updated Security/Data Breach to include 'trust concern' related keywords
if (lowerSummary.includes('security') || lowerSummary.includes('data breach') || lowerSummary.includes('unauthorized access') || lowerSummary.includes('vulnerability') || lowerSummary.includes('trust concern') || lowerSummary.includes('privacy issue')) {
tags.push('Security/Data Breach');
}
// New tag: Evaluating Alternatives
if (lowerSummary.includes('evaluating alternatives') || lowerSummary.includes('looking elsewhere') || lowerSummary.includes('considering other options') || lowerSummary.includes('comparing solutions')) {
tags.push('Evaluating Alternatives');
}

return tags;
}


// Dummy data for Ticket Details table - UPDATED TO USE NEW TAG LOGIC
const ticketDetailsData = [
{
id: 'dept-it-support', // Added ID for expansion logic
department: "IT Support",
openStatus: 3,
closedStatus: 2, // This is explicitly 2
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
closedStatus: 0, // This is explicitly 0
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
closedStatus: 0, // This is explicitly 0
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
closedStatus: 0, // This is explicitly 0
openTicketOwnership: "Sivanesan",
executiveSummary: "Multiple active bugs reported in the latest software release. Prioritization and swift resolution are essential to maintain user satisfaction.",
tickets: [
    { id: "TKT-006-DEV", summary: "Critical bug in user authentication module leading to service outage. Users experiencing access issue.", url: "#", status: "Open" },
    { id: "TKT-007-DEV", summary: "UI bug: button misaligned on dashboard page, product regret reported, evaluating alternatives.", url: "#", status: "Open" },
    { id: "TKT-008-DEV", summary: "Customer threatening to cancel due to security vulnerability. Trust concern raised.", url: "#", status: "Open" }
]
},
{
id: 'dept-hr',
department: "Human Resources",
openStatus: 0, // No open tickets for HR in this dummy data for variety
closedStatus: 5,
openTicketOwnership: "Laxman",
executiveSummary: "No open tickets. All HR-related requests and queries have been resolved promptly.",
tickets: [
    { id: "TKT-CLOSED-HR-001", summary: "Onboarding process completed for new employee.", url: "#", status: "Closed" },
    { id: "TKT-CLOSED-HR-002", summary: "Payroll discrepancy resolved for John Doe.", url: "#", status: "Closed" },
    { id: "TKT-CLOSED-HR-003", summary: "Policy clarification provided for leave request.", url: "#", status: "Closed" },
    { id: "TKT-CLOSED-HR-004", summary: "Benefits enrollment assistance provided.", url: "#", status: "Closed" },
    { id: "TKT-CLOSED-HR-005", summary: "Performance review scheduling completed.", url: "#", status: "Closed" }
]
}
];

// Pre-process ticketDetailsData to assign tags
ticketDetailsData.forEach(dept => {
dept.tickets.forEach(ticket => {
ticket.tags = assignTagsFromSummary(ticket.summary);
});
});


// Initialize all DOM element references at the top
let applicationTableContainer = null;
let ticketDetailsTableContainer = null;
let applicationTableBody = null;
let applicationTableHeader = null; // Reference for the applications table header
let ticketDetailsTableBody = null;
let allAppsBtn = null;
let downgradesBtn = null;
let competitorsBtn = null;
let anomaliesBtn = null;
let ticketDetailsBtn = null;
let allAppsCountSpan = null;
let downgradesCountSpan = null;
let competitorsCountSpan = null;
let anomaliesCountSpan = null;
let criticalIssuesCountSpan = null;
let warningSignsCountSpan = null;
let deskTicketsCountSpan = null;

// Initialize state variables
let expandedRowId = null;
let expandedTicketRowId = null; // New state for expanded ticket details row
let activeSection = 'all-apps'; // Keeps track of which tab is currently active

// Card element references
let criticalIssuesCard = null;
let warningSignsCard = null;
let competitorExposureCard = null;
let downgradeRisksCard = null;
let deskTicketsCard = null;
// Health Score elements - Declare globally
let healthScoreCircle = null;
let healthScoreValue = null;
let healthScoreStatus = null;
let healthScoreCheck = null;

// New references for the <strong> elements within the cards
let competitorExposureCountElement = null;
let downgradeRisksCountElement = null;

// Global variable to track the currently open dropdown menu
let currentOpenDropdown = null; 

// Function to close all dropdowns
function closeAllDropdowns() {
if (currentOpenDropdown) {
currentOpenDropdown.classList.remove('show');
currentOpenDropdown = null;
}
}


// Function to initialize DOM elements
function initializeDOMElements() {
applicationTableContainer = document.getElementById('applicationTableContainer');
ticketDetailsTableContainer = document.getElementById('ticketDetailsTableContainer');
applicationTableBody = document.getElementById('applicationTableBody');
applicationTableHeader = document.querySelector('#applicationTable thead'); // Select the thead of the applications table
ticketDetailsTableBody = document.getElementById('ticketDetailsTableBody');
allAppsBtn = document.getElementById('allAppsBtn');
downgradesBtn = document.getElementById('downgradesBtn');
competitorsBtn = document.getElementById('competitorsBtn');
anomaliesBtn = document.getElementById('anomaliesBtn');
ticketDetailsBtn = document.getElementById('ticketDetailsBtn');
allAppsCountSpan = document.getElementById('allAppsCount');
downgradesCountSpan = document.getElementById('downgradesCount');
competitorsCountSpan = document.getElementById('competitorsCount');
anomaliesCountSpan = document.getElementById('anomaliesCount');
criticalIssuesCountSpan = document.getElementById('criticalIssuesCount');
warningSignsCountSpan = document.getElementById('warningSignsCount');

// Card elements for click handling
criticalIssuesCard = document.getElementById('criticalIssuesCard');
warningSignsCard = document.getElementById('warningSignsCard');
competitorExposureCard = document.getElementById('competitorExposureCard');
downgradeRisksCard = document.getElementById('downgradeRisksCard');
deskTicketsCard = document.getElementById('deskTicketsCard');

// Desk Tickets card count (for the number next to 'Open')
const openTicketsCountInCard = document.getElementById('openTicketsCount');
const closedTicketsCountInCard = document.getElementById('closedTicketsCount'); // Also get the closed count span
if (openTicketsCountInCard && closedTicketsCountInCard) {
// We don't need deskTicketsCountSpan if we are updating both open and closed counts directly in updateCounts()
// but keeping it if there's any other specific use. For now, it might be redundant.
} else {
console.warn("Element with ID 'openTicketsCount' or 'closedTicketsCount' not found for desk tickets card count.");
}

// Correctly reference the strong elements by their specific IDs for Competitor Exposure and Downgrade Risks cards
competitorExposureCountElement = document.getElementById('competitorExposureCount');
downgradeRisksCountElement = document.getElementById('downgradeRisksCount');
// NEW: Health Score elements - Assign here
healthScoreCircle = document.getElementById('healthScoreCircle');
healthScoreValue = document.getElementById('healthScoreValue');
healthScoreStatus = document.getElementById('healthScoreStatus');
healthScoreCheck = document.getElementById('healthScoreCheck');


// Check if all required elements exist (add more checks as needed)
if (!applicationTableContainer) {
console.error('Application table container not found!');
return false;
}
if (!applicationTableBody) {
console.error('Application table body not found!');
return false;
}
if (!applicationTableHeader) { // Check for thead
console.error('Application table header (thead) not found!');
return false;
}
return true;
}

// Filtered data arrays (these will be used when switching tabs)
let allAppsFilteredData = [];
let downgradesFilteredData = [];
let competitorsFilteredData = [];
let criticalIssuesFilteredData = [];
let warningSignsFilteredData = [];
let anomaliesFilteredData = []; // Combined critical and warning
let anomaliesCriticalOnlyData = []; // For Critical Issues card click
let anomaliesWarningOnlyData = []; // For Warning Signs card click


// Function to filter data arrays - UPDATED LOGIC HERE
function filterDataArrays() {
allAppsFilteredData = appData;

// --- Logic for Critical Issues ---
anomaliesCriticalOnlyData = appData.filter(app => {
// Ensure monthlyData has at least 6 months to safely access index 5 (M6)
// If not, this condition cannot be met for that app
const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;

// Condition A: Recent Significant Seat Loss (e.g., lost seats in M6)
const hasRecentSignificantDowngrade = app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0;

// Condition B: Very Low Usage with Downgraded License
// Changed to check if usage is 'Low' string AND license is 'Downgraded'
const isVeryLowUsageAndDowngraded = app.usage === 'Low' && app.license.includes('Downgraded');

// Condition C: Consistent Seat Decline (over last 3 months: M4, M5, M6)
let totalRecentDecline = 0;
// Ensure there are enough monthly data points to check the last 3 months
const startIndex = app.monthlyData.length - 3;
const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];

if (relevantMonths.length === 3) { // Ensure we have at least 3 months for this check
  relevantMonths.forEach(month => {
      const change = parseInt(month.change);
      if (change < 0) {
          totalRecentDecline += change; // Accumulate negative changes
      }
  });
}
const hasConsistentSeatDecline = totalRecentDecline <= -3; // e.g., lost 3 or more seats in total

return hasRecentSignificantDowngrade || isVeryLowUsageAndDowngraded || hasConsistentSeatDecline;
});

// --- Account-level warning flags from ticket data ---
const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
const hasManyOpenTicketsWarning = totalOpenTickets > 15;

const problematicTicketTags = [
"Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
"Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
"Competitor Switch", "Product Regret", "Service Outage/Emergency",
"Security/Data Breach", "Evaluating Alternatives"
].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')); // Convert to lowercase and class-friendly for matching

let hasProblematicTicketTagsWarning = false;
for (const dept of ticketDetailsData) {
for (const ticket of dept.tickets) {
  if (ticket.status === 'Open' && ticket.tags) { // Only check open tickets with tags
      const foundTag = ticket.tags.some(tag => problematicTicketTags.includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')));
      if (foundTag) {
          hasProblematicTicketTagsWarning = true;
          break; // Found one, no need to check further for this flag
      }
  }
}
if (hasProblematicTicketTagsWarning) break; // Found one, no need to check further departments
}

// --- Logic for Warning Signs (must NOT be a Critical Issue) ---
anomaliesWarningOnlyData = appData.filter(app => {
// First, ensure it's not already a critical issue using the IDs
const isCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
if (isCritical) return false; // If it's critical, it cannot be a warning sign

// Retrieve latest zohoConversionOpportunities safely
const latestZohoConversion = app.monthlyData.length > 0 ? app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities : '';

// NEW WARNING SIGNS LOGIC:
// 1. Usage Drop - Decline in License Utilization - usage is 'Low' or 'Medium'
const isUsageDrop = (app.usage === 'Low' || app.usage === 'Medium');

// 2. ARR Trend - 30% Decrease (Comparing M6 revenue to M3 revenue)
let isArrTrendDecrease = false;
if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) { // Ensure M6 and M3 data exists (index 5 and 2)
  const m6Revenue = app.monthlyData[5].revenue;
  const m3Revenue = app.monthlyData[2].revenue;
  if (m3Revenue > 0) { // Avoid division by zero
      const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
      isArrTrendDecrease = percentageChange < -0.30; // 30% decrease
  }
}

// Existing conditions
const isLowSeats = app.seats < 30; // Keep explicit low seats check
const isDowngraded = app.license.includes('Downgraded');
const hasCompetitors = app.competitors && app.competitors.length > 0;
const isLowConversionOpp = latestZohoConversion === 'Low';

// Combine all application-specific and account-level warning conditions
return isUsageDrop || isArrTrendDecrease || isLowSeats || isDowngraded || hasCompetitors || isLowConversionOpp || hasManyOpenTicketsWarning || hasProblematicTicketTagsWarning;
});


// Downgrades button still filters by license string.
downgradesFilteredData = appData.filter(app => app.license.includes('Downgraded'));
// Competitors button still filters by competitors array.
competitorsFilteredData = appData.filter(app => app.competitors && app.competitors.length > 0);


// Anomalies are the union of Critical and Warning Signs for the main Anomalies button
const anomaliesSet = new Set();
anomaliesCriticalOnlyData.forEach(app => anomaliesSet.add(app));
anomaliesWarningOnlyData.forEach(app => anomaliesSet.add(app));
anomaliesFilteredData = Array.from(anomaliesSet);
}


// Function to update the counts on the buttons and top cards
function updateCounts(specificAnomaliesCount = null) {
console.log('Updating counts...');

// Update counts for buttons
if (allAppsCountSpan) allAppsCountSpan.textContent = allAppsFilteredData.length;
if (downgradesCountSpan) downgradesCountSpan.textContent = downgradesFilteredData.length;
if (competitorsCountSpan) competitorsCountSpan.textContent = competitorsFilteredData.length;
// --- MODIFIED LOGIC for Anomalies Count ---
if (anomaliesCountSpan) {
if (specificAnomaliesCount !== null) {
  // Use the specific count if provided (from card click)
  anomaliesCountSpan.textContent = specificAnomaliesCount;
} else {
  // Otherwise, use the total combined anomalies count (for direct button click)
  anomaliesCountSpan.textContent = anomaliesFilteredData.length;
}
}
// --- END MODIFIED LOGIC ---

// Update counts for Critical Issues and Warning Signs cards
if (criticalIssuesCountSpan) criticalIssuesCountSpan.textContent = anomaliesCriticalOnlyData.length; // Uses specific critical count
if (warningSignsCountSpan) warningSignsCountSpan.textContent = anomaliesWarningOnlyData.length; // Uses specific warning count

// Correctly update counts for Competitor Exposure and Downgrade Risks cards
if (competitorExposureCountElement) {
competitorExposureCountElement.textContent = competitorsFilteredData.length;
}
if (downgradeRisksCountElement) {
downgradeRisksCountElement.textContent = downgradesFilteredData.length;
}


// Update counts for Desk Tickets card and button
const totalOpenTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
// FIX: Correctly sum closedStatus for totalClosedTickets
const totalClosedTickets = ticketDetailsData.reduce((sum, dept) => sum + dept.closedStatus, 0);

const openTicketsCountSpan = document.getElementById('openTicketsCount');
const closedTicketsCountSpan = document.getElementById('closedTicketsCount');

if (openTicketsCountSpan) openTicketsCountSpan.textContent = totalOpenTickets;
if (closedTicketsCountSpan) closedTicketsCountSpan.textContent = totalClosedTickets;

// Ensure the numbers are properly aligned (if needed, typically done via CSS)
if (openTicketsCountSpan) {
openTicketsCountSpan.style.minWidth = '50px';
openTicketsCountSpan.style.textAlign = 'center';
}
if (closedTicketsCountSpan) {
closedTicketsCountSpan.style.minWidth = '50px';
closedTicketsCountSpan.style.textAlign = 'center';
}
}


// Function to render the application table rows based on provided data
function renderApplicationTable(data) {
console.log('Starting to render application table with', data.length, 'items');

if (!applicationTableBody) {
console.error("Application table body element (applicationTableBody) not found!");
return;
}

// Clear any existing rows in the table body, including previously expanded rows
applicationTableBody.innerHTML = '';
expandedRowId = null; // Reset expanded row state

// If no data, display a message
if (data.length === 0) {
const noDataRow = document.createElement('tr');
noDataRow.innerHTML = `<td colspan="10" class="text-center py-4 text-muted">No data available for this category.</td>`; // Changed colspan to 10
applicationTableBody.appendChild(noDataRow);
return;
}

// Loop through each item (app) in the data array
data.forEach((app) => {
// Create a new table row element for the main application entry
const row = document.createElement('tr');
row.setAttribute('data-app-id', app.id);
row.className = 'clickable-row';

// Determine competitor display
let competitorsHtml = ''; // Initialize as empty
if (app.competitors && app.competitors.length > 0) {
    // Generate tags for each competitor
    competitorsHtml = app.competitors.map(comp => `<span class="competitor-tag">${comp}</span>`).join('');
} else {
    competitorsHtml = 'None';
}

// Determine license trend icon and color
let licenseTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`; // Default: no change
if (app.license.includes('Downgraded')) {
    licenseTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
} else if (app.license.includes('Upgraded')) {
    licenseTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
}

// --- MODIFIED LOGIC FOR USAGE DISPLAY: Directly use app.usage string value ---
let usageDisplayText = app.usage; // Directly use the string value from app.usage
let usageBackgroundColorClass = ''; 

// Map the string value to the appropriate background color class
if (app.usage === 'Low') {
    usageBackgroundColorClass = 'bg-usage-low';
} else if (app.usage === 'Medium') {
    usageBackgroundColorClass = 'bg-usage-medium';
} else if (app.usage === 'High') { 
    usageBackgroundColorClass = 'bg-usage-high';
} else {
    // Fallback for any unexpected usage values
    usageBackgroundColorClass = ''; 
}

// New HTML structure for the usage cell
const usageHtml = `
    <div class="usage-bar-container ${usageBackgroundColorClass}">
        <span class="usage-bar-text">${usageDisplayText}</span>
    </div>
`;
// --- END MODIFIED LOGIC ---

// --- NEW LOGIC for ARR and ARR Trend with Percentage ---
const currentMonthData = app.monthlyData[app.monthlyData.length - 1]; // Get the last month's data
const currentArr = currentMonthData ? currentMonthData.revenue : 'N/A';

let arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
let arrPercentageChangeHtml = '';
let arrPercentageClass = 'text-muted';

if (app.monthlyData.length >= 2) { // Need at least two months to calculate percentage change
    const previousMonthData = app.monthlyData[app.monthlyData.length - 2];
    const previousArr = previousMonthData.revenue;
    const currentArrValue = currentMonthData.revenue;

    if (previousArr !== 0) { // Avoid division by zero
        const percentageChange = ((currentArrValue - previousArr) / previousArr) * 100;
        arrPercentageChangeHtml = `${percentageChange.toFixed(1)}%`; // Format to one decimal place

        if (percentageChange > 0) {
            arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
            arrPercentageClass = 'text-success';
            arrPercentageChangeHtml = `+${arrPercentageChangeHtml}`; // Add '+' for positive changes
        } else if (percentageChange < 0) {
            arrTrendIconHtml = `<i class="bi bi-graph-down text-danger"></i>`;
            arrPercentageClass = 'text-danger';
        } else {
            arrTrendIconHtml = `<i class="bi bi-dash-lg text-muted"></i>`;
            arrPercentageClass = 'text-muted';
        }
    } else if (currentArrValue > 0) {
        // If previous ARR was 0 and current is positive, it's an infinite increase
        arrPercentageChangeHtml = `+Inf%`;
        arrPercentageClass = 'text-success';
        arrTrendIconHtml = `<i class="bi bi-graph-up text-success"></i>`;
    } else {
        arrPercentageChangeHtml = `0%`; // If both are 0 or previous is 0 and current is 0 or negative
        arrPercentageClass = 'text-muted';
    }
} else {
    arrPercentageChangeHtml = 'N/A'; // Not enough data for percentage
    arrPercentageClass = 'text-muted';
}

const arrRevenueCellContent = `
    $${currentArr}<br>
    <span class="${arrPercentageClass}">${arrPercentageChangeHtml}</span>
`;
// --- END NEW LOGIC ---

// --- NEW LOGIC for Application Status Arrow (NO BACKGROUND CIRCLE) ---
let appStatusArrowHtml = '';
if (app.license.includes('Upgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-up text-success app-status-arrow"></i>`; // Changed to bi-arrow-up
} else if (app.license.includes('Downgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-down text-danger app-status-arrow"></i>`; // Changed to bi-arrow-down
} else {
    appStatusArrowHtml = `<i class="bi bi-dash-lg text-muted app-status-arrow"></i>`; // Changed to bi-dash-lg
}
// --- END NEW LOGIC ---

row.innerHTML = `
    <td><span class="expand-toggle-arrow">▼</span></td> 
    <td style="min-width: 200px;">
        ${appStatusArrowHtml}${app.application}<br>${app.category}
    </td>
    <td>${usageHtml}</td> 
    <td>${arrRevenueCellContent}</td> <!-- Updated to include percentage -->
    <td>${arrTrendIconHtml}</td> <!-- Only icon here -->
    <td>${app.seats}</td>
    <td>${licenseTrendIconHtml} ${app.license}</td>
    <td>${competitorsHtml}</td>
    <td>N/A</td> 
    <td>
        <div class="action-dropdown-wrapper">
            <i class="bi bi-exclamation-triangle text-danger action-toggle-icon"></i>
            <div class="action-dropdown-menu">
                <button class="glass-button email-peer">
                    <i class="bi bi-envelope-fill"></i> Email to Peer
                </button>
                <button class="glass-button email-client">
                    <i class="bi bi-person-lines-fill"></i> Email to Client
                </button>
                <button class="glass-button connect-us">
                    <i class="bi bi-telephone-fill"></i> Talk to an Agent (<span class="ai-text">AI</span>)
                </button>
            </div>
        </div>
    </td>
`;

// Add click event listener for the action toggle icon
const actionToggleIcon = row.querySelector('.action-toggle-icon');
const actionDropdownMenu = row.querySelector('.action-dropdown-menu');

if (actionToggleIcon && actionDropdownMenu) {
    actionToggleIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the row's click listener from firing

        if (currentOpenDropdown && currentOpenDropdown !== actionDropdownMenu) {
            // If another dropdown is open, close it first
            closeAllDropdowns();
        }

        actionDropdownMenu.classList.toggle('show');
        if (actionDropdownMenu.classList.contains('show')) {
            currentOpenDropdown = actionDropdownMenu;
        } else {
            currentOpenDropdown = null;
        }
    });

    // Optional: Close dropdown if any of its buttons are clicked
    actionDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from immediately closing it again
            // Perform button action here (e.g., alert, console.log)
            console.log(`${button.textContent.trim()} clicked!`);
            closeAllDropdowns(); // Close dropdown after button click
        });
    });
}

// Add click event listener for row expansion/collapse
row.addEventListener('click', (event) => {
    // Only proceed with row expansion if the click was not on the dropdown wrapper
    if (event.target.closest('.action-dropdown-wrapper')) {
        return; // Do nothing if click is inside the action dropdown area
    }
    closeAllDropdowns(); // Close any open dropdown when clicking on a row (outside action area)


    const appId = app.id;
    const currentExpandedId = expandedRowId;
    const arrowSpan = row.querySelector('.expand-toggle-arrow');

    // If clicking on the currently expanded row, collapse it
    if (appId === currentExpandedId) {
        const expandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${appId}"]`);
        if (expandedRowElement) {
            expandedRowElement.remove();
        }
        expandedRowId = null; // Reset expanded state
        if (arrowSpan) arrowSpan.textContent = '▼'; // Change arrow to down
    } else {
        // Collapse any previously expanded row
        if (currentExpandedId !== null) {
            const previousExpandedRowElement = document.querySelector(`tr.expanded-row[data-parent-app-id="${currentExpandedId}"]`);
            if (previousExpandedRowElement) {
                previousExpandedRowElement.remove();
            }
            const previousArrow = document.querySelector(`tr[data-app-id="${currentExpandedId}"] .expand-toggle-arrow`);
            if (previousArrow) previousArrow.textContent = '▼'; // Change previous arrow to down
        }

        // Expand the new row
        const expandedRow = document.createElement('tr');
        expandedRow.className = 'expanded-row';
        expandedRow.setAttribute('data-parent-app-id', appId); // Link expanded row to its parent

        // --- START NEW EXPANDED ROW CONTENT ---
        let monthlyDataHtml = app.monthlyData.map((month, index) => {
            let changeIcon = '';
            let changeClass = 'text-muted'; // Default for no change or '0'
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

            if (index > 0) { // Calculate percentage change from previous month
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
                    revenuePercentageChange = `0%`;
                    revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`;
                    revenueTrendClass = 'text-muted';
                }
            } else {
                revenueTrendIcon = `<i class="bi bi-dash-lg text-muted"></i>`; // No change for M1
                revenueTrendClass = 'text-muted';
                revenuePercentageChange = 'N/A';
            }


            return `
                <tr>
                    <td>${month.month}</td>
                    <td>${month.seats}</td>
                    <td class="${changeClass}">${changeIcon} ${month.change}</td> 
                    <td>
                        $${month.revenue}<br>
                        <span class="${revenueTrendClass}">${revenuePercentageChange}</span>
                    </td>
                    <td class="${revenueTrendClass}">${revenueTrendIcon}</td>
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

        // Re-evaluate anomalies for the expanded row based on the new filter logic
        // Check Critical Issues
        if (anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
          // Determine specific critical sub-conditions if needed for display here
          const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
          if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
              detectedAnomalies.push(`<li>Recent Significant Seat Loss</li>`);
          }
          // Changed to check if usage is 'Low' string AND license is 'Downgraded'
          if (app.usage === 'Low' && app.license.includes('Downgraded')) {
              detectedAnomalies.push(`<li>Very Low Usage with Downgraded License</li>`);
          }
          let totalRecentDecline = 0;
          const startIndex = app.monthlyData.length - 3;
          const relevantMonths = startIndex >= 0 ? app.monthlyData.slice(startIndex) : [];
          if (relevantMonths.length === 3) {
              relevantMonths.forEach(month => { 
                  const change = parseInt(month.change); // Changed to month.change from just month
                  if (change < 0) {
                      totalRecentDecline += change;
                  }
              });
          }
          if (totalRecentDecline <= -3) {
              detectedAnomalies.push(`<li>Consistent Seat Decline</li>`);
          }
        }

        // Check Warning Signs (only if not already a Critical Issue for display in expanded row)
        if (anomaliesWarningOnlyData.some(item => item.id === app.id) && !anomaliesCriticalOnlyData.some(item => item.id === app.id)) {
          // Determine specific warning sub-conditions for display
          const latestZohoConversion = app.monthlyData.length > 0 ? app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities : '';
          
          // Changed to check if usage is 'Low' or 'Medium' string
          if (app.usage === 'Low' || app.usage === 'Medium') { 
              detectedAnomalies.push(`<li>Usage is Low or Medium</li>`);
          }
          if (app.monthlyData.length >= 6) { // New ARR Trend check
              const m6Revenue = app.monthlyData[5].revenue;
              const m3Revenue = app.monthlyData[2].revenue;
              if (m3Revenue > 0) {
                  const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                  if (percentageChange < -0.30) {
                      detectedAnomalies.push(`<li>ARR decreased by 30% or more (M3 to M6)</li>`);
                  }
              }
          }
          if (app.seats < 30) { // Existing Low Seats
              detectedAnomalies.push(`<li>Low Seats</li>`);
          }
          if (app.license.includes('Downgraded')) { // Existing Downgraded License
              detectedAnomalies.push(`<li>Downgraded License</li>`);
          }
          if (app.competitors && app.competitors.length > 0) { // Existing Competitor Integrations
              detectedAnomalies.push(`<li>Competitor Integrations Present</li>`);
          }
          if (latestZohoConversion === 'Low') { // Existing Low Conversion Opportunities
              detectedAnomalies.push(`<li>Low Zoho Conversion Opportunities</li>`);
          }
          
          // NEW: Account-level warning flags for display
          const totalOpenTicketsForDisplay = ticketDetailsData.reduce((sum, dept) => sum + dept.openStatus, 0);
          if (totalOpenTicketsForDisplay > 15) {
            detectedAnomalies.push(`<li>More than 15 open desk tickets for the account</li>`);
          }

          // Check for problematic tags
          const problematicTicketTagsForDisplay = [
              "Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
              "Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
              "Product Regret", "Service Outage/Emergency",
              "Security/Data Breach", "Evaluating Alternatives"
          ].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'));

          let hasProblematicTagsInOpenTickets = false;
          for (const dept of ticketDetailsData) {
              for (const ticket of dept.tickets) {
                  if (ticket.status === 'Open' && ticket.tags) {
                      if (ticket.tags.some(tag => problematicTicketTagsForDisplay.includes(tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-')))) {
                          hasProblematicTagsInOpenTickets = true;
                          break;
                      }
                  }
              }
              if (hasProblematicTagsInOpenTickets) break;
          }
          if (hasProblematicTagsInOpenTickets) {
            detectedAnomalies.push(`<li>Open desk tickets have problematic tags (Dissatisfaction/Complaint, Escalation Request, etc.)</li>`);
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
            <td colspan="10"> <!-- Changed colspan to 10 -->
                <div class="expanded-content p-3 bg-light rounded-bottom d-flex flex-wrap align-items-stretch">
                    <div class="col-md-4 p-2">
                        <h6 class="mb-2 fw-bold">Usage & License History</h6>
                        <div class="table-responsive">
                            <table class="table table-sm monthly-data-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Seats</th>
                                        <th>Trend</th> <!-- Changed from Change -->
                                        <th>ARR</th> <!-- Changed from Revenue -->
                                        <th>Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${monthlyDataHtml}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-md-4 p-2 border-start border-end">
                        <h6 class="mb-2 fw-bold">Competitor Integrations</h6>
                        <p class="small text-muted mb-0">
                            ${competitorIntegrationsContent}
                        </p>
                    </div>

                    <div class="col-md-4 p-2">
                        <h6 class="mb-2 fw-bold">Zoho Conversion Opportunities</h1>
                        <p class="small text-dark">${app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities}</p>
                        ${anomaliesHtml}
                    </div>
                </div>
            </td>
        `;
        // --- END NEW EXPANDED ROW CONTENT ---

        // Insert expanded row after the clicked row
        row.insertAdjacentElement('afterend', expandedRow);
        expandedRowId = appId; // Set new expanded state
        if (arrowSpan) arrowSpan.textContent = '▲'; // Change current arrow to up
    }
});

// Append the main row to the table body
applicationTableBody.appendChild(row);
});
}

// Function to render the Ticket Details table
function renderTicketDetailsTable() {
if (!ticketDetailsTableBody) {
console.error("Ticket details table body element (ticketDetailsTableBody) not found!");
return;
}
ticketDetailsTableBody.innerHTML = ''; // Clear existing rows
expandedTicketRowId = null; // Reset expanded ticket row state

if (ticketDetailsData.length === 0) {
// Updated colspan to 4 for the message (Department, Open Status, Closed Status, Open Ticket Ownership)
const noDataRow = document.createElement('tr');
noDataRow.innerHTML = `<td colspan="5" class="text-center py-4 text-muted">No ticket details available.</td>`;
ticketDetailsTableBody.appendChild(noDataRow);
return;
}

ticketDetailsData.forEach(ticket => {
const row = document.createElement('tr');
row.setAttribute('data-ticket-dept-id', ticket.id); // Use the department ID for expansion
row.className = 'clickable-row';

row.innerHTML = `
    <td><span class="ticket-expand-toggle-arrow">▼</span></td>
    <td>${ticket.department}</td>
    <td>${ticket.openStatus}</td>
    <td>${ticket.closedStatus}</td>
    <td>${ticket.openTicketOwnership}</td>
`;

// Add click event listener for row expansion/collapse for ticket details table
row.addEventListener('click', (event) => {
    const deptId = ticket.id;
    const currentExpandedTicketId = expandedTicketRowId;
    const arrowSpan = row.querySelector('.ticket-expand-toggle-arrow');

    // If clicking on the currently expanded row, collapse it
    if (deptId === currentExpandedTicketId) {
        const expandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${deptId}"]`);
        if (expandedRowElement) {
            expandedRowElement.remove();
            row.classList.remove('expanded'); // Remove expanded class from parent
        }
        expandedTicketRowId = null; // Reset expanded state
        if (arrowSpan) arrowSpan.textContent = '▼'; // Change arrow to down
    } else {
        // Collapse any previously expanded row in this table
        if (currentExpandedTicketId !== null) {
            const previousExpandedRowElement = document.querySelector(`tr.ticket-detail-expanded-row[data-parent-dept-id="${currentExpandedTicketId}"]`);
            if (previousExpandedRowElement) {
                previousExpandedRowElement.remove();
                // Also remove 'expanded' class from its original parent row
                const prevParentRow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"]`);
                if(prevParentRow) prevParentRow.classList.remove('expanded');
            }
            const previousArrow = document.querySelector(`tr[data-ticket-dept-id="${currentExpandedTicketId}"] .ticket-expand-toggle-arrow`);
            if (previousArrow) previousArrow.textContent = '▼'; // Change previous arrow to down
        }

        // Expand the new row
        const expandedTicketRow = document.createElement('tr');
        expandedTicketRow.className = 'ticket-detail-expanded-row';
        expandedTicketRow.setAttribute('data-parent-dept-id', deptId); // Link expanded row to its parent
        row.classList.add('expanded'); // Add expanded class to parent for arrow rotation

        const openTickets = ticket.tickets.filter(tkt => tkt.status === 'Open');
        const closedTickets = ticket.tickets.filter(tkt => tkt.status === 'Closed');

        let openTicketsHtml = '';
        if (openTickets && openTickets.length > 0) {
            openTicketsHtml = openTickets.map(tkt => {
                // Generate tags dynamically based on summary
                const currentTicketTags = assignTagsFromSummary(tkt.summary);
                const tagsHtml = currentTicketTags.map(tag => {
                    // Convert tag to a class-friendly format (lowercase, replace spaces/slashes with hyphens)
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

        // Insert expanded row after the clicked row
        row.insertAdjacentElement('afterend', expandedTicketRow);
        expandedTicketRowId = deptId; // Set new expanded state
        if (arrowSpan) arrowSpan.textContent = '▲'; // Change current arrow to up
    }
});
ticketDetailsTableBody.appendChild(row);
});
}


// Function to handle tab switching
// This function now accepts an optional 'dataToRender' argument
function switchTab(selectedCategory, dataToRender = null) {
// Remove 'active' class from the currently active button
const currentActiveBtn = document.querySelector('.btns.active');
if (currentActiveBtn) {
currentActiveBtn.classList.remove('active');
}

// Explicitly hide BOTH table containers before showing the selected one
// Aggressively hide applicationTableContainer and clear its content
if (applicationTableContainer) {
applicationTableContainer.classList.add('d-none'); // Hide with Bootstrap class
applicationTableContainer.style.display = 'none'; // Also set inline display to none as a fallback
if (applicationTableBody) applicationTableBody.innerHTML = ''; // Clear body content
// Explicitly hide the thead of the applications table
if (applicationTableHeader) {
    applicationTableHeader.style.display = 'none';
    console.log('Hiding application table header.');
}
console.log('Hiding and clearing applicationTableContainer.');
}
// Hide ticketDetailsTableContainer with style.display = 'none'
if (ticketDetailsTableContainer) {
ticketDetailsTableContainer.style.display = 'none';
ticketDetailsTableContainer.classList.remove('d-none'); // Ensure d-none is not interfering
console.log('Hiding ticketDetailsTableContainer.');
}


// Show the appropriate table and render data
switch (selectedCategory) {
case 'all-apps':
    if (allAppsBtn) allAppsBtn.classList.add('active');
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('d-none');
        applicationTableContainer.style.display = 'block'; // Show it
        // Show the thead for applications table
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group'; // Default display for thead
            console.log('Showing application table header for All Apps.');
        }
        console.log('Showing applicationTableContainer for All Apps.');
    }
    renderApplicationTable(allAppsFilteredData); // Re-render content
    activeSection = 'all-apps';
    updateCounts(); // <<< IMPORTANT: Added here
    break;
case 'downgrades':
    if (downgradesBtn) downgradesBtn.classList.add('active');
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('d-none');
        applicationTableContainer.style.display = 'block'; // Show it
        // Show the thead for applications table
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group';
        }
        console.log('Showing applicationTableContainer for Downgrades.');
    }
    renderApplicationTable(downgradesFilteredData); // Re-render content
    activeSection = 'downgrades';
    updateCounts(); // <<< IMPORTANT: Added here
    break;
case 'competitors':
    if (competitorsBtn) competitorsBtn.classList.add('active');
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('d-none');
        applicationTableContainer.style.display = 'block'; // Show it
        // Show the thead for applications table
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group';
        }
        console.log('Showing applicationTableContainer for Competitors.');
    }
    renderApplicationTable(competitorsFilteredData); // Re-render content
    activeSection = 'competitors';
    updateCounts(); // <<< IMPORTANT: Added here
    break;
case 'anomalies':
    if (anomaliesBtn) anomaliesBtn.classList.add('active');
    if (applicationTableContainer) {
        applicationTableContainer.classList.remove('d-none');
        applicationTableContainer.style.display = 'block'; // Show it
        // Show the thead for applications table
        if (applicationTableHeader) {
            applicationTableHeader.style.display = 'table-header-group';
        }
        console.log('Showing applicationTableContainer for Anomalies.');
    }
    // Use dataToRender if provided (from card clicks), otherwise use the combined anomaliesFilteredData
    renderApplicationTable(dataToRender || anomaliesFilteredData);
    activeSection = 'anomalies';
    // --- NEW LOGIC: Call updateCounts with specific anomalies count if dataToRender exists ---
    if (dataToRender !== null) {
        updateCounts(dataToRender.length); // Pass the specific count for anomalies
    } else {
        updateCounts(); // No specific count, so update all counts normally (anomalies shows total)
    }
    // --- END NEW LOGIC ---
    break;
case 'ticket-details':
    if (ticketDetailsBtn) ticketDetailsBtn.classList.add('active');
    if (ticketDetailsTableContainer) {
        ticketDetailsTableContainer.style.display = 'block'; // Show using style.display
        console.log('Showing ticketDetailsTableContainer for Ticket Details.');
    }
    renderTicketDetailsTable(); // Render content
    activeSection = 'ticket-details';
    updateCounts(); // <<< IMPORTANT: Added here
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
    updateCounts(); // <<< IMPORTANT: Added here
    break;
}
// <<< IMPORTANT: The 'updateCounts();' call from the very end of switchTab has been REMOVED.
}


// Function to highlight the active card (now globally accessible)
function highlightActiveCard(activeCardElementId) {
// Get all card elements
const allCards = [
criticalIssuesCard,
warningSignsCard,
competitorExposureCard,
downgradeRisksCard,
deskTicketsCard
];

// Remove all specific border classes from all cards first
allCards.forEach(card => {
if (card) {
    card.classList.remove('active-highlight',
                          'card-border-critical',
                          'card-border-warning',
                          'card-border-competitor',
                          'card-border-downgrade',
                          'card-border-tickets'); // Ensure this is also removed
}
});

// Add highlight and specific color class to the active card if an ID is provided
if (activeCardElementId) {
const activeCard = document.getElementById(activeCardElementId);
if (activeCard) {
    activeCard.classList.add('active-highlight'); // Adds the general active styles
    // Log to console to check if classes are being added
    console.log(`Adding active-highlight to: ${activeCardElementId}`);

    // Add specific border class based on card ID
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
        // For Desk Tickets, the border style is now applied directly to #deskTicketsCard.active-highlight
        // So, just adding active-highlight is enough. The specific border-color class is no longer strictly needed
        // for its effect, but keeping it in for consistency with the removal logic.
        // activeCard.classList.add('card-border-tickets'); // This specific class is now redundant for applying border-color
        console.log(`Adding card-border-tickets (if defined) to: ${activeCardElementId}`);
    }
    // Log all classes on the element after modification
    console.log(`Current classes on ${activeCardElementId}: ${activeCard.className}`);
}
}
}


// DOMContentLoaded event listener to initialize the page
document.addEventListener('DOMContentLoaded', () => {
console.log('DOM loaded, initializing...');

// Initialize DOM elements
if (!initializeDOMElements()) {
console.error('Failed to initialize DOM elements, stopping further initialization.');
return;
}

// Filter and prepare data arrays
filterDataArrays();

// Initial rendering of application table (default to 'All Apps')
console.log('Rendering initial table for "All Apps"');
renderApplicationTable(allAppsFilteredData);

// Update counts across the dashboard (Initial update on page load, now handled by switchTab or initial highlight logic)
// updateCounts(); // Removed as updateCounts is now called within switchTab and by initial highlight

// Set initial active button
if (allAppsBtn) {
allAppsBtn.classList.add('active');
}

// NEW: Call updateHealthScore with an initial example score
// This line calls the function from healthScore.js to set the initial health score display.
updateHealthScore(98); 
// You can test other scores by uncommenting one of these lines:
//updateHealthScore(75); // Example: A "Good" score
// updateHealthScore(45); // Example: A "Poor" score

// Add event listeners for buttons (main navigation buttons)
if (allAppsBtn) allAppsBtn.addEventListener('click', () => {
switchTab('all-apps');
highlightActiveCard(null); // Clear card highlight when main button is clicked
});
if (downgradesBtn) downgradesBtn.addEventListener('click', () => {
switchTab('downgrades');
highlightActiveCard(null); // Clear card highlight
});
if (competitorsBtn) competitorsBtn.addEventListener('click', () => {
switchTab('competitors');
highlightActiveCard(null); // Clear card highlight
});
if (anomaliesBtn) anomaliesBtn.addEventListener('click', () => {
switchTab('anomalies');
highlightActiveCard(null); // Clear card highlight
});
if (ticketDetailsBtn) ticketDetailsBtn.addEventListener('click', () => {
switchTab('ticket-details');
highlightActiveCard(null); // Clear card highlight
});

// Add event listeners for the top cards - UPDATED TO CALL highlightActiveCard
if (criticalIssuesCard) {
criticalIssuesCard.addEventListener('click', () => {
  switchTab('anomalies', anomaliesCriticalOnlyData); // Pass only critical data
  highlightActiveCard('criticalIssuesCard'); // Highlight this card
});
criticalIssuesCard.style.cursor = 'pointer'; // Make card clickable visually
}
if (warningSignsCard) {
warningSignsCard.addEventListener('click', () => {
  switchTab('anomalies', anomaliesWarningOnlyData); // Pass only warning data
  highlightActiveCard('warningSignsCard'); // Highlight this card
});
warningSignsCard.style.cursor = 'pointer'; // Make card clickable visually
}
if (competitorExposureCard) {
competitorExposureCard.addEventListener('click', () => {
  switchTab('competitors');
  highlightActiveCard('competitorExposureCard'); // Highlight this card
});
competitorExposureCard.style.cursor = 'pointer'; // Make card clickable visually
}
if (downgradeRisksCard) {
downgradeRisksCard.addEventListener('click', () => {
  switchTab('downgrades');
  highlightActiveCard('downgradeRisksCard'); // Highlight this card
});
downgradeRisksCard.style.cursor = 'pointer'; // Make card clickable visually
}
if (deskTicketsCard) {
deskTicketsCard.addEventListener('click', () => {
  switchTab('ticket-details');
  highlightActiveCard('deskTicketsCard'); // Highlight this card
});
deskTicketsCard.style.cursor = 'pointer'; // Make card clickable visually
}

// Initial visibility settings on page load
// applicationTableContainer should be visible by default
if (applicationTableContainer) {
applicationTableContainer.classList.remove('d-none');
applicationTableContainer.style.display = 'block';
if (applicationTableHeader) {
  applicationTableHeader.style.display = 'table-header-group'; // Ensure headers are visible initially
}
}
// ticketDetailsTableContainer should be hidden by default
if (ticketDetailsTableContainer) {
ticketDetailsTableContainer.style.display = 'none';
}

// --- NEW: Call updateCounts() after initial rendering and filterDataArrays()
// and also ensure initial card is highlighted if relevant.
updateCounts(); // Call updateCounts initially to set all button counts

// Add a global click listener to close dropdowns when clicking outside
document.addEventListener('click', (event) => {
// If a dropdown is open and the click is not inside it or its toggle button
if (currentOpenDropdown && !event.target.closest('.action-dropdown-wrapper')) {
  closeAllDropdowns();
}
});

});
