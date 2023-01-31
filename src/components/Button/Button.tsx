import React from 'react';
import { Loader } from '../Loader';
import { getVariant } from './utils/buttonUtils';

export interface ButtonInterface {
  text: string;
  type: 'submit' | 'button';
  onClick?(): void;
  width?: string;
  height?: string;
  loader?: boolean;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonInterface> = ({
  text,
  type,
  onClick,
  width,
  height,
  loader,
  variant = 'primary',
}) => {
  return (
    <button
      disabled={loader}
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      className={`${getVariant(variant)} ${height ?? ''} ${width ?? ''}`}
    >
      {loader ? (
        <div className="w-full h-full flex items-center justify-center font-body">
          <Loader secondary={variant === 'secondary' ?? false} />
        </div>
      ) : (
        <> {text} </>
      )}
    </button>
  );
};

export default Button;
