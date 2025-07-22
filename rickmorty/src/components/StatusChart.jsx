import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const StatusChart = ({ characters }) => {
  const statusCounts = ['Alive', 'Dead', 'unknown'].map(status => ({
    name: status,
    value: characters.filter(c => c.status === status).length
  }));

  const COLORS = ['#00ffcc', '#ff5c5c', '#aaaaaa'];

  return (
    <div>
      <h3>Status Distribution</h3>
      <PieChart width={300} height={300}>
        <Pie data={statusCounts} dataKey="value" nameKey="name" outerRadius={100}>
          {statusCounts.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatusChart;
