import { FCWC } from './react';

interface TypographyInterface extends FCWC {
  size: string;
  colors?:
    | 'primary-orange'
    | 'secondary-orange'
    | 'primary-green'
    | 'secondary-green'
    | 'primary-gray'
    | 'secondary-gray';
  className?: string;
  font?: 'bold' | 'semibold' | 'regular';
}

export type { TypographyInterface };
