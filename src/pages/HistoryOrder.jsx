import { useState } from 'react';
import Breadcrumb from '../layouts/admin/Breadcrumb';
import TableHeader from '../layouts/admin/TableHeader';
import Table from '../layouts/admin/Table';
import TableAll from '../components/HistoryOrderTables/TableAll';
import TableNot from '../components/HistoryOrderTables/TableNot';
import TableApprove from '../components/HistoryOrderTables/TableApprove';
import TableUnApprove from '../components/HistoryOrderTables/TableUnApprove';
import DetailOrderModal from '../components/HistoryOrderTables/DetailOrderModal';
import DeletePopup from '../components/HistoryOrderTables/DeletePopup';

const navTitles = ['Tất cả', 'Chưa xét', 'Đủ điều kiện', 'Chưa đủ điều kiện'];

const HistoryOrder = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [isReLoading, setIsReLoading] = useState(false);

  const handleCloseDetailModal = () => {
    setIsOpenDetailModal(false);
  };

  const handleOpenDetailModal = (item) => {
    setSelectedRow(item);
    setIsOpenDetailModal(true);
  };

  const handleOpenDeletePopUp = (item) => {
    setSelectedRow(item);
    setIsOpenDeletePopup(true);
  };

  const handleCloseDeletePopUp = () => {
    setIsOpenDeletePopup(false);
  };

  const handleReLoading = (value) => {
    setIsReLoading(value);
  };

  return (
    <>
      <Breadcrumb pageName="Lịch sử khám bệnh" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <TableHeader
            navTitles={navTitles}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            isCreate={false}
          />
          <Table
            indexTab={0}
            currentTab={currentTab}
            url={`/health-forms/history`}
            tbodyItem={TableAll}
            handleOpenDetailModal={handleOpenDetailModal}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={1}
            currentTab={currentTab}
            url={`/health-forms/history?status=0`}
            tbodyItem={TableNot}
            handleOpenDetailModal={handleOpenDetailModal}
            handleOpenDeletePopUp={handleOpenDeletePopUp}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={2}
            currentTab={currentTab}
            url={`/health-forms/history?status=1`}
            tbodyItem={TableApprove}
            handleOpenDetailModal={handleOpenDetailModal}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={3}
            currentTab={currentTab}
            url={`/health-forms/history?status=2`}
            tbodyItem={TableUnApprove}
            handleOpenDetailModal={handleOpenDetailModal}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
        </div>
      </div>
      <DetailOrderModal
        selectedRow={selectedRow}
        isOpenDetailModal={isOpenDetailModal}
        handleCloseDetailModal={handleCloseDetailModal}
      />
      <DeletePopup
        selectedRow={selectedRow}
        isOpenDeletePopup={isOpenDeletePopup}
        handleCloseDeletePopUp={handleCloseDeletePopUp}
        handleReLoading={handleReLoading}
      />
    </>
  );
};

export default HistoryOrder;
