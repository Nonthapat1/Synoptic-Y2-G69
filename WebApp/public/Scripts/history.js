function showP(id){
  var list= document.getElementsByTagName('p');
  for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
  }

  var elements = document.getElementsByClassName(id);
  for (var i in elements) {
    elements[i].style.display = "block";
  }
}
