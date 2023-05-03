import './Styles.css';

import Button from '../Button/Index';
import { useTranslation } from 'react-i18next';
import { date } from 'yup';

const Modal = ({
  show,
  translationPath,
  formSubmit,
  register,
  handleSubmit,
  errors,
  tags,
}) => {
  const { t } = useTranslation();

  if (show) {
    return (
      <div className="modal">
        <div className="modal__container">
          <div className="modal__header">
            <h2 className="subtitulo subtitulo-hover">
              {t(translationPath.modal.title)}
            </h2>
          </div>
          <form
            onSubmit={handleSubmit((data) => formSubmit(data))}
            className="modal__body"
          >
            <div>
              <label htmlFor="status" className="texto">
                {t(translationPath.modal.statusTitle)}
              </label>
              <select
                name="status"
                id="status"
                className="texto"
                {...register('status')}
              >
                <option value=""></option>
                <option value="aprovado">
                  {t(translationPath.modal.statusOpt1)}
                </option>
                <option value="reprovado">
                  {t(translationPath.modal.statusOpt2)}
                </option>
              </select>
            </div>

            {errors.status && (
              <p className="texto">{t(translationPath.errors.status)}</p>
            )}

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
                      {t(translationPath.tags[element.tag])}
                    </label>
                  </li>
                );
              })}
            </ul>

            {errors.tags && (
              <p className="texto">{t(translationPath.errors.tagMin)}</p>
            )}

            <label htmlFor="text-feedback" className="texto">
              {t(translationPath.modal.comment)}
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

            {errors.comment && (
              <p className="texto">{t(translationPath.errors.comment)}</p>
            )}

            <Button type="submit" value={t(translationPath.modal.btnModal)} />
          </form>
        </div>
      </div>
    );
  }
};

export default Modal;
