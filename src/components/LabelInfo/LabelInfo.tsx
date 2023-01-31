import React from 'react';
import { FCWC } from '../../models/react';
export interface LabelInfoInterface extends FCWC {}

const LabelInfo: React.FC<LabelInfoInterface> = ({ children }) => {
  return <div>{children}</div>;
};

export default LabelInfo;
