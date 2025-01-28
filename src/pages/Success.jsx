import RightTickImage from "../assets/tick.png";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchparams] = useSearchParams();
  const data = searchparams.get(`data`);
  // console.log(data);

  const decodedData = atob(data);
  const newData = JSON.parse(decodedData);
  console.log(decodedData, newData);
  return (
    <>
      <section className="main_padding mt-[87px] h-[70vh] flex flex-col items-center justify-center">
        <div className="w-[50%] shadow-md mx-auto p-10 flex flex-col items-center justify-center gap-2">
          <img src={RightTickImage} alt="right tick image" className="w-36" />
          <p className="font-semibold text-lg">
            Status : <span className="text-red-500">{newData.status}</span>
          </p>
          <p className="font-semibold text-lg">
            Transaction Code :{" "}
            <span className="text-red-500">{newData.transaction_code}</span>
          </p>
          <p className="font-semibold text-lg">
            Total Amount :{" "}
            <span className="text-red-500">Rs {newData.total_amount}/-</span>
          </p>
          <p className="text-2xl font-semibold">Payment Successfully Done</p>
        </div>
      </section>
    </>
  );
};

export default Success;
