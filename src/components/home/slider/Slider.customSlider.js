import styled from "styled-components";
import { Button, Container } from "../../../reusable-styles/reusableStyle";

export const SliderContainer = styled(Container)`
  max-width: 1750px;
`;
export const SliderItem = styled.div`
  height: 75vh;
  border-radius: 5px;
`;

export const SliderItemFirst = styled(SliderItem)`
  background: linear-gradient(to right, #d3f6fa, #9bbdeb);
`;
export const SliderItemSecond = styled(SliderItem)`
  background: linear-gradient(to right, #efbde3, #d3f6fa);
`;
export const SliderItemThird = styled(SliderItem)`
  background: linear-gradient(to right, #9bbdeb, #d3f6fa);
`;

export const ShowNowBtn = styled(Button)`
  button {
    color: #fff;
  }
`;
