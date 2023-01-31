import React from 'react';
import styles from './styles/Loader.module.css';

interface LoaderProps {
  secondary?: boolean;
}
const Loader: React.FC<LoaderProps> = ({ secondary = false }) => {
  console.log(secondary);
  return <div className={secondary ? styles.loaderSecondary : styles.loader} />;
};

export default Loader;
