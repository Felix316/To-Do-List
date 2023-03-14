



function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const websiteName = document.createElement("h1");
    websiteName.classList.add("title");
    websiteName.textContent = "To-Do-List";

    header.appendChild(websiteName);

    return header;
}

function createForm() {
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.classList.add("todo-input");

    const button = document.createElement("button");

    return form;
}

function createInput(){
    const input = document.createElement("input");
    input.classList.add("todo-input");

    return input;
}



function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createInput());
    content.appendChild(createForm());
}

export default initializeWebsite;