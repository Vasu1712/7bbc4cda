import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Archive = () => {
  const [calls, setCalls] = useState([]); 
  const [archivedCalls, setArchivedCalls] = useState([]);

  const handleArchiveAll = () => {
    // Move all calls to the archivedCalls array
    setArchivedCalls([...archivedCalls, ...calls]);
    // Clear the calls array
    setCalls([]);
  };

  return (
    <div className='w-full h-16 bg-white flex flex-col items-center justify-left font-lato mt-2'>
      <div className='w-11/12 h-20 rounded-2xl border border-gray-200 flex justify-left items-center cursor-pointer'>
        <div className='flex px-4' onClick={handleArchiveAll}>
          <Icon className='' icon="heroicons:archive-box-solid" color="#c8c8c8" width="30" height="30" />
          <p className='font-bold text-xl text-dark-gray px-4'>Archive all calls</p>
        </div>
      </div>
    </div>
  );
};

export default Archive;
