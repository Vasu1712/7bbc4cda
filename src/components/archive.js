import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';
import Phone from '../routes/Phone';

const Archive = ({ calls, setCalls }) => {
  const handleArchiveAllCalls = () => {
    // Clear calls
    setCalls([]);
  };

  return (
    <div className='w-full h-16 bg-white flex flex-col items-center justify-left font-lato mt-2'>
      <div
        className='w-11/12 h-20 rounded-2xl border border-gray-200 flex justify-left items-center cursor-pointer'
        onClick={handleArchiveAllCalls}
      >
        <div className='flex px-4'>
          <Icon className='' icon="heroicons:archive-box-solid" color="#c8c8c8" width="30" height="30" />
          <p className='font-bold text-xl text-dark-gray px-4'>Archive all calls</p>
        </div>
      </div>
    </div>
  );
};

export default Archive;
