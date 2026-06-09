import { useResume } from "../../context/ResumeContext";
import { FolderGit2, Trash2, Plus, X } from "lucide-react";

function Projects() {
  const { resume, dispatch } = useResume();

  const handleChange = (index, field) => (e) =>
    dispatch({
      type: "update_Array_Item",
      section: "projects",
      index,
      field,
      value: e.target.value,
    });

  const inputClass = "border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (

    <div className="bg-white rounded-xl  m-4  max-h-[80vh] overflow-y-auto relative">

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white pb-4 mb-2">
        <h2 className="text-lg font-semibold text-gray-900 ">Projects</h2>
        <p className="text-sm text-gray-500 mt-0.5">Showcase your best work</p>
      </div>

      <div className="flex flex-col gap-4">
        {resume.projects.map((proj, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 flex flex-col gap-4">

            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderGit2 size={16} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  {proj.projectName || `Project ${index + 1}`}
                </span>
              </div>
              <button
                disabled={resume.projects.length === 1}
                type="button"
                onClick={() => dispatch({ type: "remove_Item", section: "projects", index })}
                className="text-red-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-3">

              {/* Project Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Project Title</label>
                <input
                  type="text"
                  placeholder="e.g. Portfolio Website"
                  value={proj.projectName || ""}
                  onChange={handleChange(index, "projectName")}
                  className={inputClass}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Description</label>
                <textarea
                  rows={3}
                  placeholder="e.g. A personal portfolio built with Next.js and Tailwind CSS..."
                  value={proj.projectDescription || ""}
                  onChange={handleChange(index, "projectDescription")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Tech Stack / Additional Details */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-800">Technologies Used</label>
                {proj.additionalDetails?.map((details, dindex) => (
                  <div key={dindex} className="flex items-center gap-2">
                    <input
                      placeholder="e.g. React, Node.js, MongoDB"
                      value={details || ""}
                      onChange={(e) =>
                        dispatch({
                          type: "update_Nested_Array",
                          section: "projects",
                          index,
                          subIndex: dindex,
                          value: e.target.value,
                          field: "additionalDetails",
                        })
                      }
                      className={`${inputClass} flex-1`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "remove_Bullet",
                          section: "projects",
                          index,
                          field: "additionalDetails",
                          subIndex: dindex,
                        })
                      }
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {/* Add bullet */}
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "add_Bullet",
                      section: "projects",
                      index,
                      field: "additionalDetails",
                    })
                  }
                  className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-600 mt-1 w-fit"
                >
                  <Plus size={13} />
                  Add technology
                </button>
              </div>

              {/* Live URL */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Live URL</label>
                <input
                  type="url"
                  placeholder="https://your-project.vercel.app"
                  value={proj.liveUrl || ""}
                  onChange={handleChange(index, "liveUrl")}
                  className={inputClass}
                />
              </div>

              {/* Github URL */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-medium text-gray-800">Github URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/username/repo"
                  value={proj.githubUrl || ""}
                  onChange={handleChange(index, "githubUrl")}
                  className={inputClass}
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Add Project Button */}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "add_Item",
            section: "projects",
            newItem: {
              projectName: "",
              projectDescription: "",
              additionalDetails: [""],
              liveUrl: "",
              githubUrl: "",
            },
          })
        }
        className="mt-4 w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 rounded-xl py-3 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
      >
        <Plus size={16} />
        Add Project
      </button>

    </div>
  );
}

export default Projects;
