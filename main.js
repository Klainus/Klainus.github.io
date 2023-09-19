function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkbtn.innerHTML = "Exit Dark Mode";
    } else {
        darkbtn.innerHTML = "Enter Dark Mode";
    }
}

function munkClick() {
    alert("Välkommen till den godaste sidan!");
}

document.getElementById("munkBtn").onclick = function() {
    munkClick();
}