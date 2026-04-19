import type { ReactNode } from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';
import type { Stylable } from '../../shared/types/common/common';

interface CardProps extends Stylable {
  children?: ReactNode;
  title?: string;
}

export function Card({ children, className, title }: Readonly<CardProps>) {
  const cardContainerClasses = clsx(styles['card-container'], className);
  return (
    <div className={cardContainerClasses}>
      {title ? (
        <div className={styles['card-title']}>
          <div className={styles['card-title-contents']}>{title}</div>
        </div>
      ) : null}
      <div className={styles['card-content']}>{children}</div>
    </div>
  );
}
