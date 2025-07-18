import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye, 
  DollarSign, 
  TrendingUp,
  Filter,
  Search,
  Calendar,
  Building,
  Mail,
} from 'lucide-react';
import { useClients } from '../contexts/ClientContext';
import { getServiceById } from '../utils/mockData';
import type { Client } from '../types';

export const AdminDashboard = () => {
  const { clients, updateClientStatus } = useClients();
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client => {
    const matchesStatus = selectedStatus === 'all' || client.status === selectedStatus;
    const matchesSearch = 
      client.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: clients.length,
    pending: clients.filter(c => c.status === 'pending').length,
    approved: clients.filter(c => c.status === 'approved').length,
    rejected: clients.filter(c => c.status === 'rejected').length
  };

  const handleStatusUpdate = (clientId: string, status: Client['status']) => {
    updateClientStatus(clientId, status, 'admin-1');
  };

  const getStatusBadge = (status: Client['status']) => {
    const config = {
      pending: { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: Clock },
      approved: { color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: CheckCircle },
      rejected: { color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: XCircle }
    };
    
    const { color, icon: Icon } = config[status];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${color}`}>
        <Icon className="w-4 h-4 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-full mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-blue-200">Manage client security requests</p>
              </div>
            </div>
            <Link
              to="/"
              className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
            >
              Back to Form
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium">Total Requests</p>
                <p className="text-3xl font-bold text-white">{stats.total}</p>
              </div>
              <div className="bg-blue-600 p-3 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-200 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-white">{stats.pending}</p>
              </div>
              <div className="bg-yellow-500 p-3 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm font-medium">Approved</p>
                <p className="text-3xl font-bold text-white">{stats.approved}</p>
              </div>
              <div className="bg-green-500 p-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-200 text-sm font-medium">Rejected</p>
                <p className="text-3xl font-bold text-white">{stats.rejected}</p>
              </div>
              <div className="bg-red-500 p-3 rounded-full">
                <XCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-blue-400 mr-2" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as any)}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </div>
        </div>

        {/* Clients Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Services
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-blue-200 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-white">
                          {client.firstName} {client.lastName}
                        </div>
                        <div className="text-sm text-blue-200">{client.email}</div>
                        <div className="text-sm text-blue-300">{client.phone}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 text-blue-400 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-white">{client.company}</div>
                          <div className="text-sm text-blue-200">{client.industry}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {client.services.slice(0, 2).map((serviceId) => {
                          const service = getServiceById(serviceId);
                          return (
                            <span key={serviceId} className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-white">
                              {service?.icon} {service?.name}
                            </span>
                          );
                        })}
                        {client.services.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-white">
                            +{client.services.length - 2} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-sm text-white">{client.budget}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-sm text-white">{formatDate(client.submittedAt)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(client.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/status/${client.id}`}
                          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        
                        {client.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(client.id, 'approved')}
                              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                              title="Approve"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(client.id, 'rejected')}
                              className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-white text-lg">No clients found matching your criteria</p>
              <p className="text-blue-200">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              Send Bulk Email
            </button>
            <button className="flex items-center justify-center p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <TrendingUp className="w-5 h-5 mr-2" />
              Generate Report
            </button>
            <button className="flex items-center justify-center p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Shield className="w-5 h-5 mr-2" />
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 