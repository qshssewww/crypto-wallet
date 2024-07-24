import React, { useState } from 'react';
import styles from './Modal.module.css';
import ButtonBlue from '../buttonBlue/ButtonBlue';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { actions } from '../../store/user/user.slice.ts';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

	const [isVisible, setIsVisible] = useState(isOpen);
  const [amount, setAmount] = useState('');
	const dispatch = useAppDispatch();
	const {addToBalance} = actions

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

	const handleTopUp = () => {
		dispatch(addToBalance(Number(amount)));
		closeModal();
	}

	const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
		setAmount('');
  };

  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`${styles.modal} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Replenishment of the balance</h2>
          <button onClick={closeModal} className={styles.closeButton}>&times;</button>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="amount">Sum</label>
            <input
              type="number"
              id="amount"
              className={styles.inputField}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <div className={styles.modalFooter}>
            <ButtonBlue onClick={handleTopUp} type={'submit'}>
							Top Up
						</ButtonBlue>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
