function openDropdown(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("dropdown-menu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementsByClassName(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}