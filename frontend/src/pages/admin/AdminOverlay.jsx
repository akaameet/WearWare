// AdminOverlay.jsx
import React from 'react';

import AdminSidebar from '../admin/AdminSidebar';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const AdminOverlay = () => (
  <DashboardLayout sidebar={AdminSidebar} title="Admin Dashboard" />
);

export default AdminOverlay;
