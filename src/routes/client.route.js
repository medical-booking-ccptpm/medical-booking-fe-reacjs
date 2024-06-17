import { lazy } from 'react';

const AboutUs = lazy(() => import('../pages/AboutUs'));

const clientRoutes = [
  {
    path: '/about-us',
    title: 'Giới thiệu',
    component: AboutUs,
  },
];

export default clientRoutes;
