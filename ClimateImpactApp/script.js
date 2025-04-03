
const climateData = {
  Perth: {
    rcp26: {2020: [1.0, 5, "Occasional heatwaves"], 2050: [1.4, 12, "More frequent heatwaves"], 2100: [1.8, 22, "Severe droughts and bushfires"]},
    rcp45: {2020: [1.2, 7, "Some heatwaves"], 2050: [1.8, 20, "Intense heatwaves"], 2100: [2.5, 35, "Droughts, fires, storms"]},
    rcp85: {2020: [1.5, 10, "Hotter summers"], 2050: [2.8, 35, "Severe heat, fires"], 2100: [4.0, 60, "Extreme weather, sea rise"]}
  },
  Sydney: {
    rcp26: {2020: [0.9, 4, "Mild storms"], 2050: [1.3, 10, "Stormy summers"], 2100: [1.7, 18, "Heavy rainfall events"]},
    rcp45: {2020: [1.1, 6, "Storms and floods"], 2050: [1.7, 18, "Intense rainfall"], 2100: [2.3, 30, "Coastal flooding risk"]},
    rcp85: {2020: [1.4, 9, "Warming climate"], 2050: [2.4, 30, "Floods, storms"], 2100: [3.5, 55, "Major flooding & sea rise"]}
  },
  "New York": {
    rcp26: {2020: [0.8, 3, "Some hurricanes"], 2050: [1.2, 8, "More hurricanes"], 2100: [1.6, 16, "Hurricane intensity ↑"]},
    rcp45: {2020: [1.0, 5, "Storm surges"], 2050: [1.6, 15, "Frequent hurricanes"], 2100: [2.2, 28, "Flooded coastal zones"]},
    rcp85: {2020: [1.3, 7, "Hotter & wetter"], 2050: [2.3, 25, "Major hurricanes"], 2100: [3.8, 50, "Flood zones expanding"]}
  },
  London: {
    rcp26: {2020: [0.7, 3, "Mild summers"], 2050: [1.0, 7, "Hotter summers"], 2100: [1.4, 12, "Storm warnings"]},
    rcp45: {2020: [0.9, 5, "Rising heat"], 2050: [1.4, 12, "Rain + heatwaves"], 2100: [2.0, 20, "Heavy rain, flooding"]},
    rcp85: {2020: [1.2, 7, "Heat waves rise"], 2050: [2.0, 18, "Storm surges"], 2100: [3.2, 40, "Flooding, heatwaves"]}
  },
  Delhi: {
    rcp26: {2020: [1.3, 8, "Hot dry spells"], 2050: [1.7, 16, "Rising heat"], 2100: [2.0, 28, "Dry heat"]},
    rcp45: {2020: [1.6, 10, "Dust storms"], 2050: [2.2, 22, "Monsoon shift"], 2100: [3.0, 40, "Severe drought risk"]},
    rcp85: {2020: [1.9, 13, "Hotter & drier"], 2050: [3.0, 35, "Extreme heatwaves"], 2100: [4.5, 65, "Widespread drought"]}
  }
};

function showImpacts() {
  const loc = document.getElementById("location").value;
  const scn = document.getElementById("scenario").value;
  const yr = document.getElementById("year").value;

  const data = climateData[loc][scn][yr];
  document.getElementById("temperatureOutput").textContent = `🌡️ Temperature Increase: ${data[0]}°C`;
  document.getElementById("seaLevelOutput").textContent = `🌊 Sea Level Rise: ${data[1]} cm`;
  document.getElementById("weatherOutput").textContent = `⛈️ Extreme Weather: ${data[2]}`;
}
