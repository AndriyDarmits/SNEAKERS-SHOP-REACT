import styled from "@emotion/styled";
import { SectionWrapper } from "../../reusable-styles/reusableStyle";
import { device, color } from "../../GlobalStyles";
export const ShopPageSectionWrapper = styled(SectionWrapper)`
  margin-top: 42px;
  margin-bottom: 45px;
`;
export const ShopPageBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsWrapper = styled.div`
  width: 75%;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${device.tablet}) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const LoadingMessage = styled.div`
  flex-grow: 1;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
