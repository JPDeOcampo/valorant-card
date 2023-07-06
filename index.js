filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.querySelectorAll(".container");
  if (c == "all") {
      c = "";
  }
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].id.indexOf(c) > -1) {
       AddClass(x[i], "show");
    }
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.id.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
    
  }
  element.className = arr1.join(" ");
}

function mySearch() {
    // Declare variables
    var input, filter, container, a, i, txtValue;
    input = document.querySelector('#search');
    filter = input.value.toUpperCase();
    container = document.querySelectorAll(".container");
  
   
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < container.length; i++) {
      a = container[i].querySelectorAll("h2")[0];
      txtValue = a.textContent || a.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        container[i].style.display = "";
      } else {
        container[i].style.display = "none";
      }
      console.log(container[i]);
    }
    console.log(txtValue.toUpperCase().indexOf(filter));
  }
  