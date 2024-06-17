import { Pie } from 'react-chartjs-2';

const PieChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Biểu đồ tròn số lượng đơn khám</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
