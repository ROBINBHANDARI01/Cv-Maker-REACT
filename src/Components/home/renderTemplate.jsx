import { useState } from "react";
import robin from "../../assets/slider/robin.jpg"
import brenda from "../../assets/slider/temp1.jpg"
import millie from "../../assets/slider/temp2.jpg"
import walo from "../../assets/slider/temp3.jpg"

const templates = [
  { id: 1, name: "Robin Bhandari", category: "professional", image: robin },
  { id: 2, name: "Brenda Davis", category: "creative", image: brenda },
  { id: 3, name: "Millie Smith",  category: "modern", image: millie},
  {id: 4, name: "Waldo Smith", category: "simple", image: walo}
];

 function ResumeCards({ id, name, category, image }) {
  return (
    <div
      className="
      min-w-70
      lg:h-140

      lg:min-w-95
      bg-white/10
      backdrop-blur-xl
      border border-white/30
      rounded-3xl
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      p-5
      "
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          className="
          h-84
          lg:h-112
          w-full
          object-cover
          rounded-2xl
          transition-transform
          duration-500
          hover:scale-105
          "
          src={image}
          alt={name}
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-5">

        <button
          className="
          flex-1
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          py-3
          rounded-2xl
          transition-all
          duration-300
          shadow-md
          "
        >
          Use This Template
        </button>

        <button
          className="
          h-12
          w-12
          flex
          items-center
          justify-center
          rounded-2xl
          border
          border-blue-200
          text-blue-600
          hover:bg-blue-50
          hover:border-blue-400
          transition-all
          duration-300
          "
        >
          ♡
        </button>

      </div>
      
    </div>
  );
}


    
    export default function RenderTemplate(){
        const [filter , setFilter] = useState("all")
        const filtered = filter === "all" ? templates : templates.filter(t => t.category === filter);

        return(
           <>
  <div>

    {/* Filter Buttons */}
    <div className="flex overflow-x-auto md:gap-4 gap-3 items-center md:justify-center scroll-smooth mb-7 pb-2">

      <button
        onClick={() => setFilter("all")}
        className="
        px-4 py-1 rounded-full
        bg-white/70
        focus:bg-blue-600
        focus:text-white
        
        backdrop-blur-md
        border border-white/40
        shadow-sm
        hover:bg-blue-600
        hover:text-white
        transition-all
        duration-300
        "
      >
        All
      </button>

      <button
        onClick={() => setFilter("creative")}
        className="
        px-4 py-1 rounded-full
        bg-white/70
        focus:bg-blue-600
        focus:text-white
        backdrop-blur-md
        border border-white/40
        shadow-sm
        hover:bg-blue-600
        hover:text-white
        transition-all
        duration-300
        "
      >
        Creative
      </button>

      <button
        onClick={() => setFilter("professional")}
        className="
        px-4 py-1 rounded-full
        bg-white/70
        focus:bg-blue-600
        focus:text-white
        backdrop-blur-md
        border border-white/40
        shadow-sm
        hover:bg-blue-600
        hover:text-white
        transition-all
        duration-300
        "
      >
        Professional
      </button>

      <button
        onClick={() => setFilter("simple")}
        className="
        px-4 py-1 rounded-full
        focus:bg-blue-600
        focus:text-white
        bg-white/70
        backdrop-blur-md
        border border-white/40
        shadow-sm
        hover:bg-blue-600
        hover:text-white
        transition-all
        duration-300
        "
      >
        Modern
      </button>
    </div>

    {/* Cards */}
  <div
  className="
    w-full
    flex
    gap-5
    overflow-x-auto
    pb-5
    px-2
    scroll-smooth
    snap-x
    snap-mandatory
    [&::-webkit-scrollbar]:h-1.5
    [&::-webkit-scrollbar-track]:bg-sky-200
    [&::-webkit-scrollbar-thumb]:bg-sky-700/50
  "
>
  {filtered.map((t) => (
    <ResumeCards
      key={t.id}
      name={t.name}
      category={t.category}
      image={t.image}
    />
  ))}
</div>

  </div>
  <button>View all templates</button>
</>
        )
    }

