import PayPalPayment from "@/components/Payment/PayPalPayment";

const CheckOut = ({ searchParams }) => {
  return (
    <div className=" place-content-center mx-60 -z-50 my-20">
      <PayPalPayment amount={searchParams.amount} />
    </div>
  );
};

export default CheckOut;
