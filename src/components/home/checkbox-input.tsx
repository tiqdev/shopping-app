import { CheckboxInputType } from "@/models/Inputs";

const CheckBoxInput = ({
  label,
  checked,
  onChange,
  id,
  value,
}: CheckboxInputType) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100rounded-lg focus:none cursor-pointer"
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

export default CheckBoxInput;
