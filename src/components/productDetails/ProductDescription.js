import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  color: #666666;
  line-height: 22px;
  padding: 60px;
  font-weight: 600;
  border: 1px solid #ebebeb;
  border-top: 0;
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

export const ProductDescription = () => {
  return (
    <DescriptionContainer>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo al bigth inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo.
      </p>
      <ul>
        <li>
          <span>Material </span>: 100 % cotton
        </li>
        <li>
          <span>Length</span>: 90cm
        </li>
        <li>
          <span>Guarantee</span> : 3 months
        </li>
      </ul>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores
      </p>
    </DescriptionContainer>
  );
};
