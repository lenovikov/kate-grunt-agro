import React from 'react'
import data from '../../data.json'
import MarginContainer from './MarginContainer'
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './images'
import { Link } from 'react-router-dom'

const Catalog = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

  return (
    <div className='pt-10 text-black'>
      <MarginContainer>
        <div className='flex flex-wrap'>
          {data.items.map(({ id, name }) => (
            <Link key={id} to={`${id}`}>
              <div className='rounded-lg border-2 border-gray border-solid pt-5 pb-11 m-3 w-[24rem] h-[31rem]'>
                <img src={images[id - 1]} alt='' />
                <p className='pt-9 px-9 text-xl font-semibold text-center'>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </MarginContainer>
    </div>
  )
}

export default Catalog
