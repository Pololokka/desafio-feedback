import './Styles.css';

import Button from '../Button/Index';

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__header">
            <h2 className="subtitulo subtitulo-hover">
              Preencha o formulário!
            </h2>
          </div>
          <div className="modal__body">
            <p className="texto">select vai aqui</p>
            <p className="texto">tags vão vai aqui</p>
            <p className="texto">textArea vai aqui</p>
          </div>
          <div className="modal__footer">
            <Button value="Enviar!" func={() => setShow(!show)} />
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
