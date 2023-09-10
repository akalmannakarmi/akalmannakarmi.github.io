fetch('details/projects/autoCliper.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById("accordion1-body").innerHTML=data;
});
fetch('details/projects/autoCliper.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById("accordion2-body").innerHTML=data;
});
fetch('details/projects/autoCliper.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById("accordion3-body").innerHTML=data;
});