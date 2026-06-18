import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";
import {X, Eye } from "lucide-react";
import soon from "../../assets/slider/coming-soon.gif"
import { templates } from "../Data/template.js";

const CATEGORIES = ["All", ...new Set(templates.map((t) => t.category))];

function TemplateCard({ template, onPreview, onUse }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
     
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={template.thumbnail}
          alt={template.name}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-coarse:hidden flex flex-col gap-3 items-center justify-center pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={onPreview}
            className="flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 rounded-xl font-medium text-sm hover:scale-105 transition w-40 justify-center"
          >
            <Eye size={15} />
            Preview
          </button>
          <button
            onClick={onUse}
            className="flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 transition w-40"
          >
            Use Template
          </button>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide bg-white/90 text-gray-700 px-2.5 py-1 rounded-full">
          {template.category}
        </span>
      </div>

      {/* Card footer */}
      <div className="px-4 py-3">
        <p className="font-semibold text-gray-800 text-sm">{template.name}</p>

        {/* Touch-only buttons */}
        <div className="flex gap-2 mt-3 pointer-fine:hidden">
          <button
            onClick={onPreview}
            className="flex-1 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-700"
          >
            Preview
          </button>
          <button
            onClick={onUse}
            className="flex-1 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold"
          >
            Use
          </button>
        </div>
      </div>
    </div>
  );
}

function PreviewModal({ template, onClose, onUse }) {
  if (!template) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl overflow-hidden max-w-sm w-full shadow-2xl">
      
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <p className="font-bold text-gray-900">{template.name}</p>
            <p className="text-xs text-gray-400 capitalize">{template.category}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition text-gray-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preview image */}
        <div className="overflow-auto max-h-[60vh] bg-gray-50 flex justify-center p-4">
          <img
            src={template.thumbnail}
            alt={template.name}
            className="max-w-full h-auto rounded-lg shadow"
          />
        </div>
        
        <div className="px-5 py-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Close
          </button>
          <button
            onClick={onUse}
            className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TemplateGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const { dispatch } = useResume();
  const navigate = useNavigate();

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  const handleUseTemplate = (template) => {
    dispatch({ type: "set_Template", payload: template.id });
    dispatch({ type: "set_Theme", payload: template.themeId });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white border-b border-gray-100 px-6 py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
          Template Gallery
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          Pick your perfect resume
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Every template is fully customizable. Switch anytime — your content stays.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
     
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 mb-6 text-center">
          {filtered.length} template{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onPreview={() => setPreviewTemplate(template)}
              onUse={() => handleUseTemplate(template)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold">No templates in this category yet</p>
            <p className="text-sm mt-1">More coming soon!</p>
          </div>
        )}
      </div>

      <PreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
        onUse={() => {
          handleUseTemplate(previewTemplate);
          setPreviewTemplate(null);
        }}
      />
      <div>
        <p 
        className="text-center font-bold text-xl">More templates are being added </p>
      <img
      className="h-30 mx-auto"
      src={soon}
      ></img>
      </div>
    </div>
  );
}