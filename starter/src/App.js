import React from "react";
import data from "./data";
import Testimonial from "./component/Testimonial";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[#E5E7EB]">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="h-[4px] w-1/5 mx-auto mt-1 bg-violet-400"></div>

          <Testimonial reviews={reviews}/>
        </div>



        
    </div>
  );
};

export default App;
