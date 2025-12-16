// MemberOverlay.jsx
import React from 'react';

import MemberSidebar from '../user/MemberSideBar';
import DashboardLayout from '../../components/Layout/DashboardLayout';

const MemberOverlay = () => (
  <DashboardLayout sidebar={MemberSidebar} title="Member Dashboard" />
);

export default MemberOverlay;
