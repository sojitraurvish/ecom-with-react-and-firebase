import styled from "styled-components";

import {ReactComponent as ShoppingSvg} from "../../assets/shopping-bag.svg";

export const ShoppingIcon=styled(ShoppingSvg)`
    width: 24px;
    height: 24px;
`
export const CartIconContainer=styled.div`
width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ItemCount=styled.span`
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 15px;
    height: 13px;
    width: 13px;
    text-align: center;
`

// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
  
//     .shopping-icon {
//       width: 24px;
//       height: 24px;
//     }
  
//     .item-count {
//       position: absolute;
//       font-size: 12px;
//       font-weight: bold;
//       bottom: 15px;
//       height: 13px;
//       width: 13px;
//       text-align: center;
      
//     }
//   }
  