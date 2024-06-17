import { lazy } from 'react';

const OrderMedicalForm = lazy(() => import('../pages/OrderMedicalForm'));
const Profile = lazy(() => import('../pages/Profile'));
const HistoryOrder = lazy(() => import('../pages/HistoryOrder'));
const ApproveMedicalForm = lazy(() => import('../pages/ApproveMedicalForm'));
const ManageUsers = lazy(() => import('../pages/ManageUsers'));
const ManageDepartments = lazy(() => import('../pages/ManageDepartments'));
const ManageDoctors = lazy(() => import('../pages/ManageDoctors'));
const ChartOrder = lazy(() => import('../pages/ChartOrder'));
const ManageShifts = lazy(() => import('../pages/ManageShifts'));

const dashboardRoutes = [
  {
    path: '/dashboard/order-medical-form',
    title: 'Đặt lịch khám bệnh',
    component: OrderMedicalForm,
  },
  {
    path: '/dashboard/profile',
    title: 'Thông tin cá nhân',
    component: Profile,
  },
  {
    path: '/dashboard/history-order',
    title: 'Lịch sử khám bệnh',
    component: HistoryOrder,
  },
  {
    path: '/dashboard/approve-medical-form',
    title: 'Phê duyệt đơn khám bệnh',
    component: ApproveMedicalForm,
  },
  {
    path: '/dashboard/chart-order',
    title: 'Thống kê đơn khám bệnh',
    component: ChartOrder,
  },
  {
    path: '/dashboard/manage-users',
    title: 'Quản lý tài khoản',
    component: ManageUsers,
  },
  {
    path: '/dashboard/manage-departments',
    title: 'Quản lý chuyên khoa',
    component: ManageDepartments,
  },
  {
    path: '/dashboard/manage-doctors',
    title: 'Quản lý bác sĩ',
    component: ManageDoctors,
  },
  {
    path: '/dashboard/manage-shifts',
    title: 'Quản lý ca làm việc',
    component: ManageShifts,
  },
];

export default dashboardRoutes;
