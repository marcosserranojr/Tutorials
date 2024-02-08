const showTask = async () => {
    //console.log(id);
    try {
      const {task} = await axios.get("/api/v1/tasks/64d512a7f4c25a67acd74206")
      console.log(task);
    }
    catch(error){ console.log(error)}
}
showTask();
      