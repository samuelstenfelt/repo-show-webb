window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

function backgroundFunction() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdownMenu");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function changeBackground(getColor) {
  let dropdown = document.querySelector('.body');
  let dropdownContent = getColor.Value;
  body.style.background = dropdownContent;
}

function printClr(clr) {
  document.body.style.backgroundColor = clr;
  console.log(clr);
}
