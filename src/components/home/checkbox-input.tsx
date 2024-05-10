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
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:none"
      />
      <label
        htmlFor={id}
        className="ms-2 text-sm font-medium text-black select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBoxInput;
