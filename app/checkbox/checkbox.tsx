import CustomCheckbox from "@/components/checkboxSection";
import React, { useState } from "react";
import {
  CustomCheckboxWrapper,
  CustomWrapper,
  SelectedOptionsTitle,
  SelectedOptionsWrapper,
  SelectOptionsWrapper,
} from "./style";

type CheckboxKeys = "option1" | "option2" | "option3" | "option4";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState<Record<CheckboxKeys, boolean>>({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setCheckboxes((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  return (
    <CustomWrapper>
      <h3>Select Options:</h3>
      <SelectOptionsWrapper>
        {Object.keys(checkboxes).map((key) => (
          <CustomCheckbox
            key={key}
            checked={checkboxes[key as CheckboxKeys]}
            onChange={(checked) => handleCheckboxChange(key, checked)}
          >
            {key.replace("option", "Option ")}
          </CustomCheckbox>
        ))}
      </SelectOptionsWrapper>

      <SelectedOptionsWrapper>
        <SelectedOptionsTitle>Selected Options:</SelectedOptionsTitle>
        <ul>
          {Object.entries(checkboxes)
            .filter(([_, value]) => value)
            .map(([key]) => (
              <li key={key}>{key.replace("option", "Option ")}</li>
            ))}
        </ul>
      </SelectedOptionsWrapper>
      <CustomCheckboxWrapper>
        <CustomCheckbox
          checked={checked}
          onChange={setChecked}
          disabled={false}
        >
          Agree to terms and conditions
        </CustomCheckbox>
        <CustomCheckbox checked={checked} onChange={setChecked} disabled={true}>
          Agree to terms and conditions
        </CustomCheckbox>
      </CustomCheckboxWrapper>
    </CustomWrapper>
  );
};

export default Checkbox;
