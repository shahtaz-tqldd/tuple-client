import React from "react";
const img1 =
  "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 =
  "https://plus.unsplash.com/premium_photo-1678208879883-0d53ec4e1dd9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img3 =
  "https://plus.unsplash.com/premium_photo-1678208873704-29c8259777eb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const ShortStory = () => {
  return (
    <div className="content my-20">
      <h2 className="text-6xl font-medium leading-[72px] max-w-4xl capitalize">
        We are Agency Expert for more than 20 Years
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="text-black/60 flex flex-col gap-3 mt-10">
          <p>
            At TupleSpot, we are committed to redefining the real estate
            experience with a blend of expertise, innovation, and personalized
            service. Our mission is to help individuals and families find
            properties that meet their unique needs, whether it's a dream home,
            a perfect office space, or an investment opportunity. With years of
            experience and a deep understanding of the real estate market, we
            are your trusted partner in navigating the complexities of buying,
            selling, and renting properties.
          </p>
          <p>
            Our approach goes beyond transactions; it’s about building lasting
            relationships. We pride ourselves on providing tailored solutions,
            leveraging cutting-edge technology, and offering unparalleled
            customer support at every stage of your real estate journey. From
            comprehensive property searches to seamless closing processes, we
            ensure a hassle-free experience that puts your goals first. At
            TupleSpot, your satisfaction is our ultimate success.
          </p>
        </div>
        <div className="relative">
          <img
            src={img1}
            className="absolute -top-36 right-0 w-[240px] h-[240px] object-cover rounded-3xl border-[10px] border-white"
          />
          <img
            src={img2}
            className="mx-auto w-4/5 h-[400px] object-cover rounded-3xl -mt-12"
          />
          <img
            src={img3}
            className="absolute -bottom-20 left-0 w-[200px] h-[200px] object-cover rounded-3xl border-[10px] border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ShortStory;
