const Modal = ({ setDeleteSelectedSkill }) => {
  return (
    <section className='overflow-y-auto'>
      <div className='max-w-lg h-48 w-full bg-slate-500 absolute transition duration-300 z-50 '>
        Are you sure you want to delete this skill?
        <button
          className='px-6 py-2 bg-white text-black'
          onClick={() => setDeleteSelectedSkill(false)}
        >
          OK
        </button>
      </div>
    </section>
  );
};
export default Modal;
