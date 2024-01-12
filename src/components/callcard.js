import { useEffect, useState } from 'react';
import axios from 'axios';

const CallCard = ({ callDetails, isArchived }) => {
    if (isArchived) {
      return null;
    }

    const isIncomingCall = callDetails.direction === 'inbound';
    const formatDate = (dateString) => {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
      return formattedDate;
    };

    const time = new Intl.DateTimeFormat('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }).format(new Date(callDetails.created_at));
  
  return (
    <div className='w-full h-32 bg-white flex flex-col items-center justify-center mt-4 gap-x-2.5'>
      {callDetails && (
        <div className='w-full flex items-center justify-between'>
          <hr className='w-4/5 h-px border-dashed border-t border-light-gray'/>
          <span className='w-full font-semibold text-sm text-light-gray text-center uppercase'>{formatDate(callDetails.created_at)}</span>
          <hr className='w-4/5 h-px border-dashed border-t border-light-gray'/>
        </div>
      )}

    {callDetails && (
        <div className='w-11/12 h-20 rounded-2xl border border-gray-200 mt-4 flex justify-center items-center'>
          <div className='w-8 h-8'>
            {isIncomingCall ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <g fill="none">
                  <path stroke="#2ac420" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"/>
                  <path fill="#c8c8c8" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"/>
                </g>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <g fill="none">
                  <path stroke="#FF4242" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"/>
                  <path fill="#C8C8C8" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"/>
                </g>
              </svg>
            )}
          </div>

          {callDetails && (
            <div className='w-2/3 flex flex-col text-left pl-4'>
              <div className='flex items-center'>
                <p className='text-lg font-bold text-dark-gray'>
                  {callDetails.from}
                </p>
                <div className='w-5 h-4 rounded-full bg-red-500 text-xs ml-1 flex items-center justify-center'>
                  <span className='text-white font-semibold'>{callDetails.duration +2}</span>
                </div>
              </div>
              <p className='text-xs font-medium text-light-gray'>
                tried to call on {callDetails.to}
              </p>
            </div>
          )}

          {callDetails && (
            <div className='flex items-center'>
              <p className='font-medium text-md text-light-gray mr-2'>
                {time}
              </p>
              <span className='text-sm font-bold text-light-gray border rounded-l-md p-1 -mr-1'>
                PM
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CallCard;


