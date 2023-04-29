import './App.css';

import { useState } from 'react';
import { showModal } from './Func/modal';
import { initialFeedback } from './Func/feedback';
import tags from './Data/tags';

import Button from './Components/Button/Index';
import Modal from './Components/Modal/Index';

function App() {
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState(initialFeedback);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('event');
  };

  //console.log(feedback);

  return (
    <>
      <main className="App">
        <h1 className="titulo titulo-hover">Feedback de Exercícios</h1>
        <p className="texto">
          Clique no botão abaixo para dar feedback no exercício recebido.
        </p>
        <Button
          type="button"
          value="Dar Feedback!"
          func={() => showModal(setShow, show)}
        />
        <Modal
          show={show}
          setShow={setShow}
          formSubmit={formSubmit}
          tags={tags}
        />
      </main>
    </>
  );
}

export default App;
