
import React from "react";
import './css.css';

const ListaTarefas = () =>{
    return (
        <section className="secListaTarefas">
            <h1>Lista de Tarefas</h1>
            <form>
                <input type="text" placeholder="Adicione uma tarefa!" />
                <button type="submit" className="add">Add</button>
            </form>
            <div className="listaTarefas">
                {/* <div className="item">
                    <span>Tarefa de Exemplo</span>
                    <button>Deletar</button>
                </div>
                <div className="itemCompleto">
                    <span>Tarefa de Exemplo</span>
                    <button>Deletar</button>
                </div> */}
            </div>
        </section>
    );
}

export default ListaTarefas;