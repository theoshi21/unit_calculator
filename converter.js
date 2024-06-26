var button = "";
function convertAll(){
	button = document.getElementById('inputUnits').value;
            if (document.getElementById('number').value != "") {
                var measure = parseFloat(document.getElementById('number').value);
                switch (button) {
                    case "Celsius":
                        CelsiusAll(measure);
                        break;
                    case "Fahrenheit":
                        FahrenheitAll(measure);
                        break;
                    case "Rankine":
                        RankineAll(measure);
                        break;
                    case "Kelvin":
                        KelvinAll(measure);
                        break;
                    case "Seconds":
                        SecondsAll(measure);
                        break;
                    case "Minutes":
                        MinutesAll(measure);
                        break;
                    case "Hours":
                        HoursAll(measure);
                        break;
                    case "Days":
                        DaysAll(measure);
                        break;
                    case "Meters":
                        MetersAll(measure);
                        break;
                    case "Kilometers":
                        KilometersAll(measure);
                        break;
                    case "Centimeters":
                        CentimetersAll(measure);
                        break;
                    case "Millimeters":
                        MillimetersAll(measure);
                        break;
                    case "Nanometers":
                        NanometersAll(measure);
                        break;
                    case "Micrometers":
                        MicrometersAll(measure);
                        break;
                    case "Miles":
                        MilesAll(measure);
                        break;
                    case "Yards":
                        YardsAll(measure);
                        break;
                    case "Feet":
                        FeetAll(measure);
                        break;
                    case "Inches":
                        InchesAll(measure);
                        break;
                    case "Grams":
                        GramsAll(measure);
                        break;
                    case "Kilograms":
                        KilogramsAll(measure);
                        break;
                    case "Milligrams":
                        MilligramsAll(measure);
                        break;
                    case "Micrograms":
                        MicrogramsAll(measure);
                        break;
                    case "Pounds":
                        PoundsAll(measure);
                        break;
                    case "Ounces":
                        OuncesAll(measure);
                        break;
                    case "Tons":
                        TonsAll(measure);
                        break;
                    default:
                        alert("Please select a valid conversion option!");
                }
            } else {
                alert("Please input a number!");
            }
}

var disp = "";
function CelsiusAll(temp) {
	disp = "";
	disp += '<tr><td> Fahrenheit: </td> <td>' + (temp * (9/5) + 32).toFixed(2) + '&deg;F</td></tr>';
	disp += '<tr><td> Rankine: </td> <td> ' + (temp * (9/5) + 491.67).toFixed(2) + '&deg;R</td></tr>';
	disp += '<tr><td>Kelvin: </td> <td>' + (temp + 273.15).toFixed(2) + ' &deg;K</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function FahrenheitAll(temp) {
	disp = "";
	disp += '<tr><td>Celsius:</td> <td> ' + ((temp - 32) * (5/9)).toFixed(2) + '&deg;C</td></tr>';
	disp += '<tr><td>Rankine:</td> <td> ' + (temp + 459.67).toFixed(2) + '&deg;R</td></tr>';
	disp += '<tr><td>Kelvin: </td> <td>'+ ((temp + 459.67) * (5/9)).toFixed(2)+'&deg;K</td></tr>'
	document.getElementById('table').innerHTML = disp;;
}
function RankineAll(temp){
	disp = "";   
	disp += '<tr><td>Celcius: </td> <td> '+ ((temp - 491.67)*(5/9)).toFixed(2)+'&deg;C</td></tr>';
	disp += '<tr><td>Fahrenheit: </td> <td> '+(temp - 459.67).toFixed(2)+'&deg;F</td></tr>';
	disp += '<tr><td>Kelvin: </td> <td>'+((temp * (5/9))).toFixed(2)+'&deg;K</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function KelvinAll(temp){
	disp = "";  
	disp += '<tr><td>Celcius: </td> <td>'+ (parseFloat(temp) - 273.15).toFixed(2)+'&deg;C</td></tr>';
	disp += '<tr><td>Fahrenheit: </td> <td>'+((temp * (9/5)) - 459.67).toFixed(2) +'&deg;F</td></tr>';
	disp += '<tr><td>Rankine: </td> <td>'+ (temp * (9/5)).toFixed(2)+'&deg;R</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
//Time
function SecondsAll(time){
	disp = "";    
	disp += '<tr><td>Minutes: </td> <td>'+ (time/60)+' minutes</td></tr>';
	disp += '<tr><td>Hours: </td> <td>'+(time/3600)+' hours</td></tr>';
	disp += '<tr><td>Days: </td> <td>'+(time/86400)+' days</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function MinutesAll(time){
	disp = ""; 
	disp += '<tr><td>Seconds: </td> <td>'+ (time*60)+' seconds</td></tr>';
	disp += '<tr><td>Hours: </td> <td>'+(time/60)+' hours</td></tr>';
	disp += '<tr><td>Days: </td> <td>'+(time/1440) +' days</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function HoursAll(time){
	disp = "";    
	disp += '<tr><td>Seconds: </td> <td>'+ (time*3600)+' seconds</td></tr>';
	disp += '<tr><td>Minutes: </td> <td>'+(time*60)+' minutes</td></tr>';
	disp += '<tr><td>Days: </td> <td>'+(time/24)+' days</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function DaysAll(time){
	disp = "";    
	disp += '<tr><td>Seconds: </td> <td>'+ (time*86400)+' seconds</td></tr>';
	disp += '<tr><td>Minutes: </td> <td>'+(time*1440)+' minutes</td></tr>';
	disp += '<tr><td>Hours: </td> <td>'+(time*24)+' hours</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
//Length
function MetersAll(length) {
	disp = "";
	disp += '<tr><td>Kilometers: </td> <td>' + (length / 1000).toFixed(5) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length * 100).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 1000).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.000621371).toFixed(5) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 1.09361).toFixed(2) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 3.28084).toFixed(2) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 39.3701).toFixed(2) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function KilometersAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length * 1000).toFixed(2) + ' m</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length * 100000).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 1000000).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.621371).toFixed(5) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 1093.61).toFixed(2) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 3280.84).toFixed(2) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 39370.1).toFixed(2) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function CentimetersAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length / 100).toFixed(5) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length / 100000).toFixed(5) + ' km</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 10).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.0000062137).toFixed(8) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 0.0109361).toFixed(5) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 0.0328084).toFixed(5) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 0.393701).toFixed(5) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function MillimetersAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length / 1000).toFixed(5) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length / 1000000).toFixed(7) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length / 10).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.000000621371).toFixed(9) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 0.00109361).toFixed(6) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 0.00328084).toFixed(6) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 0.0393701).toFixed(5) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function MilesAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length * 1609.34).toFixed(2) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length * 1.60934).toFixed(2) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length * 160934).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 1609340).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 1760).toFixed(2) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 5280).toFixed(2) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 63360).toFixed(2) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function YardsAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length * 0.9144).toFixed(2) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length * 0.0009144).toFixed(6) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length * 91.44).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 914.4).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.000568182).toFixed(6) + ' mi</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 3).toFixed(2) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length * 36).toFixed(2) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function FeetAll(length) {
	disp = "";
	disp += '<tr><td>Meters is: </td> <td>' + (length * 0.3048).toFixed(2) + ' m</td></tr>';
	disp += '<tr><td>Kilometers is: </td> <td>' + (length * 0.0003048).toFixed(6) + ' km</td></tr>';
	disp += '<tr><td>Centimeters is: </td> <td>' + (length * 30.48).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters is: </td> <td>' + (length * 304.8).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles is: </td> <td>' + (length * 0.000189394).toFixed(6) + ' mi</td></tr>';
	disp += '<tr><td>Yards is: </td> <td>' + (length * 0.333333).toFixed(2) + ' yd</td></tr>';
	disp += '<tr><td>Inches is: </td> <td>' + (length * 12).toFixed(2) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function InchesAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length * 0.0254).toFixed(4) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length * 0.0000254).toFixed(8) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length * 2.54).toFixed(2) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length * 25.4).toFixed(2) + ' mm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length * 0.0000157828).toFixed(10) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length * 0.0277778).toFixed(7) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length * 0.0833333).toFixed(7) + ' ft</td></tr>';
	document.getElementById('table').innerHTML = disp;
}
function NanometersAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length / 1e9).toFixed(9) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length / 1e12).toFixed(12) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length / 1e7).toFixed(7) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length / 1e6).toFixed(6) + ' mm</td></tr>';
	disp += '<tr><td>Micrometers: </td> <td>' + (length / 1e3).toFixed(3) + ' &mu;m</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length / 1.609e+12).toFixed(12) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length / 9.144e8).toFixed(9) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length / 3.048e8).toFixed(9) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length / 2.54e7).toFixed(7) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

	function MicrometersAll(length) {
	disp = "";
	disp += '<tr><td>Meters: </td> <td>' + (length / 1e6).toFixed(6) + ' m</td></tr>';
	disp += '<tr><td>Kilometers: </td> <td>' + (length / 1e9).toFixed(9) + ' km</td></tr>';
	disp += '<tr><td>Centimeters: </td> <td>' + (length / 1e4).toFixed(4) + ' cm</td></tr>';
	disp += '<tr><td>Millimeters: </td> <td>' + (length / 1e3).toFixed(3) + ' mm</td></tr>';
	disp += '<tr><td>Nanometers: </td> <td>' + (length * 1e3).toFixed(0) + ' nm</td></tr>';
	disp += '<tr><td>Miles: </td> <td>' + (length / 1.609e+9).toFixed(9) + ' mi</td></tr>';
	disp += '<tr><td>Yards: </td> <td>' + (length / 9.144e5).toFixed(6) + ' yd</td></tr>';
	disp += '<tr><td>Feet: </td> <td>' + (length / 3.048e5).toFixed(6) + ' ft</td></tr>';
	disp += '<tr><td>Inches: </td> <td>' + (length / 2.54e4).toFixed(4) + ' in</td></tr>';
	document.getElementById('table').innerHTML = disp;
}



//Mass
function MicrogramsAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass / 1000000).toFixed(2) + ' g</td></tr>';
	disp += '<tr><td>Kilograms: </td> <td>' + (mass / 1000000000).toFixed(2) + ' kg</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass / 1000).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 2.20462e-9).toFixed(12) + ' lb</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 3.5274e-8).toFixed(12) + ' oz</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 1.10231e-12).toFixed(15) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function GramsAll(mass) {
	disp = "";
	disp += '<tr><td>Kilograms: </td> <td>' + (mass / 1000).toFixed(5) + ' kg</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass * 1000).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 1000000).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 0.00220462).toFixed(5) + ' lb</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 0.035274).toFixed(5) + ' oz</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 0.00000110231).toFixed(8) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function KilogramsAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass * 1000).toFixed(2) + ' g</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass * 1000000).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 1000000000).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 2.20462).toFixed(5) + ' lb</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 35.274).toFixed(5) + ' oz</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 0.00110231).toFixed(8) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function MilligramsAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass / 1000).toFixed(5) + ' g</td></tr>';
	disp += '<tr><td>Kilograms: </td> <td>' + (mass / 1000000).toFixed(8) + ' kg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 1000).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 0.00000220462).toFixed(8) + ' lb</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 0.000035274).toFixed(8) + ' oz</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 0.00000000110231).toFixed(11) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function PoundsAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass * 453.592).toFixed(2) + ' g</td></tr>';
	disp += '<tr><td>Kilograms: </td> <td>' + (mass * 0.453592).toFixed(6) + ' kg</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass * 453592).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 453592000).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 16).toFixed(2) + ' oz</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 0.0005).toFixed(4) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function OuncesAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass * 28.3495).toFixed(2) + ' g</td></tr>';
	disp += '<tr><td>Kilograms: </td> <td>' + (mass * 0.0283495).toFixed(6) + ' kg</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass * 28349.5).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 28349500).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 0.0625).toFixed(4) + ' lb</td></tr>';
	disp += '<tr><td>Tons: </td> <td>' + (mass * 0.00003125).toFixed(8) + ' ton</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function TonsAll(mass) {
	disp = "";
	disp += '<tr><td>Grams: </td> <td>' + (mass * 907184.74).toFixed(2) + ' g</td></tr>';
	disp += '<tr><td>Kilograms: </td> <td>' + (mass * 907.185).toFixed(3) + ' kg</td></tr>';
	disp += '<tr><td>Milligrams: </td> <td>' + (mass * 907184740).toFixed(2) + ' mg</td></tr>';
	disp += '<tr><td>Micrograms: </td> <td>' + (mass * 907184740000).toFixed(2) + ' &mu;g</td></tr>';
	disp += '<tr><td>Pounds: </td> <td>' + (mass * 2000).toFixed(2) + ' lb</td></tr>';
	disp += '<tr><td>Ounces: </td> <td>' + (mass * 32000).toFixed(2) + ' oz</td></tr>';
	document.getElementById('table').innerHTML = disp;
}

function temp(){
	document.getElementById("inputUnits").innerHTML = "<option selected disabled value=''></option>";
	document.getElementById("resultUnits").innerHTML = "<option selected disabled value=''></option>";
	let disp = "";
	disp += '<a onclick="input('+"\'"+"Celsius"+"\'"+')">Celsius</a>';
	disp += '<a onclick="input('+"\'"+"Fahrenheit"+"\'"+')">Fahrenheit</a>';
	disp += '<a onclick="input('+"\'"+"Rankine"+"\'"+')">Rankine</a>';
	disp += '<a onclick="input('+"\'"+"Kelvin"+"\'"+')">Kelvin</a>';
	document.getElementById("units").innerHTML = disp;

	disp = "";
	disp += '<a onclick="result('+"\'"+"Celsius"+"\'"+')">Celsius</a>';
	disp += '<a onclick="result('+"\'"+"Fahrenheit"+"\'"+')">Fahrenheit</a>';
	disp += '<a onclick="result('+"\'"+"Rankine"+"\'"+')">Rankine</a>';
	disp += '<a onclick="result('+"\'"+"Kelvin"+"\'"+')">Kelvin</a>';
	document.getElementById("unitsResult").innerHTML = disp;
}

function length(){
	document.getElementById("inputUnits").innerHTML = "<option selected disabled value=''></option>";
	document.getElementById("resultUnits").innerHTML = "<option selected disabled value=''></option>";
	let disp = "";
	disp += '<a onclick="input('+"\'"+"Meters"+"\'"+')">Meters</a>';
	disp += '<a onclick="input('+"\'"+"Kilometers"+"\'"+')">Kilometers</a>';
	disp += '<a onclick="input('+"\'"+"Centimeters"+"\'"+')">Centimeters</a>';
	disp += '<a onclick="input('+"\'"+"Millimeters"+"\'"+')">Millimeters</a>';
	disp += '<a onclick="input('+"\'"+"Nanometers"+"\'"+')">Nanometers</a>';
	disp += '<a onclick="input('+"\'"+"Micrometers"+"\'"+')">Micrometers</a>';
	disp += '<a onclick="input('+"\'"+"Miles"+"\'"+')">Miles</a>';
	disp += '<a onclick="input('+"\'"+"Yards"+"\'"+')">Yards</a>';
	disp += '<a onclick="input('+"\'"+"Feet"+"\'"+')">Feet</a>';
	disp += '<a onclick="input('+"\'"+"Inches"+"\'"+')">Inches</a>';
	document.getElementById("units").innerHTML = disp;

	disp = "";
	disp += '<a onclick="result('+"\'"+"Meters"+"\'"+')">Meters</a>';
	disp += '<a onclick="result('+"\'"+"Kilometers"+"\'"+')">Kilometers</a>';
	disp += '<a onclick="result('+"\'"+"Centimeters"+"\'"+')">Centimeters</a>';
	disp += '<a onclick="result('+"\'"+"Millimeters"+"\'"+')">Millimeters</a>';
	disp += '<a onclick="result('+"\'"+"Nanometers"+"\'"+')">Nanometers</a>';
	disp += '<a onclick="result('+"\'"+"Micrometers"+"\'"+')">Micrometers</a>';
	disp += '<a onclick="result('+"\'"+"Miles"+"\'"+')">Miles</a>';
	disp += '<a onclick="result('+"\'"+"Yards"+"\'"+')">Yards</a>';
	disp += '<a onclick="result('+"\'"+"Feet"+"\'"+')">Feet</a>';
	disp += '<a onclick="result('+"\'"+"Inches"+"\'"+')">Inches</a>';
	document.getElementById("unitsResult").innerHTML = disp;
}

function mass(){
	document.getElementById("inputUnits").innerHTML = "<option selected disabled value=''></option>";
	document.getElementById("resultUnits").innerHTML = "<option selected disabled value=''></option>";
	let disp = "";
	disp += '<a onclick="input('+"\'"+"Grams"+"\'"+')">Grams</a>';
	disp += '<a onclick="input('+"\'"+"Kilograms"+"\'"+')">Kilograms</a>';
	disp += '<a onclick="input('+"\'"+"Milligrams"+"\'"+')">Milligrams</a>';
	disp += '<a onclick="input('+"\'"+"Micrograms"+"\'"+')">Micrograms</a>';
	disp += '<a onclick="input('+"\'"+"Pounds"+"\'"+')">Pounds</a>';
	disp += '<a onclick="input('+"\'"+"Ounces"+"\'"+')">Ounces</a>';
	disp += '<a onclick="input('+"\'"+"Tons"+"\'"+')">Tons</a>';
	document.getElementById("units").innerHTML = disp;

	disp = "";
	disp += '<a onclick="result('+"\'"+"Grams"+"\'"+')">Grams</a>';
	disp += '<a onclick="result('+"\'"+"Kilograms"+"\'"+')">Kilograms</a>';
	disp += '<a onclick="result('+"\'"+"Milligrams"+"\'"+')">Milligrams</a>';
	disp += '<a onclick="result('+"\'"+"Micrograms"+"\'"+')">Micrograms</a>';
	disp += '<a onclick="result('+"\'"+"Pounds"+"\'"+')">Pounds</a>';
	disp += '<a onclick="result('+"\'"+"Ounces"+"\'"+')">Ounces</a>';
	disp += '<a onclick="result('+"\'"+"Tons"+"\'"+')">Tons</a>';
	document.getElementById("unitsResult").innerHTML = disp;
}

function time(){
	document.getElementById("inputUnits").innerHTML = "<option selected disabled value=''></option>";
	document.getElementById("resultUnits").innerHTML = "<option selected disabled value=''></option>";
	let disp = "";
	disp = '<a onclick="input('+"\'"+"Seconds"+"\'"+')">Seconds</a>';
	disp += '<a onclick="input('+"\'"+"Minutes"+"\'"+')">Minutes</a>';
	disp += '<a onclick="input('+"\'"+"Hours"+"\'"+')">Hours</a>';
	disp += '<a onclick="input('+"\'"+"Days"+"\'"+')">Days</a>';
	document.getElementById("units").innerHTML = disp;

	disp = "";
	disp += '<a onclick="result('+"\'"+"Seconds"+"\'"+')">Seconds</a>';
	disp += '<a onclick="result('+"\'"+"Minutes"+"\'"+')">Minutes</a>';
	disp += '<a onclick="result('+"\'"+"Hours"+"\'"+')">Hours</a>';
	disp += '<a onclick="result('+"\'"+"Days"+"\'"+')">Days</a>';
	document.getElementById("unitsResult").innerHTML = disp;
}

function input(text){
	let disp = "<option selected disabled value='"+text+"'>"+text+"</option>"
	document.getElementById("inputUnits").innerHTML = disp;
}

function result(text){
	let disp = "<option selected disabled value='"+text+"'>"+text+"</option>";
	document.getElementById("resultUnits").innerHTML = disp;
}

function convert(){
	let conversion = document.getElementById("inputUnits").value;
	let conversionResult = document.getElementById("resultUnits").value;
	if(conversion != "" && conversionResult != ""){
		let measure = document.getElementById("number").value;
		switch (conversion) {
			case "Celsius":
				Celsius(measure, conversionResult);
				break;
			case "Fahrenheit":
				Fahrenheit(measure, conversionResult);
				break;
			case "Rankine":
				Rankine(measure, conversionResult);
				break;
			case "Kelvin":
				Kelvin(measure, conversionResult);
				break;
			case "Seconds":
				Seconds(measure, conversionResult);
				break;
			case "Minutes":
				Minutes(measure, conversionResult);
				break;
			case "Hours":
				Hours(measure, conversionResult);
				break;
			case "Days":
				Days(measure, conversionResult);
				break;
			case "Meters":
				Meters(measure, conversionResult);
				break;
			case "Kilometers":
				Kilometers(measure, conversionResult);
				break;
			case "Centimeters":
				Centimeters(measure, conversionResult);
				break;
			case "Millimeters":
				Millimeters(measure, conversionResult);
				break;
			case "Nanometers":
				Nanometers(measure, conversionResult);
				break;
			case "Micrometers":
				Micrometers(measure, conversionResult);
				break;
			case "Miles":
				Miles(measure, conversionResult);
				break;
			case "Yards":
				Yards(measure, conversionResult);
				break;
			case "Feet":
				Feet(measure, conversionResult);
				break;
			case "Inches":
				Inches(measure, conversionResult);
				break;
			case "Grams":
				Grams(measure, conversionResult);
				break;
			case "Kilograms":
				Kilograms(measure, conversionResult);
				break;
			case "Milligrams":
				Milligrams(measure, conversionResult);
				break;
			case "Micrograms":
				Micrograms(measure, conversionResult);
				break;
			case "Pounds":
				Pounds(measure, conversionResult);
				break;
			case "Ounces":
				Ounces(measure, conversionResult);
				break;
			case "Tons":
				Tons(measure, conversionResult);
				break;
			default:
				alert("Please select a valid conversion option!");
		}
	
	}
	else {
		alert("Please choose a unit.");
	}
}

function Celsius(temp, conversionResult) {
	if(conversionResult != "Celsius"){
		switch(conversionResult){
			case "Fahrenheit":
				document.getElementById("resulta").innerHTML = (temp * (9/5) + 32).toFixed(2) + "&deg;F";
				break;
			case "Rankine":
				document.getElementById("resulta").innerHTML = (temp * (9/5) + 491.67).toFixed(2)+"&deg;R"
				break;
			case "Kelvin":
				document.getElementById("resulta").innerHTML = (parseFloat(temp) + 273.15).toFixed(2) + "&deg;K"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = temp+"&deg;C";
	}
}

function Fahrenheit(temp, conversionResult) {
	if(conversionResult != "Fahrenheit"){
		switch(conversionResult){
			case "Celsius":
				document.getElementById("resulta").innerHTML = ((temp - 32) * (5/9)).toFixed(2) + "&deg;C";
				break;
			case "Rankine":
				document.getElementById("resulta").innerHTML = ((temp - 32) * (5/9)).toFixed(2) +"&deg;R"
				break;
			case "Kelvin":
				document.getElementById("resulta").innerHTML = ((temp + 459.67) * (5/9)).toFixed(2) + "&deg;K"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = temp+"&deg;F";
	}
}

function Rankine(temp, conversionResult){
	if(conversionResult != "Rankine"){
		switch(conversionResult){
			case "Celsius":
				document.getElementById("resulta").innerHTML = ((temp - 491.67)*(5/9)).toFixed(2) + "&deg;C";
				break;
			case "Fahrenheit":
				document.getElementById("resulta").innerHTML = (temp - 459.67).toFixed(2) +"&deg;F"
				break;
			case "Kelvin":
				document.getElementById("resulta").innerHTML = ((temp * (5/9))).toFixed(2) + "&deg;K"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = temp+"&deg;R";
	}

}
function Kelvin(temp, conversionResult){
	if(conversionResult != "Kelvin"){
		switch(conversionResult){
			case "Celsius":
				document.getElementById("resulta").innerHTML = (temp - 273.15).toFixed(2) + "&deg;C";
				break;
			case "Fahrenheit":
				document.getElementById("resulta").innerHTML = ((temp * (9/5)) - 459.67).toFixed(2) +"&deg;F"
				break;
			case "Rankine":
				document.getElementById("resulta").innerHTML = (temp * (9/5)).toFixed(2) + "&deg;R"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = temp+"&deg;K";
	}

}
//Time
function Seconds(time, conversionResult){
	if(conversionResult != "Seconds"){
		switch(conversionResult){
			case "Minutes":
				document.getElementById("resulta").innerHTML = (time/60) + " minutes";
				break;
			case "Hours":
				document.getElementById("resulta").innerHTML = (time/3600) +" hours"
				break;
			case "Days":
				document.getElementById("resulta").innerHTML = (time/86400) + " days"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = time+" seconds";
	}
}

function Minutes(time, conversionResult){
	if(conversionResult != "Minutes"){
		switch(conversionResult){
			case "Seconds":
				document.getElementById("resulta").innerHTML = (time*60) + " minutes";
				break;
			case "Hours":
				document.getElementById("resulta").innerHTML = (time/60) +" hours"
				break;
			case "Days":
				document.getElementById("resulta").innerHTML = (time/1440) + " days"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = time+" minutes";
	}
}

function Hours(time, conversionResult){
	if(conversionResult != "Hours"){
		switch(conversionResult){
			case "Seconds":
				document.getElementById("resulta").innerHTML = (time*3600) + " minutes";
				break;
			case "Minutes":
				document.getElementById("resulta").innerHTML = (time*60) +" hours"
				break;
			case "Days":
				document.getElementById("resulta").innerHTML = (time/24) + " days"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = time+" hours";
	}
}

function Days(time, conversionResult){
	if(conversionResult != "Days"){
		switch(conversionResult){
			case "Seconds":
				document.getElementById("resulta").innerHTML = (time*86400) + " minutes";
				break;
			case "Minutes":
				document.getElementById("resulta").innerHTML = (time*1440) +" hours"
				break;
			case "Hours":
				document.getElementById("resulta").innerHTML = (time*24) + " days"
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = time+" days";
	}
}

//Length
function Meters(length, conversionResult) {
	if(conversionResult != "Meters"){
		switch(conversionResult){
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length / 1000).toFixed(5) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 100).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 1000).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.000621371).toFixed(5) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 1.09361).toFixed(2) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML = (length * 3.28084).toFixed(2) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 39.3701).toFixed(2) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 1e9).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 1e6).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" m";
	}
}

function Kilometers(length, conversionResult) {
	if(conversionResult != "Kilometers"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length * 1000).toFixed(2) + ' m'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 100000).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 1000000).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.621371).toFixed(5) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 1093.61).toFixed(2) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML = (length * 3280.84).toFixed(2) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 39370.1).toFixed(2) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 1e12).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 1e9).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" km";
	}
}

function Centimeters(length, conversionResult) {
	if(conversionResult != "Centimeters"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length / 100).toFixed(5) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length / 100000).toFixed(5) + ' km'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 10).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.0000062137).toFixed(8) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 0.0109361).toFixed(5) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML = (length * 0.0328084).toFixed(5) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 0.393701).toFixed(5) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 1e7).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 1e4).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" cm";
	}
}

function Millimeters(length, conversionResult) {
	if(conversionResult != "Millimeters"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length / 1000).toFixed(5) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length / 1000000).toFixed(7) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length / 10).toFixed(2) + ' cm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.000000621371).toFixed(9) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 0.00109361).toFixed(6) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML =  (length * 0.00328084).toFixed(6) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 0.0393701).toFixed(5) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 1e6).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 1e3).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" mm";
	}
}

function Miles(length, conversionResult) {
	if(conversionResult != "Miles"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length * 1609.34).toFixed(2) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length * 1.60934).toFixed(2) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 160934).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 1609340).toFixed(2) + ' mm'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 1760).toFixed(2) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML =  (length * 5280).toFixed(2) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 63360).toFixed(2) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 1.609e+12).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 1.609e+9).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" mi";
	}
}

function Yards(length, conversionResult) {
	if(conversionResult != "Yards"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length * 0.9144).toFixed(2) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length * 0.0009144).toFixed(6) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 91.44).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 914.4).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML =(length * 0.000568182).toFixed(6) + ' mi'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML =  (length * 3).toFixed(2) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 36).toFixed(2) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 9.144e8).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 9.144e5).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" yd";
	}
}

function Feet(length, conversionResult) {
	if(conversionResult != "Feet"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length * 0.3048).toFixed(2) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length * 0.0003048).toFixed(6) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 30.48).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 304.8).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.000189394).toFixed(6) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 0.333333).toFixed(2) + ' yd'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length * 12).toFixed(2) + ' in'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 3.048e8).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 3.048e5).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" ft";
	}
}

function Inches(length, conversionResult) {
	if(conversionResult != "Inches"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length * 0.0254).toFixed(4) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length * 0.0000254).toFixed(8) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length * 2.54).toFixed(2) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length * 25.4).toFixed(2) + ' mm'
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length * 0.0000157828).toFixed(10) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length * 0.0277778).toFixed(7) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML = (length * 0.0833333).toFixed(7) + ' ft'
				break;
			case "Nanometers":
				document.getElementById("resulta").innerHTML = (length * 2.54e7).toFixed(0) + ' nm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length * 2.54e4).toFixed(0) + ' &mu;m'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" in";
	}
}

function Nanometers(length, conversionResult) {
	if(conversionResult != "Nanometers"){
		switch(conversionResult){
			case "Meters":
				document.getElementById("resulta").innerHTML = (length / 1e9).toFixed(9) + ' m'
				break;
			case "Kilometers":
				document.getElementById("resulta").innerHTML = (length / 1e12).toFixed(12) + ' km'
				break;
			case "Centimeters":
				document.getElementById("resulta").innerHTML = (length / 1e7).toFixed(7) + ' cm'
				break;
			case "Millimeters":
				document.getElementById("resulta").innerHTML = (length / 1e6).toFixed(6) + ' mm'
				break;
			case "Micrometers":
				document.getElementById("resulta").innerHTML = (length / 1e3).toFixed(3) + ' &mu;m';
				break;
			case "Miles":
				document.getElementById("resulta").innerHTML = (length / 1.609e+12).toFixed(12) + ' mi'
				break;
			case "Yards":
				document.getElementById("resulta").innerHTML = (length / 9.144e8).toFixed(9) + ' yd'
				break;
			case "Feet":
				document.getElementById("resulta").innerHTML = (length / 3.048e8).toFixed(9) + ' ft'
				break;
			case "Inches":
				document.getElementById("resulta").innerHTML = (length / 2.54e7).toFixed(7) + ' in'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = length+" nm";
	}
}

	function Micrometers(length, conversionResult) {
		if(conversionResult != "Micrometers"){
			switch(conversionResult){
				case "Meters":
					document.getElementById("resulta").innerHTML = (length / 1e6).toFixed(6) + ' m'
					break;
				case "Kilometers":
					document.getElementById("resulta").innerHTML = (length / 1e9).toFixed(9) + ' km'
					break;
				case "Centimeters":
					document.getElementById("resulta").innerHTML = (length / 1e4).toFixed(4) + ' cm'
					break;
				case "Millimeters":
					document.getElementById("resulta").innerHTML = (length / 1e3).toFixed(3) + ' mm'
					break;
				case "Nanometers":
					document.getElementById("resulta").innerHTML = (length * 1e3).toFixed(0) + ' nm';
					break;
				case "Miles":
					document.getElementById("resulta").innerHTML = (length / 1.609e+9).toFixed(9) + ' mi'
					break;
				case "Yards":
					document.getElementById("resulta").innerHTML = (length / 9.144e5).toFixed(6) + ' yd'
					break;
				case "Feet":
					document.getElementById("resulta").innerHTML = (length / 3.048e5).toFixed(6) + ' ft'
					break;
				case "Inches":
					document.getElementById("resulta").innerHTML = (length / 2.54e4).toFixed(4) + ' in'
					break;
			}
		}
		else{
			document.getElementById('resulta').innerHTML = length+" &mu;m";
		}
}



//Mass
function Micrograms(mass, conversionResult) {
	if(conversionResult != "Micrograms"){
		switch(conversionResult){
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass / 1000000).toFixed(2) + ' g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass / 1000000000).toFixed(2) + ' kg'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass / 1000).toFixed(2) + ' mg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML = (mass * 2.20462e-9).toFixed(12) + ' lb'
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML = (mass * 3.5274e-8).toFixed(12) + ' oz';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 1.10231e-12).toFixed(15) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" &mu;g";
	}
}

function Grams(mass, conversionResult) {
	if(conversionResult != "Grams"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 1000000).toFixed(2) + ' &mu;g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass / 1000).toFixed(5) + ' kg'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass * 1000).toFixed(2) + ' mg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML = (mass * 0.00220462).toFixed(5) + ' lb'
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML = (mass * 0.035274).toFixed(5) + ' oz';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 0.00000110231).toFixed(8) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" g";
	}
}

function Kilograms(mass, conversionResult) {
	if(conversionResult != "Kilograms"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 1000000000).toFixed(2) + ' &mu;g'
				break;
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass * 1000).toFixed(2) + ' g'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass * 1000000).toFixed(2) + ' mg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML = (mass * 2.20462).toFixed(5) + ' lb'
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML = (mass * 35.274).toFixed(5) + ' oz';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 0.00110231).toFixed(8) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" kg";
	}
}

function Milligrams(mass, conversionResult) {
	if(conversionResult != "Milligrams"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 1000).toFixed(2) + ' &mu;g'
				break;
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass / 1000).toFixed(5) + ' g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass / 1000000).toFixed(8) + ' kg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML = (mass * 0.00000220462).toFixed(8) + ' lb'
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML = (mass * 0.000035274).toFixed(8) + ' oz';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 0.00000000110231).toFixed(11) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" mg";
	}
}

function Pounds(mass, conversionResult) {
	if(conversionResult != "Pounds"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 453592000).toFixed(2) + ' &mu;g'
				break;
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass * 453.592).toFixed(2) + ' g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass * 0.453592).toFixed(6) + ' kg'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass * 453592).toFixed(2) + ' mg'
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML =  (mass * 16).toFixed(2) + ' oz';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 0.0005).toFixed(4) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" lb";
	}
}


function Ounces(mass, conversionResult) {
	if(conversionResult != "Ounces"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 28349500).toFixed(2) + ' &mu;g'
				break;
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass * 28.3495).toFixed(2) + ' g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass * 0.0283495).toFixed(6) + ' kg'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass * 28349.5).toFixed(2) + ' mg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML =  (mass * 0.0625).toFixed(4) + ' lb';
				break;
			case "Tons":
				document.getElementById("resulta").innerHTML = (mass * 0.00003125).toFixed(8) + ' ton'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" oz";
	}
}

function Tons(mass, conversionResult) {
	if(conversionResult != "Tons"){
		switch(conversionResult){
			case "Micrograms":
				document.getElementById("resulta").innerHTML = (mass * 907184740000).toFixed(2) + ' &mu;g'
				break;
			case "Grams":
				document.getElementById("resulta").innerHTML = (mass * 907184.74).toFixed(2) + ' g'
				break;
			case "Kilograms":
				document.getElementById("resulta").innerHTML = (mass * 907.185).toFixed(3) + ' kg'
				break;
			case "Milligrams":
				document.getElementById("resulta").innerHTML = (mass * 907184740).toFixed(2) + ' mg'
				break;
			case "Pounds":
				document.getElementById("resulta").innerHTML =  (mass * 2000).toFixed(2) + ' lb';
				break;
			case "Ounces":
				document.getElementById("resulta").innerHTML = (mass * 32000).toFixed(2) + ' oz'
				break;
		}
	}
	else{
		document.getElementById('resulta').innerHTML = mass+" ton";
	}
}

