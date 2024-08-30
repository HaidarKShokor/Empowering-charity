import React from "react";
import Select from "react-select";
import { useTheme } from "./ThemeContext";

export default function FormField(props) {
  const { theme } = useTheme();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#0c3d32" : "#409b8c",
      borderColor: theme === "dark" ? "#ffffff" : "#3a3a43",
      color: theme === "dark" ? "#ffffff" : "#06473e",
      minHeight: "56px",
      borderRadius: "10px",
      paddingLeft: "15px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#0c3d32" : "#409b8c",
      color: theme === "dark" ? "#ffffff" : "#06473e",
      borderRadius: "15px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#4b6264",
    }),
    input: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
      paddingLeft: "10px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#4b5264" : "#888888",
    }),
    indicatorSeparator: (provided) => ({
      display: "none",
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#ffffff" : "#000000",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme === "dark"
          ? "#A18167"
          : "#dfc1a9"
        : state.isFocused
        ? theme === "dark"
          ? "#0c3d32"
          : "#409b8c"
        : theme === "dark"
        ? "#0c3d32"
        : "#409b8c",
      color: theme === "dark" ? "#ffffff" : "#06473e",
      "&:hover": {
        backgroundColor: theme === "dark" ? "#A18167" : "#dfc1a9",
        color: theme === "dark" ? "#ffffff" : "#06473e",
      },
    }),
  };

  return (
    <label className="flex-1 w-full flex flex-col ">
      {props.labelName && (
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[var(--text-color)] mb-[10px]">
          {props.labelName}
        </span>
      )}

      {props.isTextArea ? (
        <textarea
          required
          value={props.value}
          onChange={props.handleChange}
          rows={10}
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[var(--border-color-form)] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
        />
      ) : props.isSelect ? (
        <Select
          required
          options={props.options}
          value={props.options.find((option) => option.value === props.value)}
          onChange={(selectedOption) =>
            props.handleChange({ target: { value: selectedOption.value } })
          }
          styles={customStyles}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          required
          value={props.value}
          onChange={props.handleChange}
          type={props.inputType}
          step="0.1"
          min={props.min}
          placeholder={props.placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[var(--border-color-form)] bg-transparent font-epilogue text-[var(--createCharity1-text-color)] text-[14px] placeholder:text-[var(--placeholder-color)] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  );
}
