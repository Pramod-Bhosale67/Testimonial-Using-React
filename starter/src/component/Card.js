function Card({reviews}){

    const name = reviews.name;
    const job = reviews.job;
    const text = reviews.text;
    const image = reviews.image;
    const id = reviews.id;

    

    return (
        <div className="flex flex-col md:relative">
            <div className="top-[-7rem] z-[10] absolute mx-auto">
                <img src={image} className="rounded-full aspect-square w-[140px] h-[140px] z-25"/>
                
                <div className="w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>

            </div>

            <div className="text-center mt-[7]">
                <h2 className="font-bold text-2xl capitalize">{name}</h2>
            </div>

            <div className="text-center mt-[7]">
                <p className="text-violet-300 text-sm">{job}</p>
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <i class="fa-solid fa-quote-left"></i>
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{text}</p>
            </div>

        </div>
    );
}
export default Card;