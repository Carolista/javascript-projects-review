// Initialize Variables below

// Report Info
let date = "Monday 2018-03-18";
let time = "10:05:34 AM";

// Astronauts
let astronautCount = 7;
let astronautStatus = "ready";

// Mass
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;

// Fuel
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 1; // 100%

// Weather
let weatherStatus = "clear";

// Track Liftoff Status
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
  preparedForLiftoff = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
  preparedForLiftoff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
  preparedForLiftoff = false;
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
  preparedForLiftoff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel < 1) {
  preparedForLiftoff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
  preparedForLiftoff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff) {
  // Print report
  console.log("All systems are a go! Initiating space shuttle launch sequence.");
  console.log("---------------------------------------------------------------");
  console.log("Date: " + date);
  console.log("Time: " + time);
  console.log("Astronaut Count: " + astronautCount);
  console.log("Crew Mass: " + crewMassKg);
  console.log("Fuel Mass: " + fuelMassKg);
  console.log("Shuttle Mass: " + shuttleMassKg);
  console.log("Total Mass: " + totalMassKg);
  console.log("Fuel Temperature: " + fuelTempCelsius);
  console.log("Weather Status: " + weatherStatus);
  console.log("---------------------------------------------------------------");
  console.log("Have a safe trip, astronauts!");
} else {
  // Notify launch is aborted
  console.log("Launch aborted.")
}
