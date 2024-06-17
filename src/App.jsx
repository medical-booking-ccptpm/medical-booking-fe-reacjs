import { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Client from './pages/Client';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import Loader from './layouts/admin/Loader';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import clientRoutes from './routes/client.route';
import dashboardRoutes from './routes/dashboard.route';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Client user={user} setUser={setUser} />}>
          <Route index element={<Home user={user} setUser={setUser} />} />
          {clientRoutes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component user={user} setUser={setUser} />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
        <Route
          path="/auth/sign-in"
          element={<SignIn setUser={setUser} setIsLoading={setIsLoading} />}
        />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<Dashboard user={user} setUser={setUser} />}
        >
          <Route index element={<Welcome user={user} setUser={setUser} />} />
          {dashboardRoutes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component user={user} setUser={setUser} />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
