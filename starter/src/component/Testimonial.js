import Card from "./Card";
import { useState } from "react";

function Testimonial({reviews}){

    let [index, setIndex] = useState(0);

    const leftTestimonialHandler = () =>{
        if (index === 0){
            index = reviews.length;
        }
        setIndex(index - 1);
    }

    const rightTestimonialHandler = () => {
        index = index + 1;
        index = index % reviews.length;
        setIndex(index);
    }

    const supriseHandler = (max, min) =>{
        let newIndex = Math.floor(Math.random() * (max - min)) + min;
        setIndex(newIndex);
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl">
            <Card reviews ={reviews[index]}/>

            <div className="text-violet-400 mx-auto mt-5">
                <i className="fa-solid fa-quote-right"></i>
            </div>

            <div className="flex text-3xl mt-5 gap-3 font-bold text-violet-400 mx-auto">
                <i className="fa-solid fa-chevron-left cursor-pointer hover:text-violet-500" onClick={leftTestimonialHandler}></i>
                <i className="fa-solid fa-chevron-right cursor-pointer hover:text-violet-500" onClick={rightTestimonialHandler}></i>
            </div>

            <div className="mt-5">
                <button className=" bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer py-2 rounded-md px-10 text-white text-lg"
                onClick = {() => supriseHandler(0, reviews.length)}>Suprise Me</button>
            </div>

        </div> 
    );
}

export default Testimonial;