import './App.css';

import { useState } from 'react';
import { showModal } from './Func/modal';
import { handleFeedback, sendFeedback } from './Func/feedback';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './Schema/schema';
import tags from './Data/tags';
import { useTranslation } from 'react-i18next';
import { translationPaths } from './I18n';

import Button from './Components/Button/Index';
import Modal from './Components/Modal/Index';
import Changer from './Components/Changer/Index';

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
  } = useForm({ defaultValues: defaultForm, resolver: yupResolver(schema) });

  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const formSubmit = (data) => {
    console.log('formSubmit');
    showModal(setShow, show);
    handleFeedback(data);
    sendFeedback();
    reset();
  };

  return (
    <>
      <Changer
        titlePath={translationPaths.nav.title}
        lang1Path={translationPaths.nav.langF}
        lang2Path={translationPaths.nav.langS}
        lang3Path={translationPaths.nav.langT}
      />
      <main className="App">
        <h1 className="titulo titulo-hover">
          {t(translationPaths.main.title)}
        </h1>
        <p className="texto">{t(translationPaths.main.text)}</p>
        <Button
          type="button"
          value={t(translationPaths.btnMain.value)}
          func={() => showModal(setShow, show)}
        />
        <Modal
          show={show}
          translationPath={translationPaths}
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
