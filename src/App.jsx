import { useState } from 'react'
import "./index.css";
import Navbar from "./components/Navbar";
// import { useEffect } from "react";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = (id)=>{
    const itemToEdit = todos.find(items => items.id !== id)
    if(itemToEdit){
      setTodos(itemToEdit.todo)
      handleDelete(id)
    }

  }
  const handleDelete = (id)=>{
    
    const confirmation  = confirm("Are you sure")
    if( confirmation == true){
      setTodos(todos.filter(item => item.id !== id));
    }
    
  };
  const handleAdd = ()=>{
    if (todo.trim() !== "") {  // Ensure empty todos are not added
      setTodos([...todos, { id: Date.now(), todo, isComplete: false }]); 
      setTodo(""); // Clear input after addingxx
    }
  };

  const handleCheck = (e) => {
    let id = parseInt(e.target.name, 10); // Ensure id is an integer
    const newTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    setTodos(newTodos); // Update state with a new array
  };

  const handleChange = (e)=>{
    setTodo(e.target.value)
    
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-slate-400 p-5 my-4 rounded-lg min-h-[80vh]">
        <div className="addTodo">
          <h1 className="text=lg font-bold">Add Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className="w-80 border-black rounded-sm border-2" />
          <button onClick={handleAdd} className="bg-violet-500 p-3 py-1 mx-3 font-bold rounded-lg cursor-pointer">Add Todo</button>
        </div>
        <h2 className="text-lg font-bold">Your&apos;s ToDos</h2>
        <div className="todos">
        {todos.length === 0 && <div className='mx-5 my-3 text-black font-bold text-lg'>No Todos</div>}
        {todos.map(items =>{

        
         return <div key={items.id} className="todo flex justify-between w-1/4 my-4 items-center">
            <div className={items.isComplete?"line-through":""}>
            <input
                className="mx-4"
                type="checkbox"
                name={items.id.toString()}
                onChange={handleCheck}
                checked={items.isComplete}
              />
            {items.todo}
            </div>
            <div className="btn">
              <button onClick={() =>handleEdit(items.id)} className="bg-violet-500 p-3 py-1 mx-1 font-bold rounded-lg">Edit</button>
              <button onClick={()=>handleDelete(items.id)} className="bg-violet-500 p-3 py-1 mx-1 font-bold rounded-lg">Delete</button>
            </div>
          </div>
        })}
        </div>
      </div>
    </>
  );
}

export default App;
