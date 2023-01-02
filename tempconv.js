cel = () => {
    var cel = parseFloat(document.getElementById("cel").value); 

    var far = (cel * (9.0 / 5)) + 32;
    document.getElementById("far").value = far;
    document.getElementById("kel").value = cel + 273.15;
}

far = () => {
    var far = parseFloat(document.getElementById("far").value);

    var cel = (far - 32) * (5.0 / 9);

    document.getElementById("cel").value = cel;
    document.getElementById("kel").value = cel + 273.15;
}

kel = () => {
    var kel = parseFloat(document.getElementById("kel").value);


    var cel = kel - 273.15;
    var far = (cel * (9.0 / 5)) + 32;

    document.getElementById("cel").value = cel;
    document.getElementById("far").value = far;

}

