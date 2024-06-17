import { format } from 'date-fns';

const theadData = [
  {
    title: 'STT',
    width: '4%',
  },
  {
    title: 'Hình ảnh',
    width: '12%',
  },
  {
    title: 'Tên chuyên khoa',
    width: '*',
  },
  {
    title: 'Mô tả',
    width: '25%',
  },
  {
    title: 'Trưởng khoa',
    width: '20%',
  },
  {
    title: 'Chức năng',
    width: '12%',
  },
];

const AllDepartmentsTable = ({
  baseIndex,
  tbodyData,
  handleOpenUpdateModal,
  handleOpenDeletePopUp,
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
                <img src={item.image} className="px-4" />
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.name}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.description}</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-black dark:text-white">{item.nameLeader}</p>
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
                      handleOpenDeletePopUp(item);
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
                        d="M6 18 18 6M6 6l12 12"
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

export default AllDepartmentsTable;
