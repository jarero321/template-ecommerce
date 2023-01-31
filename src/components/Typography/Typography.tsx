import { TypographyInterface } from '../../models/typography';
import React from 'react';
import {
  getFontType,
  getResponsiveText,
  getTextColor,
} from './utils/typography.utils';

const Typography: React.FC<TypographyInterface> = ({
  children,
  size = 'base',
  colors = 'primary-color',
  className = '',
  font = 'regular',
}) => {
  return (
    <div
      className={`${className} ${getFontType(font)} ${getResponsiveText(size)}`}
    >
      {children ? (
        <span className={getTextColor(colors)}>{children}</span>
      ) : null}
    </div>
  );
};

export default Typography;
