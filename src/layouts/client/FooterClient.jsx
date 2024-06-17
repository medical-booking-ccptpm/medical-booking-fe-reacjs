import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import FaceBook from '../../assets/images/icon/facebook.svg';
import Youtube from '../../assets/images/icon/youtube.svg';
import Linkedin from '../../assets/images/icon/linkedin.svg';
import Zalo from '../../assets/images/icon/zalo.svg';
import RegisterIcon from '../../assets/images/icon/dadangky.svg';

const FooterClient = () => {
  return (
    <footer className="flex items-top justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div className="w-2/5">
        <h4 className="text-lg font-bold">CÔNG TY TNHH YOUMED VIỆT NAM</h4>
        <span className="font-semibold">VPĐD:</span>
        <p className="leading-8 text-base">
          523 Tô Hiến Thành, P.14, Q.10, TP. HCM
        </p>
        <span className="font-semibold">Hotline: </span>
        <p className="leading-8 text-base">
          1900-2805 (8:30 - 20:30 từ T2 đến T7)
        </p>
        <p className="leading-8 text-base">
          Số ĐKKD 0315268642 do Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh cấp lần
          đầu ngày 14/09/2018.
        </p>
        <p className="leading-8 text-base">
          Chịu trách nhiệm nội dung: Dược sĩ Dương Anh Hoàng.
        </p>
      </div>
      <div className="w-1/5">
        <h4 className="text-lg font-bold">Hỗ trợ</h4>
        <ul className="list-none">
          <li className="mt-3">
            <Link to="#" className="leading-8 text-base">
              Điều khoản sử dụng
            </Link>
          </li>
          <li className="mt-3">
            <Link to="#" className="leading-8 text-base">
              Chính sách Bảo Mật
            </Link>
          </li>
          <li className="mt-3">
            <Link to="#" className="leading-8 text-base">
              Chính sách giải quyết khiếu nại
            </Link>
          </li>
          <li className="mt-3">
            <Link to="#" className="leading-8 text-base">
              Hỗ trợ khách hàng: cskh@youmed.vn
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-1/5">
        <div className="contact-sociable">
          <h4 className="text-lg font-bold">Kết nối với chúng tôi</h4>
          <ul className="sociable-list list-none flex space-x-4 mt-3">
            <li>
              <Link
                to="#"
                className="text-2xl text-gray-400 hover:text-blue-500 hover:animate-bounce"
              >
                <img src={FaceBook} className="h-10 w-auto" alt="FaceBook" />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-2xl text-gray-400 hover:text-blue-500 hover:animate-bounce"
              >
                <img src={Youtube} className="h-10 w-auto" alt="Youtube" />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-2xl text-gray-400 hover:text-blue-500 hover:animate-bounce"
              >
                <img src={Linkedin} className="h-10 w-auto" alt="Linkedin" />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-2xl text-gray-400 hover:text-blue-500 hover:animate-bounce"
              >
                <img src={Zalo} className="h-8 w-auto" alt="Zalo" />
              </Link>
            </li>
          </ul>
          <div className="contact_cpr flex mt-4">
            <img src={RegisterIcon} className="h-auto w-50" alt="Đã đăng ký" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(FooterClient);
