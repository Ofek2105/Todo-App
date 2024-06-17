const inputBox = document.getElementById("input_box")
const listContainer = document.getElementById("list_container")
const note_sheet = document.getElementById("note_sheet")

listContainer.addEventListener("click", check_event)
note_sheet.addEventListener("click", edit_title_event)

function check_event(e){
    console.log(e.target.tagName);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        }
    }
}

function edit_title_event(e){
    console.log(e.target.tagName);

    if(e.target.tagName == "IMG" || e.target.tagName == "H2"){
        let title = prompt("Please enter your a new title:");
        if (title == NaN || title == ""){
            console.log("user canceled title selection")
        }
        else{
            title = e.target.innerText = title
        }
    }
    
    
}

function addTask(){

    if (inputBox.value === ''){
        alert("You must Enter something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        saveData()
    }
    inputBox.value = "";
}

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML)
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("tasks")
}

displayData()
