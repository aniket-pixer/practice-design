import React, { useState } from "react";
import MessageSection from "@/components/messageSection";
import {
  ButtonError,
  ButtonInfo,
  ButtonSuccess,
  ButtonWarning,
  CenteredWrapper,
} from "./style";

const Message = () => {
  const [messageVisible, setMessageVisible] = useState(true);
  const [infoVisible, setInfoVisible] = useState(true);
  const [successVisible, setSuccessVisible] = useState(true);
  const [warningVisible, setWarningVisible] = useState(true);

  return (
    <CenteredWrapper>
      <ButtonError onClick={() => setMessageVisible(true)}>
        Show Message
      </ButtonError>
      <ButtonInfo onClick={() => setInfoVisible(true)}>Show info</ButtonInfo>
      <ButtonSuccess onClick={() => setSuccessVisible(true)}>
        Show success
      </ButtonSuccess>
      <ButtonWarning onClick={() => setWarningVisible(true)}>
        Show Warning
      </ButtonWarning>
      {messageVisible && (
        <MessageSection
          type="error"
          content="This is a error message!"
          onClose={() => setMessageVisible(false)}
        />
      )}
      {infoVisible && (
        <MessageSection
          type="info"
          content="This is a info message!"
          onClose={() => setInfoVisible(false)}
        />
      )}
      {successVisible && (
        <MessageSection
          type="success"
          content="This is a success message!"
          onClose={() => setSuccessVisible(false)}
        />
      )}
      {warningVisible && (
        <MessageSection
          type="warning"
          content="This is a warning message!"
          onClose={() => setWarningVisible(false)}
        />
      )}
    </CenteredWrapper>
  );
};

export default Message;
