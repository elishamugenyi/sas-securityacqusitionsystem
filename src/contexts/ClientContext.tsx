import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Client } from '../types';
import { mockClients } from '../utils/mockData';

interface ClientContextType {
  clients: Client[];
  addClient: (newClient: Omit<Client, 'id' | 'status' | 'submittedAt'>) => Client;
  updateClientStatus: (clientId: string, status: Client['status'], approvedBy?: string) => void;
  getClientById: (id: string) => Client | undefined;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clients, setClients] = useState<Client[]>(mockClients);

  const addClient = useCallback((newClient: Omit<Client, 'id' | 'status' | 'submittedAt'>) => {
    const client: Client = {
      ...newClient,
      id: Date.now().toString(),
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    setClients(prev => [client, ...prev]);
    return client;
  }, []);

  const updateClientStatus = useCallback((clientId: string, status: Client['status'], approvedBy?: string) => {
    setClients(prev => prev.map(client => 
      client.id === clientId 
        ? { 
            ...client, 
            status, 
            approvedAt: status === 'approved' ? new Date().toISOString() : undefined,
            approvedBy: status === 'approved' ? approvedBy : undefined
          }
        : client
    ));
  }, []);

  const getClientById = useCallback((id: string) => {
    return clients.find(client => client.id === id);
  }, [clients]);

  return (
    <ClientContext.Provider value={{
      clients,
      addClient,
      updateClientStatus,
      getClientById
    }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClients must be used within a ClientProvider');
  }
  return context;
}; 