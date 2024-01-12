import { Link } from 'react-router-dom';
import Header from '../components/header';
import aircallgif from '../assets/aircallgif.gif';

const Home = () => {
	return (
		<div className="absolute flex flex-col items-center justify-center left-0 top-0 right-0 bottom-0">
		<div className="w-96 h-fit z-100 bg-white rounded-lg shadow-lg ">
		  <Header />
		  <div className="h-96 justify-center p-10">
			<img src={aircallgif} alt='aircall-animation'/>
		  </div>
		  <Link to='/phone'>
			<div className='w-full flex justify-center'>
			<button className={'bg-app-green text-white mt-12 mb-8 px-6 py-2 rounded-lg hover:shadow-xl hover:scale-105'}>
					Let's Get Started!
			</button>
			</div>
		  </Link>
		</div>
	  </div>
	);
};

export default Home;

