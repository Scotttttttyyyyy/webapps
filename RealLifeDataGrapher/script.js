
let chart;
let parsedData = [];

function drawChart() {
  const xKey = document.getElementById("xAxis").value;
  const yKey = document.getElementById("yAxis").value;
  const chartType = document.getElementById("chartType").value;
  const showReg = document.getElementById("showRegression").checked;

  const labels = parsedData.map(row => row[xKey]);
  const dataPoints = parsedData.map(row => ({
    x: parseFloat(row[xKey]),
    y: parseFloat(row[yKey])
  }));

  const ctx = document.getElementById("chartCanvas").getContext("2d");
  if (chart) chart.destroy();

  const datasets = [{
    label: `${yKey} vs ${xKey}`,
    data: dataPoints,
    backgroundColor: "rgba(54, 162, 235, 0.6)",
    borderColor: "rgba(54, 162, 235, 1)",
    type: chartType,
    fill: false,
    showLine: chartType !== 'bar'
  }];

  if (showReg && chartType === "scatter") {
    const { m, b } = linearRegression(dataPoints);
    const minX = Math.min(...dataPoints.map(d => d.x));
    const maxX = Math.max(...dataPoints.map(d => d.x));
    datasets.push({
      label: "Regression Line",
      data: [
        { x: minX, y: m * minX + b },
        { x: maxX, y: m * maxX + b }
      ],
      type: "line",
      fill: false,
      borderColor: "red",
      borderDash: [5, 5],
      pointRadius: 0
    });
  }

  chart = new Chart(ctx, {
    type: "scatter",
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: { display: true, text: xKey }
        },
        y: {
          title: { display: true, text: yKey }
        }
      }
    }
  });
}

function linearRegression(data) {
  const n = data.length;
  const sumX = data.reduce((sum, d) => sum + d.x, 0);
  const sumY = data.reduce((sum, d) => sum + d.y, 0);
  const sumXY = data.reduce((sum, d) => sum + d.x * d.y, 0);
  const sumX2 = data.reduce((sum, d) => sum + d.x * d.x, 0);

  const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const b = (sumY - m * sumX) / n;
  return { m, b };
}

document.getElementById("csvFile").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (!file) return;

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      parsedData = results.data;
      const keys = Object.keys(parsedData[0]);
      const xSel = document.getElementById("xAxis");
      const ySel = document.getElementById("yAxis");
      xSel.innerHTML = "";
      ySel.innerHTML = "";

      keys.forEach(k => {
        xSel.innerHTML += `<option value="${k}">${k}</option>`;
        ySel.innerHTML += `<option value="${k}">${k}</option>`;
      });
    }
  });
});
