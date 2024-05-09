const SkeletonProduct = () => {
  return (
    <div className="center-col">
      <div className="animate-pulse flex flex-col gap-[15px] items-stretch p-[10px] bg-white h-fit w-[180px]">
        <div className="w-[160px] h-[150px] bg-gray-300"></div>
        <div className="w-[100px] h-5 bg-gray-300"></div>
        <div className="w-[150px] h-5 bg-gray-300"></div>
        <div className="w-[100px] h-5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
