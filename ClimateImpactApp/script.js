const climateData = {
"Perth": {
  rcp26: {
    2020: [1.0, 5, "Occasional heatwaves"],
    2030: [1.1, 6, "More frequent heatwaves"],
    2040: [1.2, 8, "Increasing droughts"],
    2050: [1.3, 10, "Hotter summers"],
    2060: [1.4, 11, "Bushfire risk"],
    2070: [1.5, 12, "Extended dry spells"],
    2080: [1.6, 14, "Severe droughts"],
    2090: [1.7, 16, "Fire weather"],
    2100: [1.8, 17, "Extremely dry years"]
  },
  rcp45: {
    2020: [1.2, 7, "Some heatwaves"],
    2030: [1.3, 9, "Intense heatwaves"],
    2040: [1.5, 11, "Dry fire-prone summers"],
    2050: [1.6, 13, "Drought conditions"],
    2060: [1.8, 15, "Bushfires common"],
    2070: [1.9, 17, "Extreme fire danger"],
    2080: [2.1, 19, "Widespread drought"],
    2090: [2.2, 21, "Seasonal fires"],
    2100: [2.4, 23, "Extreme climate stress"]
  },
  rcp85: {
    2020: [1.5, 10, "Hotter summers"],
    2030: [1.8, 14, "Severe heat, fires"],
    2040: [2.0, 17, "Widespread bushfires"],
    2050: [2.2, 20, "Record-breaking temps"],
    2060: [2.5, 24, "Desertification risk"],
    2070: [2.8, 28, "Uninhabitable heat days"],
    2080: [3.0, 31, "Systemic drought"],
    2090: [3.2, 34, "Critical water shortage"],
    2100: [3.5, 38, "Extreme climate emergency"]
  },
},
"Sydney": {
  rcp26: {
    2020: [1.0, 5, "Mild storms"],
    2030: [1.1, 6, "Stormy summers"],
    2040: [1.2, 8, "Heavy rainfall events"],
    2050: [1.3, 10, "Shorter winters"],
    2060: [1.4, 11, "Flood warnings"],
    2070: [1.5, 12, "Occasional flash floods"],
    2080: [1.6, 14, "Strong winds"],
    2090: [1.7, 16, "Increased storm days"],
    2100: [1.8, 17, "Tropical storm risk"]
  },
  rcp45: {
    2020: [1.2, 7, "Storms and floods"],
    2030: [1.3, 9, "Intense rainfall"],
    2040: [1.5, 11, "Coastal flooding risk"],
    2050: [1.6, 13, "High tide storms"],
    2060: [1.8, 15, "Urban flash floods"],
    2070: [1.9, 17, "Major flood events"],
    2080: [2.1, 19, "Hail and storm surges"],
    2090: [2.2, 21, "Heat-rain cycles"],
    2100: [2.4, 23, "Flood infrastructure strain"]
  },
  rcp85: {
    2020: [1.5, 10, "Warming climate"],
    2030: [1.8, 14, "Floods, storms"],
    2040: [2.0, 17, "Major flooding & sea rise"],
    2050: [2.2, 20, "Severe storm systems"],
    2060: [2.5, 24, "Seasonal monsoon events"],
    2070: [2.8, 28, "Cyclone risk increase"],
    2080: [3.0, 31, "Climate-driven disasters"],
    2090: [3.2, 34, "Evacuation-prone zones"],
    2100: [3.5, 38, "Frequent storm alerts"]
  },
},
"New York": {
  rcp26: {
    2020: [1.0, 5, "Some hurricanes"],
    2030: [1.1, 6, "More hurricanes"],
    2040: [1.2, 8, "Hurricane intensity ↑"],
    2050: [1.3, 10, "Wind surge risk"],
    2060: [1.4, 11, "Minor coastal flooding"],
    2070: [1.5, 12, "Increased rain"],
    2080: [1.6, 14, "High tide issues"],
    2090: [1.7, 16, "Flash rain events"],
    2100: [1.8, 17, "Urban stormwater strain"]
  },
  rcp45: {
    2020: [1.2, 7, "Storm surges"],
    2030: [1.3, 9, "Frequent hurricanes"],
    2040: [1.5, 11, "Flooded coastal zones"],
    2050: [1.6, 13, "Summer storm outbreaks"],
    2060: [1.8, 15, "Sea wall stress"],
    2070: [1.9, 17, "Infrastructure flooding"],
    2080: [2.1, 19, "Storm shelter use"],
    2090: [2.2, 21, "Tornado likelihood"],
    2100: [2.4, 23, "Rising tide damage"]
  },
  rcp85: {
    2020: [1.5, 10, "Hotter & wetter"],
    2030: [1.8, 14, "Major hurricanes"],
    2040: [2.0, 17, "Flood zones expanding"],
    2050: [2.2, 20, "Sea level threat"],
    2060: [2.5, 24, "Heat-humidity waves"],
    2070: [2.8, 28, "Extreme event clustering"],
    2080: [3.0, 31, "Risk of storm surges"],
    2090: [3.2, 34, "Hurricane category ↑"],
    2100: [3.5, 38, "Crisis preparedness state"]
  },
},
"London": {
  rcp26: {
    2020: [1.0, 5, "Mild summers"],
    2030: [1.1, 6, "Hotter summers"],
    2040: [1.2, 8, "Storm warnings"],
    2050: [1.3, 10, "Increased humidity"],
    2060: [1.4, 11, "Rainy spells"],
    2070: [1.5, 12, "Windy conditions"],
    2080: [1.6, 14, "Low snow"],
    2090: [1.7, 16, "Storm drains strain"],
    2100: [1.8, 17, "Unpredictable rainfall"]
  },
  rcp45: {
    2020: [1.2, 7, "Rising heat"],
    2030: [1.3, 9, "Rain + heatwaves"],
    2040: [1.5, 11, "Heavy rain, flooding"],
    2050: [1.6, 13, "Damp winters"],
    2060: [1.8, 15, "Flash floods"],
    2070: [1.9, 17, "Low pressure extremes"],
    2080: [2.1, 19, "Moisture surges"],
    2090: [2.2, 21, "Inland flooding"],
    2100: [2.4, 23, "Infrastructure soak"]
  },
  rcp85: {
    2020: [1.5, 10, "Heat waves rise"],
    2030: [1.8, 14, "Storm surges"],
    2040: [2.0, 17, "Flooding, heatwaves"],
    2050: [2.2, 20, "Severe rainfall events"],
    2060: [2.5, 24, "Riverbank overflow"],
    2070: [2.8, 28, "Urban heat storms"],
    2080: [3.0, 31, "Extreme inland rain"],
    2090: [3.2, 34, "Power grid strain"],
    2100: [3.5, 38, "Flash flood warnings"]
  },
},
"Delhi": {
  rcp26: {
    2020: [1.0, 5, "Hot dry spells"],
    2030: [1.1, 6, "Rising heat"],
    2040: [1.2, 8, "Dry heat"],
    2050: [1.3, 10, "Scorching days"],
    2060: [1.4, 11, "Drier summers"],
    2070: [1.5, 12, "Less monsoon"],
    2080: [1.6, 14, "Seasonal dust"],
    2090: [1.7, 16, "Water supply stress"],
    2100: [1.8, 17, "Extreme temperature alerts"]
  },
  rcp45: {
    2020: [1.2, 7, "Dust storms"],
    2030: [1.3, 9, "Monsoon shift"],
    2040: [1.5, 11, "Severe drought risk"],
    2050: [1.6, 13, "Crop water stress"],
    2060: [1.8, 15, "Irrigation shortage"],
    2070: [1.9, 17, "River flow drop"],
    2080: [2.1, 19, "Groundwater depletion"],
    2090: [2.2, 21, "Famine concern"],
    2100: [2.4, 23, "Heat-dust-haze cycles"]
  },
  rcp85: {
    2020: [1.5, 10, "Hotter & drier"],
    2030: [1.8, 14, "Extreme heatwaves"],
    2040: [2.0, 17, "Widespread drought"],
    2050: [2.2, 20, "Monsoon collapse"],
    2060: [2.5, 24, "Farming failure zones"],
    2070: [2.8, 28, "Climate exodus"],
    2080: [3.0, 31, "Livelihood risk"],
    2090: [3.2, 34, "Heat-health emergency"],
    2100: [3.5, 38, "Unlivable summers"]
  }
};

function showImpacts() {
  const loc = document.getElementById("location").value;
  const scn = document.getElementById("scenario").value;
  const yr = document.getElementById("year").value;

  const locationData = climateData[loc];
  const scenarioData = locationData ? locationData[scn] : null;
  const yearData = scenarioData ? scenarioData[yr] : null;

  if (yearData) {
    document.getElementById("temperatureOutput").textContent = `🌡️ Temperature Increase: ${yearData[0]}°C`;
    document.getElementById("seaLevelOutput").textContent = `🌊 Sea Level Rise: ${yearData[1]} cm`;
    document.getElementById("weatherOutput").textContent = `⛈️ Extreme Weather: ${yearData[2]}`;
  } else {
    document.getElementById("temperatureOutput").textContent = "⚠️ Data not available for this combination.";
    document.getElementById("seaLevelOutput").textContent = "";
    document.getElementById("weatherOutput").textContent = "";
  }
}
