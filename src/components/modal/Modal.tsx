import React from 'react'
import { Portal } from './Portal'
import { MdClose } from 'react-icons/md'
import styles from './modal.module.css'

interface ModalProps {
    isOpen:boolean;
    handleClose:() => void;
    children:any;
}

export const Modal:React.FC<ModalProps> = ({isOpen, handleClose, children}) => {


  return isOpen ? (
    <Portal target="portal">
      <div className={styles.overlay__modal}>
        <div className={styles.modal}>
            <div className={styles.close__icon}>
                <MdClose 
                    onClick={ handleClose }
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
