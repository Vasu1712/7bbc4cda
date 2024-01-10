import React from 'react';
import mockApiData from './mockApiData';

const AllCalls = ({callDetails}) => {

const isIncomingCall = callDetails.callType === 'incoming';

  return (
    <div className='w-full h-32 bg-white flex flex-col items-center justify-center mt-4 gap-x-2.5'>
      {callDetails && (
        <div className='w-full flex items-center justify-between'>
          <hr className='w-4/5 h-px border-dashed border-t border-light-gray'/>
          <span className='w-full font-semibold text-sm text-light-gray text-center'>{callDetails.callDate}</span>
          <hr className='w-4/5 h-px border-dashed border-t border-light-gray'/>
        </div>
      )}

      {callDetails && (
        <div className='w-11/12 h-20 rounded-2xl border border-gray-200 mt-4 flex justify-center items-center'>
          {callDetails && (
            <div className='w-2/3 flex flex-col text-left pl-4'>
              <div className='flex items-center'>
                <p className='text-lg font-bold text-dark-gray'>
                  {callDetails.name}
                </p>
                <div className='w-4 h-4 rounded-full bg-red-500 text-xs ml-1 flex items-center justify-center'>
                  <span className='text-white font-semibold'>{callDetails.numberOfCalls}</span>
                </div>
              </div>
              <p className='text-xs font-medium text-light-gray'>
                tried to call on {callDetails.callOn}
              </p>
            </div>
          )}

          {callDetails && (
            <div className='flex items-center'>
              <p className='font-medium text-md text-light-gray mr-2'>
                {callDetails.callTime}
              </p>
              <span className='text-sm font-bold text-light-gray border rounded-l-md p-1 -mr-1'>
                {callDetails.meridiem}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllCalls;
