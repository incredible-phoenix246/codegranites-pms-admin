'use client';

import { X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { ProjectCardProps } from '../../../../libs/projects';

interface MakePaymentModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  project?: ProjectCardProps;
}
const RemoveProjectModal = ({
  openModal,
  setOpenModal,
  project
}: MakePaymentModalProps) => {
  const projectName = project?.title;

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]',
          openModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpenModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="remove-client"
        className={cn(
          'py-6   flex flex-col w-[360px] h-[330px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] justify-between items-center bg-white dark:bg-gray-900 backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
          openModal
            ? '-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl'
            : '-translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] dark:border-primary-light pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header dark:text-gray-100">
            Delete{' '}
            <span className="lg:font-bold">{projectName ?? 'Project'}</span>
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setOpenModal(false)}
            className="text-header dark:text-[#e80000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full max-w-[546px] h-full  pt-8 sm:pt-16 items-center flex-col gap-y-8 ">
          <p className="text-center text-sm md:text-base px-4 dark:text-gray-300">
            Are you sure you want to permanently remove{' '}
            {projectName ? (
              <span className="font-semibold">{projectName}</span>
            ) : (
              'this project'
            )}{' '}
            from your catalogue? Remember this action cannot be reversed{' '}
          </p>
          <div className="flex w-full gap-x-4 justify-center sm:justify-between sm:px-8 [&>*]:font-semibold">
            <button
              type="button"
              tabIndex={0}
              aria-label="Cancel"
              onClick={() => setOpenModal(false)}
              className={cn(
                'rounded-lg border border-primary text-primary dark:text-color-dark dark:border-color-dark min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
              )}
            >
              No, Cancel
            </button>

            <button
              type="button"
              tabIndex={0}
              aria-label="Remove"
              className={cn(
                'rounded-lg bg-[#e80000] text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e80000]'
              )}
            >
              Yes, Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveProjectModal;
