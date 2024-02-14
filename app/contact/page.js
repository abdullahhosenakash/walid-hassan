import { getMiscellaneousData } from '@/app/_lib/getMiscellaneousData';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const ContactCard = ({ children, contactInfo }) => {
  return (
    <div className='text-center shadow-xl dark:shadow-none bg-slate-100 dark:bg-slate-800 py-6'>
      <FontAwesomeIcon
        icon={
          children === 'Email'
            ? faEnvelope
            : children === 'Phone'
            ? faPhone
            : children === 'whatsApp'
            ? faWhatsapp
            : faLocationDot
        }
        className='text-3xl inline-block w-8'
      />
      <p className='text-2xl'>{children}</p>
      <Link
        href='mailto:walidhassan@tanim.com'
        className='dark:text-blue-400 text-blue-700 text-xl hover:underline'
      >
        walidhassan@tanim.com
      </Link>
    </div>
  );
};

const Contact = async () => {
  const { contact } = await getMiscellaneousData();

  return (
    <section className='dark:bg-slate-900 lg:py-8 py-4 dark:text-white lg:px-0 px-3 lg:dark:h-screen'>
      <h2 className='text-center text-3xl dark:text-white'>My Contacts</h2>
      <p className='text-center dark:text-white'>
        Feel free to contact me if you think I can help somehow
      </p>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-3 mx-auto lg:w-3/4 mt-6'>
        <ContactCard contactInfo={contact.email}>Email</ContactCard>
        <ContactCard contactInfo={contact.phone}>Phone</ContactCard>
        <ContactCard contactInfo={contact.whatsApp}>WhatsApp</ContactCard>
        <ContactCard contactInfo={contact.address}>Address</ContactCard>
      </div>
    </section>
  );
};

export default Contact;
