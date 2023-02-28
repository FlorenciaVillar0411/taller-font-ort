import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartMovs = (props) => {
    const data = props.data;
    return (
      <div className='lineChart'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="monto" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  };

  export default LineChartMovs;