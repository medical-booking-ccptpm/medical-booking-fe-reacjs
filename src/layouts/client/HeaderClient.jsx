import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.svg';
import DarkModeSwitcher from '../../components/DarkModeSwitcher';
import DropdownUser from '../../components/DropdownUser';
import { memo } from 'react';

const HeaderClient = ({ user, setUser }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link className="block flex-shrink-0" to="/">
            <img src={Logo} className="h-10 w-auto" alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <nav className="flex items-center">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to={user ? '/dashboard/order-medical-form' : '/auth/sign-in'}
                  className="font-medium text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                >
                  Đặt khám
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className="font-medium text-gray-700 hover:bg-gray-100 rounded px-4 py-2"
                >
                  Giới thiệu
                </NavLink>
              </li>
            </ul>
          </nav>
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}
          </ul>

          {/* <!-- User Area --> */}

          {user ? (
            <DropdownUser user={user} setUser={setUser} />
          ) : (
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary py-3 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                to="/auth/sign-up"
              >
                Đăng ký
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                to="/auth/sign-in"
              >
                Đăng nhập
              </Link>
            </div>
          )}
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default memo(HeaderClient);
