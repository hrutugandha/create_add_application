import DonutChart from "react-donut-chart";

const reactDonutChartdata = [
  {
    label: "Male",
    value: 40,
    color: "#FF823C"
  },
  {
    label: "Female",
    value: 35,
    color: "#0096FF"
  },
  {
    label: "Unknown",
    value: 25,
    color: "#323c46"
  }
];
const reactDonutChartBackgroundColor = [
  "#FF823C",
  "#323C46",
  "#0096FF",
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

const DoughnutChart = () => {
  return (
    <div className="App" style={{flex:"1"}}>
      <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  );
}


export default DoughnutChart;