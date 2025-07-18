import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, Shield, ArrowLeft, Mail, Phone } from 'lucide-react';
import { useClients } from '../contexts/ClientContext';
import { getServiceById } from '../utils/mockData';

export const ApprovalStatus = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { getClientById } = useClients();
  const [client, setClient] = useState(getClientById(clientId || ''));

  useEffect(() => {
    if (clientId) {
      setClient(getClientById(clientId));
    }
  }, [clientId, getClientById]);

  if (!client) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Client Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = () => {
    switch (client.status) {
      case 'approved':
        return <CheckCircle className="w-16 h-16 text-green-400" />;
      case 'rejected':
        return <XCircle className="w-16 h-16 text-red-400" />;
      default:
        return <Clock className="w-16 h-16 text-yellow-400" />;
    }
  };

  const getStatusColor = () => {
    switch (client.status) {
      case 'approved':
        return 'text-green-400';
      case 'rejected':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  const getStatusMessage = () => {
    switch (client.status) {
      case 'approved':
        return {
          title: 'Congratulations! Your Request Has Been Approved!',
          subtitle: 'We\'re excited to work with you on your security needs.',
          description: 'Your security proposal is ready and our team will contact you within 24 hours to discuss next steps and begin implementation planning.'
        };
      case 'rejected':
        return {
          title: 'Application Status Update',
          subtitle: 'We regret to inform you that your request has not been approved at this time.',
          description: 'Our team will reach out to discuss alternative solutions or address any concerns. Please don\'t hesitate to contact us for clarification.'
        };
      default:
        return {
          title: 'Application Under Review',
          subtitle: 'Your security request is currently being reviewed by our expert team.',
          description: 'We typically complete reviews within 24-48 hours. You\'ll receive an email notification once a decision has been made.'
        };
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Status Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-6 rounded-full border border-white/20">
                {getStatusIcon()}
              </div>
            </div>
            <h1 className={`text-4xl font-bold mb-4 ${getStatusColor()}`}>
              {statusMessage.title}
            </h1>
            <p className="text-xl text-blue-200 mb-4">
              {statusMessage.subtitle}
            </p>
            <p className="text-lg text-blue-300">
              {statusMessage.description}
            </p>
          </div>

          {/* Client Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-400" />
              Application Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-300 mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-white">
                    <span className="font-medium">Name:</span> {client.firstName} {client.lastName}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Email:</span> {client.email}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Phone:</span> {client.phone}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-300 mb-4">Company Information</h3>
                <div className="space-y-2">
                  <p className="text-white">
                    <span className="font-medium">Company:</span> {client.company}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Industry:</span> {client.industry}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Budget:</span> {client.budget}
                  </p>
                  <p className="text-blue-200">
                    <span className="font-medium">Timeline:</span> {client.timeline}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-blue-300 mb-3">Requested Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {client.services.map((serviceId) => {
                  const service = getServiceById(serviceId);
                  return (
                    <div key={serviceId} className="flex items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-2xl mr-3">{service?.icon}</span>
                      <div>
                        <p className="text-white font-medium">{service?.name}</p>
                        <p className="text-sm text-blue-200">{service?.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Status Specific Content */}
          {client.status === 'approved' && (
            <div className="bg-green-500/10 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 mb-8">
              <h2 className="text-2xl font-semibold text-green-400 mb-6">Next Steps</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Initial Consultation</h3>
                    <p className="text-green-200">
                      Our security specialist will contact you within 24 hours to schedule a detailed consultation and site assessment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Custom Security Plan</h3>
                    <p className="text-green-200">
                      We'll develop a comprehensive security plan tailored to your specific needs and requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Implementation</h3>
                    <p className="text-green-200">
                      Once the plan is finalized, we'll begin implementation according to your timeline and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {client.status === 'pending' && (
            <div className="bg-yellow-500/10 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/20 mb-8">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">What We're Reviewing</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-yellow-200">Security requirements and scope</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-yellow-200">Technical feasibility assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-yellow-200">Resource allocation and timeline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-yellow-200">Compliance and regulatory requirements</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Need Help?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-blue-200 mb-3">Get in touch via email</p>
                <a
                  href="mailto:support@securefirm.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  support@securefirm.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-lg">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-blue-200 mb-3">Call us directly</p>
                <a
                  href="tel:+1-800-SECURE"
                  className="text-blue-400 hover:text-blue-300"
                >
                  1-800-SECURE
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Submit New Request
              <ArrowLeft className="w-4 h-4 ml-2" />
            </Link>
            
            <a
              href="mailto:support@securefirm.com"
              className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              Contact Support
              <Mail className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Reference Number */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg text-center">
            <p className="text-blue-200">
              <span className="font-semibold">Reference Number:</span> {client.id}
            </p>
            <p className="text-sm text-blue-300 mt-1">
              Please reference this number when contacting support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 