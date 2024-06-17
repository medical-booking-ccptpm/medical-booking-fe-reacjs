import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  const departments = [];
  const doctors = [];

  return (
    <div>
      <div
        className="relative flex flex-col w-full h-[600px] bg-cover bg-no-repeat bg-bottom"
        style={{
          backgroundImage:
            'url(https://cdn-pkh.longvan.net/prod-partner/877df3a6-926a-4146-8123-936a79e1eaa7-background_banner.webp)',
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-[#11a2f3] text-3xl font-roboto font-normal mb-2">
            Nền tảng công nghệ
          </div>
          <div className="text-4xl leading-normal">
            <span className="text-[#003553] font-bold">
              Kết nối người dân với Cơ sở - Dịch vụ Y tế
            </span>
          </div>
          <div className="mb-4">
            <Link to={user ? '/dashboard/order-medical-form' : '/auth/sign-in'}>
              <button className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                Đăng kí khám ngay
              </button>
            </Link>
          </div>
          <div className="text-[#003553] text-xl font-roboto font-normal leading-6">
            Đặt khám nhanh - Lấy số thứ tự trực tuyến
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
