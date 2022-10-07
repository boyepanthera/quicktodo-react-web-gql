import { ModalProps } from '../Types';
import './modal.css';

function Modal({ children }: ModalProps): JSX.Element {
  return <div className='modal'>{children}</div>;
}

export default Modal;
