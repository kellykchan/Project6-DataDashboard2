import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SpeciesChart = ({ characters }) => {
  const speciesCounts = Array.from(
  characters.reduce((acc, char) => acc.set(char.species, (acc.get(char.species) || 0) + 1), new Map())
)
  .map(([name, value]) => ({ name, value }))
  .sort((a, b) => b.value - a.value);

  return (
    <div>
      <h3>Species Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={speciesCounts} barCategoryGap="15%" barGap={15} >
          <XAxis dataKey="name" stroke="#ffffff" tickFormatter={(name) => name.length > 12 ? name.slice(0, 12) + '…' : name} />
          <YAxis stroke="#ffffff"/>
          <Tooltip />
          <Bar dataKey="value" fill="#00ffcc" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpeciesChart;
