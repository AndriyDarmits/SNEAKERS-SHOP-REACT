import React, { useEffect, useState } from "react";
import {
  EmailInput,
  NameAndEmail,
  NameInput,
  SendMessageBtn,
  SendMessageFormWrapper,
  TextAreaMessage,
} from "./SendMessageForm.style";

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
