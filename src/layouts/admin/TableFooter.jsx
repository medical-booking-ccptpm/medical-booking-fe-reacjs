import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const TableFooter = ({ currentPage, limit, totalResults, setCurrentPage }) => {
  const next = () => {
    if (currentPage === Math.ceil(totalResults / limit)) return;

    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  const generateNumberPage = (totalResults) => {
    const pages = Math.ceil(totalResults / limit) || 0;
    let arr = [];
    if (pages <= 7) {
      for (let i = 1; i <= pages; i++) {
        if (i === currentPage) {
          arr.push(
            <button
              key={i}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {currentPage}
            </button>,
          );
        } else {
          arr.push(
            <button
              key={i}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </button>,
          );
        }
      }
    } else {
      switch (currentPage) {
        case 1:
          arr.push(
            <button
              key={0}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>,
          );
          arr.push(
            <button
              key={2}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
          break;
        case 2:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              2
            </button>,
          );
          arr.push(
            <button
              key={2}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>,
          );
          arr.push(
            <button
              key={3}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
          break;
        case 3:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>,
          );
          arr.push(
            <button
              key={2}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              3
            </button>,
          );
          arr.push(
            <button
              key={3}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(4)}
            >
              4
            </button>,
          );
          arr.push(
            <button
              key={4}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
          break;
        case pages - 2:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages - 3}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages - 3)}
            >
              {pages - 3}
            </button>,
          );
          arr.push(
            <button
              key={pages - 2}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600x"
            >
              {pages - 2}
            </button>,
          );
          arr.push(
            <button
              key={pages - 1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages - 1)}
            >
              {pages - 1}
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
          break;
        case pages - 1:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages - 2}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages - 2)}
            >
              {pages - 2}
            </button>,
          );
          arr.push(
            <button
              key={pages - 1}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600x"
            >
              {pages - 1}
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
          break;
        case pages:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages - 1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages - 1)}
            >
              {pages - 1}
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600x"
            >
              {pages}
            </button>,
          );
          break;
        default:
          arr.push(
            <button
              key={0}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>,
          );
          arr.push(
            <button
              key={1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={currentPage - 1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {currentPage - 1}
            </button>,
          );
          arr.push(
            <button
              key={currentPage}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600x"
            >
              {currentPage}
            </button>,
          );
          arr.push(
            <button
              key={currentPage + 1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {currentPage + 1}
            </button>,
          );
          arr.push(
            <button
              key={pages - 1}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              ...
            </button>,
          );
          arr.push(
            <button
              key={pages}
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              onClick={() => setCurrentPage(pages)}
            >
              {pages}
            </button>,
          );
      }
    }
    return arr;
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Trước
        </Link>
        <Link
          to="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Sau
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Hiển thị từ{' '}
            <span className="font-medium">
              {Math.min((currentPage - 1) * limit + 1, totalResults)}
            </span>{' '}
            đến{' '}
            <span className="font-medium">
              {Math.min(currentPage * limit, totalResults)}
            </span>{' '}
            trong tổng số <span className="font-medium">{totalResults}</span>
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-25 disabled:shadow-none disabled:pointer-events-none"
              onClick={prev}
              disabled={currentPage <= 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {generateNumberPage(totalResults)}
            <button
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-25 disabled:shadow-none disabled:pointer-events-none"
              onClick={next}
              disabled={currentPage >= Math.ceil(totalResults / limit)}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default memo(TableFooter);
