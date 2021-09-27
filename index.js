function hellow(options) {
    let elhi = document.querySelector("#hi");
    elhi.textContent = "Hi There !";
    if (options.time === "morning"){
        elhi.textContent = "Good Morning Dude !";
    }
    if (options.time === "night") {
        elhi.textContent = "Good Night Dude !";
    }
}
//hellow({time:"morning"})
module.exports.hellow = hellow;