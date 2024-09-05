const mainFunction = () => {
    let redVal = document.getElementById("red").value;
    let greenVal = document.getElementById("green").value;
    let blueVal = document.getElementById("blue").value;
    document.getElementById("scn").style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";

    document.getElementById("rN").innerHTML = "Red " + "[" + redVal + "]";
    document.getElementById("gN").innerHTML = "Green " + "[" + greenVal + "]";
    document.getElementById("bN").innerHTML = "Blue " + "[" + blueVal + "]";
}




