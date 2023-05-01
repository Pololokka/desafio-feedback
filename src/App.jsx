import './App.css';

import { useState } from 'react';
import { showModal } from './Func/modal';
import { handleFeedback, sendFeedback } from './Func/feedback';
import { useForm } from 'react-hook-form';
import tags from './Data/tags';

import Button from './Components/Button/Index';
import Modal from './Components/Modal/Index';

const defaultForm = {
  status: '',
  tags: [],
  comment: '',
};

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: defaultForm });

  const [show, setShow] = useState(false);

  const formSubmit = (data) => {
    showModal(setShow, show);
    handleFeedback(data);
    sendFeedback();
    reset();
  };

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
          errors={errors}
          tags={tags}
        />
      </main>
    </>
  );
}

export default App;
