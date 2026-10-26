// JavaScript basics: array, variables, loop, condition, function, and click event.
const button = document.getElementById("showBtn");
const result = document.getElementById("result");
const topics = ["HTML", "CSS", "JavaScript"];

button.addEventListener("click", function () {
    let message = "Today I reviewed: ";

    for (let i = 0; i < topics.length; i++) {
        message += topics[i];
        if (i < topics.length - 1) {
            message += ", ";
        }
    }

    result.textContent = message;
});
