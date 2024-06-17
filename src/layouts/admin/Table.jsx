import { memo, useEffect, useState } from 'react';
import TableFooter from './TableFooter';

import loggerError from '../../utils/loggerError';

const Table = ({
  indexTab,
  currentTab,
  url,
  limitPage = 10,
  tbodyItem: TbodyTable,
  handleOpenDetailModal,
  handleOpenUpdateModal,
  handleOpenDeletePopUp,
  handleOpenApprovePopUp,
  handleOpenUnApprovePopUp,
  handleSelect,
  isReLoading,
  handleReLoading,
  handleOpenPopUp,
}) => {
  const [tbodyData, setTbodyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const updateData = (data) => {
    setTbodyData(data.items);
    setLimit(data.limit);
    setTotalResults(data.totalResults);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newURL =
        import.meta.env.VITE_API_URL +
        url +
        `${
          url?.includes('?') ? '&' : '?'
        }page=${currentPage}&limit=${limitPage}`;

      setIsLoading(true);

      try {
        const response = await fetch(newURL, {
          headers: {
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('token')),
          },
        });
        const result = await response.json();

        if (result.code === 200) {
          updateData(result.data);
        } else {
          loggerError(result);
        }
      } catch (error) {
        loggerError(error);
      } finally {
        setIsLoading(false);
        handleReLoading(false);
      }
    };

    fetchData();
  }, [url, currentPage, isReLoading]);

  return (
    <div
      className={
        'max-w-full overflow-x-auto ' +
        (indexTab === currentTab ? 'block' : 'hidden')
      }
    >
      {isLoading ? (
        <div className="relative rounded-xl overflow-auto">
          <div className="flex items-center justify-center">
            <button className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm transition ease-in-out duration-150 cursor-not-allowed">
              Processing...
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-full overflow-x-auto">
          <TbodyTable
            baseIndex={Math.min((currentPage - 1) * limit + 1, totalResults)}
            tbodyData={tbodyData}
            handleOpenDetailModal={handleOpenDetailModal}
            handleOpenUpdateModal={handleOpenUpdateModal}
            handleOpenDeletePopUp={handleOpenDeletePopUp}
            handleOpenApprovePopUp={handleOpenApprovePopUp}
            handleOpenUnApprovePopUp={handleOpenUnApprovePopUp}
            handleSelect={handleSelect}
            handleOpenPopUp={handleOpenPopUp}
          />
        </div>
      )}
      <TableFooter
        currentPage={currentPage}
        limit={limit}
        totalResults={totalResults}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default memo(Table);
