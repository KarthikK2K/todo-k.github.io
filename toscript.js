const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deleteAllButton = document.querySelector(".delete-all");
const filters = document.querySelectorAll(".filter");
let filter = '';

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } 
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"  ){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function geeks() {
    let x = document.lastModified;
    document.getElementById("sudo").innerHTML = x;
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
filters.forEach(function (el) {
    el.addEventListener("click", (e) => {
      if (el.classList.contains('checked')) {
        el.classList.remove('checked');
        filter = '';
      } else {
        filters.forEach(tag => tag.classList.remove('checked'));
        el.classList.add('checked');
        filter = e.target.dataset.filter;
      }
      showTask();
    });
  });
  
deleteAllButton.addEventListener("click",() => {
    listContainer.innerHTML='';
    todosJson = [];
    localStorage.setItem("todos", JSON.stringify(todosJson));

    //showTask();
  });
  document.getElementById('redirect-button').addEventListener('click', function() {
    // Replace 'your-username' with your actual GitHub username
    window.open('https://www.linkedin.com/in/karthik-m-s-134007219/', '_blank');
    window.location.href = githubProfileUrl;
  });
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();