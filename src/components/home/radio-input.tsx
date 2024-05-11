import { RadioInputType } from "@/models/Inputs";

const RadioInput = ({
  label,
  value,
  onChange,
  checked,
  id,
  name,
}: RadioInputType) => {
  return (
    <div className="flex items-center ">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:none cursor-pointer"
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-medium text-black select-none cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
