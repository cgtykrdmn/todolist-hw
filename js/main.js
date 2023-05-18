const alertDOM = document.querySelector("#alert")


function removeElement(){  
    let liDOMdelete = document.querySelector("li")
    liDOMdelete.remove()

    console.log("Task has been deleted")
    }

function newElement(){
    const newTask = document.querySelector("#task")
   if(newTask.value){
    addItem(newTask.value)
    console.log(newTask.value)
    newTask.value=""
   }else{
    console.log("Unknown")
    $('.toast').toast("show")
   }
}   

const newList = document.querySelector("#list")

function addItem(task){
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${task}`
    newList.append(liDOM)
}

