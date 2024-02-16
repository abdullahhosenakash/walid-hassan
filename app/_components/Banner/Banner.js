import localFont from 'next/font/local';
import walidHassanImage from '@/app/_assets/images/walidHassan.jpeg';
import Image from 'next/image';
import TypewriterEffect from '@/app/_components/TypewriterEffect/TypewriterEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogleScholar,
  faLinkedin,
  faSquareFacebook,
  faSquareGithub
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const protestGuerrilla = localFont({
  src: '../../_assets/fonts/ProtestGuerrilla-Regular.ttf',
  display: 'swap'
});

const Banner = ({ bannerData }) => {
  const { passion, designation, socialLinks, highlightedSkills } =
    bannerData || {};
  const { facebookLink, linkedInLink, githubLink, googleScholarLink } =
    socialLinks || {};
  return (
    <section className='lg:pt-6 pt-3'>
      <div className='w-48 mx-auto'>
        <Image
          src={walidHassanImage}
          alt='Walid Hasan Image'
          className='border rounded-full p-1 bg-white'
          priority
        />
      </div>
      <h2 className='text-4xl text-center uppercase mt-4 font-bold text-cyan-500'>
        Walid{' '}
        <span
          className={`${protestGuerrilla.className} !font-thin !text-cyan-700`}
        >
          Hassan
        </span>
      </h2>
      <h4 className='text-x text-center uppercase text-pink-700'>{passion}</h4>
      <h3 className='lg:text-2xl text-lg text-slate-800 dark:text-slate-400 my-4 flex lg:flex-row flex-col justify-center items-center gap-2'>
        <span>{designation[0]}</span>
        <span className='text-lg lg:inline-block hidden'>|</span>
        <span>{designation[1]}</span>
        <span className='text-lg lg:inline-block hidden'>|</span>
        <span>{designation[2]}</span>
      </h3>
      <TypewriterEffect highlightedSkills={highlightedSkills} />
      <div className='flex gap-4 justify-center items-center mt-12'>
        <Link href={facebookLink} target='_blank'>
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className='w-10 text-5xl text-blue-700 dark:bg-white h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>
        <Link href={linkedInLink} target='_blank'>
          <FontAwesomeIcon
            icon={faLinkedin}
            className='w-10 text-5xl text-blue-700 dark:bg-white h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>
        <Link href={githubLink} target='_blank'>
          <FontAwesomeIcon
            icon={faSquareGithub}
            className='w-10 text-5xl dark:bg-white text-black h-fit dark:h-10 dark:rounded-lg'
          />
        </Link>
        {googleScholarLink && (
          <Link
            href={githubLink}
            target='_blank'
            className='dark:py-0 py-1 bg-black rounded-lg'
          >
            <FontAwesomeIcon
              icon={faGoogleScholar}
              className='w-9 text-3xl dark:border dark:bg-white text-white dark:text-black dark:h-fit dark:rounded-lg bg-black'
            />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Banner;
