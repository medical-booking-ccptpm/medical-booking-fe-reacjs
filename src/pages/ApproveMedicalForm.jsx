import { useState } from 'react';
import Breadcrumb from '../layouts/admin/Breadcrumb';
import TableHeader from '../layouts/admin/TableHeader';
import Table from '../layouts/admin/Table';
import TableAll from '../components/ApproveMedicalFormTables/TableAll';
import TableNot from '../components/ApproveMedicalFormTables/TableNot';
import TableApprove from '../components/ApproveMedicalFormTables/TableApprove';
import TableUnApprove from '../components/ApproveMedicalFormTables/TableUnApprove';
import DetailOrderModal from '../components/ApproveMedicalFormTables/DetailOrderModal';
import ApprovePopup from '../components/ApproveMedicalFormTables/ApprovePopup';
import UnApprovePopup from '../components/ApproveMedicalFormTables/UnAprrovePopup';

const navTitles = ['Tất cả', 'Chưa xét', 'Đủ điều kiện', 'Chưa đủ điều kiện'];

const ApproveMedicalForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenApprovePopup, setIsOpenApprovePopup] = useState(false);
  const [isOpenUnApprovePopup, setIsOpenUnApprovePopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [isReLoading, setIsReLoading] = useState(false);

  const handleCloseDetailModal = () => {
    setIsOpenDetailModal(false);
  };

  const handleOpenDetailModal = (item) => {
    setSelectedRow(item);
    setIsOpenDetailModal(true);
  };

  const handleOpenApprovePopUp = (item) => {
    setSelectedRow(item);
    setIsOpenApprovePopup(true);
  };

  const handleCloseApprovePopUp = () => {
    setIsOpenApprovePopup(false);
  };

  const handleOpenUnApprovePopUp = (item) => {
    setSelectedRow(item);
    setIsOpenUnApprovePopup(true);
  };

  const handleCloseUnApprovePopUp = () => {
    setIsOpenUnApprovePopup(false);
  };

  const handleReLoading = (value) => {
    setIsReLoading(value);
  };

  return (
    <>
      <Breadcrumb pageName="Phê duyệt đơn khám bệnh" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <TableHeader
            navTitles={navTitles}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            isCreate={false}
            isExport={true}
          />
          <Table
            indexTab={0}
            currentTab={currentTab}
            url={`/health-forms`}
            tbodyItem={TableAll}
            handleOpenDetailModal={handleOpenDetailModal}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={1}
            currentTab={currentTab}
            url={`/health-forms?status=0`}
            tbodyItem={TableNot}
            handleOpenDetailModal={handleOpenDetailModal}
            handleOpenApprovePopUp={handleOpenApprovePopUp}
            handleOpenUnApprovePopUp={handleOpenUnApprovePopUp}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={2}
            currentTab={currentTab}
            url={`/health-forms?status=1`}
            tbodyItem={TableApprove}
            handleOpenDetailModal={handleOpenDetailModal}
            isReLoading={isReLoading}
            handleReLoading={handleReLoading}
          />
          <Table
            indexTab={3}
            currentTab={currentTab}
            url={`/health-forms?status=2`}
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
      <ApprovePopup
        selectedRow={selectedRow}
        isOpenApprovePopup={isOpenApprovePopup}
        handleCloseApprovePopUp={handleCloseApprovePopUp}
        handleReLoading={handleReLoading}
      />
      <UnApprovePopup
        selectedRow={selectedRow}
        isOpenUnApprovePopup={isOpenUnApprovePopup}
        handleCloseUnApprovePopUp={handleCloseUnApprovePopUp}
        handleReLoading={handleReLoading}
      />
    </>
  );
};

export default ApproveMedicalForm;
