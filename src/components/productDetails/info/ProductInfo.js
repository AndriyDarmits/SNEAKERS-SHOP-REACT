import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

import { ProductQuantity } from "../../../reusable-styles/reusableStyle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaFacebookF, FaDribbble, FaGoogle, FaTwitter } from "react-icons/fa";
import inc from "../../../assets/icons/cart/inc.png";
import dec from "../../../assets/icons/cart/dec.png";
import {
  AbvailabilityContainer,
  AddToCartBtn,
  FlexContainerAddToCart,
  InfoContainer,
  ProductContent,
  RaitingBlock,
  Size,
  SizeItem,
  SocialIcons,
  WishlistAndSocialsFlexContainer,
  WishListIcon,
} from "./ProductInfo.style";

export default function ProductInfo() {
  // rating state
  const [value, setValue] = useState(0);
  // shoe sizes
  const [sizes, setSizes] = useState([
    { size: "36", selected: false },
    { size: "36.5", selected: false },
    { size: "37", selected: false },
    { size: "37.5", selected: false },
    { size: "38", selected: false },
    { size: "38.5", selected: false },
    { size: "39", selected: false },
    { size: "39.5", selected: false },
    { size: "40", selected: false },
    { size: "40.5", selected: false },
    { size: "41", selected: false },
    { size: "41.5", selected: false },
    { size: "42", selected: false },
    { size: "42.5", selected: false },
    { size: "43", selected: false },
    { size: "43.5", selected: false },
    { size: "44", selected: false },
    { size: "44.5", selected: false },
    { size: "45", selected: false },
  ]);
  //TODO: fix size selecting
  const selectSize = (index, e) => {
    const chengedSelectedEl = sizes.map((size, i) => {
      if (i === index) {
        size.selected = true;
      }
      return size;
    });
    setSizes(chengedSelectedEl);
  };

  // wishlist icons
  const [isInWishList, setisInWishList] = useState(false);
  return (
    <InfoContainer>
      <ProductContent>
        <h2>Product title</h2>
        <p>Price</p>
        <RaitingBlock>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          ></Rating>{" "}
          <span>({1} dksjvnjkdsnvkjd)</span>
        </RaitingBlock>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque la moth udantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecton beatae vitae
          dicta sunt explicabo. Nemo enim ipsam headech voluptatem quia voluptas
          sitdup aspernatur aut odit aut fugit, sed quia consequuntur
        </p>
      </ProductContent>

      <Size>
        <div>
          {sizes.map((s, index) => (
            <SizeItem
              selected={s.selected}
              onClick={(e) => selectSize(index, e)}
            >
              {s.size}
            </SizeItem>
          ))}
        </div>
      </Size>
      <AbvailabilityContainer>
        <div>
          <span>Availability :</span> <span>In stock</span>
        </div>
        <div>
          <span>Category :</span> <span> Woman</span>
        </div>
        <div>
          <span>Tag :</span> <span>Sweater</span>
        </div>
      </AbvailabilityContainer>
      <FlexContainerAddToCart>
        <ProductQuantity>
          <div>0</div>
          <div>
            <div>
              <img src={inc} alt="increment" />
            </div>

            <div>
              <img src={dec} alt="decrement" />
            </div>
          </div>
        </ProductQuantity>
        <AddToCartBtn>
          <button>Add to cart</button>
        </AddToCartBtn>
      </FlexContainerAddToCart>
      <WishlistAndSocialsFlexContainer>
        <WishListIcon onClick={() => setisInWishList(!isInWishList)}>
          {isInWishList ? (
            <FavoriteIcon
              style={{
                color: "red",
              }}
            />
          ) : (
            <FavoriteBorderIcon style={{ color: `#666666` }} />
          )}
          <div>Add to wishlist</div>
        </WishListIcon>
        <SocialIcons>
          <div>Share:</div>
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaDribbble />
          </a>
          <a href="">
            <FaGoogle />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </SocialIcons>
      </WishlistAndSocialsFlexContainer>
    </InfoContainer>
  );
}
