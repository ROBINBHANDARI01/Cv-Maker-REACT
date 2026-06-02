import { useResume } from "../../context/ResumeContext";

function Template1() {
  const { resume } = useResume();
  console.log(resume);

  return (
    <div
      className="
    bg-white
    text-gray-900
    w-198.5
    h-280.75
    mx-auto
    flex
    overflow-hidden
  "
    >
      {/* Sidebar */}
     <div className="w-55 bg-[#1e3a5f] text-white shrink-0 px-6 py-10 flex flex-col gap-8">
        {/* Name */}
        <div>
          <h1 className="text-[30px] font-bold leading-tight uppercase tracking-wide text-white">
            {resume.general.firstName}
            <br />
            {resume.general.lastName}
          </h1>
          <p className="text-[13px] text-blue-300 mt-1 leading-tight">
            {resume.general.role}
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-[14px] font-bold uppercase tracking-[2px] text-blue-300 border-b border-blue-700 pb-1 mb-2">
            Contact
          </h2>
          {resume.general.email && (
            <p className="text-[1px] text-slate-300 mb-1 break-all">
              {resume.general.email}
            </p>
          )}
          {resume.general.mobile && (
            <p className="text-[12px] text-slate-300 mb-1">
              {resume.general.mobile}
            </p>
          )}
          {resume.general.address && (
            <p className="text-[12px] text-slate-300 mb-1">
              {resume.general.address}
            </p>
          )}
          {resume.general.contact && (
            <p className="text-[12px] text-slate-300 mb-1 break-all">
              {resume.general.contact}
            </p>
          )}
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && (
          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-[1.5px] text-blue-300 border-b border-blue-700 pb-1 mb-2">
              Skills
            </h2>
            {resume.skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <p className="text-[12px] font-semibold text-slate-200 mb-1">
                  {skill.skillType}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.skillsList.map((s, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-blue-700 text-white px-2 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] text-blue-300 border-b border-blue-700 pb-1 mb-2">
              Education
            </h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <p className="text-[12px] font-semibold text-white">
                  {edu.educationTitle}
                </p>
                <p className="text-[10px] text-slate-300">
                  {edu.educationPlace}
                </p>
                <p className="text-[10px] text-blue-300 mt-0.5">
                  {edu.educationStart} – {edu.educationEnd || "Present"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
     <div className="flex-1 px-10 py-10 flex flex-col gap-8">
        {/* Summary */}
        {resume.about.aboutYou && (
          <section>
            <h2 className="text-[16px] font-bold uppercase tracking-[2px] text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">
              Summary
            </h2>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              {resume.about.aboutYou}
            </p>
          </section>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <section>
            <h2 className="text-[16px] font-bold uppercase tracking-[1.5px] text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">
              Experience
            </h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[18px] text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-[12px] text-gray-500">
                      {exp.companyName}
                    </p>
                  </div>
                  <p className="text-[11px] text-gray-600 whitespace-nowrap">
                    {exp.start} – {exp.end || "Present"}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <section>
            <h2 className="text-[16px] font-bold uppercase tracking-[1.5px] text-[#1e3a5f] border-b border-[#1e3a5f] pb-1 mb-2">
              Projects
            </h2>
            {resume.projects.map((project, index) => (
              <div key={index} className="mb-3">
                <h3 className="font-semibold text-[18px] text-gray-800">
                  {project.projectName}
                </h3>
                <p className="text-[13px] text-gray-700 mt-0.5 leading-relaxed">
                  {project.projectDescription}
                </p>
                {project.additionalDetails.length > 0 && (
                  <ul className="list-disc ml-4 mt-1 space-y-0.5">
                    {project.additionalDetails.map((detail, i) => (
                      <li key={i} className="text-[12px] text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default Template1;
