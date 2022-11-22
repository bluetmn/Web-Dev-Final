function showCreate() {
    var element = document.getElementById("createForm");
    var element2 = document.getElementById("hideButton");
    var element3 = document.getElementById("createButton");
    element.classList.remove("invisible");
    element2.classList.remove("invisible");
    element3.classList.add("invisible");
  }
  
function hideCreate() {
  var element = document.getElementById("createForm");
  var element2 = document.getElementById("hideButton");
  var element3 = document.getElementById("createButton");
  element.classList.add("invisible");
  element2.classList.add("invisible");
  element3.classList.remove("invisible");
}