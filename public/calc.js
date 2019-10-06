var elem_a = document.getElementById('el_a');
var elem_b = document.getElementById('el_b');
var elem_r = document.getElementById('el_r');

function myAdd() {
  let a = elem_a.value;
  let b = elem_b.value;
  let r = Number(a) + Number(b);
  elem_r.innerHTML = r;
}


