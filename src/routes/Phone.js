import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notch from '../components/notch';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallCard from '../components/callcard';
import Archive from '../components/archive';
import mockApiData from '../components/mockApiData';

const Phone = () => {
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cerulean-marlin-wig.cyclic.app/activities');
        setCalls(response.data);
      } catch (error) {
        console.error('Error fetching call details:', error);
      }
    };

    fetchData();
  }, []);  

  const handleArchiveAllCalls = () => {
    setArchivedCalls([...archivedCalls, ...calls]);
    setCalls([]);
  };

  const firstThreeCalls = calls.slice(0, 3);

  return (
    <div className="absolute flex flex-col items-center justify-center left-0 top-0 right-0 bottom-0">
      <div className="w-96 z-100 bg-white rounded-lg shadow-lg relative">
        <Notch />
        <Navbar />
        <Archive
          calls={calls}
          setCalls={setCalls}
          archivedCalls={archivedCalls}
          setArchivedCalls={setArchivedCalls}
          onArchive={handleArchiveAllCalls}
        />
        {firstThreeCalls.map((callData, index) => (
          <CallCard key={index} callDetails={callData} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Phone;
