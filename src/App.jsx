import './App.css';

import { useState } from 'react';

import Button from './Components/Button/Index';
import Modal from './Components/Modal/Index';

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <>
      <main className="App">
        <h1 className="titulo titulo-hover">Feedback de Exercícios</h1>
        <p className="texto">
          Clique no botão abaixo para dar feedback no exercício recebido.
        </p>
        <Button value="Dar Feedback!" func={showModal} />
        <Modal show={show} setShow={setShow} />
      </main>
    </>
  );
}

export default App;
