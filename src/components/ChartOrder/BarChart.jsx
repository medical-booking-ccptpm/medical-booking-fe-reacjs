import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Biểu đồ cột số lượng đơn khám</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
