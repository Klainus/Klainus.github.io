function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkbtn.innerHTML = "Exit Dark Mode";
    } else {
        darkbtn.innerHTML = "Enter Dark Mode";
    }
}