import styled from "@emotion/styled";

export const DescriptionContainer = styled.div`
  color: #666666;
  line-height: 22px;
  padding: 60px;
  font-weight: 600;
  border: 1px solid #ebebeb;
  border-top: 0;
  @media (max-width: 375px) {
    line-height: 16px;
    font-size: 13px;
    padding: 20px;
  }
  @media (max-width: 768px) {
    line-height: 18px;
    font-size: 14px;
    padding: 30px;
  }
  & > p:nth-of-type(1) {
    margin-bottom: 25px;
  }
  ul {
    margin-bottom: 25px;
  }

  span {
    font-weight: 600;
    color: #333333;
  }
`;
