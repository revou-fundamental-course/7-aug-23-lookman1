var regex = /^\d+$/;

function hitungKeliling() {
  var sisiA = parseFloat(document.getElementById("sisi-a").value);
  var sisiB = parseFloat(document.getElementById("sisi-b").value);
  var sisiC = parseFloat(document.getElementById("sisi-c").value);

  var keliling = sisiA + sisiB + sisiC;

  if (!regex.test(sisiA) || !regex.test(sisiB) || !regex.test(sisiC)) {
    alert("Masukkan angka dengan benar!!");
  }
  document.getElementById("hasilKeliling").value = keliling;
}

function hitungLuas() {
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!regex.test(alas) || !regex.test(tinggi)) {
    alert("Masukkan angka dengan benar!!");
  }

  var luas = (alas * tinggi) / 2;
  document.getElementById("hasilLuas").value = luas;
}

function resetKeliling() {
  document.getElementById("sisi-a").value = "";
  document.getElementById("sisi-b").value = "";
  document.getElementById("sisi-c").value = "";
  document.getElementById("hasilKeliling").value = "";
}
function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("hasilLuas").value = "";
}
