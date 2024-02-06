import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className='dark:bg-slate-900 py-8 dark:text-white lg:px-0 px-3 lg:dark:h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Contacts</h2>
      <p className='text-center dark:text-white'>
        Feel free to contact me if you think I can help somehow
      </p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mx-auto lg:w-3/4 mt-6'>
        <div className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
          <FontAwesomeIcon icon={faEnvelope} className='text-3xl' />
          <p className='text-2xl'>Email</p>
          <Link
            href='mailto:walidhassan@tanim.com'
            className='text-blue-700 dark:text-blue-500 text-xl hover:underline'
          >
            walidhassan@tanim.com
          </Link>
        </div>
        <div className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
          <FontAwesomeIcon icon={faPhone} className='text-3xl' />
          <p className='text-2xl'>Phone</p>
          <Link
            href='tel:+01234567899'
            className='text-blue-700 dark:text-blue-500 text-xl hover:underline'
          >
            +01234567899
          </Link>
        </div>
        <div className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
          <p className='text-2xl'>WhatsApp</p>
          <Link
            href='whatsappAddress'
            className='text-blue-700 dark:text-blue-500 text-xl hover:underline'
          >
            +01234567899
          </Link>
        </div>
        <div className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
          <FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
          <p className='text-2xl'>Address</p>
          <Link
            href='location'
            className='text-blue-700 dark:text-blue-500 text-xl hover:underline'
          >
            HSTU, Basherhat, Sadar, Dinajpur
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
