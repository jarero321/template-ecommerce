import {
  getFontType,
  getResponsiveText,
  getTextColor,
} from './typography.utils';

describe('Get styles function', () => {
  test('Should size function with params', () => {
    expect(getResponsiveText('base')).toBe(
      'text-base md:text-lg lg:text-xl xl:text-4xl'
    );
  });

  test('Should size function without params', () => {
    expect(getResponsiveText('')).toBe('text-base');
  });

  test('Should color function with params', () => {
    expect(getTextColor('primary-orange')).toBe('text-primary-orange');
  });

  test('Should color function without params', () => {
    expect(getTextColor('')).toBe('text-primary-orange');
  });

  test('Should font type without params', () => {
    expect(getFontType('regular')).toBe('font-normal');
  });

  test('Should font type with params', () => {
    expect(getFontType('bold')).toBe('font-bold');
  });
});
