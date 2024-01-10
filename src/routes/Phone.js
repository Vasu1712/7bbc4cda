import { Link } from 'react-router-dom';
import Header from '../components/header';
import aircallgif from '../assets/aircallgif.gif';
import Notch from '../components/notch';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CallCard from '../components/callcard';
import Archive from '../components/archive';
import mockApiData from '../components/mockApiData';

const Phone = () => {

    const firstThreeEntries = mockApiData.slice(0, 3);

	return (
		<div className="absolute flex flex-col items-center justify-center left-0 top-0 right-0 bottom-0">
		<div className="w-96 z-100 bg-white rounded-lg shadow-lg relative">
		  <Notch />
          <Navbar />
          <Archive />
        {firstThreeEntries.map((callDetails, index) => (
          <CallCard key={index} callDetails={callDetails} />
        ))}
          
          <Footer/>
		</div>
	  </div>
	);
};

export default Phone;

