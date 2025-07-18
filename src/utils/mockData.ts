import type { Client, Service, AdminUser } from '../types';

export const services: Service[] = [
  {
    id: 'physical-security',
    name: 'Physical Security',
    description: 'Comprehensive physical security solutions including guards, patrols, and facility protection.',
    icon: '🛡️',
    features: ['24/7 Security Guards', 'Patrol Services', 'Facility Protection', 'Emergency Response']
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Advanced digital security to protect your data and systems from cyber threats.',
    icon: '🔒',
    features: ['Network Security', 'Data Protection', 'Threat Monitoring', 'Incident Response']
  },
  {
    id: 'surveillance',
    name: 'Surveillance Systems',
    description: 'State-of-the-art surveillance and monitoring solutions for your premises.',
    icon: '📹',
    features: ['CCTV Systems', 'Remote Monitoring', 'Motion Detection', 'Video Analytics']
  },
  {
    id: 'access-control',
    name: 'Access Control',
    description: 'Secure access management systems for buildings and restricted areas.',
    icon: '🚪',
    features: ['Card Access Systems', 'Biometric Security', 'Visitor Management', 'Audit Trails']
  },
  {
    id: 'emergency-response',
    name: 'Emergency Response',
    description: 'Rapid response teams and emergency protocols for critical situations.',
    icon: '🚨',
    features: ['24/7 Emergency Hotline', 'Rapid Response Teams', 'Crisis Management', 'Recovery Planning']
  },
  {
    id: 'consulting',
    name: 'Security Consulting',
    description: 'Expert security assessment and strategic planning for your organization.',
    icon: '📋',
    features: ['Security Audits', 'Risk Assessment', 'Policy Development', 'Training Programs']
  }
];

export const mockClients: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@techcorp.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Solutions',
    industry: 'Technology',
    services: ['cybersecurity', 'access-control'],
    budget: '$50,000 - $100,000',
    timeline: '3-6 months',
    description: 'We need comprehensive cybersecurity and access control solutions for our new office building. Our company handles sensitive client data and requires top-tier security measures.',
    status: 'pending',
    submittedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@retailchain.com',
    phone: '+1 (555) 234-5678',
    company: 'Retail Chain Inc.',
    industry: 'Retail',
    services: ['physical-security', 'surveillance'],
    budget: '$25,000 - $50,000',
    timeline: '1-3 months',
    description: 'Looking for physical security and surveillance solutions for our retail locations. We\'ve experienced some theft issues and need to improve our security posture.',
    status: 'approved',
    submittedAt: '2024-01-10T14:20:00Z',
    approvedAt: '2024-01-12T09:15:00Z',
    approvedBy: 'admin-1'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@manufacturing.com',
    phone: '+1 (555) 345-6789',
    company: 'Advanced Manufacturing Co.',
    industry: 'Manufacturing',
    services: ['physical-security', 'access-control', 'emergency-response'],
    budget: '$100,000 - $200,000',
    timeline: '6-12 months',
    description: 'Our manufacturing facility requires comprehensive security including physical security, access control, and emergency response capabilities. We operate 24/7 and need robust protection.',
    status: 'pending',
    submittedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@healthcare.org',
    phone: '+1 (555) 456-7890',
    company: 'Metro Healthcare',
    industry: 'Healthcare',
    services: ['cybersecurity', 'consulting'],
    budget: '$75,000 - $150,000',
    timeline: '3-6 months',
    description: 'As a healthcare provider, we need to ensure HIPAA compliance and protect patient data. We\'re looking for cybersecurity solutions and consulting services.',
    status: 'rejected',
    submittedAt: '2024-01-05T11:20:00Z'
  }
];

export const adminUsers: AdminUser[] = [
  {
    id: 'admin-1',
    name: 'David Wilson',
    role: 'admin',
    email: 'david.wilson@securefirm.com'
  },
  {
    id: 'admin-2',
    name: 'Lisa Rodriguez',
    role: 'manager',
    email: 'lisa.rodriguez@securefirm.com'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getClientById = (id: string): Client | undefined => {
  return mockClients.find(client => client.id === id);
}; 