import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Clock, Mail, ArrowLeft } from 'lucide-react';
import { useClients } from '../contexts/ClientContext';
import { getServiceById } from '../utils/mockData';

export const SuccessPage = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const { getClientById } = useClients();
  const [client, setClient] = useState(getClientById(clientId || ''));

  useEffect(() => {
    if (clientId) {
      const foundClient = getClientById(clientId);
      setClient(foundClient);
    }
  }, [clientId, getClientById]);

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Client Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SecureFirm</h1>
                <p className="text-sm text-gray-600">Request Submitted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for choosing our security services. We've received your request and will review it shortly.
            </p>
          </div>

          {/* Client Details */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              Request Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                <p className="text-gray-900 mb-1">{client.firstName} {client.lastName}</p>
                <p className="text-gray-600 mb-1">{client.email}</p>
                <p className="text-gray-600">{client.phone}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Company Details</h3>
                <p className="text-gray-900 mb-1">{client.company}</p>
                <p className="text-gray-600">{client.industry}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Services Requested</h3>
                <div className="space-y-1">
                  {client.services.map((serviceId) => {
                    const service = getServiceById(serviceId);
                    return (
                      <div key={serviceId} className="flex items-center">
                        <span className="mr-2">{service?.icon}</span>
                        <span className="text-gray-900">{service?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Project Details</h3>
                <p className="text-gray-900 mb-1">Budget: {client.budget}</p>
                <p className="text-gray-600">Timeline: {client.timeline}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-2">Project Description</h3>
              <p className="text-gray-900 text-left bg-gray-50 p-4 rounded-lg">
                {client.description}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Happens Next?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Review Process</h3>
                  <p className="text-gray-600">
                    Our security experts will review your request within 24-48 hours. We'll assess your needs and create a customized security plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                  <p className="text-gray-600">
                    You'll receive an email confirmation and updates on your request status. Our team may reach out for additional information if needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Proposal & Implementation</h3>
                  <p className="text-gray-600">
                    Once approved, you'll receive a detailed proposal with timelines, costs, and implementation plan tailored to your security needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/form"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Submit Another Request
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <a
              href="mailto:support@securefirm.com"
              className="px-8 py-4 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              Contact Support
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Reference Number */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Reference Number:</span> {client.id}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Please keep this number for future reference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 