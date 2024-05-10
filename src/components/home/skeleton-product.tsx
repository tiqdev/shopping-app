const SkeletonProduct = () => {
  return (
    <div className="center-col">
      <div className="animate-pulse flex flex-col gap-3 items-stretch p-[10px] bg-white h-fit mobile:w-[180px] w-[150px] border border-card rounded-[4px] hover:shadow-md transition-shadow">
        <div className="mobile:w-[160px] w-[128px] h-[150px] bg-gray-300"></div>
        <div className="w-[100px] h-5 bg-gray-300"></div>
        <div className="mobile:w-[150px] w-[128px] h-5 bg-gray-300"></div>
        <div className="w-[100px] h-5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
