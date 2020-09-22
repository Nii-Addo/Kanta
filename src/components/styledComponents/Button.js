import styled from 'styled-components';

const Button=styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0.005px solid;
  border-radius: 3px;
  display: block;
  width:auto;
  height:auto;
  transition: all 0.2s ease-out 0s;
`;

export const AddToCartButton=styled.button`
  display: block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.2rem 0rem;
  width: 100%;
  height:40px;
  background: var(--buttonPrimary);
  font-size:17px;
  font-weight:600;
  color: white;
  border: 2px solid white;
`;

export const SmallAddToCartButton=styled(AddToCartButton)`
  max-width:100%;
  height:100%;
  background-color:white;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  color:black;
  border:1px solid var(--buttonPrimary);
`;

export const BuyNowButton=styled(AddToCartButton)`
  background-color:red;
  max-width:100%;
  height:100%;
  line-height: 20px;
  text-align: center;
  color: #fff;
  background-color: #eb612a;
  border:1px solid  #eb612a;
  font-size: 18px;
  cursor: pointer;
  padding: 0px 1em;
`;

export const SignUpButtonLink=styled(Button)`
  border:none;
  background-color:transparent;
  width:100%;

`;

export const LoginButtonLink=styled(Button)`
  background-color:#000080;
  color:white;
  width:100%;

`;

export const StyledSubmitButton=styled(Button)`

`;

export const RecommendationButton=styled(Button)`
  background-color:white;
  color:black;
  width:100%;
  margin:auto;
  line-height: 15px;
  text-align: center;
`;

export const ReviewButton=styled(Button)`
overflow: visible;
  margin: 30px 5px 0;
  padding: 0px 14px 0px 12px;
  height: 35px;
  line-height: 34px;
  font-size: 15px;
  text-transform: uppercase;
  background-color: #e40046;
  border:none;
  width:100%;
  color:white;
`;

export const ClearCartButton=styled(Button)`
overflow: visible;
  margin: 30px 5px 0;
  padding: 0px 14px 0px 12px;
  height: 35px;
  line-height: 34px;
  font-size: 15px;
  text-transform: uppercase;
  background-color: #e40046;
  border:none;
  width:100%;
  color:white;

  &:hover{
  text-decoration: none;
  }
`;

export const CheckoutButton=styled.button`
  display: block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.2rem 0rem;
  width: 100%;
  height:40px;
  background: var(--buttonPrimary);
  font-size:17px;
  font-weight:600;
  color: white;
  border: 2px solid white;
`;
