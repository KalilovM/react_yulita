import React, { CSSProperties } from 'react';
import styles from './TwoFieldRows.module.scss';

interface IProps {
  children?: React.ReactNode;
}

export function TwoFieldRows(props: IProps) {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
}
