import { MouseEvent } from "react";

const PrimaryButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button
      className="bg-primary text-white rounded-[4px] px-4 py-2 w-full hover:bg-primary-dark transition-colors"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
