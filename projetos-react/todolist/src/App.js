import React, {useState, useEffect, useMemo} from 'react';
import './assets/style.css';

export default function App(){


  const[tarefas, setTarefas] = useState([]);

  const[input, setInput] = useState('');

  useEffect(()=> {
    const tarefaStorage = localStorage.getItem('tarefas');

    if(tarefaStorage){
      setTarefas(JSON.parse(tarefaStorage));
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  },[tarefas])

  function adicionarTarefas(){
    if (input.trim() !== '') {
      setTarefas([...tarefas, input]);
      setInput('');
    }
  }

  const totalTarefas = useMemo(()=>tarefas.length,[tarefas]);

  return(
    <div className='container'>
      <h1>
        To do list
      </h1>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={e=>setInput(e.target.value)} ></input>
      <button type='button' onClick={adicionarTarefas}>Adicionar Tarefa</button>

      <br/>
      <strong> Total de tarefas: {totalTarefas}</strong>      
      <br/>
    </div>
  );
}