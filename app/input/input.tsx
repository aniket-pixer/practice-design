import CustomInput from "@/components/CustomInput";
import React, { useState } from "react";
import { CustomInputMain } from "./style";

const InputPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <CustomInputMain>
      <h2>Custom Input with Dropdown</h2>
      <CustomInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search"
        size="middle"
        allowClear
        dropdownOptions={options}
        onOptionSelect={(option) => alert(`You selected: ${option}`)}
        prefix={<span>🔍</span>}
        suffix={<span>ℹ️</span>}
        button={<span>.com</span>}
      />
      <CustomInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search"
        size="middle"
        allowClear
        prefix={<span>🔍</span>}
        suffix={<span>ℹ️</span>}
      />
      <CustomInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search"
        size="middle"
        allowClear
        prefix={<span>🔍</span>}
      />
      <CustomInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to search"
        size="middle"
        allowClear
      />
    </CustomInputMain>
  );
};

export default InputPage;
