// src/Templates/Template5/index.jsx
import { useResume } from "../../context/ResumeContext";
import { themes } from "./theme.js";

function SectionTag({ children, color }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        className="text-[10px] font-bold uppercase tracking-[2px] text-white px-3 py-1.5"
        style={{ backgroundColor: color }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: "#e5e7eb" }} />
    </div>
  );
}

function SkillBar({ level, color }) {
  // level 1-5, derived from position in list when no numeric value exists
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="w-3 h-1.5 rounded-[1px]"
          style={{ backgroundColor: i < level ? color : "#e5e7eb" }}
        />
      ))}
    </div>
  );
}

function Template4({ themeId , data}) {
  const { resume: contextResume } = useResume();
  const t = themes[themeId];
  const resume = data ?? contextResume;

  const contact = [
    resume.general.email,
    resume.general.mobile,
    resume.general.address,
  ].filter(Boolean);

  const links = [resume.general.github, resume.general.linkedIn].filter(Boolean);

  return (
    <div className="bg-white w-198.5 min-h-280.75 mx-auto" style={{ fontFamily: "sans-serif", color: "#111827" }}>

      {/* INVERTED HEADER */}
      <div className="px-10 py-10 text-white" style={{ backgroundColor: t.heading }}>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-[34px] font-extrabold leading-none tracking-tight">
              {resume.general.firstName} <span style={{ color: t.tag }}>{resume.general.lastName}</span>
            </h1>
            <p className="text-[12px] font-medium uppercase tracking-[3px] mt-3 opacity-80">
              {resume.general.role}
            </p>
          </div>

          <div className="text-right text-[10px] leading-5 opacity-85 shrink-0">
            {contact.map((c, i) => <p key={i}>{c}</p>)}
            {links.map((l, i) => <p key={`l${i}`}>{l}</p>)}
          </div>
        </div>
      </div>

      {/* ACCENT RULE */}
      <div className="h-1.5" style={{ backgroundColor: t.accent }} />

      <div className="px-10 py-9">

        {/* ABOUT */}
        {resume.about?.aboutYou && (
          <div className="mb-9">
            <SectionTag color={t.accent}>Profile</SectionTag>
            <p className="text-[12px] leading-6.5 text-gray-700">
              {resume.about.aboutYou}
            </p>
          </div>
        )}

        <div className="grid grid-cols-[1.7fr_1fr] gap-10">

          {/* MAIN: EXPERIENCE + PROJECTS */}
          <div className="space-y-9">
            {resume.experience?.length > 0 && (
              <div>
                <SectionTag color={t.accent}>Experience</SectionTag>
                <div className="space-y-5">
                  {resume.experience.map((exp, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-[13.5px] font-bold text-gray-900">{exp.role}</h3>
                        <span className="text-[9.5px] font-semibold text-gray-400 whitespace-nowrap">
                          {exp.start} – {exp.end || "Present"}
                        </span>
                      </div>
                      <p className="text-[10.5px] font-semibold mt-0.5" style={{ color: t.accent }}>
                        {exp.companyName}
                      </p>
                      {exp.description && (
                        <p className="text-[11px] text-gray-600 mt-1.5 leading-5.5">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.projects?.length > 0 && (
              <div>
                <SectionTag color={t.accent}>Projects</SectionTag>
                <div className="space-y-5">
                  {resume.projects.map((project, i) => (
                    <div key={i}>
                      <h3 className="text-[13.5px] font-bold text-gray-900">{project.projectName}</h3>
                      <p className="text-[11px] text-gray-600 mt-1.5 leading-5.5">{project.projectDescription}</p>

                      {project.additionalDetails?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {project.additionalDetails.map((d, j) => (
                            <span
                              key={j}
                              className="text-[9px] font-semibold px-2 py-0.75"
                              style={{ backgroundColor: t.tag, color: t.heading }}
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex gap-4 mt-2">
                        {project.githubUrl && (
                          <p className="text-[9.5px] text-gray-400">GitHub — {project.githubUrl}</p>
                        )}
                        {project.liveUrl && (
                          <p className="text-[9.5px] text-gray-400">Live — {project.liveUrl}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDE: SKILLS + EDUCATION */}
          <div className="space-y-9">
            {resume.skills?.length > 0 && (
              <div>
                <SectionTag color={t.accent}>Skills</SectionTag>
                <div className="space-y-3.5">
                  {resume.skills.map((skill, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-2">
                        {skill.skillType}
                      </p>
                      <div className="space-y-1.5">
                        {skill.skillsList.map((s, j) => (
                          <div key={j} className="flex items-center justify-between gap-2">
                            <span className="text-[10.5px] text-gray-700">{s}</span>
                            <SkillBar level={5 - (j % 2)} color={t.accent} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resume.education?.length > 0 && (
              <div>
                <SectionTag color={t.accent}>Education</SectionTag>
                <div className="space-y-4">
                  {resume.education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-[11.5px] font-bold text-gray-900 leading-5">{edu.educationTitle}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{edu.educationPlace}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wide mt-1" style={{ color: t.accent }}>
                        {edu.educationStart} – {edu.educationEnd || "Present"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template4;