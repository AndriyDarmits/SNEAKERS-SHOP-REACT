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
  // product quantity state
  const [productQuantity, setProductQuantity] = useState(1);

  const selectSize = (index, e) => {
    if (!productData.isInShoppingCart) {
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
    }
  };

  //TODO:make reusable
  const onAddToWishlist = () => {
    // copy data without reference
    const data = { ...productData };
    // dispatch data to redux store
    if (!productData.isInWishList) {
      data.isInWishList = true;
      // add item to wishlist
      dispatch(actions.addProductToWishlist(data));
      // update changes in product data
      dispatch(actions.updateProducts(data));
    } else {
      // remove itemdelete products from wishlist
      dispatch(actions.deleteProductFromWishlist(data));
      // update changes in product data
      data.isInWishList = false;
      dispatch(actions.updateProducts(data));
    }
  };

  // productQuantityHandler
  const decrementHandler = () => {
    // if product is not in cart
    if (!productData.isInShoppingCart) {
      setProductQuantity((prev) => {
        if (prev <= 1) {
          return 1;
        }
        return prev - 1;
      });
    }
  };
  const incrementHandler = () => {
    // if product is not in cart
    if (!productData.isInShoppingCart) {
      setProductQuantity((prev) => {
        return prev + 1;
      });
    }
  };

  // adding to cart implementation
  //PS: можна ще зробити, оновлення стану елементу кошика при доданні його в вішліст
  const addToCart = () => {
    const dataToCart = { ...productData };
    const dataToUpdateProduct = { ...productData };
    //selected size
    const selectedSize = [...sizes].filter((size) => size.selected === true);
    if (selectedSize.length === 1 && productQuantity) {
      dataToCart.isInShoppingCart = true;
      dataToCart.size = selectedSize[0].size;
      dataToCart.count = productQuantity;
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

  // set data from redux
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
              /* ?. - тому що при перщому рендерингу данів немає */
              productData?.reviews?.length
                ? productData?.reviews.reduce((prev, current) => {
                    return prev + current.rate;
                  }, 0) / productData?.reviews?.length
                : 0
            }
            precision={0.1}
            readOnly
          />
          <span>({productData?.reviews?.length} reviews)</span>
        </RaitingBlock>
        <p>{productData?.description}</p>
      </ProductContent>

      <Size>
        <div>
          {sizes.map((s, index) => (
            <SizeItem
              key={index}
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
            disabled={productData.isInShoppingCart ? true : false}
          >
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
          <a href="https://www.facebook.com/">
            <FaFacebookF />
          </a>
          <a href="https://dribbble.com/">
            <FaDribbble />
          </a>
          <a href="https://www.google.com.ua/">
            <FaGoogle />
          </a>
          <a href="https://twitter.com/?lang=uk">
            <FaTwitter />
          </a>
        </SocialIcons>
      </WishlistAndSocialsFlexContainer>
    </InfoContainer>
  );
}
