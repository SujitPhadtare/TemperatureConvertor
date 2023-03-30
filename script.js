cel = () => {
  var farVal = document.getElementById("far");
  var kelVal = document.getElementById("kel");
  var celVal = document.getElementById("cel");
  var cel = parseFloat(celVal.value);
  var far = cel * (9.0 / 5) + 32;
  if (!isNaN(far)) {
    farVal.value = far.toFixed(2);
    kelVal.value = (cel + 273.15).toFixed(2);
  } else {
    farVal.value = null;
    kelVal.value = null;
  }
};

far = () => {
  var farVal = document.getElementById("far");
  var kelVal = document.getElementById("kel");
  var celVal = document.getElementById("cel");

  var far = parseFloat(farVal.value);

  var cel = (far - 32) * (5.0 / 9);
  if (!isNaN(cel)) {
    celVal.value = cel.toFixed(2);
    kelVal.value = (cel + 273.15).toFixed(2);
  } else {
    celVal.value = null;
    kelVal.value = null;
  }
};

kel = () => {
  var farVal = document.getElementById("far");
  var kelVal = document.getElementById("kel");
  var celVal = document.getElementById("cel");

  var kel = parseFloat(kelVal.value);

  var cel = kel - 273.15;
  var far = cel * (9.0 / 5) + 32;
  if (!isNaN(kel)) {
    celVal.value = cel.toFixed(2);
    farVal.value = far.toFixed(2);
  } else {
    celVal.value = null;
    farVal.value = null;
  }
};
