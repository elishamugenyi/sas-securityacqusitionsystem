# SecureFirm - Security Services Client Acquisition System

A modern, responsive web application for managing security service requests from clients. Built with React, TypeScript, and Tailwind CSS.

## Features

### 🏢 Client Acquisition Form
- Comprehensive security services request form
- Multiple service types (Physical Security, Cybersecurity, Surveillance, etc.)
- Company and contact information collection
- Budget and timeline selection
- Project description and requirements

### ✅ Success & Status Pages
- **Success Page**: Confirmation after form submission with request summary
- **Approval Status Page**: Real-time status updates with congratulations for approved requests
- Reference number tracking for all submissions

### 👨‍💼 Admin Dashboard
- Complete client management interface
- Real-time statistics and metrics
- Filter and search functionality
- Approve/reject client requests
- View detailed client information
- Mock data for demonstration

### 🎨 Modern UI/UX
- Beautiful gradient backgrounds and glass morphism effects
- Responsive design for all devices
- Smooth animations and transitions
- Professional security-themed styling
- Intuitive navigation and user flow

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Main application pages
│   ├── LandingPage.tsx     # Homepage with services overview
│   ├── ClientForm.tsx      # Client acquisition form
│   ├── SuccessPage.tsx     # Success confirmation page
│   ├── ApprovalStatus.tsx  # Status tracking page
│   └── AdminDashboard.tsx  # Admin management interface
├── hooks/              # Custom React hooks
│   └── useClients.ts       # Client data management
├── types/              # TypeScript type definitions
│   └── index.ts            # Application interfaces
├── utils/              # Utility functions and data
│   └── mockData.ts         # Mock data for demonstration
└── assets/             # Static assets
```

## Getting Started

### Prerequisites
- Node.js (v20.17.0 or higher)
- npm (v10.9.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sas-securityacqusitionsystem
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Application Flow

### Client Journey
1. **Landing Page** (`/`) - Learn about services and company
2. **Client Form** (`/form`) - Submit security service request
3. **Success Page** (`/success/:clientId`) - Confirmation and next steps
4. **Status Page** (`/status/:clientId`) - Track approval status

### Admin Journey
1. **Admin Dashboard** (`/admin`) - Manage all client requests
2. Review pending applications
3. Approve or reject requests
4. View detailed client information
5. Monitor statistics and metrics

## Mock Data

The application includes realistic mock data for demonstration:

- **4 Sample Clients** with different statuses (pending, approved, rejected)
- **6 Security Services** with detailed descriptions and features
- **2 Admin Users** for role management

### Sample Client Data
- John Smith (TechCorp Solutions) - Pending
- Sarah Johnson (Retail Chain Inc.) - Approved
- Michael Chen (Advanced Manufacturing Co.) - Pending
- Emily Davis (Metro Healthcare) - Rejected

## Security Services Offered

1. **Physical Security** - Guards, patrols, facility protection
2. **Cybersecurity** - Network security, data protection
3. **Surveillance Systems** - CCTV, remote monitoring
4. **Access Control** - Card systems, biometric security
5. **Emergency Response** - 24/7 emergency services
6. **Security Consulting** - Audits, risk assessment

## Features in Detail

### Client Form Features
- Multi-step form with validation
- Service selection with visual indicators
- Budget and timeline options
- Rich text description field
- Form submission with loading states

### Admin Dashboard Features
- Real-time client statistics
- Advanced filtering and search
- Bulk actions and quick operations
- Detailed client information view
- Status management with approval/rejection

### Status Tracking
- Real-time status updates
- Congratulations messages for approved requests
- Detailed next steps information
- Contact information for support

## Styling & Design

The application uses a modern, professional design with:

- **Color Scheme**: Blue and slate gradients for security theme
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Responsive Design**: Works perfectly on all device sizes
- **Accessibility**: Proper focus states and semantic HTML

## Future Enhancements

- User authentication and authorization
- Email notifications
- File upload capabilities
- Advanced reporting and analytics
- Integration with CRM systems
- Multi-language support
- Mobile app development

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: support@securefirm.com
- Phone: 1-800-SECURE

---

**SecureFirm** - Protecting what matters most.
