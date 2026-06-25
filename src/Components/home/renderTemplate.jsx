import { useState } from "react";
import { Heart, Eye } from "lucide-react";
import Template1 from "../Template/Template1";
import Template2 from "../Template/Template2";
import Template3 from "../Template/Template3";
import Template4 from "../Template/Template4";

import { robinBhandari, milliSmith, waldo, BrendaDavis } from "../Template/demo.Resume";

import brenda from "../../assets/slider/brenda.webp"
import robin from "../../assets/template-thumbnails/amanGreen.jpg";
import millie from "../../assets/slider/millieImage.webp";
import walo from "../../assets/slider/waldoImage.webp";

import { useResume } from "../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: 1,
    name: "Brenda Davis",
    category: "modern",
    image: brenda,
  },
  {
    id: 2,
    name: "Robin Bhandari",
    category: "creative",
    image: robin,
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
///////////////////////////////////////////////////

function ResumeCard({ id, name, category, image, onPreview , onUseTemplate }) {
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
      {/* Preview Image Container */}
      <div className="relative flex justify-center m-4 shadow-[0_0_15px_1px_rgba(0,0,0,0.1)] overflow-hidden rounded-2xl">
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

        {/* 1. HOVER OVERLAY (Only interactive on Cursor screens) */}
        <div
          className="
          absolute inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          flex
          flex-col
          gap-3
          items-center
          justify-center
          px-4
          
          /* Hide completely on touch devices, show on cursor devices */
          pointer-events-none pointer-coarse:hidden
          pointer-fine:group-hover:pointer-events-auto
          "
        >
          <button
            onClick={onPreview}
            className="
            w-full
            max-w-45
            flex
            items-center
            justify-center
            gap-2
            bg-white
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

          <button
            onClick={onUseTemplate}
            className="
            w-full
            max-w-45
            flex
            items-center
            justify-center
            bg-blue-600
            text-white
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            hover:scale-105
            transition
            "
          >
            Use Template
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-2">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{name}</h3>
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

        {/* 2. BOTTOM ACTIONS (Only visible on Touch screens) */}
        <div
          className="
          flex 
          gap-3 
          mt-4 
          
          /* Hide on cursor screens, show on touch screens */
          pointer-fine:hidden 
          pointer-coarse:flex
          "
        >
          <button
            onClick={onPreview}
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
            onClick={onUseTemplate}
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

////////

function PreviewModal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      <div className="h-full overflow-auto flex justify-center p-8">
        {children}
      </div>
    </div>
  );
}

export default function RenderTemplate() {
  const [filter, setFilter] = useState("all");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const { dispatch } = useResume();
  const navigate = useNavigate();

  const handleUseTemplate = (id) => {
    dispatch({ type: "set_Template", payload: id });
    navigate("/dashboard");
  };

  const categories = ["all", "creative", "professional", "modern", "simple"];

  const filtered =
    filter === "all"
      ? templates
      : templates.filter((template) => template.category === filter);

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
              {...template}
              onPreview={() => setPreviewTemplate(template.id)}
              onUseTemplate={() => handleUseTemplate(template.id)} // ← add this
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

       
                     {previewTemplate && (
                     <PreviewModal
                        onClose={() => setPreviewTemplate(null)}
                      >
                        {previewTemplate === 1 && <Template1 themeId="blue" data={BrendaDavis} />}
                        {previewTemplate === 2 && <Template2 themeId="green" data={robinBhandari} />}
                        {previewTemplate === 3 && <Template3 themeId="gray" data={milliSmith} />}
                        {previewTemplate === 4 && <Template4 themeId="blue" data={waldo} />}
                      </PreviewModal>
                    )}
         
          

{/*{previewTemplate && (
        <PreviewModal onClose={() => setPreviewTemplate(null)}>
          <img
            src={templates.find((t) => t.id === previewTemplate)?.image}
            alt="Template Preview"
            className="max-w-fit h-auto scale-69 md:scale-95"
          />
        </PreviewModal>
      )} */}
      
    </section>
  );
}
