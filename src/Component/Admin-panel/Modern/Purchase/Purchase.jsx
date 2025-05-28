import { Grid, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import "../Purchase/Purchase.css"  ;

const Purchase = () => {
  const applyDarkMode = useSelector((res) => res.applyDarkMode);

  const series = [33, 45, 56, 220, 22];
  const labels = ["Laptop", "Mobile", "GameHeadset", "Blutooth", "keyboard"];

  const getOptions = (isDark) => ({
    labels: labels,
    legend: {
      labels: {
        colors: isDark ? "white" : "black",
        useSeriesColors: false,
      },
    },
    title: {
      text: "Purchase ",
      style: {
        color: isDark ? "white" : "black",
      },
    },
  });

  const [options, setOptions] = useState(getOptions(applyDarkMode.darkmode));
  const [chartKey, setChartKey] = useState(0); // 👉 key for force re-render

  useEffect(() => {
    setOptions(getOptions(applyDarkMode.darkmode));
    setChartKey(prev => prev + 1); // 🔁 chart forcibly re-renders
  }, [applyDarkMode.darkmode]);

  return ( 
    <Grid size={{md : 3 , xs : 12}}>
      <Card className="card-box">
        <CardContent>
          <Chart 
          className="chart"
            key={chartKey} // 👉 key added to force re-render
            series={series}
            options={options}
            type="pie"
            height={300}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Purchase;
