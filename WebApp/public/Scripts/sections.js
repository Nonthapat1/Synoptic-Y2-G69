function showDiv(id){
  var list= document.getElementsByClassName('section');
  for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
  }
  var newId = id + "2";

  document.getElementById(newId).style.display = "block";
}
