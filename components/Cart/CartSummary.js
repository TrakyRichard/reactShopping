import { Button, Segment, Divider } from "semantic-ui-react";
import React from "react";
import calculateCartTotal from "../../utils/calculateCartTotal";
import StripeCheckout from "react-stripe-checkout";

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCardEmpty, setCardEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCardEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub Total:</strong> ${cartAmount}
        <StripeCheckout
          name="Shopping"
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ""}
          currency="USD"
          stripeKey="pk_test_51GvHSoB0kYNpU0sqnJKwZbAubTukaaZeegzJsmm5Wf92xe0FufBxlvZhO2ou9luURAMz8aGXeFID6dvw5jxhTwtv005ZUkpJpt"
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          token={handleCheckout}
          triggerEvent="onClick"
        >
          <Button
            icon="cart"
            disabled={isCardEmpty || success}
            color="teal"
            floated="right"
            content="checkout"
          />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
