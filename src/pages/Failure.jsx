import CrossImage from "../assets/cross.png";

const Failure = () => {
  return (
    <>
      <section className="main_padding mt-[87px] h-[70vh] flex flex-col items-center justify-center">
        <div className="w-[50%] shadow-md mx-auto p-10 flex flex-col items-center justify-center gap-4">
          <img src={CrossImage} alt="right tick image" className="w-36" />
          <p className="text-2xl font-semibold">Payment Denied</p>
        </div>
      </section>
    </>
  );
};

export default Failure;
