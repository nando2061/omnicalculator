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
    if (selectedOption.value == "Mg") {
        mass = mass * 1000
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