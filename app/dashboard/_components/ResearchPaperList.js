'use client';

import DeleteResearchPaperModal from '@/app/dashboard/_components/DeleteResearchPaperModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const ResearchPaperList = ({
  researchPapers,
  setSelectedResearchPaper,
  selectedResearchPaper,
  selectedResearchPaperType,
  setSelectedResearchPaperType = '',
  setStatus = ''
}) => {
  const [selectedResearchPaperToDelete, setSelectedResearchPaperToDelete] =
    useState({});
  const [deleteSelectedResearchPaper, setDeleteSelectedResearchPaper] =
    useState(false);

  return (
    <section className='flex flex-col gap-6'>
      {deleteSelectedResearchPaper && (
        <DeleteResearchPaperModal
          setDeleteSelectedResearchPaper={setDeleteSelectedResearchPaper}
          selectedResearchPaperToDelete={selectedResearchPaperToDelete}
          setSelectedResearchPaperToDelete={setSelectedResearchPaperToDelete}
        />
      )}
      {researchPapers?.map((researchPaperSet) => (
        <div
          key={researchPaperSet._id}
          className='border dark:border-slate-700 border-slate-300 p-1 rounded-lg'
        >
          <div className='text-lg font-bold flex justify-center items-center gap-4 '>
            <span>{researchPaperSet.paperType}</span>
            <p
              className={`flex gap-2 items-center ${
                (selectedResearchPaper?.paperId ||
                  selectedResearchPaperType?._id) &&
                'cursor-not-allowed'
              }`}
            >
              <Link
                href='#form-update-type'
                className={
                  (selectedResearchPaper?.paperId ||
                    selectedResearchPaperType?._id) &&
                  'pointer-events-none'
                }
                onClick={() => {
                  setSelectedResearchPaperType &&
                    setSelectedResearchPaperType({
                      _id: researchPaperSet._id,
                      paperType: researchPaperSet.paperType
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
                      (selectedResearchPaper?.paperId ||
                        selectedResearchPaperType?._id) &&
                      '!cursor-not-allowed'
                    }
                    `}
                onClick={() => {
                  setSelectedResearchPaperToDelete({
                    paperType: researchPaperSet.paperType,
                    papersLength: researchPaperSet.papers?.length
                  });
                  setDeleteSelectedResearchPaper(true);
                }}
              />
            </p>
          </div>

          <div className='grid grid-cols-3 text-center dark:bg-slate-600 bg-slate-400 rounded-t-lg'>
            <span className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
              Paper Names
            </span>
            <span className='py-3'>Action</span>
          </div>

          {researchPaperSet.papers?.map((paper) => (
            <div
              className='grid grid-cols-3 text-center dark:odd:bg-slate-900 odd:bg-slate-300 dark:even:bg-slate-800 even:bg-slate-100 last:rounded-b-lg'
              key={paper.paperId}
            >
              <p className='py-3 grid gird-cols-subgrid cols-start-1 col-span-2'>
                {paper.paperName}
              </p>
              <p
                className={`w-fit mx-auto py-3 flex gap-2 items-center ${
                  (selectedResearchPaper?.paperId ||
                    selectedResearchPaperType?._id) &&
                  'cursor-not-allowed'
                }`}
              >
                <Link
                  href='#form-update'
                  className={
                    (selectedResearchPaper?.paperId ||
                      selectedResearchPaperType?._id) &&
                    'pointer-events-none'
                  }
                  onClick={() => {
                    setStatus && setStatus(paper.status);
                    setSelectedResearchPaper({
                      paperType: researchPaperSet.paperType,
                      ...paper
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
                    (selectedResearchPaper?.paperId ||
                      selectedResearchPaperType?._id) &&
                    '!cursor-not-allowed'
                  }`}
                  onClick={() => {
                    setSelectedResearchPaperToDelete({
                      paperType: researchPaperSet.paperType,
                      paperName: paper.paperName,
                      paperId: paper.paperId
                    });
                    setDeleteSelectedResearchPaper(true);
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
export default ResearchPaperList;
