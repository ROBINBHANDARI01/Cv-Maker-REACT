import { useResume } from "../../context/ResumeContext";
import { GraduationCap, Trash2, Plus } from "lucide-react";

function Education() {
  const { resume, dispatch } = useResume();

  const handleChange = (index, field) => (e) =>
    dispatch({
      type: "update_Array_Item",
      section: "education",
      index,
      field,
      value: e.target.value,
    });

  const inputClass = "border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    /* IMPROVEMENT 1: Added max-h-[80vh], overflow-y-auto, and relative for scrolling */
    <div className="bg-white rounded-xl  m-4  max-h-[80vh] overflow-y-auto relative">

      {/* Header */}
   
      <div className="sticky top-0 z-10 bg-white pb-4 mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Education</h2>
        <p className="text-sm text-gray-500 mt-0.5">Add your academic background</p>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-4">
        {/* BUG FIX 1: Added optional chaining (?.) to prevent crashing if education array is missing */}
        {resume?.education?.map((edu, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">

            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-800">
                  {edu.educationPlace || `Education ${index + 1}`}
                </span>
              </div>
              <button
                type="button"
                /* BUG FIX 2: Added disabled block so user can't accidentally delete the last remaining item */
                disabled={resume.education.length === 1}
                onClick={() => dispatch({ type: "remove_Item", section: "education", index })}
                className="text-red-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Fields */}
            <div className="flex flex-col gap-3">

              {/* Institution */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Institution Name</label>
                <input
                  type="text"
                  placeholder="e.g. Delhi University"
                  /* BUG FIX 3: Added fallback string to avoid uncontrolled input errors */
                  value={edu.educationPlace || ""}
                  onChange={handleChange(index, "educationPlace")}
                  className={inputClass}
                />
              </div>

              {/* Degree */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Degree / Qualification</label>
                <input
                  type="text"
                  placeholder="e.g. Bachelor of Computer Applications"
                  value={edu.educationTitle || ""}
                  onChange={handleChange(index, "educationTitle")}
                  className={inputClass}
                />
              </div>

              {/* Start & End Date */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">Start Date</label>
                  <input
                    type="month"
                    value={edu.educationStart || ""}
                    onChange={handleChange(index, "educationStart")}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-medium text-gray-800">End Date</label>
                  <input
                    type="month"
                    value={edu.educationEnd || ""}
                    onChange={handleChange(index, "educationEnd")}
                    className={inputClass}
                  />
                </div>
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
            section: "education",
            newItem: {
              educationPlace: "",
              educationTitle: "",
              educationStart: "",
              educationEnd: "",
            },
          })
        }
        className="mt-4 w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
      >
        <Plus size={16} />
        Add Education
      </button>

    </div>
  );
}

export default Education;
