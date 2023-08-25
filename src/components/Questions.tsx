import React from "react";
import Radio from "./Radio";

interface IQuestions {
  formik?: any;
  questionsText?: string;
  name: string;
  options: { value: string }[];
}

const Questions: React.FC<IQuestions> = ({
  formik,
  questionsText,
  name,
  options,
}) => {
  return (
    <div className="mt-4">
      <div className="font-bold">{questionsText}</div>
      <div className="grid grid-cols-3">
        {options.map((option, index) => (
          <label key={index}>
            <Radio
              name={name}
              value={option.value}
              onChange={() => formik.setFieldValue(name, option.value)}
              checked={formik.values[name] === option.value}
            />
            <span>{option.value}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Questions;
