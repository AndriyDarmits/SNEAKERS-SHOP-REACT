import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div``;

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
          <span>Length</span>: 100 % cotton
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
