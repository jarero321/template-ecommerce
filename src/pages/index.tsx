import { addAccessToken } from '../redux/states/user';
import React from 'react';
import { useDispatch } from 'react-redux';
import { LabelInfo } from '../components/LabelInfo';
export default function Home() {
  const dispatch = useDispatch();

  const token = () => {
    dispatch(addAccessToken('value'));
  };
  React.useEffect(() => {
    token();
  }, []);
  return (
    <div>
      <LabelInfo>ENVÍO GRATIS EN COMPRAS MAYORES A $499 PESOS</LabelInfo>
    </div>
  );
}
