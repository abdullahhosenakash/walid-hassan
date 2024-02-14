import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Card = ({ card }) => {
  const { title, description, link, linkText } = card || {};
  return (
    <div className='rounded-xl hover:shadow-lg dark:shadow-blue-700 shadow-md transition delay-50'>
      <div className='py-12 bg-blue-700 rounded-t-xl' />
      <div className='flex justify-center mt-[-40px]'>
        <FontAwesomeIcon
          icon={faConnectdevelop}
          className='text-7xl bg-slate-300 rounded-full p-2'
        />
      </div>
      <h3 className='text-2xl text-center dark:text-white mt-4'>{title}</h3>
      <p className='mt-4 text-center'>{description}</p>
      <hr className='mt-4' />
      <Link
        href={link}
        className='text-white py-2 px-4 rounded-lg flex w-fit mx-auto my-2 bg-blue-700 hover:bg-blue-600'
      >
        {linkText}
      </Link>
    </div>
  );
};

export default Card;
