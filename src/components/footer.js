import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [selectedIcon, setSelectedIcon] = useState('ic:round-call');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const getIconStyle = (iconName) => {
    return {
      borderBottom: selectedIcon === iconName ? '3px solid #2ac420' : 'none',
      color: selectedIcon === iconName ? '#515152' : '#9C9C9C',
    };
  };

  return (
    <div className='w-full h-14 sticky bottom-0 bg-white flex shadow-lg border-t border-gray-100 rounded-b-lg font-lato mt-20'>
      <div className='w-full flex justify-around self-center	'>
        <div className='flex h-8'
          onClick={() => handleIconClick('ic:round-call')}
          style={getIconStyle('ic:round-call')}
        >
          <Icon icon='ic:round-call'  width='25' height='25' />
          <div className='w-4 h-4 rounded-full bg-red-500 text-xs -ml-2.5 -mt-1 flex items-center justify-center'>
            <span className='text-white font-semibold'>8</span>
          </div>
        </div>

        <div className='h-8'
          onClick={() => handleIconClick('ri:user-line')}
          style={getIconStyle('ri:user-line')}
        >
          <Icon icon='ri:user-line'  width='25' height='25' />
        </div>

          <div className='w-16 h-16 bg-app-green rounded-full border-4 border-white flex self-center justify-center -mt-10 shadow-lg z-200'>
            <Icon
              className='justify-center self-center'
              icon='mdi:dots-grid'
              color='white'
              width='40'
              height='40'
            />
          </div>

        <div
          onClick={() => handleIconClick('clarity:settings-solid')}
          style={getIconStyle('clarity:settings-solid')}
        >
          <Icon
            icon='clarity:settings-solid'
            width='25'
            height='25'
          />
        </div>

        <div
          onClick={() => handleIconClick('custom-svg-icon')}
          style={getIconStyle('custom-svg-icon')}
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 36 36'>
            <path
              fill='#2ac420'
              d='M18 11a7 7 0 1 1-7 7a7 7 0 0 1 7-7'
              className='clr-i-outline clr-i-outline-path-1'
            />
            <path
              fill='#9c9c9c'
              d='M18 34a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-30a14 14 0 1 0 14 14A14 14 0 0 0 18 4'
              className='clr-i-outline clr-i-outline-path-2'
            />
            <path fill='none' d='M0 0h36v36H0z' />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
