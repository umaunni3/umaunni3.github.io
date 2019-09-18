function openCourse(evt, courseName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(courseName).style.display = "block";
  evt.currentTarget.className += " active";
}
//Fade in Tabs:
//If you want to fade in the tab content, add the following CSS:
//
//Example
//.tabcontent {
//  animation: fadeEffect 1s; /* Fading effect takes 1 second */
//}
//
///* Go from zero to full opacity */
//@keyframes fadeEffect {
//  from {opacity: 0;}
//  to {opacity: 1;}
//}