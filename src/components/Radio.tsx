import React from "react";

interface IDrawerRight {
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  checked?: boolean;
}

const Radio: React.FC<IDrawerRight> = (props) => {
  const handleChange = () => {
    if (props.onChange && props.value) {
      props.onChange(props.value);
    }
  };

  return (
    <input
      type="radio"
      id={props.id}
      name={props.name}
      onChange={handleChange}
      value={props.value}
      className={
        props.className ? props.className : "cursor-pointer accent-[#105EF5] mr-1"
      }
      checked={props.checked}
    />
  );
};

export default Radio;
