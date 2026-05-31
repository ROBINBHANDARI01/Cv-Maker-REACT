import { useResume } from "../../context/ResumeContext";

function AboutForm() {
  const { resume, dispatch } = useResume();

  return (
    <div className="bg-white rounded-xl p-6 m-4 shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Professional Summary</h2>
        <p className="text-sm text-gray-600 mt-0.5">Write a short paragraph about yourself</p>
      </div>

      {/* Field */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-800">Summary</label>
        <textarea
          name="about"
          rows={6}
          placeholder="e.g. Frontend Developer with 3+ years of experience building responsive web applications using React and Tailwind CSS..."
          value={resume.about.aboutYou}
          onChange={(e) =>
            dispatch({
              type: "update_Normal_Field",
              payload: {
                section: "about",
                field: "aboutYou",
                value: e.target.value,
              },
            })
          }
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <span className="text-xs text-gray-400 text-right">
          {resume.about.aboutYou?.length || 0} / 500
        </span>
      </div>

    </div>
  );
}

export default AboutForm;