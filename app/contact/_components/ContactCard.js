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
            : children === 'WhatsApp'
            ? faWhatsapp
            : faLocationDot
        }
        className='text-3xl inline-block w-8'
      />
      <p className='text-2xl'>{children}</p>
      <Link
        href={
          children === 'Email'
            ? `mailto:${contactInfo}`
            : children === 'Phone'
            ? `tel:+88${contactInfo}`
            : children === 'WhatsApp'
            ? `https://wa.me/88${contactInfo}`
            : contactInfo
        }
        target='_blank'
        className='dark:text-blue-400 text-blue-700 text-xl hover:underline'
      >
        {children === 'Phone' || children === 'WhatsApp'
          ? `+88${contactInfo}`
          : contactInfo}
      </Link>
    </div>
  );
};

export default ContactCard;
