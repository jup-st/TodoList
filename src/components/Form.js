import React, {useState} from "react";
function Form(props){
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(name !== ''){
      props.addTask(name);
      setName("");
    }
    else{
      alert("Task name can't be empty")
    }
  }
    return(
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}
export default Form;