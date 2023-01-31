import { TypeWithKey } from '@/models/type-with-key';

const responsiveText: TypeWithKey<string> = {
  xs: 'text-xs md:text-sm lg:text-base xl:text-lg',
  sm: 'text-sm md:text-base lg:text-lg xl:text-xl',
  base: 'text-base md:text-lg lg:text-xl xl:text-4xl',
  lg: 'text-lg md:text-xl lg:text-2xl xl:text-6xl',
  xl: 'text-xl md:text-2xl lg:text-3xl xl:text-8xl',
  '2xl': 'text-2xl md:text-4xl lg:text-6xl xl:text-9xl',
  default: 'text-base',
};

const getResponsiveText = (target: string): string => {
  return responsiveText[target] || responsiveText.default;
};

const getTextColor = (color: string) => {
  const typeColor: TypeWithKey<string> = {
    'primary-orange': 'text-primary-orange',
    'secondary-orange': 'text-secondary-orange',
    'primary-green': 'text-primary-green',
    'secondary-green': 'text-secondary-green',
    'primary-gray': 'text-primary-gray',
    'secondary-gray': 'text-secondary-gray',
  };

  return typeColor[color] || typeColor['primary-orange'];
};

const getFontType = (type: string) => {
  const typeColor: TypeWithKey<string> = {
    regular: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return typeColor[type] || typeColor.regular;
};

export { getTextColor, getResponsiveText, getFontType };
