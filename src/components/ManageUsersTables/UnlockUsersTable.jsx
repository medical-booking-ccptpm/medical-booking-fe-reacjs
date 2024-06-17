import { format } from 'date-fns';

const theadData = [
  {
    title: 'STT',
    width: '4%',
  },
  {
    title: 'Họ tên',
    width: '*',
  },
  {
    title: 'Giới tính',
    width: '8%',
  },
  {
    title: 'Ngày sinh',
    width: '12%',
  },
  {
    title: 'Liên hệ',
    width: '20%',
  },
  {
    title: 'Địa chỉ',
    width: '20%',
  },
  {
    title: 'Chức năng',
    width: '8%',
  },
];

const genderToText = {
  MALE: 'Nam',
  FEMALE: 'Nữ',
  OTHER: 'Khác',
};

const UnlockUsersTable = ({
  baseIndex,
  tbodyData,
  handleOpenUpdateModal,
  handleOpenPopUp,
}) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-2 text-left dark:bg-meta-4">
          {theadData?.map((item, index) => (
            <th
              key={index}
              className="border-r-2 border-white dark:border-boxdark py-4 px-4 font-medium text-black dark:text-white"
              style={{ width: `${item.width}` }}
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbodyData &&
          tbodyData.map((item, index) => (
            <tr key={index}>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <h5 className="font-medium text-black dark:text-white">
                  {baseIndex + index}
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.fullName}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {genderToText[item.gender]}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {item.dateOfBirth &&
                    format(new Date(item.dateOfBirth), 'yyyy-MM-dd')}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                {item.email && (
                  <p className="text-black dark:text-white">{item.email}</p>
                )}
                {item.phoneNumber && (
                  <p className="text-black dark:text-white">
                    {item.phoneNumber}
                  </p>
                )}
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.address}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center justify-center space-x-3.5">
                  <button
                    className="first-letter:hover:text-primary"
                    onClick={() => {
                      handleOpenUpdateModal(item);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    className="first-letter:hover:text-primary"
                    onClick={() => {
                      handleOpenPopUp(item, 'lock');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UnlockUsersTable;
