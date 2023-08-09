import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import './App.css';

import Header from './Componentes/Header/Header.jsx';
import ListaTarefas from './Componentes/Main/ListaTarefas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header></Header>
      <ListaTarefas></ListaTarefas>
  </React.StrictMode>,
);
