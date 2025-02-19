import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const location = useLocation();
  console.log(location.state);

  let total_amount = location.state.reduce((acc, item) => {
    return acc + item.caloriesPerServing * item.qty;
  }, 0);
  // console.log(total_amount);

  let transaction_uuid = uuidv4();
  // console.log(transaction_uuid);

  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  // console.log(hashInBase64);

  return (
    <>
      <section className="main_padding mt-[87px] py-6">
        <h1 className="text-center text-3xl font-bold text-[#EF4444]">
          Payment
        </h1>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input
            type="hidden"
            id="amount"
            name="amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="tax_amount"
            name="tax_amount"
            value="0"
            required
          />
          <input
            type="hidden"
            id="total_amount"
            name="total_amount"
            value={total_amount}
            required
          />
          <input
            type="hidden"
            id="transaction_uuid"
            name="transaction_uuid"
            value={transaction_uuid}
            required
          />
          <input
            type="hidden"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
          />
          <input
            type="hidden"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
          <input
            type="hidden"
            id="success_url"
            name="success_url"
            value="https://food-website-three-kappa.vercel.app/success"
            required
          />
          <input
            type="hidden"
            id="failure_url"
            name="failure_url"
            value="https://food-website-three-kappa.vercel.app/failure"
            required
          />
          <input
            type="hidden"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
          <input
            type="hidden"
            id="signature"
            name="signature"
            value={hashInBase64}
            required
          />

          <div className="py-6 grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2">
            {location.state.map((paymentItem) => {
              return (
                <>
                  <div
                    key={paymentItem.id}
                    className="border-[1.5px] border-gray-300 rounded-md p-5 shadow-sm hover:shadow-md"
                  >
                    <img
                      src={paymentItem.image}
                      className="w-full rounded-md h-[160px] object-cover"
                      alt={paymentItem.name}
                    />
                    <p className="my-1 text-lg font-semibold text-[#EF4444]">
                      {paymentItem.name}
                    </p>
                    <p className="text-lg font-semibold text-[#1E7472]">
                      Rs.{paymentItem.caloriesPerServing} /-
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-lg font-bold">
              Total Amount :{" "}
              <span className="text-[#1E7472]">Rs.{total_amount} /-</span>
            </h3>
            <input
              className="bg-[#1E7472] hover:bg-[#165554] text-lg p-2 rounded-lg w-44 cursor-pointer text-white"
              value="Confirm"
              type="submit"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Payment;
