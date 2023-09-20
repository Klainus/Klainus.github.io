function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkbtn.innerHTML = "Exit Dark Mode";
        element.classList.add("darkModeTransition");
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkbtn.innerHTML = "Enter Dark Mode";
        element.classList.remove("darkModeTransition");
        localStorage.removeItem("darkMode");
    }
}

function munkClick() {
    alert("Välkommen till den godaste sidan!");
}

document.getElementById("munkBtn").onclick = function() {
    munkClick();
}

function checkDarkMode() {
    var element = document.body;
    var darkModeOn = localStorage.getItem("darkMode");
    if (darkModeOn === "enabled") {
        element.classList.add("dark-mode");
        darkbtn.innerHTML = "Exit Dark Mode";
    }
}