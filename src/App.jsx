import './App.css';

import { useState } from 'react';
import { showModal } from './Func/modal';
import { handleFeedback, sendFeedback } from './Func/feedback';
import { useForm } from 'react-hook-form';
import tags from './Data/tags';

import Button from './Components/Button/Index';
import Modal from './Components/Modal/Index';

function App() {
  const { register, handleSubmit, reset } = useForm();

  const [show, setShow] = useState(false);

  const formSubmit = (data) => {
    showModal(setShow, show);
    handleFeedback(data);
    sendFeedback();
    reset();
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
          formSubmit={formSubmit}
          register={register}
          handleSubmit={handleSubmit}
          tags={tags}
        />
      </main>
    </>
  );
}

export default App;
