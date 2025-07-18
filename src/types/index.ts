export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  services: ServiceType[];
  budget: string;
  timeline: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  approvedAt?: string;
  approvedBy?: string;
}

export type ServiceType = 
  | 'physical-security'
  | 'cybersecurity'
  | 'surveillance'
  | 'access-control'
  | 'emergency-response'
  | 'consulting';

export interface Service {
  id: ServiceType;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface AdminUser {
  id: string;
  name: string;
  role: 'admin' | 'manager';
  email: string;
} 