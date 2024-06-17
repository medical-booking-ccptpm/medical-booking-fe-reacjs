import { Outlet } from 'react-router-dom';
import HeaderClient from '../layouts/client/HeaderClient';
import FooterClient from '../layouts/client/FooterClient';

const Client = ({ user, setUser }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <HeaderClient user={user} setUser={setUser} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="pb-4 md:pb-6 2xl:pb-10">
              <Outlet user={user} />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Header Start ===== --> */}
          <FooterClient />
          {/* <!-- ===== Header End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default Client;
