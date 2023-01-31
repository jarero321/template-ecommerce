import { TypeWithKey } from '../../../models/type-with-key';

const getVariant = (variant: 'primary' | 'secondary'): string => {
  const options: TypeWithKey<string> = {
    primary:
      'w-full h-[47px] xl:h-[60px] text-[16px] text-[18px]  bg-primary-orange text-white font-semibold rounded-[30px]',
    secondary:
      'w-full h-[47px] xl:h-[60px] hover:bg-primary-green hover:text-white bg-white border border-primary-green text-primary-green font-semibold rounded-[30px]',
  };

  return options[variant] || options['primary'];
};

export { getVariant };
