import walidHasanImage from '@/app/_assets/images/walid-hasan.png';
import Image from 'next/image';
import TypewriterEffect from '@/app/_components/TypewriterEffect/TypewriterEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faSquareFacebook,
  faSquareGithub
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className='lg:pt-6 pt-3'>
      <div className='w-48 mx-auto'>
        <Image
          src={walidHasanImage}
          alt='Walid Hasan Image'
          className='border rounded-full p-2 bg-white'
          priority
        />
      </div>
      <h2 className='text-4xl text-center uppercase mt-4 font-bold text-cyan-500'>
        Walid <span className='hasan'>Hasan</span>
      </h2>
      <h4 className='text-x text-center uppercase text-pink-700'>
        In love with programming
      </h4>
      <h3 className='text-center lg:text-2xl text-lg text-slate-800 dark:text-slate-400 mt-4'>
        Full Stack Web Developer{' '}
        <span className='text-lg hidden lg:inline-block'>|</span>{' '}
        <br className='lg:hidden' /> Competitive Programmer{' '}
      </h3>
      <TypewriterEffect />
      <div className='flex gap-4 justify-center mt-12'>
        <Link href='' target='_black'>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className='w-10 text-5xl text-blue-700 dark:bg-white h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>
        <Link href='' target='_black'>
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-10 text-5xl text-blue-700 dark:bg-white h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>{' '}
        <Link href='' target='_black'>
          <FontAwesomeIcon
            icon={faSquareGithub}
            className='w-10 text-5xl dark:bg-white text-black h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
