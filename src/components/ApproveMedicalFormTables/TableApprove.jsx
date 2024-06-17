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
    title: 'Chuyên khoa',
    width: '20%',
  },
  {
    title: 'Bác sĩ',
    width: '20%',
  },
  {
    title: 'Ngày khám',
    width: '12%',
  },
  {
    title: 'Ca khám',
    width: '12%',
  },
  {
    title: 'Số thứ tự',
    width: '8%',
  },
  {
    title: 'Chức năng',
    width: '8%',
  },
];

const TableApprove = ({ tbodyData, handleOpenDetailModal }) => {
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
                  {index + 1}
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.namePatient}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {item.shift?.doctor?.department?.name || ''}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {item.shift?.doctor?.name || ''}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.shift?.date}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.shift?.time}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">
                  {item.acceptedNumber}
                </p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center justify-center space-x-3.5">
                  <button
                    className="hover:text-primary"
                    onClick={() => handleOpenDetailModal(item)}
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
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

export default TableApprove;
