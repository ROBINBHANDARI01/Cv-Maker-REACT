import { useResume } from "../../context/ResumeContext";
import { Award, Trash2, Plus, X } from "lucide-react";

function SkillsForm() {
  const { resume, dispatch } = useResume();

  const inputClass = "border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
   
    <div className="bg-white rounded-xl m-4 max-h-[80vh] overflow-y-auto relative">

      {/* Header */}
     
      <div className="sticky top-0 z-10 bg-white pb-4 mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
        <p className="text-sm text-gray-500 mt-0.5">Add your technical and soft skills by category</p>
      </div>

      <div className="flex flex-col gap-4">
        {resume?.skills?.map((skl, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">

            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  {skl.skillType || `Category ${index + 1}`}
                </span>
              </div>
              <button
                type="button"
                disabled={resume.skills.length === 1}
                onClick={() => dispatch({ type: "remove_Item", section: "skills", index })}
                className="text-red-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Category Name */}
            <div className="flex flex-col gap-1">
              <label className="text-[13px] font-medium text-gray-800">Category Name</label>
              <input
                type="text"
                placeholder="e.g. Frontend, Backend, Tools"
                /* BUG FIX 1: Added fallback empty string to prevent uncontrolled input warning */
                value={skl.skillType || ""}
                onChange={(e) =>
                  dispatch({
                    type: "update_Array_Item",
                    section: "skills",
                    index,
                    field: "skillType",
                    value: e.target.value,
                  })
                }
                className={inputClass}
              />
            </div>

            {/* Skills List */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-medium text-gray-800">Skills</label>
              {skl.skillsList?.map((point, indexPoint) => (
                <div key={indexPoint} className="flex items-center gap-2">
                  <input
                    placeholder="e.g. React.js, Tailwind CSS"
                    /* BUG FIX 1: Added fallback empty string */
                    value={point || ""}
                    onChange={(e) =>
                      dispatch({
                        type: "update_Nested_Array",
                        section: "skills",
                        field: "skillsList",
                        index,
                        subIndex: indexPoint,
                        value: e.target.value,
                      })
                    }
                    className={`${inputClass} flex-1`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "remove_Bullet",
                        section: "skills",
                        index,
                        subIndex: indexPoint,
                        field: "skillsList",
                      })
                    }
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              {/* Add skill bullet */}
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "add_Bullet",
                    section: "skills",
                    index,
                    field: "skillsList",
                  })
                }
                className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600 mt-1 w-fit"
              >
                <Plus size={13} />
                Add skill
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Add Category Button */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "add_Item",
            section: "skills",
            newItem: { skillType: "", skillsList: [""] },
          })
        }
        className="mt-4 w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
      >
        <Plus size={16} />
        Add Category
      </button>

    </div>
  );
}

export default SkillsForm;
