import React from 'react';
import Image from 'next/image';
import { Button } from '../Button';
export interface CardInterface {
  data: any;
  handleClick(id: string): void;
}

const Card: React.FC<CardInterface> = ({ data, handleClick }) => {
  return (
    <div className="w-full flex flex-col px-[18px] py-[18px] justify-center bg-white">
      <div className=" w-full flex items-center justify-center">
        <Image
          width={250}
          height={150}
          src={data.masterVariant.images[0].url}
          alt="uwu"
        />
      </div>
      <p className="text-center py-[20px]"> {data.name} </p>
      <Button
        text="Añadir al carrito"
        type="button"
        onClick={() => handleClick(data.masterVariant.sku)}
      />
    </div>
  );
};

export default Card;
