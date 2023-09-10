fetch('details/myinfo/intro.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById("my-info").innerHTML=data;
});