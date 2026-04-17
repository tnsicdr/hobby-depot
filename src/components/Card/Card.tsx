import type { ReactNode } from 'react';
import styles from './Card.module.css';
import { clsx } from 'clsx';
import type { Stylable } from '../../shared/types/common/common';

interface CardProps extends Stylable {
  children?: ReactNode;
}

export function Card({ children, className }: Readonly<CardProps>) {
  const cardContainerClasses = clsx(styles['card-container'], className);
  return <div className={cardContainerClasses}>{children}</div>;
}
