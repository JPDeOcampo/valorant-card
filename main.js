window.addEventListener("load", () => {
  
  const apiURL = 'https://valorant-api.com/v1/agents';

  const container = document.querySelector('.containers')


  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      data.data.forEach(element => {
        if (element.fullPortrait !== null) {
          filterSelection("all");
          const classAgentLower = element.displayName.toLowerCase();
          const classAgent = classAgentLower.replace(/[^\w\s]/, '');
          const roleLower = element.role.displayName.toLowerCase();
          const cardContent = 
          `<div class="container d-none" id="${roleLower}" name="controller">
                <h2 id="val-agent" name="val-agent"><a>${element.displayName}</a></h2>
                <p></p>
              <div class="card ${classAgent}" style="background-image: url(${element.background}); background-position: center;
              background-repeat: no-repeat; background-size: cover;">
                <div class="card-logo-top">
                    <div class="tri-left-top"></div>
                    <div class="tri-right-top"></div>
                </div>
                <div class="border">
                    <p class="p-top">${element.displayName}</p>
                    <div class="tri-top"></div>
                    <p class="p-vertical p-lt"></p>
                    <img class="val-type vt-rt" src="${element.role.displayIcon}" alt="controller"/>
                    <p class="p-vertical p-rt p-type" id="val-type" name="val-type">${element.role.displayName}</p>
                    <div class="tri-bot"></div>
                    <p class="p-bottom">${element.displayName}</p>
                </div>
                <div class="card-logo-bottom">
                    <div class="tri-left-bottom"></div>
                    <div class="tri-right-bottom"></div>
                </div>
            </div>
            <img class="val-agents" srcset="${element.fullPortrait}" alt="${element.displayName}"/>
          </div>`


          // Create a new container div for each element
          const cardContainer = document.createElement('div');
          cardContainer.innerHTML = cardContent;

          // Append the container to the main container
          container.prepend(cardContainer);
          console.log(element.length);
        }
      });


    })
    .catch(error => {
      console.log(error);
    })
});
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




