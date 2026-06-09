// src/Templates/Template1/index.jsx
import { useResume } from "../../context/ResumeContext";


import { themes } from "./theme";

function Template1({ themeId = "blue" }) {
  const { resume } = useResume();
  const t = themes[themeId]; // ← t.sidebar, t.accent etc

  return (
    <div className="bg-white text-gray-900 w-198 h-280.75 mx-auto flex overflow-hidden">
      
      {/* Sidebar — now uses theme colors */}
      <div
        className="w-55 shrink-0 px-5 py-10 flex flex-col gap-8 text-white"
        style={{
          backgroundColor: t.sidebar,
          boxShadow: `inset 0 0 0 9999px ${t.sidebar}`,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        <div>
          <h1 className="text-[30px] font-bold leading-tight uppercase tracking-wide text-white">
            {resume.general.firstName}<br />{resume.general.lastName}
          </h1>
          <p className="text-[13px] mt-1 leading-tight" style={{ color: t.sidebarText }}>
            {resume.general.role}
          </p>
        </div>

        {/* Contact */}
        <div >
          <h2 className="text-[14px] font-bold uppercase  tracking-[2px] pb-1 mb-2 border-b"
            style={{ color: t.sidebarText, borderColor: t.accent }}>
            Contact
          </h2>
              
              <p className="text-[12px] text-[#cbd5e1]  break-all">{resume.general.address}</p>
              <a className="text-[12px] text-[#cbd5e1]  break-all">{resume.general.email}</a><br/>
              <a className="text-[12px] text-[#cbd5e1]  break-all">{resume.general.mobile}</a><br/>
              <a className="text-[12px] text-[#cbd5e1]  break-all">{resume.general.github}</a><br/>
              <a className="text-[12px] text-[#cbd5e1]  break-all">{resume.general.linkedIn}</a>
          
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && (
          <div>
            <h2 className="text-[12px] font-bold uppercase tracking-[1.5px] pb-1 mb-2 border-b"
              style={{ color: t.sidebarText, borderColor: t.accent }}>
              Skills
            </h2>
            {resume.skills.map((skill, i) => (
              <div key={i} className="mb-2">
                <p className="text-[12px] font-semibold text-[#e2e8f0] mb-1">{skill.skillType}</p>
                <div className="flex flex-wrap gap-1">
                  {skill.skillsList.map((s, j) => (
                    <span key={j}
                      className="text-[10px] text-white px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: t.badge,
                        boxShadow: `inset 0 0 0 9999px ${t.badge}`,
                        WebkitPrintColorAdjust: "exact",
                      }}>
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
            <h2 className="text-[13px] font-bold uppercase tracking-[1.5px] pb-1 mb-2 border-b"
              style={{ color: t.sidebarText, borderColor: t.accent }}>
              Education
            </h2>
            {resume.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <p className="text-[12px] font-semibold text-[#e2e8f0]">{edu.educationTitle}</p>
                <p className="text-[10px] text-[#cbd5e1]">{edu.educationPlace}</p>
                <p className="text-[10px] mt-0.5" style={{ color: t.sidebarText }}>
                  {edu.educationStart} – {edu.educationEnd || "Present"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content — uses theme heading color */}
      <div className="flex-1 px-10 py-10 flex flex-col gap-8">
        {resume.about.aboutYou && (
          <section className="flex flex-col">
            <h2 className="text-[16px] font-bold uppercase tracking-[2px] pb-1 mb-2 border-b"
              style={{ color: t.heading, borderColor: t.heading }}>
              Summary
            </h2>
            <p className="text-[13px] text-[#4b5563] leading-relaxed">{resume.about.aboutYou}</p>
          </section>
        )}

        {resume.experience.length > 0 && (
          <section className="flex flex-col">
            <h2 className="text-[16px] font-bold uppercase tracking-[1.5px] pb-1 mb-2 border-b"
              style={{ color: t.heading, borderColor: t.heading }}>
              Experience
            </h2>
            {resume.experience.map((exp, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[18px] text-gray-800">{exp.role}</h3>
                    <p className="text-[12px] text-[#6b7280]">{exp.companyName}</p>
                  </div>
                  <p className="text-[11px] text-[#4b5563] whitespace-nowrap">
                    {exp.start} – {exp.end || "Present"}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-[13px] text-[#4b5563] mt-1 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {resume.projects.length > 0 && (
          <section className="flex flex-col">
            <h2 className="text-[16px] font-bold uppercase tracking-[1.5px] pb-1 mb-2 border-b"
              style={{ color: t.heading, borderColor: t.heading }}>
              Projects
            </h2>
            {resume.projects.map((project, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-semibold text-[18px] text-gray-800">{project.projectName}</h3>
                <p className="text-[13px] text-gray-700 mt-0.5 leading-relaxed">{project.projectDescription}</p>
                {project.additionalDetails.length > 0 && (
                  <ul className="list-disc ml-4 mt-1 space-y-0.5">
                    {project.additionalDetails.map((d, j) => (
                      <li key={j} className="text-[12px] text-[#4b5563]">{d}</li>
                    ))}
                  </ul>
                )}
           
                <div className="flex items-center gap-1 ">
                 <p className="text-[13px] text-gray-700  leading-relaxed">Github : </p>
                 <a className="text-[12px] text-[#4b5563]">{project.githubUrl}</a>
                 </div>
                 <div className="flex items-center gap-1">
                 <p className="text-[13px] text-gray-700  leading-relaxed">Live : </p>
                   <a className="text-[12px] text-[#4b5563]">{project.liveUrl}</a>
                </div>
          
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default Template1;