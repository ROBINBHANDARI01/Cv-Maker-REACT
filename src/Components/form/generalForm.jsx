import { useResume } from "../../context/ResumeContext";

function GeneralForm() {
  const { resume, dispatch } = useResume();

  const handleChange = (field) => (e) =>
    dispatch({
      type: "update_Normal_Field",
      payload: { section: "general", field, value: e.target.value },
    });

  return (
    <div className="bg-white rounded-xl p-6 m-4 shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
        <p className="text-sm text-gray-600 mt-0.5">Add your personal details and contact information</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4">

        {/* First & Last name row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm  font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="John"
              value={resume.general.firstName}
              onChange={handleChange("firstName")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              value={resume.general.lastName}
              onChange={handleChange("lastName")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Job Title */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            placeholder="Frontend Developer"
            value={resume.general.role}
            onChange={handleChange("role")}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Email & Phone row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={resume.general.email}
              onChange={handleChange("email")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="+91 98765 43210"
              value={resume.general.mobile}
              onChange={handleChange("mobile")}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="City, State, Country"
            value={resume.general.address}
            onChange={handleChange("address")}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Contact / Links */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Contact Info</label>
          <textarea
            placeholder="LinkedIn, GitHub, portfolio links..."
            value={resume.general.contact}
            onChange={handleChange("contact")}
            rows={3}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

      </div>
    </div>
  );
}

export default GeneralForm;