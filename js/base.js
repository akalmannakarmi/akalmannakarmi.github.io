fetch('details/index/navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById("my-navbar").innerHTML=data;
});
fetch('details/myinfo/intro.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById("my-info").innerHTML=data;
});
fetch('details/myinfo/projects.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById("my-projects").innerHTML=data;
});