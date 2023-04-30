import './Styles.css';

import Button from '../Button/Index';

const Modal = ({ show, formSubmit, useForm, register, handleSubmit, tags }) => {
  if (show) {
    return (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__header">
            <h2 className="subtitulo subtitulo-hover">
              Preencha o formulário!
            </h2>
          </div>
          <form
            onSubmit={handleSubmit((data) => formSubmit(data))}
            className="modal__body"
          >
            <div>
              <label htmlFor="status" className="texto">
                Este exercício foi:
              </label>
              <select
                name="status"
                id="status"
                className="texto"
                {...register('status')}
              >
                <option value=""></option>
                <option value="aprovado">Aprovado</option>
                <option value="reprovado">Reprovado</option>
              </select>
            </div>

            <ul className="modal__checkbox--container">
              {tags?.map((element) => {
                return (
                  <li key={element.key} className="modal__checkbox">
                    <input
                      type="checkbox"
                      id={element.key}
                      name={element.tag}
                      {...register('tags')}
                      value={element.key}
                    />
                    <label htmlFor={element.key} className="texto">
                      {element.tag}
                    </label>
                  </li>
                );
              })}
            </ul>

            <label htmlFor="text-feedback" className="texto">
              Escreva seu feedback em até 300 caracteres
            </label>
            <textarea
              name="text-feedback"
              id="text-feedback"
              cols="40"
              rows="5"
              className="texto modal-textArea"
              maxLength={300}
              {...register('comment')}
            ></textarea>

            <Button type="submit" value="Enviar!" />
          </form>
        </div>
      </div>
    );
  }
};

export default Modal;
