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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataFromLocalStorage } from "../../../helper";
import actions from "../../../redux/actions/index";

export default function ProductInfo() {
  let { id } = useParams();
  //reudx
  const reduxStore = useSelector((state) => state);
  const { products } = reduxStore;
  const dispatch = useDispatch();
  // data state
  const [productData, setProductData] = useState({});

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
  //TODO: fix size selecting - upd:fixed)))
  const selectSize = (index, e) => {
    setSizes((prev) => {
      if (prev.filter((size) => size.selected === true).length < 1) {
        const chengedSelectedEl = prev.map((size, i) => {
          if (i === index) {
            size.selected = true;
          }
          return size;
        });
        return chengedSelectedEl;
      } else {
        const chengedSelectedEl = prev.map((size, i) => {
          if (i === index) {
            size.selected = false;
          }
          return size;
        });
        return chengedSelectedEl;
      }
    });
  };

  //TODO:wishlist (connect to redux) - UPD: to do removing from wishlist
  const onAddToWishlist = () => {
    console.log(productData);
    // dispatch data to redux store
    if (!productData.isInWishList) {
      // copy data without reference
      const data = { ...productData };
      data.isInWishList = true;
      // add item to wishlist
      dispatch(actions.addProductToWishlist(data));
      // update changes in product data
      dispatch(actions.updateProducts(data));
    }
  };

  // productQuantityHandler
  const [productQuantity, setProductQuantity] = useState(1);
  const decrementHandler = () => {
    setProductQuantity((prev) => {
      if (prev <= 1) {
        return 1;
      }
      return prev - 1;
    });
  };
  const incrementHandler = () => {
    setProductQuantity((prev) => {
      return prev + 1;
    });
  };

  // adding to cart implementation
  //PS: можна ще зробити, оновлення стану елементу кошика при доданні його в вішліст
  const addToCart = () => {
    console.log("hellp");
    const dataToCart = { ...productData };
    const dataToUpdateProduct = { ...productData };
    const selectedSize = [...sizes].filter((size) => size.selected === true);
    if (selectedSize.length === 1 && productQuantity) {
      dataToCart.isInShoppingCart = true;
      dataToCart.size = selectedSize[0].size;
      dataToCart.count = productQuantity;
      console.log(dataToCart);
      dispatch(actions.addProductToCart(dataToCart));
      dataToUpdateProduct.isInShoppingCart = true;
      dispatch(actions.updateProducts(dataToUpdateProduct));
    }
    setSizes((prev) => {
      return prev.map((size, i) => {
        size.selected = false;
        return size;
      });
    });
    setProductQuantity(1);
  };

  useEffect(() => {
    if (products.length) {
      setProductData(...products.filter((product) => product.id === id));
    } else {
      setProductData(getDataFromLocalStorage("product"));
    }
  }, [products, id]);

  return (
    <InfoContainer>
      <ProductContent>
        <h2>{productData?.title}</h2>
        <p>{productData?.price}$</p>
        <RaitingBlock>
          <Rating
            name="read-only"
            value={
              productData?.reviews?.length
                ? productData?.reviews.reduce((prev, current) => {
                    return prev + current.rate;
                  }, 0) / productData?.reviews?.length
                : 0
            }
            precision={0.1}
            readOnly
          />
          <span>({productData?.reviews?.length} dksjvnjkdsnvkjd)</span>
        </RaitingBlock>
        <p>{productData?.description}</p>
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
          <span>Category :</span> <span>{productData?.category}</span>
        </div>
        <div>
          <span>Tag :</span> <span>Sneakers</span>
        </div>
      </AbvailabilityContainer>
      <FlexContainerAddToCart>
        <ProductQuantity>
          <div>{productQuantity}</div>
          <div>
            <div onClick={() => incrementHandler()}>
              <img src={inc} alt="increment" />
            </div>

            <div onClick={() => decrementHandler()}>
              <img src={dec} alt="decrement" />
            </div>
          </div>
        </ProductQuantity>
        <AddToCartBtn>
          <button
            onClick={() => addToCart()}
            disabled={productData.isInShoppingCart ? "true" : ""}
          >
            {" "}
            {productData.isInShoppingCart ? "In a cart" : "Add to cart"}
          </button>
        </AddToCartBtn>
      </FlexContainerAddToCart>
      <WishlistAndSocialsFlexContainer>
        <WishListIcon onClick={() => onAddToWishlist()}>
          {productData?.isInWishList ? (
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
