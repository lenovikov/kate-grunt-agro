import React, { FC } from 'react'
import MarginContainer from './MarginContainer'
import SearchComponent from './SearchComponent'
import Logo from '../assets/Logo.png'
import icon1 from '../assets/Instagram.png'
import icon2 from '../assets/VK.png'
import icon3 from '../assets/facabook.png'
import icon4 from '../assets/Odnoclassniki.png'

const Header = () => {
  return (
    <div className=''>
      <div className='bg-darkBlue'>
        <MarginContainer>
          <div className='flex justify-between items-center py-2'>
            <p>Грунты, удобрения, товары для сада и огорода оптом</p>
            <div className='flex items-center'>
              <span className='mr-5'>Бесплатная доставка</span>
              <span className='mr-5'>Пн-Пт: 9:00 - 17:00</span>
              <SearchComponent />
            </div>
          </div>
        </MarginContainer>
      </div>
      <div className=''>
        <MarginContainer>
          <div className='flex justify-between'>
            <img src={Logo} alt='' />
            <div className='flex'>
              <div className='w-64 pr-2 pt-4'>
                <p className='text-green text-xl font-semibold pb-2 '>Адрес</p>
                <p className='text-black '>Республика Беларусь, </p>
                <p className='text-black '> Минская обл., Пуховичский р-н, д. Подбережье</p>
              </div>
              <div className='w-64 pt-4 mr-24'>
                <p className='text-green text-xl font-semibold pb-2'>Контакты</p>
                <p className='text-black '>+375 17 13 95 0 28 Работаем только с юрлицами</p>
              </div>
              <div className='mt-2'>
                <img src={icon1} alt='' className='w-5 h-5 mb-2' />
                <img src={icon2} alt='' className='w-5 h-5 mb-2' />
                <img src={icon3} alt='' className='w-5 h-5 mb-2' />
                <img src={icon4} alt='' className='w-5 h-5' />
              </div>
            </div>
          </div>
        </MarginContainer>
      </div>
      <div className='bg-green h-20'>
        <MarginContainer>
          <div className='flex h-full justify-between text-lg items-center'>
            <p>Главная</p>
            <p>О нас</p>
            <p>Каталог</p>
            <p>Акция</p>
            <p>Оплата</p>
            <p>Доставка</p>
            <p>Розница</p>
            <p>Контакты</p>
            <p>Заказ звонка/прайса</p>
            <p className='text-black'>Инструкция оп применнению</p>
          </div>
        </MarginContainer>
      </div>
      <div className='header-bg'>
        <div className='header-sub-bg text-white px-16 pt-16 '>
          <p className='text-3xl font-semibold mb-2'>Грунт для рассады (овощи)</p>
          <p className='font-medium'>Инструкция по применению / Грунт для рассады (овощи)</p>
        </div>
      </div>
    </div>
  )
}

export default Header
