import { useResume } from "../../context/ResumeContext";
import { BriefcaseBusiness, Trash2, Plus } from "lucide-react";

function ExperienceForm() {
  const { resume, dispatch } = useResume();

  const handleChange = (index, field) => (e) =>
    dispatch({
      type: "update_Array_Item",
      section: "experience",
      index,
      field,
      value: e.target.value,
    });

  const inputClass = "border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    /* IMPROVEMENT 1: Added max-h-[80vh], overflow-y-auto, and relative to isolate scrolling */
    <div className="bg-white rounded-xl m-4  max-h-[80vh] overflow-y-auto relative">

      {/* Header */}
     
      <div className="sticky top-0 z-10 bg-white pb-4 mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
        <p className="text-sm text-gray-500 mt-0.5">Add your recent work history</p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-4">
        {/* BUG FIX 1: Added optional chaining (?.) to prevent crashes on initial loads */}
        {resume?.experience?.map((exp, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">

            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-800">
                  {exp.companyName || `Experience ${index + 1}`}
                </span>
              </div>
              <button
                type="button"
                /* BUG FIX 2: Prevented complete deletion of the last item to protect layout state */
                disabled={resume.experience.length === 1}
                onClick={() => dispatch({ type: "remove_Item", section: "experience", index })}
                className="text-red-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3">

              {/* Company & Role */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Google"
                    /* BUG FIX 3: Appended empty string fallback for stable state control */
                    value={exp.companyName || ""}
                    onChange={handleChange(index, "companyName")}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    value={exp.role || ""}
                    onChange={handleChange(index, "role")}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Start & End Date */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">Start Date</label>
                  <input
                    type="month"
                    value={exp.start || ""}
                    onChange={handleChange(index, "start")}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">End Date</label>
                  <input
                    type="month"
                    value={exp.end || ""}
                    onChange={handleChange(index, "end")}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Description / Responsibilities</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Built responsive UI components using React and Tailwind CSS..."
                  value={exp.description || ""}
                  onChange={handleChange(index, "description")}
                  className={`${inputClass} resize-none`}
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "add_Item",
            section: "experience",
            newItem: {
              companyName: "",
              role: "",
              start: "",
              end: "",
              description: "",
            },
          })
        }
        className="mt-4 w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
      >
        <Plus size={16} />
        Add Experience
      </button>

    </div>
  );
}

export default ExperienceForm;
