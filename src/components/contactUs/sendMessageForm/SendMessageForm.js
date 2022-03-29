import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  TextArea,
} from "../../../reusable-styles/reusableStyle";

export const SendMessageFormWrapper = styled.div`
  h2 {
    font-size: 24px;
    color: #333333;
    text-transform: uppercase;
    font-style: normal;
    margin-bottom: 20px;
  }
`;
export const NameAndEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const NameInput = styled(Input)`
  width: 49%;
  input {
    width: 100%;
    padding: 15px 20px;
  }
`;
export const EmailInput = styled(Input)`
  width: 49%;
  input {
    width: 100%;
    padding: 15px 20px;
  }
`;
export const TextAreaMessage = styled(TextArea)`
  margin-bottom: 40px;
  textarea {
    height: 180px;
  }
`;
export const SendMessageBtn = styled(Button)`
  text-align: right;
  button {
    color: #fff;
    padding: 20px 80px;
  }
`;

export const SendMessageForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [buttonDisabling, setButtonDisabling] = useState(true);

  useEffect(() => {
    if (name.length && email.length && text.length) {
      setButtonDisabling(false);
    } else {
      setButtonDisabling(true);
    }
  }, [name, email, text]);
  return (
    <SendMessageFormWrapper>
      <h2>Send us message</h2>

      <form action="/">
        <NameAndEmail>
          <NameInput>
            <input
              type="text"
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </NameInput>
          <EmailInput>
            <input
              type="email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </EmailInput>
        </NameAndEmail>
        <TextAreaMessage>
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Your Message"
            required
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </TextAreaMessage>
        <SendMessageBtn>
          <button
            type="submit"
            disabled={buttonDisabling ? true : false}
            style={{ opacity: buttonDisabling ? 0.5 : 1 }}
          >
            SEND
          </button>
        </SendMessageBtn>
      </form>
    </SendMessageFormWrapper>
  );
};
