import { createBrowserRouter } from 'react-router-dom';

import AppLayout from './components/AppLayout/index.jsx';
import ListGarage from './components/Garage/List/ListGarage';
import OwnerList from './components/Owner/List/List.jsx';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import FromUser from './pages/FormUser.jsx';

import EditOwner from './components/Owner/Edit/Edit.jsx';
import CreateService from './components/Service/Create/Create.jsx';
import EditService from './components/Service/Edit/Edit.jsx';
import DetailService from './components/Service/Detail/Detail.jsx';
import CreateOwner from './components/Owner/Create/Create.jsx';
import DetailOwner from './components/Owner/Detail/Detail.jsx';
import EditGarage from './components/Garage/Creater/EditGarage';
import ChangePass from './components/Profile/ChangePass';
import MyProfile from './components/Profile/MyProfile';
import ServiceList from './components/Service/List/List.jsx';
import RequireAuth from './components/AuthCheckPoint/index.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/user',
        element: <FromUser />,
      },
      {
        path: '/owner',
        element: <OwnerList />,
      },
      {
        path: '/editowner/:id',
        element: <EditOwner />,
      },
      {
        path: '/createowner',
        element: <CreateOwner />,
      },
      {
        path: '/owner/:id',
        element: <DetailOwner />,
      },
      {
        path: '/createservice',
        element: <CreateService />,
      },
      {
        path: '/editservice/:id',
        element: <EditService />,
      },
      {
        path: '/detailservice',
        element: <DetailService />,
      },
      {
        path: '/services',
        element: <ServiceList />,
      },
      {
        path: '/garage',
        element: <ListGarage />,
      },

      {
        path: '/edit',
        element: <EditGarage />,
      },
      {
        path: '/change',
        element: <ChangePass />,
      },
      {
        path: '/mypo',
        element: <MyProfile />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
  },
]);
export { router };
