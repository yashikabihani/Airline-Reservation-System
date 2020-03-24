


function search(){
    var source = document.getElementById("source").value;
    var destination = document.getElementById("destination").value;
    var pass = document.getElementById("seats").value;
        window.location = 'results.html';
        localStorage.setItem("source", source);
        localStorage.setItem("destination", destination);
        localStorage.setItem("pass", pass);
}


