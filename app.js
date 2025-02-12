/*===========================theme================================*/

let styleMode = localStorage.getItem('styleMode'); 
const themeBtn = document.querySelector('.theme-button') 
 
const addDarkStyle = function(){ 
  document.body.classList.add('darkstyle'); 
  localStorage.setItem('styleMode', 'dark'); 
} 
 
const removeDarkStyle = function(){ 
  document.body.classList.remove('darkstyle'); 
  localStorage.setItem('styleMode', null); 
} 
 
themeBtn.addEventListener('click', () => { 
  styleMode = localStorage.getItem('styleMode'); 
 
  if(styleMode !== 'dark'){ 
    addDarkStyle(); 
  } else { 
    removeDarkStyle(); 
  } 

})
 
if(styleMode === 'dark'){ 
  addDarkStyle(); 
} else { 
  removeDarkStyle(); 
}


/*------------------------------list----------------------------*/

const addButton = document.getElementById('add-btn')
const input = document.getElementById('input')
const list = document.getElementById('list')

loadTask()

function addTask(){

  const task = input.value.trim();

  if(task) {
    createTask(task);
    input.value = '';

    saveTask();

  } else {
    alert('Please enter a task!')
  }
}

addButton.addEventListener('click', addTask)

function createTask(task){

  const listItem = document.createElement('div');
  listItem.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'btn-delete';
  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);

  deleteBtn.addEventListener('click', function(){
    list.removeChild(listItem)
    saveTask();
  })



}

function saveTask() {
  let tasks = [];
  list.querySelectorAll('div').forEach(function(item) {
    tasks.push(item.textContent.replace('X', '').trim());
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

function loadTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(createTask);

}
