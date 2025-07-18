import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight, Users, Star } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SecureFirm</h1>
                <p className="text-sm text-gray-600">Professional Security Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/admin"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your Business
              <span className="text-blue-600"> Today</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive security solutions that protect your organization's assets, 
              data, and people. Trusted by 500+ businesses nationwide.
            </p>
            
            {/* Main CTA */}
            <div className="mb-12">
            <Link
                to="/form"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-95"
            >
                Get Your Free Security Assessment
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm">No Obligation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Protected Businesses</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From physical security to cybersecurity, we provide end-to-end protection for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Security</h3>
              <p className="text-gray-600">24/7 guards, patrols, and facility protection</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Advanced digital protection and threat monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">📹</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Surveillance</h3>
              <p className="text-gray-600">State-of-the-art monitoring and CCTV systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Access Control</h3>
              <p className="text-gray-600">Secure entry systems and visitor management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600">Rapid response teams and crisis management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Consulting</h3>
              <p className="text-gray-600">Expert assessment and strategic planning</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started today with a free security assessment. Our experts will create a customized protection plan for your organization.
          </p>
          <Link
            to="/form"
            className="inline-flex items-center px-10 py-5 bg-white text-blue-600 text-xl font-bold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Start Your Free Assessment
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
          <p className="text-blue-200 mt-4 text-sm">No commitment required • Free consultation</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">SecureFirm</h3>
              </div>
              <p className="text-gray-400">
                Protecting what matters most since 2009.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Physical Security</li>
                <li>Cybersecurity</li>
                <li>Surveillance Systems</li>
                <li>Access Control</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@securefirm.com</li>
                <li>256-782-323-232</li>
                <li>24/7 Emergency: 256-782-323-232</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SecureFirm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 