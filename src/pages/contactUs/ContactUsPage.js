import { Container } from "../../reusable-styles/reusableStyle";
import React from "react";
import { MapFrame } from "../../components/contactUs/mapFrame/MapFrame";
import {
  ContactinfoAndForm,
  ContactUsFlex,
  ContactUsSection,
} from "./ContactUs.style";
import { ContactInfo } from "../../components/contactUs/contactInfo/ContactInfo";
import { SendMessageForm } from "../../components/contactUs/sendMessageForm/SendMessageForm";

export const ContactUsPage = () => {
  return (
    <ContactUsSection>
      <Container>
        <ContactUsFlex>
          <ContactinfoAndForm>
            <ContactInfo />
            <SendMessageForm />
          </ContactinfoAndForm>
          <MapFrame />
        </ContactUsFlex>
      </Container>
    </ContactUsSection>
  );
};
