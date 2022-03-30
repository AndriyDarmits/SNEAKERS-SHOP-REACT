import styled from "@emotion/styled";

export const ContactInfoWrapper = styled.div`
  width: 100%;
  padding: 25px 40px;
  background-color: #f8f8f8;
  margin-bottom: 40px;
`;
export const ContactInfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ContactInfoAddress = styled.address`
  padding-right: 10px;
  h2 {
    font-size: 24px;
    color: #333333;
    text-transform: uppercase;
    font-style: normal;
    margin-bottom: 20px;
  }
  p {
    color: #666666;
    line-height: 2.5;
  }
  a {
    color: #666666;
  }
  span {
    margin-right: 10px;
  }
`;
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  img {
    max-width: 130px;
    border-radius: 50%;
  }
`;
