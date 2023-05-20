import React from 'react'
import { useParams } from 'react-router-dom'
import MarginContainer from './MarginContainer'
import data from '../../data.json'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './images'

const ProductPage = () => {
  let { productId } = useParams()
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

  let item = data.items[productId - 1]

  console.log(item)

  return (
    <div className='mt-24 text-black text-lg'>
      <MarginContainer>
        <div className='flex justify-between'>
          <img src={images[productId - 1]} width={525} height={531} alt='' className='mr-28' />
          <div className='grow max-w-[36rem]'>
            <p className='text-3xl font-semibold mb-10'>{item.name}</p>
            <p className=' mb-3'>
              <span className='font-semibold text-lg'>Aртикул: </span>
              <span>{item.article}</span>
            </p>
            <p className='mb-16'>
              <span className='font-semibold text-lg'>Наличие: </span>
              <span>{item.quantity}</span>
            </p>
            <p className='font-semibold text-lg mb-8'>Содержание основных питательных элементов, мг/л, не менее:</p>
            <div>
              {item.compound.map(([key, value]) => (
                <div key={key} className='flex mb-1'>
                  <p>{key}</p>
                  <p className='grow border-b-2 border-gray border-solid'></p>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mb-16'>
          <p className='mt-24 text-3xl font-semibold mb-10'>Применение грунта</p>
          <p>{item.usePriming}</p>
        </div>
        <div>
          <p className='mt-24 text-3xl font-semibold mb-10'>Нормы внесения в почву грунта</p>
          <p>{item.normEntity}</p>
        </div>
        <div>
          <p className='mt-24 text-3xl font-semibold mb-10'>Хранение грунта</p>
          <p>{item.storage}</p>
        </div>
      </MarginContainer>
    </div>
  )
}

export default ProductPage
