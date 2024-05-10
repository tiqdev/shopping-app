export interface RadioInputType {
  label: string;
  value: string;
  onChange: () => void;
  checked: boolean;
  id: string;
  name: string;
}

export interface CheckboxInputType {
  label: string;
  value: string;
  onChange: () => void;
  checked: boolean;
  id: string;
}
