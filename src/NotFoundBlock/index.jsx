import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>К сожалению страница отсутсвует в нашем интернет-мгазине</p>
    </div>
  );
}

export default NotFoundBlock;
