import { useState } from 'react';
import { format } from 'date-fns';
import Breadcrumb from '../layouts/admin/Breadcrumb';
import { Link } from 'react-router-dom';
import loggerError from '../utils/loggerError';

const handleConvertUser = (user) => ({
  fullName: user.fullName || '',
  gender: user.gender || '',
  dateOfBirth: user.dateOfBirth || '',
  address: user.address || '',
  phoneNumber: user.phoneNumber || '',
  avatar: user.avatar || '',
});

const Profile = ({ user, setUser }) => {
  const [userInfo, setUserInfo] = useState(handleConvertUser(user));
  const [avatarUpdate, setAvatarUpdate] = useState({});

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { avatar, ...remainingUserInfo } = userInfo;

      const formData = new FormData();
      for (let key in remainingUserInfo) {
        formData.append(key, remainingUserInfo[key]);
      }

      if (JSON.stringify(avatarUpdate) !== '{}') {
        formData.append('avatar', avatarUpdate.file);
      }

      const response = await fetch(
        import.meta.env.VITE_API_URL + '/users/profile',
        {
          method: 'PUT',
          headers: {
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('token')),
          },
          body: formData,
        },
      );
      const result = await response.json();
      if (result.code === 200) {
        setUser(result.data);
        setUserInfo(handleConvertUser(result.data));
        alert(result.message);
      } else {
        loggerError(result);
      }
    } catch (err) {
      loggerError(err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Thông tin cá nhân" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Thông tin chi tiết cá nhân
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Họ và tên <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        name="fullName"
                        value={userInfo.fullName || ''}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Giới tính <span className="text-meta-1">*</span>
                      </label>
                      <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select
                          className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          defaultValue={userInfo.gender || 'OTHER'}
                          name="gender"
                          onChange={handleChange}
                          required
                        >
                          <option value={'MALE'}>Nam</option>
                          <option value={'FEMALE'}>Nữ</option>
                          <option value={'OTHER'}>Khác</option>
                        </select>
                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                          <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Ngày sinh <span className="text-meta-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          value={
                            userInfo.dateOfBirth &&
                            format(new Date(userInfo.dateOfBirth), 'yyyy-MM-dd')
                          }
                          name="dateOfBirth"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded border-[1.5px] border-stroke bg-gray py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        value={user.email || ''}
                        readOnly
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        value={userInfo.phoneNumber}
                        name="phoneNumber"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full">
                      <label className="mb-2.5 block text-sm font-medium text-black dark:text-white">
                        Địa chỉ hiện tại <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        value={userInfo.address || ''}
                        name="address"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    <Link
                      to="/dashboard"
                      className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                      Quay lại
                    </Link>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                      Cập nhật thông tin
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Ảnh đại diện
                </h3>
              </div>
              <div className="p-7">
                <div className="mb-7">
                  <input
                    type="file"
                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    name="avatar"
                    onChange={(e) =>
                      setAvatarUpdate({ file: e.target.files[0] })
                    }
                  />
                </div>
                <img src={userInfo.avatar} alt="Avatar" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
