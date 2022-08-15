import React from 'react'
import { Portal } from './Portal'
import { MdClose } from 'react-icons/md'
import styles from './modal.module.css'
import { useAppDispatch } from '../../redux/redux-hooks/hooks';
import { handleModal } from '../../redux/userReducer';

interface ModalProps {
    isOpen:boolean;
    children:any;
}

export const Modal:React.FC<ModalProps> = ({isOpen, children}) => {

  const dispatch = useAppDispatch()
  
  return isOpen ? (
    <Portal target="portal">
      <div className={styles.overlay__modal}>
        <div className={styles.modal}>
            <div className={styles.close__icon}>
                <MdClose 
                    onClick={ () => dispatch(handleModal()) }
                />
            </div>
            <div className={styles.modal__content}>
            { children }
            </div>
        </div>
      </div>
    </Portal>
  ) : null;
}
