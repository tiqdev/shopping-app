import PrimaryButton from "@/components/home/primary-button";

const NotFound = () => {
  return (
    <div className="h-[200px] flex flex-1 flex-col items-start justify-center gap-4">
      <h2 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h2>
      <div className="max-w-[140px]">
        <PrimaryButton title="Go Back" onClick={() => window.history.back()} />
      </div>
    </div>
  );
};

export default NotFound;
