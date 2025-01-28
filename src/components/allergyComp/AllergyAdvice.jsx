import allergyqr from "../../assets/qr.png";

const AllergyAdvice = () => {
  return (
    <>
      <section className="main_padding py-24">
        <div className="w-full text-center mb-6">
          <h3 className="text-center text-3xl font-[900]">
            <span className="text-[#FB5D03]">Allergy</span> Advice
          </h3>
        </div>

        <div>
          <p className="text-[#4d4d4d]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus provident adipisci sapiente veniam eius blanditiis,
            consectetur quas quasi magnam corrupti. Nam eligendi corporis
            repudiandae veritatis laudantium voluptates ratione, modi excepturi
            pariatur odit ipsum incidunt nihil iure omnis quibusdam distinctio!
            Exercitationem.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            quibusdam dolorum natus earum repellendus praesentium magnam ex
            aspernatur aliquam necessitatibus. Repellendus non vel at beatae
            molestias mollitia reiciendis praesentium voluptates.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            natus enim sint atque, ex tempora praesentium eligendi ducimus
            provident hic possimus odit ipsa. Non, pariatur maxime.
            Necessitatibus soluta vero architecto, sapiente autem nisi
            recusandae eaque odio, porro veritatis perspiciatis, asperiores ut
            reiciendis excepturi. Vero labore doloribus quisquam commodi
            eligendi in eaque fuga numquam aperiam temporibus. Id nesciunt ullam
            commodi in.
          </p>
          <br />

          <p className="text-[#4d4d4d]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            natus enim sint atque, ex tempora praesentium eligendi ducimus
            provident hic possimus odit ipsa. Non, pariatur maxime.
            Necessitatibus soluta vero architecto, sapiente autem nisi
            recusandae eaque odio, porro veritatis perspiciatis, asperiores ut
            reiciendis excepturi. Vero labore doloribus quisquam commodi
            eligendi in eaque fuga numquam aperiam temporibus. Id nesciunt ullam
            commodi in. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aperiam suscipit ab, laboriosam error reprehenderit ducimus
            tenetur fuga iure ad cupiditate voluptatibus enim deleniti, a
            aliquam, ratione nesciunt odit fugiat in. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Quasi natus enim sint atque, ex
            tempora praesentium eligendi ducimus provident hic possimus odit
            ipsa. Non, pariatur maxime. Necessitatibus soluta vero architecto,
            sapiente autem nisi recusandae eaque odio, porro veritatis
            perspiciatis, asperiores ut reiciendis excepturi. Vero labore
            doloribus quisquam commodi eligendi in eaque fuga numquam aperiam
            temporibus. Id nesciunt ullam commodi in. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Aperiam suscipit ab, laboriosam
            error reprehenderit ducimus tenetur fuga iure ad cupiditate
            voluptatibus enim deleniti, a aliquam, ratione nesciunt odit fugiat
            in.
          </p>
        </div>
        {/* first div */}

        <div className="bg-[#E9E9E9] mt-10 p-6 rounded-md flex flex-col gap-2 items-center shadow-md">
          <h4 className="text-2xl text-[#229493] font-bold">
            Scan the QR Code
          </h4>
          <p>You can also check the allergy advices using your phone as well</p>
          <div className="bg-white p-2 rounded-md shadow-md">
            <img src={allergyqr} alt="allergy qr" className="md:w-56 w-44" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllergyAdvice;
