import React from 'react';
import { TypeWithKey } from '../../models/type-with-key';
import { Loader } from '../Loader';
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
  const getVariant = (variant: 'primary' | 'secondary'): string => {
    const options: TypeWithKey<string> = {
      primary:
        'w-full h-[40px] bg-black text-white font-semibold rounded-[6px]',
      secondary:
        'w-full h-[40px] bg-[#E3E2E8] text-[#868690] font-semibold rounded-[6px]',
    };

    return options[variant] || options['primary'];
  };
  return (
    <button
      disabled={loader}
      onClick={() => (onClick ? onClick() : () => null)}
      type={type}
      className={`${getVariant(variant)}  ${height ?? height} ${width ?? ''}`}
    >
      {loader ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <> {text} </>
      )}
    </button>
  );
};

export default Button;
