
import React, { useState, useEffect } from "react";
import './css.css';

const ListaTarefas = () =>{
    const listaStorage = localStorage.getItem('Lista');

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState('');

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));
    },[lista]);

    const addItem = form => {
        form.preventDefault();
        if(!novoItem){
            document.querySelector('#inputEntrada').focus();
            return
        }
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem('');
        document.querySelector('#inputEntrada').focus();
    }

    const clicou = i => {
        const listaAuxiliar = [...lista];
        listaAuxiliar[i].isCompleted = !listaAuxiliar[i].isCompleted;
        setLista(listaAuxiliar);
    }

    const deletar = i => {
        const listaAuxiliar = [...lista];
        listaAuxiliar.splice(i, 1);
        setLista(listaAuxiliar);
    }

    const newListItem = lista => {
        return lista.length < 1 ? <p className="listEmpty">Lista de tarefas vazia, adicione um item acima.</p> : lista.map((item, i) => (
            <div key={i} className={item.isCompleted === true ? 'itemCompleto' : 'item'}>
                <span onClick={()=>(clicou(i))}>{item.text}</span>
                <button onClick={()=>(deletar(i))} className="itemsButton">Deletar</button>
            </div>
        ));
    }

    const deleteAll = () => setLista([]);

    const showDeleteAll = lista => lista.length > 1 && 
        <div className="apagarTudo">
            <span class="material-symbols-outlined">arrow_forward</span>
            <button onClick={()=>(deleteAll())}>Apagar Tudo</button>
        </div>

    return (
        <section className="secListaTarefas">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={addItem}>
                <input id="inputEntrada" type="text" value={novoItem} onChange={(e) => {setNovoItem(e.target.value)}} autoComplete="off" placeholder="Adicione uma tarefa!" />
                <button type="submit" className="add">Add</button>
            </form>
            <div className="listaTarefas">
                { newListItem(lista) }
                { showDeleteAll(lista) }
            </div>
        </section>
    );
}

export default ListaTarefas;