import { useState } from "react";
import { Heart, Eye } from "lucide-react";

import robin from "../../assets/slider/robin.jpg";
import brenda from "../../assets/slider/temp1.jpg";
import millie from "../../assets/slider/temp2.png";
import walo from "../../assets/slider/temp3.jpg";

const templates = [
  {
    id: 1,
    name: "Robin Bhandari",
    category: "professional",
    image: robin,
  },
  {
    id: 2,
    name: "Brenda Davis",
    category: "creative",
    image: brenda,
  },
  {
    id: 3,
    name: "Millie Smith",
    category: "modern",
    image: millie,
  },
  {
    id: 4,
    name: "Waldo Smith",
    category: "simple",
    image: walo,
  },
];

function ResumeCard({ name, category, image }) {
  return (
    <div
      className="
      min-w-85
md:min-w-72.5
lg:min-w-85
      bg-white
      rounded-3xl
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-300
      overflow-hidden
      group
      snap-start
      border
      border-gray-100
      "
    >
      {/* Preview Image */}
      <div className="relative flex justify-center m-4 shadow-md overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

        {/* Hover Overlay */}
        <div
          className="
          absolute inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          flex
          items-center
          justify-center
          "
        >
          <button
            className="
            flex
            items-center
            gap-2
            bg-white
            px-5
            py-3
            rounded-xl
            font-medium
            shadow-lg
            hover:scale-105
            transition
            "
          >
            <Eye size={18} />
            Preview
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-2">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-900">
              {name}
            </h3>

            <p className="capitalize text-gray-500 text-sm">
              {category} Resume
            </p>
          </div>

          <button
            className="
            h-11
            w-11
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-gray-200
            text-gray-500
            hover:text-red-500
            hover:border-red-300
            transition
            "
          >
            <Heart size={18} />
          </button>
        </div>


        {/* Actions */}
        <div className="flex gap-3 mt-3 md:mt-5">
          <button
            className="
            flex-1
            py-3
            rounded-xl
            border
            border-gray-200
            font-medium
            hover:bg-gray-50
            transition
            "
          >
            Preview
          </button>

          <button
            className="
            flex-1
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            hover:bg-blue-700
            transition
            shadow-md
            "
          >
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RenderTemplate() {
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    "creative",
    "professional",
    "modern",
    "simple",
  ];

  const filtered =
    filter === "all"
      ? templates
      : templates.filter(
          (template) => template.category === filter
        );

  return (
    <section className="w-full">
      {/* Filter Buttons */}
      <div
        className="
        flex
        justify-center
        gap-3
        overflow-x-auto
        pb-3
        mb-8
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-5 py-2
              rounded-full
              whitespace-nowrap
              font-medium
              transition-all
              duration-300
              ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Templates */}
      <div className="relative">

        <div
          className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          pb-6
          px-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          "
        >
          {filtered.map((template) => (
            <ResumeCard
              key={template.id}
              name={template.name}
              category={template.category}
              image={template.image}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="md:mt-50 text-center">
    
        <button
          className="
          hidden
          md:block
          mt-6
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-xl
          font-medium
          shadow-lg
          transition
          "
        >
          View All Templates →
        </button>
      </div>
    </section>
  );
}