import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import Breadcrumb from '../layouts/admin/Breadcrumb';
import PieChart from '../components/ChartOrder/PieChart';
import BarChart from '../components/ChartOrder/BarChart';
import loggerError from '../utils/loggerError';

Chart.register(CategoryScale);

const handleConvertChart = (data) => {
  const pendingList = data.filter((item) => item.status === 0);
  const acceptedList = data.filter((item) => item.status === 1);
  const rejectedList = data.filter((item) => item.status === 2);

  return {
    labels: [
      'Tất cả',
      'Đơn chưa xét',
      'Đơn đủ điều kiện',
      'Đơn chưa đủ điều kiện',
    ],
    datasets: [
      {
        label: 'Tổng số',
        data: [
          data.length,
          pendingList.length,
          acceptedList.length,
          rejectedList.length,
        ],
        backgroundColor: ['#4BC0C0', '#f3ba2f', '#50AF95', '#ff6384'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };
};

const ChartOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + '/health-forms?limit=1000',
          {
            headers: {
              Authorization:
                'Bearer ' + JSON.parse(localStorage.getItem('token')),
            },
          },
        );
        const result = await response.json();
        setChartData(handleConvertChart(result.data.items));
      } catch (error) {
        loggerError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb pageName="Thống kê đơn khám bệnh" />

      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
          {isLoading ? (
            <div className="relative rounded-xl overflow-auto">
              <div className="flex items-center justify-center">
                <button className="inline-flex items-center px-4 py-4 font-semibold leading-6 text-sm transition ease-in-out duration-150 cursor-not-allowed">
                  Processing...
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="w-1/2 px-8">
                <PieChart chartData={chartData} />
              </div>
              <div className="w-1/2 px-8">
                <BarChart chartData={chartData} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChartOrder;
