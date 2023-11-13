let launchcode = {
	organization: "nonprofit",
	executiveDirector: "Jeff",
	percentageCoolEmployees: 100,
	programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
	launchOutput: function (num) {
		let parts = {
			2: "Launch",
			3: "Code",
			5: "Rocks"
		};
		let result = "";
		for (let modulus in parts) {
			if (num % Number(modulus) === 0) {
				if (modulus == 5 && result.length > 0) {
					result += " ";
				}
				result += parts[modulus];
			}
		}
		if (result.length > 0) {
      result += "!";
      if (result === "Launch Rocks!") {
        result += " (CRASH!!!!)";
      }
    } else {
      result += "Rutabagas! That doesn't work.";
    }
		return result;
	}
}

module.exports = launchcode;
