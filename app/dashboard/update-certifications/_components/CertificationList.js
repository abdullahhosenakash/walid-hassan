'use client';

import DeleteCertificationModal from '@/app/dashboard/update-certifications/_components/DeleteCertificationModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CertificationList = ({
  certifications,
  setSelectedCertification,
  selectedCertification,
  selectedCertificationType,
  setSelectedCertificationType = ''
}) => {
  const [selectedCertificationToDelete, setSelectedCertificationToDelete] =
    useState({});
  const [deleteSelectedCertification, setDeleteSelectedCertification] =
    useState(false);

  useEffect(() => {
    if (deleteSelectedCertification) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [deleteSelectedCertification]);

  return (
    <section className='flex flex-col gap-6'>
      {deleteSelectedCertification && (
        <DeleteCertificationModal
          setDeleteSelectedCertification={setDeleteSelectedCertification}
          selectedCertificationToDelete={selectedCertificationToDelete}
          setSelectedCertificationToDelete={setSelectedCertificationToDelete}
        />
      )}
      {certifications?.map((certificationSet) => (
        <div
          key={certificationSet._id}
          className='border dark:border-slate-700 border-slate-300 p-1 rounded-lg'
        >
          <div className='text-lg font-bold flex justify-center items-center gap-4 '>
            <span>{certificationSet.certificationType}</span>
            <p
              className={`flex gap-2 items-center ${
                selectedCertification?.certificationId ||
                selectedCertificationType?._id ||
                deleteSelectedCertification
                  ? 'cursor-not-allowed'
                  : ''
              }`}
            >
              <Link
                href='#form-update-type'
                className={
                  selectedCertification?.certificationId ||
                  selectedCertificationType?._id ||
                  deleteSelectedCertification
                    ? 'pointer-events-none'
                    : ''
                }
                onClick={() => {
                  setSelectedCertificationType &&
                    setSelectedCertificationType({
                      _id: certificationSet._id,
                      certificationType: certificationSet.certificationType
                    });
                }}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className='inline-block w-5 h-5 text-2xl text-pink-700'
                />
              </Link>

              <FontAwesomeIcon
                icon={faTrashCan}
                className={`inline-block w-5 text-xl text-pink-700 cursor-pointer
                    ${
                      selectedCertification?.certificationId ||
                      selectedCertificationType?._id ||
                      deleteSelectedCertification
                        ? '!cursor-not-allowed'
                        : ''
                    }
                    `}
                onClick={() => {
                  if (deleteSelectedCertification) return;
                  setSelectedCertificationToDelete({
                    certificationType: certificationSet.certificationType,
                    certificationsLength:
                      certificationSet.certifications?.length
                  });
                  setDeleteSelectedCertification(true);
                }}
              />
            </p>
          </div>

          <div className='grid grid-cols-3 text-center dark:bg-slate-600 bg-slate-400 rounded-t-lg'>
            <span className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
              Certification Names
            </span>
            <span className='py-3'>Action</span>
          </div>

          {certificationSet.certifications?.map((certification) => (
            <div
              className='grid grid-cols-3 text-center dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100 last:rounded-b-lg'
              key={certification.certificationId}
            >
              <p className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
                {certification.certificationName}
              </p>
              <p
                className={`w-fit mx-auto py-3 flex gap-2 items-center ${
                  selectedCertification?.certificationId ||
                  selectedCertificationType?._id ||
                  deleteSelectedCertification
                    ? 'cursor-not-allowed'
                    : ''
                }`}
              >
                <Link
                  href='#form-update'
                  className={
                    selectedCertification?.certificationId ||
                    selectedCertificationType?._id ||
                    deleteSelectedCertification
                      ? 'pointer-events-none'
                      : ''
                  }
                  onClick={() => {
                    setSelectedCertification({
                      certificationType: certificationSet.certificationType,
                      ...certification
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className='inline-block w-5 h-5 text-2xl text-pink-700'
                  />
                </Link>

                <FontAwesomeIcon
                  icon={faTrashCan}
                  className={`inline-block w-5 text-xl text-pink-700 cursor-pointer ${
                    selectedCertification?.certificationId ||
                    selectedCertificationType?._id ||
                    deleteSelectedCertification
                      ? '!cursor-not-allowed'
                      : ''
                  }`}
                  onClick={() => {
                    if (deleteSelectedCertification) return;
                    setSelectedCertificationToDelete({
                      certificationType: certificationSet.certificationType,
                      certificationName: certification.certificationName,
                      certificationId: certification.certificationId
                    });
                    setDeleteSelectedCertification(true);
                  }}
                />
              </p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
export default CertificationList;
