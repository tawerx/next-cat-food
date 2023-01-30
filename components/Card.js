import { useState, useRef, useEffect } from 'react';

import styles from '../styles/card.module.scss';

const Card = ({ title, taste, description, weight, portion, gift, available }) => {
  const [selectCard, setSelectCard] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);
  const cardRef = useRef(null);

  const handleHover = (e) => {
    if (e.composedPath().includes(cardRef.current)) {
      setHoverCard((prev) => (prev = true));
    } else {
      setHoverCard((prev) => (prev = false));
    }
  };

  const findDeclination = (number, words) => {
    const remains = number % 10;
    if (remains == 1) {
      return words[0];
    } else if (remains > 1 && remains < 5) {
      return words[1];
    } else return words[2];
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleHover);

    return () => document.body.removeEventListener('mousemove', handleHover);
  }, []);

  return (
    <div
      className={`${styles.card}${selectCard ? ` ${styles.selected}` : ''}${
        available ? '' : ` ${styles.unavailable}`
      }`}>
      <div
        className={styles.card_container}
        onClick={() => {
          if (available) {
            setSelectCard(!selectCard);
          }
        }}
        ref={cardRef}>
        <div className={styles.card_container_title}>
          {hoverCard && selectCard ? (
            <span className={styles.selected}>Котэ не одобряет?</span>
          ) : (
            <span>{title}</span>
          )}
        </div>
        <div className={styles.card_container_taste}>
          <h1>Нямушка</h1>
          <h2>c {taste}</h2>
        </div>

        <div className={styles.card_container_sub_title}>
          <div className={styles.card_container_portion}>
            <p>
              <span>{portion}</span> порций
            </p>
          </div>
          <div className={styles.card_container_gift}>
            <p>
              <span>{gift == 1 ? '' : gift}</span>
              {` ${findDeclination(gift, ['мышь', 'мыши', 'мышей'])} в подарок`}
            </p>
          </div>
          {!available && (
            <div className={styles.card_container_customer}>
              <p>заказчик доволен</p>
            </div>
          )}
        </div>
        <div className={styles.card_container_weigth}>
          <span>
            {Math.round(weight) - weight != 0
              ? `${String(weight).slice(0, 1)},${String(weight).slice(2, 3)}`
              : weight}
          </span>
          <p>кг</p>
        </div>
      </div>

      <div className={styles.card_description}>
        {available && selectCard ? (
          <p>{description}.</p>
        ) : available && !selectCard ? (
          <p>
            Чего сидишь? Порадуй котэ,{' '}
            <span
              className={styles.buy}
              onClick={() => {
                if (available) {
                  setSelectCard(!selectCard);
                }
              }}>
              купи
            </span>
            <span className={styles.dot}>.</span>
          </p>
        ) : (
          <p>Печалька, с {taste} закончилась.</p>
        )}
      </div>
    </div>
  );
};

export default Card;
