import React from 'react';

const Notch = () => {
  return (
    <div className='w-full h-7 bg-gray-300 flex rounded-t-lg shadow border-b-gray-600'>
        <div className='flex gap-x-1.5 pl-2 self-center	'>
            <div className='w-4 h-4 rounded-full bg-red-500'>

            </div>
            <div className='w-4 h-4 rounded-full bg-yellow-500'>

            </div>
            <div className='w-4 h-4 rounded-full bg-green-500'>

            </div>
            
        </div>
        <div className='w-full flex self-center ml-16'>
            <p className='text-zinc-950	'>(12) Aircall Phone</p>
        </div>
    </div>
  );
};

export default Notch;

