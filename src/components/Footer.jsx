import React from 'react'
import MarginContainer from './MarginContainer'
import icon1 from '../assets/Instagram.png'
import icon2 from '../assets/VK.png'
import icon3 from '../assets/facabook.png'
import icon4 from '../assets/Odnoclassniki.png'

const Footer = () => {
  return (
    <div className='bg-footer'>
      <div className='bg-footer-sub'>
        <MarginContainer>
          <div className='flex justify-around pt-36'>
            <div className='grow max-w-[16rem]'>
              <p className='text-xl font-semibold mb-8'>Для сада и огорода</p>
              <p className='mb-2 dot-before'>Грунты и субстраты</p>
              <p className='mb-2 dot-before'>Удобрения и подкормки</p>
              <p className='mb-2 dot-before'>Для рассады</p>
              <p className='mb-2 dot-before'>Защита растений</p>
              <p className='mb-2 dot-before'>Семена</p>
              <p className='mb-2 dot-before'>Собственное производство</p>
              <p className='mb-2 dot-before'>Для ландшафтного дизайна</p>
              <p className='mb-2 dot-before'>Для пикника</p>
              <p className='mb-2 dot-before'>Карта сайта</p>
            </div>
            <div className='grow max-w-[16rem]'>
              <p className='text-xl font-semibold mb-8'>Наши контакты</p>
              <p className='font-semibold mb-3'>Адрес</p>
              <p className='mb-4 leading-5'>Республика Беларусь, Минская обл., Пуховичский р-н, д. Подбережье</p>
              <p className='mb-3 font-semibold'>Телефоны</p>
              <p className='mb-1'>+375 29 104 42 11</p>
              <p className='mb-1'>+375 17 13 66 1 50</p>
              <p className='mb-4'>+375 17 13 95 0 28 </p>
              <p className='mb-3 font-semibold'>Email</p>
              <p className='mb-1'>grunt.otdel@mail.ru</p>
              <p className='mb-1'>torg@grunt-agro.by</p>
              <p className='mb-1'>info@grunt-agro.by</p>
            </div>
            <div className='grow max-w-[16rem]'>
              <p className='text-xl font-semibold mb-8 leading-5'>Подписка на новости</p>
              <p className='mb-4'>
                Подпишитесь на нашу новостную рассылку. Узнайте первыми о новинках и акциях нашей компании.
              </p>
              <p className=''>
                <input
                  type='text'
                  id='first_name'
                  className='w-[16rem] bg-inherit border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                  placeholder='Введите своё имя...'
                />
              </p>
              <p>
                <input
                  type='text'
                  id='first_name'
                  className='w-[16rem] bg-inherit border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                  placeholder='Введите свою почту...'
                />
              </p>
              <button
                type='button'
                className='focus:outline-none text-white bg-green hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                ПОДПИСАТЬСЯ
              </button>
            </div>

            <div className='grow max-w-[16rem] flex flex-col items-end'>
              <img src={icon1} alt='' className='w-16 h-16 mb-5' />
              <img src={icon2} alt='' className='w-16 h-16 mb-5' />
              <img src={icon3} alt='' className='w-16 h-16 mb-5' />
              <img src={icon4} alt='' className='w-16 h-16' />
            </div>
          </div>
        </MarginContainer>
      </div>
    </div>
  )
}

export default Footer
