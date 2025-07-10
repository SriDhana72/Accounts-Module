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
    paymentFailureCount: 0, // New field
    pauseScheduledCount: 0, // New field
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-sales-ops', // NEW: Link to relevant department
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
    application: 'Lead Management',
    category: 'Sales',
    usage: 'Low', // Changed to string
    seats: 21,
    license: 'Downgraded in M6',
    paymentFailureCount: 3, // Example: Warning
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-sales-ops', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-sales-ops', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Mailchimp'],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department (general IT for marketing tech)
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
    paymentFailureCount: 6, // Example: Critical
    pauseScheduledCount: 0,
    competitors: ['MailChimp'],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Mailchimp', 'Active campaign'],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 4, // Example: Warning
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-finance', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-finance', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-finance', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department (general IT for operational tech)
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
    application: 'Project Management',
    category: 'Operations',
    usage: 'High', // Changed to string
    seats: 29,
    license: 'No changes',
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    application: 'HR',
    category: 'Human Resources',
    usage: 'Low', // Changed to string
    seats: 26,
    license: 'Upgraded in M6',
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: [],
    details: [],
    relevantDepartmentId: 'dept-hr', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Dropbox', 'Google Drive'],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
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
    paymentFailureCount: 0,
    pauseScheduledCount: 0,
    competitors: ['Zoom', 'Microsoft Teams'],
    details: [],
    relevantDepartmentId: 'dept-it-support', // NEW: Link to relevant department
    monthlyData: [
    { month: 'M1', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M2', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M3', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M4', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M5', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    { month: 'M6', seats: 75, change: '0', revenue: 7500, revenueChange: '0', competitorIntegrations: 'Medium' },
    ]
    }
    ];
    
    // Function to assign initial status based on existing data
    function assignInitialAppStatus(data) {
        data.forEach(app => {
            // Prioritize Renewal Risk based on new counts
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
    
    // Call this function once to initialize statuses in appData
    assignInitialAppStatus(appData);
    
    
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
    { id: "TKT-007-DEV", "summary": "UI bug: button misaligned on dashboard page, product regret reported, evaluating alternatives.", url: "#", status: "Open" },
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
    competitorExposureCard = null;
    downgradeRisksCard = null;
    deskTicketsCard = null;
    // Health Score elements - Declare globally
    let healthScoreCircle = null;
    let healthScoreValue = null;
    let healthScoreStatus = null;
    let healthScoreCheck = null;
    
    // New references for the <strong> elements within the cards
    let competitorExposureCountElement = null;
    let downgradeRisksCountElement = null;
    
    // Global variable to track the currently open dropdown menu and its toggle element
    let currentOpenDropdown = null; 
    let currentOpenDropdownToggle = null;
    
    // Global NPS Score (for demonstration, you would fetch this from CRM)
    const npsScore = 70; // Example NPS score
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
    if (currentOpenDropdown) {
    currentOpenDropdown.classList.remove('show');
    // Remove animation class from buttons when closing
    currentOpenDropdown.querySelectorAll('.glass-button').forEach(button => {
        button.style.animation = ''; // Reset animation
    });
    currentOpenDropdown = null;
    currentOpenDropdownToggle = null;
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
    
    // Modal elements
    // Removed subscriptionChatModalOverlay as it's no longer needed
    subscriptionChatModal = document.getElementById('subscriptionChatModal'); // Direct reference to the modal
    closeSubscriptionChatModalBtn = document.getElementById('closeSubscriptionChatModal');
    subscriptionChatIframe = document.getElementById('subscriptionChatIframe');
    
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
    // Ensure the chat modal itself is found
    if (!subscriptionChatModal) {
        console.error('Subscription chat modal element (subscriptionChatModal) not found!');
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
    
    // Get account-level metrics that are still relevant
    const totalInactiveApps = appData.filter(a => a.status === 'Inactive').length;
    
    // Pre-define problematic tags for easy lookup
    const problematicTicketTagsList = [
        "Dissatisfaction/Complaint", "Escalation Request", "Repeated Follow-up",
        "Slow Support / Delay", "Feature Gap", "Cancel Threat/Churn Threat",
        "Competitor Switch", "Product Regret", "Service Outage/Emergency",
        "Security/Data Breach", "Evaluating Alternatives"
    ].map(tag => tag.toLowerCase().replace(/ /g, '-').replace(/\//g, '-'));
    
    
    // Helper to find a department by ID
    const findDepartment = (deptId) => ticketDetailsData.find(dept => dept.id === deptId);
    
    
    // Determine Critical Issues
    anomaliesCriticalOnlyData = appData.filter(app => {
        let isCritical = false;
    
        // Condition A: Recent Significant Seat Loss (e.g., lost seats in M6)
        const latestMonthChange = app.monthlyData.length >= 6 ? parseInt(app.monthlyData[5].change) : null;
        if (app.license.includes('Downgraded') && latestMonthChange !== null && latestMonthChange < 0) {
            isCritical = true;
        }
    
        // Condition B: Very Low Usage with Downgraded License
        if (app.usage === 'Low' && app.license.includes('Downgraded')) {
            isCritical = true;
        }
    
        // Condition C: Consistent Seat Decline (over last 3 months: M4, M5, M6)
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
    
        // Payment Failure or Pause Scheduled count >= 5 (Critical)
        if (app.paymentFailureCount >= 5 || app.pauseScheduledCount >= 5) {
            isCritical = true;
        }
    
        // NEW CRITICAL CONDITIONS (per your latest request)
        // Seats Utilization - <40% (Critical)
        let maxSeatsLast6Months = 0;
        if (app.monthlyData.length >= 6) {
            const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
            maxSeatsLast6Months = Math.max(...seatsInLast6Months);
            if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.40) {
                isCritical = true;
            }
        }
    
        // Inactive tags > 4 (Account-level, applied to all apps if true)
        if (totalInactiveApps > 4) {
            isCritical = true;
        }
    
        // ARR Trend - 40% Decrease (Comparing M6 revenue to M3 revenue)
        if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                if (percentageChange < -0.40) { // 40% decrease
                    isCritical = true;
                }
            }
        }
    
        // Desk tickets: relevant department open ticket count > 3 (Critical)
        const relevantDepartment = findDepartment(app.relevantDepartmentId);
        if (relevantDepartment && relevantDepartment.openStatus > 3) { // More than 3 open tickets in relevant department
            isCritical = true;
        }
        
        // Also check for critical problematic tags in relevant department
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
    
    // Determine Warning Signs (must NOT be a Critical Issue)
    anomaliesWarningOnlyData = appData.filter(app => {
        // First, ensure it's not already a critical issue
        const isAlreadyCritical = anomaliesCriticalOnlyData.some(criticalApp => criticalApp.id === app.id);
        if (isAlreadyCritical) return false;
    
        let isWarning = false;
    
        // Payment Failure or Pause Scheduled count < 5 (Warning)
        if ((app.paymentFailureCount > 0 && app.paymentFailureCount < 5) ||
            (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5)) {
            isWarning = true;
        }
    
        // Re-introduced previous warning conditions (less severe thresholds):
        // Seats Utilization - <70% (Warning, if not critical)
        let maxSeatsLast6Months = 0;
        if (app.monthlyData.length >= 6) {
            const seatsInLast6Months = app.monthlyData.slice(-6).map(m => m.seats);
            maxSeatsLast6Months = Math.max(...seatsInLast6Months);
            if (maxSeatsLast6Months > 0 && (app.seats / maxSeatsLast6Months) < 0.70) {
                isWarning = true;
            }
        }
    
        // Inactive tags > 2 (Warning, if not critical)
        if (totalInactiveApps > 2) { // Note: This applies to all apps if true for the account
            isWarning = true;
        }
    
        // ARR Trend - 30% Decrease (Warning, if not critical)
        if (app.monthlyData.length >= 6 && app.monthlyData[2] && app.monthlyData[5]) {
            const m6Revenue = app.monthlyData[5].revenue;
            const m3Revenue = app.monthlyData[2].revenue;
            if (m3Revenue > 0) {
                const percentageChange = (m6Revenue - m3Revenue) / m3Revenue;
                if (percentageChange < -0.30) { // 30% decrease
                    isWarning = true;
                }
            }
        }
    
        // Desk tickets: relevant department open ticket count > 1 (Warning, if not critical)
        const relevantDepartment = findDepartment(app.relevantDepartmentId);
        if (relevantDepartment && relevantDepartment.openStatus > 1) { // More than 1 open ticket (i.e., 2 or 3)
            isWarning = true;
        }
    
        // Problematic Desk Ticket Tags (Warning) - for less severe tags
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
    
    // Function to generate the status tag HTML with correct styling
    function getStatusTagHtml(status) {
    let colorClass = '';
    let displayText = status;
    if (status === 'Active') {
    colorClass = 'status-tag-active'; // Green
    } else if (status === 'Inactive') {
    colorClass = 'status-tag-inactive'; // Orange background, red bold font
    } else if (status === 'Renewal risk detected') {
    colorClass = 'status-tag-renewal-risk'; // Red
    displayText = 'Renewal risk'; // Change text
    }
    return `<span class="status-tag ${colorClass}">${displayText}</span>`;
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
    let crossSellCompetitors = [];
    let threatCompetitors = [];
    
    // Hardcoded mapping for demonstration
    const crossSellList = ['Mailchimp', 'Dropbox'];
    const threatList = ['Active campaign', 'Zoom', 'Microsoft Teams', 'Google Drive'];
    
    if (app.competitors && app.competitors.length > 0) {
        app.competitors.forEach(comp => {
            if (crossSellList.includes(comp)) {
                crossSellCompetitors.push(comp);
            } else if (threatList.includes(comp)) {
                threatCompetitors.push(comp);
            } else {
                // Default to threat if not explicitly categorized
                threatCompetitors.push(comp);
            }
        });
    }
    
    let competitorsHtml = '';
    const crossSellTagsHtml = crossSellCompetitors.map(comp => `<span class="competitor-tag cross-sell-tag">${comp}</span>`).join('');
    const threatTagsHtml = threatCompetitors.map(comp => `<span class="competitor-tag threat-tag">${comp}</span>`).join('');
    
    if (crossSellTagsHtml && threatTagsHtml) {
        competitorsHtml = `${crossSellTagsHtml}<span class="vertical-bar-in-table"></span>${threatTagsHtml}`;
    } else if (crossSellTagsHtml) {
        competitorsHtml = crossSellTagsHtml;
    } else if (threatTagsHtml) {
        competitorsHtml = threatTagsHtml;
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
    <span class="${arrPercentageClass} arr-percentage-text">${arrPercentageChangeHtml}</span>
    `;
    // --- END NEW LOGIC ---
    
    // --- NEW LOGIC for Application Status Arrow (NO BACKGROUND CIRCLE) ---
    let appStatusArrowHtml = '';
    if (app.license.includes('Upgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-up text-success app-status-arrow"></i>`; // Changed to bi-arrow-up
    } else if (app.license.includes('Downgraded')) {
    appStatusArrowHtml = `<i class="bi bi-arrow-down text-danger app-status-arrow"></i>`; // Changed to bi-arrow-down
    } else {
    appStatusArrowHtml = `<i class="bi bi-arrow-right text-primary app-status-arrow"></i>`; // Changed to bi-arrow-right and text-primary
    }
    // --- END NEW LOGIC ---
    
    // Generate random status for the new tag
    // const statuses = ["Active", "Inactive", "Renewal risk detected"];
    // const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]; // REMOVED RANDOM ASSIGNMENT
    const appStatus = app.status; // Use the pre-assigned status
    
    row.innerHTML = `
    <td><span class="expand-toggle-arrow">▼</span></td> 
    <td style="min-width: 200px;">
    ${appStatusArrowHtml}${app.application} ${getStatusTagHtml(appStatus)}<br>${app.category}
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
    
    // Add click event listener for the action toggle element (icon)
    const actionToggleElement = row.querySelector('.action-toggle-element');
    const actionDropdownMenu = row.querySelector('.action-dropdown-menu');
    
    if (actionToggleElement && actionDropdownMenu) {
    actionToggleElement.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the row's click listener from firing
    
    if (currentOpenDropdown && currentOpenDropdown !== actionDropdownMenu) {
        // If another dropdown is open, close it first
        closeAllDropdowns();
    }
    
    actionDropdownMenu.classList.toggle('show');
    if (actionDropdownMenu.classList.contains('show')) {
        currentOpenDropdown = actionDropdownMenu;
        currentOpenDropdownToggle = actionToggleElement; // Store the toggle element
    } else {
        closeAllDropdowns(); // Close it if it was just toggled off
    }
    });
    
    // Optional: Close dropdown if any of its buttons are clicked
    actionDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent document click from immediately closing it again
        // Perform button action here (e.g., alert, console.log)
        console.log(`${button.textContent.trim()} clicked!`);
        
        // Check if it's the "Talk to an Agent (AI)" button
        if (button.classList.contains('connect-us')) {
            const subscriptionId = button.dataset.subscriptionId;
            const subscriptionName = button.dataset.subscriptionName;
            console.log(`Opening chat for Subscription ID: ${subscriptionId}, Name: ${subscriptionName}`);
            openSubscriptionChatModal(subscriptionId, subscriptionName, event.target); // Pass the clicked button element
        }
    
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
                    <span class="${revenueTrendClass} arr-percentage-text">${revenuePercentageChange}</span>
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
    let isAppCritical = false; // Flag to check if this specific app is critical
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
        // NEW CRITICAL CONDITIONS FOR DISPLAY
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
    
        // Desk tickets: relevant department open ticket count > 3 (Critical)
        const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
        if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 3) {
            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 3 open tickets (Critical)</li>`);
        }
        // Also check for critical problematic tags in relevant department for display
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
    
    // Check Warning Signs (only if not already a Critical Issue for display in expanded row)
    if (anomaliesWarningOnlyData.some(item => item.id === app.id) && !isAppCritical) { // Only add if not already critical
      
      // NEW: Payment Failure or Pause Scheduled count < 5 (Warning)
      if (app.paymentFailureCount > 0 && app.paymentFailureCount < 5) {
          detectedAnomalies.push(`<li>Payment Failure: ${app.paymentFailureCount} (Warning)</li>`);
      }
      if (app.pauseScheduledCount > 0 && app.pauseScheduledCount < 5) {
          detectedAnomalies.push(`<li>Pause Scheduled: ${app.pauseScheduledCount} (Warning)</li>`);
      }
      
        // Re-introduced previous warning conditions (less severe thresholds):
        // Seats Utilization - <70% (Warning, if not critical)
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
    
        // Desk tickets: relevant department open ticket count > 1 (Warning, if not critical)
        const relevantDepartmentForDisplay = ticketDetailsData.find(dept => dept.id === app.relevantDepartmentId);
        if (relevantDepartmentForDisplay && relevantDepartmentForDisplay.openStatus > 1) {
            detectedAnomalies.push(`<li>Relevant department (${relevantDepartmentForDisplay.department}) has > 1 open ticket (Warning)</li>`);
        }
        // Problematic Desk Ticket Tags (Warning) - for less severe tags
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
                    <p class="small text-muted mb-3">
                        ${competitorIntegrationsContent}
                    </p>
                    <h6 class="mb-2 fw-bold">Zoho Conversion Opportunities</h1>
                    <p class="small text-dark">${app.monthlyData[app.monthlyData.length - 1].zohoConversionOpportunities}</p>
                    ${anomaliesHtml}
                </div>
    
                <div class="col-md-4 p-2 d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="mb-2 fw-bold">Actions</h6>
                        <div class="action-dropdown-wrapper">
                            <button class="glass-button action-toggle-button">
                                <i class="bi bi-gear-fill"></i> More Actions
                            </button>
                            <div class="action-dropdown-menu">
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
    // --- END NEW EXPANDED ROW CONTENT ---
    
    // Insert expanded row after the clicked row
    row.insertAdjacentElement('afterend', expandedRow);
    expandedRowId = appId; // Set new expanded state
    if (arrowSpan) arrowSpan.textContent = '▲'; // Change current arrow to up
    
    // NEW: Add event listener for the new dropdown in the expanded row
    const expandedRowDropdownWrapper = expandedRow.querySelector('.action-dropdown-wrapper');
    if (expandedRowDropdownWrapper) {
        const expandedRowToggleButton = expandedRowDropdownWrapper.querySelector('.action-toggle-button');
        const expandedRowDropdownMenu = expandedRowDropdownWrapper.querySelector('.action-dropdown-menu');
    
        if (expandedRowToggleButton && expandedRowDropdownMenu) {
            expandedRowToggleButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent row click from closing it
    
                if (currentOpenDropdown && currentOpenDropdown !== expandedRowDropdownMenu) {
                    closeAllDropdowns();
                }
    
                expandedRowDropdownMenu.classList.toggle('show');
                if (expandedRowDropdownMenu.classList.contains('show')) {
                    currentOpenDropdown = expandedRowDropdownMenu;
                    currentOpenDropdownToggle = expandedRowToggleButton; // Store the toggle element
                } else {
                    closeAllDropdowns(); // Close it if it was just toggled off
                }
            });
    
            expandedRowDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    event.stopPropagation();
                    console.log(`${button.textContent.trim()} clicked from expanded row!`);
                    
                    // Check if it's the "Talk to an Agent (AI)" button
                    if (button.classList.contains('connect-us')) {
                        const subscriptionId = button.dataset.subscriptionId;
                        const subscriptionName = button.dataset.subscriptionName;
                        console.log(`Opening chat for Subscription ID: ${subscriptionId}, Name: ${subscriptionName}`);
                        openSubscriptionChatModal(subscriptionId, subscriptionName, event.target); // Pass the clicked button element
                    }
    
                    closeAllDropdowns();
                });
            });
        }
    }
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
    // Close any open dropdown when switching tabs
    closeAllDropdowns();
    closeSubscriptionChatModal(); // Close chat modal when switching tabs
    
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
    // for applying border-color.
    console.log(`Adding card-border-tickets (if defined) to: ${activeCardElementId}`);
    }
    // Log all classes on the element after modification
    console.log(`Current classes on ${activeCardElementId}: ${activeCard.className}`);
    }
    }
    }
    
    
    // NEW: Modal functions
    let subscriptionChatModal = null; // Changed from subscriptionChatModalOverlay
    let closeSubscriptionChatModalBtn = null;
    let subscriptionChatIframe = null;
    
    /**
     * Opens the subscription chat modal, positioning it relative to the clicked row.
     * @param {number} subscriptionId The ID of the subscription.
     * @param {string} subscriptionName The name of the subscription.
     * @param {HTMLElement} clickedButton The button element that was clicked to open the modal.
     */
    function openSubscriptionChatModal(subscriptionId, subscriptionName, clickedButton) {
        if (!subscriptionChatModal || !subscriptionChatIframe || !clickedButton) {
            console.error('Chat modal elements or clicked button not found!');
            return;
        }
    
        // Find the parent row (<tr>) of the clicked button
        const row = clickedButton.closest('tr');
        if (!row) {
            console.error('Could not find parent row for clicked button.');
            return;
        }
    
        // Get the bounding rectangle of the row
        const rowRect = row.getBoundingClientRect();
    
        // Calculate the desired top position for the modal
        // This positions the modal 10px below the clicked row, relative to the document's top
        const modalTop = window.scrollY + rowRect.bottom + 10;
    
        // Set the iframe source with the subscription ID as a query parameter
        subscriptionChatIframe.src = `chat_iframe_content.html?subscriptionId=${subscriptionId}`;
        
        // Apply the calculated top position and a fixed right position
        subscriptionChatModal.style.top = `${modalTop}px`;
        subscriptionChatModal.style.right = '20px'; // Keep it 20px from the right edge of the viewport
    
        // Show the modal
        subscriptionChatModal.classList.add('show');
    }
    
    function closeSubscriptionChatModal() {
        if (subscriptionChatModal) {
            subscriptionChatModal.classList.remove('show');
            subscriptionChatIframe.src = ''; // Clear iframe src to stop any content/audio
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
    
    // Set initial active button
    if (allAppsBtn) {
    allAppsBtn.classList.add('active');
    }
    
    // Calculate and update Health Score based on new logic
    let calculatedHealthScore = 100; // Start with 100 points
    
    // Deduct for Critical Issues
    if (anomaliesCriticalOnlyData.length > 0) {
        calculatedHealthScore -= 40;
    }
    
    // Deduct for Warning Signs
    if (anomaliesWarningOnlyData.length > 0 && anomaliesWarningOnlyData.length <= 5) {
        calculatedHealthScore -= 10;
    } else if (anomaliesWarningOnlyData.length > 5) {
        calculatedHealthScore -= 20;
    }
    
    // Deduct for Competitor Presence
    if (competitorsFilteredData.length > 0) {
        calculatedHealthScore -= 10;
    }
    
    // Deduct for NPS
    if (npsScore < 20) {
        calculatedHealthScore -= 20;
    } else if (npsScore >= 20 && npsScore <= 50) { // Changed to <= 50 to include 50
        calculatedHealthScore -= 10;
    }
    // If NPS > 50, 0 points are deducted, so no else if needed here.
    
    // Update Health Score display with the calculated score
    updateHealthScore(calculatedHealthScore);
    
    
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
    updateCounts(); // Call updateCounts initially to set all button counts
    
    // Add a global click listener to close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
    // If a dropdown is open and the click is not inside it or its toggle element
    if (currentOpenDropdown && !event.target.closest('.action-dropdown-menu') && !event.target.closest('.action-toggle-element')) {
    closeAllDropdowns();
    }
    // If the chat modal is open and the click is outside the modal content
    // Note: The chat modal is now absolutely positioned, so it's part of the document flow.
    // We need to check if the click is outside the modal itself.
    if (subscriptionChatModal && subscriptionChatModal.classList.contains('show') &&
        !event.target.closest('.subscription-chat-modal')) {
        closeSubscriptionChatModal();
    }
    });
    
    // JavaScript for the new eye icon pop-up
    const clickableEyeIcon = document.querySelector('.clickable-eye-icon');
    const ratingDetailsPopup = document.getElementById('ratingDetailsPopup');
    
    if (clickableEyeIcon && ratingDetailsPopup) {
        clickableEyeIcon.addEventListener('click', (event) => {
            console.log('Eye icon clicked!'); // Debugging log
            event.stopPropagation(); // Stop propagation to prevent document click from immediately closing
    
            // Toggle visibility
            if (ratingDetailsPopup.style.display === 'block') {
                ratingDetailsPopup.style.display = 'none';
            } else {
                ratingDetailsPopup.style.display = 'block';
            }
        });
    
        // Global click listener to close popup if click is outside
        document.addEventListener('click', (event) => {
            // If the popup is visible AND the click was NOT on the eye icon AND the click was NOT inside the popup
            if (ratingDetailsPopup.style.display === 'block' &&
                !clickableEyeIcon.contains(event.target) && // Check if click target is the eye icon itself or its children
                !ratingDetailsPopup.contains(event.target)) { // Check if click target is inside the popup
                console.log('Closing popup due to outside click.'); // Debugging log
                ratingDetailsPopup.style.display = 'none';
            }
        });
    }
    
    // NEW: Need Help dropdown functionality
    const needHelpDropdownWrapper = document.getElementById('need-help-dropdown-wrapper');
    if (needHelpDropdownWrapper) {
        const needHelpToggleElement = needHelpDropdownWrapper.querySelector('.action-toggle-element'); // Changed to action-toggle-element
        const needHelpDropdownMenu = needHelpDropdownWrapper.querySelector('.action-dropdown-menu');
    
        if (needHelpToggleElement && needHelpDropdownMenu) {
            needHelpToggleElement.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent document click from immediately closing
    
                if (currentOpenDropdown && currentOpenDropdown !== needHelpDropdownMenu) {
                    closeAllDropdowns();
                }
    
                needHelpDropdownMenu.classList.toggle('show');
                // Toggle the 'show' class on the toggle element itself for arrow rotation
                needHelpToggleElement.classList.toggle('show-arrow');
    
                if (needHelpDropdownMenu.classList.contains('show')) {
                    // When showing, apply staggered animation
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach((button, index) => {
                        button.style.animation = `fadeInSlideUp 0.3s ease-out forwards ${index * 0.1}s`; // Increased delay
                    });
                    currentOpenDropdown = needHelpDropdownMenu;
                    currentOpenDropdownToggle = needHelpToggleElement; // Store the toggle element
                } else {
                    // When hiding, reset animation
                    needHelpDropdownMenu.querySelectorAll('.glass-button').forEach(button => {
                        button.style.animation = ''; // Reset animation
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
    
    // Event listener for the close button on the chat modal
    if (closeSubscriptionChatModalBtn) {
        closeSubscriptionChatModalBtn.addEventListener('click', closeSubscriptionChatModal);
    }
    
    });