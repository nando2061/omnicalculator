function kineticEnergy() {
    var selectElement = document.getElementById("massopt");
    var selectElement1 = document.getElementById("speedopt")
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedOption1 = selectElement1.options[selectElement1.selectedIndex];

    let mass = document.getElementById("mass").value;
    let speed = document.getElementById("speed").value;
    let ant = document.getElementById("ant")

    if (selectedOption1.value == "km/s") {
        speed = speed * 1000
    }
    if (selectedOption1.value == "km/h") {
        speed = speed / 3.6
    }
    if (selectedOption1.value == "mph") {
        speed = speed * 0.44704
    }
    if (selectedOption.value == "lbs") {
        mass = mass * 0.45359237
    }
    if (selectedOption.value == "g") {
        mass = mass / 1000
    }   
    if (selectedOption.value == "mg") {
        mass = mass / 1000000
    }
    if (selectedOption.value == "µg") {
        mass = mass / 1000000000
    }
    

    let antwoord = 0.5 * mass * (speed ** 2)

    ant.value = antwoord + " J";
}

function gravityForce() {
    const G = 0.000000000066743

    var selectMass1 = document.getElementById("massopt1");
    var selectedMass1 = selectMass1.options[selectMass1.selectedIndex];
    var selectMass2 = document.getElementById("massopt2");
    var selectedMass2 = selectMass2.options[selectMass2.selectedIndex];

    let mass1 = document.getElementById("mass1").value;
    let mass2 = document.getElementById("mass2").value;
    let distance = document.getElementById("distance").value;
    let ant = document.getElementById("ant")

    if (selectedMass1.value == "lbs") {
        mass = mass * 0.45359237
    }
    if (selectedMass1.value == "g") {
        mass1 = mass1 / 1000
    }
    if (selectedMass1.value == "mg") {
        mass1 = mass1 / 1000000
    }
    if (selectedMass1.value == "µg") {
        mass1 = mass1 / 1000000000
    }

    if (selectedMass2.value == "lbs") {
        mass2 = mass2 * 0.45359237
    }
    if (selectedMass2.value == "g") {
        mass2 = mass2 / 1000
    }
    if (selectedMass2.value == "mg") {
        mass2 = mass2 / 1000000
    }
    if (selectedMass2.value == "µg") {
        mass2 = mass2 / 1000000000
    }

    let antwoord = (G * mass1 * mass2) / (distance ** 2)
    console.log(antwoord)

    ant.value = antwoord + " N";
}