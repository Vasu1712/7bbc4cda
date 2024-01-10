import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [selectedIcon, setSelectedIcon] = useState('inbox');

    const handleIconClick = (iconName) => {
      setSelectedIcon(iconName);
    };
  
    const getIconStyle = (iconName) => {
      return {
        borderBottom: selectedIcon === iconName ? '3px solid #FF4242' : 'none',
        color: selectedIcon === iconName ? '#515152' : '#9C9C9C',
      };
    };

  return (
    <div className='w-full h-16 flex shadow border-b-gray-600 font-lato'>
        <div className='pl-4 self-center flex'>
        <svg className='w-8 h-8' viewBox="0 0 170 168" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M84 168c-46.2 0-84-37.8-84-84S37.8 0 84 0s84 37.8 84 84-37.8 84-84 84Zm0-156c-39.6 0-72 32.4-72 72s32.4 72 72 72 72-32.4 72-72-32.4-72-72-72Zm38.343 88.616c-1.99-1.824-4.311-3.15-6.633-4.312-3.482-1.658-8.623-4.311-12.437-1.824-1.326.83-2.321 2.322-3.482 3.317-1.492 1.492-3.15 2.985-5.14 3.98-8.457 4.31-19.567 2.487-26.532-3.98-3.98-4.146-6.467-10.115-6.301-15.92.166-4.476 1.658-9.12 4.477-12.767 1.16-1.493 2.653-2.82 3.98-4.312 1.326-1.326 2.155-2.819 2.155-4.809 0-2.487-1.16-4.808-2.155-7.13-.995-2.156-1.99-4.477-3.483-6.301-1.326-1.824-3.316-3.814-5.472-4.643-.995-.332-1.99-.498-2.984-.166-1.327.332-2.322 1.326-3.317 2.156-4.311 3.316-8.789 7.13-10.944 12.105-3.648 7.96-1.99 17.08 1.16 24.873 3.649 8.789 9.618 16.748 16.583 23.215 4.145 4.146 8.788 7.96 13.763 11.11 6.467 3.98 13.93 7.296 21.557 8.125 5.306.664 10.944-.165 15.587-2.653 1.99-1.16 3.814-2.487 5.472-4.145 1.824-1.824 3.814-3.814 5.307-5.804.995-1.16 2.321-2.322 2.487-4.146.166-2.321-1.99-4.477-3.648-5.97Z"
            fill="#2AC420"
            />
        </svg>
        <p className='pl-3 self-center font-bold text-2xl font-lato text-dark-gray '>Activity</p>
        </div>
        <div className='w-full flex self-center justify-end gap-x-6 font-semibold pr-3'>
            <p className='text-dark-gray text-sm cursor-pointer ' 
               id='inbox' onClick={() => handleIconClick('inbox')} 
               style={getIconStyle('inbox')}>
                  Inbox
            </p>
            <p className='text-light-gray text-sm cursor-pointer' 
               id='all-calls' onClick={() => handleIconClick('all-calls')} 
               style={getIconStyle('all-calls')}>
                All calls
            </p>
            <Icon icon="radix-icons:mixer-vertical" color="#515152" width="20" height="20" />
        </div>
    </div>
  );
};

export default Navbar;

