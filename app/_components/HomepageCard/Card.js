import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Card = ({ card }) => {
  return (
    <div className='rounded-xl hover:shadow-lg dark:shadow-blue-700 shadow-md transition delay-50'>
      <div className='py-12 bg-blue-700 rounded-t-xl' />
      <FontAwesomeIcon
        icon={faConnectdevelop}
        className='text-7xl flex mx-auto mt-[-40px] bg-slate-300 rounded-full p-2'
      />
      <h3 className='text-2xl text-center dark:text-white mt-4'>
        {card.title}
      </h3>
      <p className='mt-4 text-center'>{card.details}</p>
      <hr className='mt-4' />
      <Link
        href=''
        className='text-white py-2 px-4 rounded-lg flex w-fit mx-auto my-2 bg-blue-700 hover:bg-blue-600'
      >
        {card.linkText}
      </Link>
    </div>
  );
};

export default Card;
