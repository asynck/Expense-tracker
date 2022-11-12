import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return (
    <div className="chart">
      {props.arrData.map((x) => (
        <ChartBar
          key={x.label}
          value={x.value}
          maxValue={null}
          label={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
