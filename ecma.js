// HTML Event Handler
function oldSchool() {
    document.getElementById("htmlEH").innerText = "This is bad practice. Don't use this one.";
}

// Traditional DOM Handler
const tradText = () => {
    document.getElementById("traditional").innerText = "You can only attach one function to this event handler.";
};
document.getElementsByTagName("input")[1].onclick = tradText;

// Level 2 Event Listener
const alertMe = () => {
    alert("Use This!");
};

const level2Text = () => {
    document.getElementById("level2").innerHTML = "You can attach one or more functions to this event handler";
};

const addNums = (x = 0, y = 0) => {
    document.getElementById("level2").innerHTML += `<br/>${x} + ${y} = ${x + y}`;
};

const level2Button = document.getElementsByTagName("input")[2];
level2Button.addEventListener("click", () => {
    alertMe();
    level2Text();
    addNums(7, 5);
    addNums(36);
}, false);

// UI Event
const displayInfo = () => {
    const pageURL = document.URL;
    const lastModified = document.lastModified;
    document.getElementById("pageURL").innerText = `Page URL: ${pageURL}`;
    document.getElementById("myLastUpdate").innerText = `Last Update: ${lastModified}`;
};
window.addEventListener("load", displayInfo);

// Keyboard Event
const myText = document.getElementsByTagName("input")[3];
let keyCount = 0;
const countKeys = () => {
    keyCount++;
    document.getElementById("pressNumber").innerText = `You have pressed a key ${keyCount} times.`;
};
myText.addEventListener("keydown", countKeys);

// Mouse Event
const mouseText = document.getElementById("danger");
const changeText = () => {
    mouseText.innerHTML = "<b>You have changed the text.</b>";
};
mouseText.addEventListener("dblclick", changeText);

// Focus Event
const focusText = document.getElementsByClassName("blurText")[0];
const changeToUpper = () => {
    focusText.style.textTransform = "uppercase";
};
focusText.addEventListener("blur", changeToUpper);

// Form Events
const dropD = document.getElementById("js");
const ddText = document.getElementById("selectText");

const selectedChoice = () => {
    const yourChoice = dropD.options[dropD.selectedIndex].value;
    let printChoice;
    switch (yourChoice) {
        case "javascript":
            printChoice = "Javascript is the base for all of these.";
            break;
        case "jQuery":
            printChoice = "You will learn jQuery this semester.";
            break;
        case "Angular":
            printChoice = "Angular is a very popular Javascript framework.";
            break;
        case "React":
            printChoice = "You will learn React in advanced web courses.";
            break;
        default:
            printChoice = "What did you choose?";
            break;
    }
    ddText.innerText = printChoice;
};
dropD.addEventListener('change', selectedChoice);

// Add/Delete List
const addBtn = document.getElementsByTagName('button')[0];
const itemList = document.getElementById('myList');

const addItem = () => {
    const newItem = prompt("Add Item:");
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(newItem);
    newLi.appendChild(newLiText);
    itemList.appendChild(newLi);
};
addBtn.addEventListener('click', addItem);

const deleteItem = (e) => {
    const target = e.target;
    const targetParent = target.parentNode;
    targetParent.removeChild(target);
};
itemList.addEventListener('click', deleteItem);
