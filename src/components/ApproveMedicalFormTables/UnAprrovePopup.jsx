import { useRef, useState } from 'react';
import loggerError from '../../utils/loggerError';

const UnApprovePopup = ({
  selectedRow,
  isOpenUnApprovePopup,
  handleCloseUnApprovePopUp,
  handleReLoading,
}) => {
  const [deniedReason, setDeniedReason] = useState('');
  const noteRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + `/health-forms/status/${selectedRow.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('token')),
          },
          body: JSON.stringify({ status: 2, deniedReason }),
        },
      );
      const result = await response.json();
      if (result.code === 200) {
        handleReLoading(true);
        handleCloseUnApprovePopUp();
        setDeniedReason('');
        noteRef.current.value = '';
        alert(result.message);
      } else {
        loggerError(result);
      }
    } catch (err) {
      loggerError(err);
    }
  };

  return (
    <div
      className={
        `modal fixed inset-0 z-99999 w-full h-full bg-black bg-opacity-60 overflow-y-auto transition-all duration-1000 ease-in-out dark:bg-white dark:bg-opacity-30  ` +
        (isOpenUnApprovePopup === true ? 'show' : '')
      }
    >
      <div className="relative max-w-lg mt-40 mx-auto">
        <div className="relative flex flex-col bg-white rounded-lg shadow dark:bg-boxdark">
          <div className="p-4 border-b border-[#eee] dark:border-strokedark">
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <div className="text-warning flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-30 h-30"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <h1 className="my-5 text-title-lg font-bold text-black dark:text-white">
                  Bạn có chắc chắn
                </h1>
                <p className="mb-3 text-lg">
                  Muốn KHÔNG CHẤP NHẬN đơn khám bệnh này
                </p>
                <div className="px-10">
                  <textarea
                    rows={3}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="Nhập lý do từ chối"
                    onChange={(e) => setDeniedReason(e.target.value)}
                    ref={noteRef}
                  ></textarea>
                </div>
                <div className="flex justify-center gap-4 p-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-primary py-3 px-5 text-center font-medium text-primary hover:bg-opacity-90"
                    onClick={() => {
                      handleCloseUnApprovePopUp();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                    THOÁT
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-danger py-3 px-5 text-center font-medium text-white hover:bg-opacity-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    KHÔNG CHẤP NHẬN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnApprovePopup;
