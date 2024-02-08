const taskIDDOM = document.querySelector('.task-edit-id')
const taskNameDOM = document.querySelector('.task-edit-name')
const taskCompletedDOM = document.querySelector('.task-edit-completed')
const editFormDOM = document.querySelector('.single-task-form')
const editBtnDOM = document.querySelector('.task-edit-btn')
const formAlertDOM = document.querySelector('.form-alert')
const params = window.location.search
const id = new URLSearchParams(params).get('id')
let tempName

const showTask = async () => {
  console.log(id);
  var {data: tasks}={};
  try {
    
    tasks = await axios.get(`/api/v1/tasks/${id}`);   
  
  } catch (error) {
    console.log(error)
  }
  console.log({tasks});
  
  const {data:{task:{ completed, _id: taskID, name } }}= tasks;

  console.log(completed,name, {id: taskID});
  
  taskIDDOM.textContent = taskID
  taskNameDOM.value = name
  tempName = name
  if (completed) {
    taskCompletedDOM.checked = true
  }
}

showTask()

editFormDOM.addEventListener('submit', async (e) => {
  editBtnDOM.textContent = 'Loading...'
  e.preventDefault()
  
    const taskName = taskNameDOM.value
    const taskCompleted = taskCompletedDOM.checked

    var {data:  task }={};
    
    try {
      task = await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    })
        
  } catch (error) {
    console.log(error)
    taskNameDOM.value = tempName
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = `error, please try again`
  }
  console.log(task); 

  const {data:{ completed, _id: taskID, name } }= task 

  taskIDDOM.textContent = taskID
  taskNameDOM.value = name
  tempName = name
  if (completed) {
    taskCompletedDOM.checked = true
  }
  formAlertDOM.style.display = 'block'
  formAlertDOM.textContent = `success, edited task`
  formAlertDOM.classList.add('text-success')


  editBtnDOM.textContent = 'Edit'
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-success')
  }, 3000) 
});
