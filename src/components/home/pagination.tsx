const Pagination = ({ pageCount }: { pageCount: number }) => {
  return (
    <div className="w-full flex justify-center items-center gap-[10px] mt-4">
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          className="w-[30px] h-[30px] rounded-[4px] bg-white border border-black flex justify-center items-center"
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
