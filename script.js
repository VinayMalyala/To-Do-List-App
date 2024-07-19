const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementsByTagName("button")[0];


button.addEventListener("click", () => {
    if(inputBox.value === ''){
        alert("You must write something!");
    }else{
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
});

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        let li = e.target.parentElement;
        listContainer.removeChild(li);
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("listContainer");
}

showTask();
