import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [addNew, setNew] = useState(categories[1])
  const [addNewName, setNewName] = useState('')
    const newOpt = categories.map((category) =>{
      if(category!=='All'){
      return <option key = {category}>{category}</option>
      }
      else{
        return ""
      }
    })
    

    function handleSubmit(e){
      e.preventDefault()
      console.log("Form submitted!")
      const newItem = {
        text: addNewName,
        category: addNew
      }
      onTaskFormSubmit(newItem);
      
    }
  

  return (
    <form className="new-task-form" onSubmit = {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) =>{setNewName(e.target.value)}}/>
      </label>
      <label>
        Category
        <select name="category" onChange ={(e) =>{setNew(e.target.value)}}>
          {newOpt}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
