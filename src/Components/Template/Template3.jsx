import { useResume } from "../../context/ResumeContext";
import { themes } from "./theme.js";

function SectionHeading({ children, color }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-8 h-0.5"
        style={{ backgroundColor: color }}
      />
      <p
        className="text-[10px] font-bold uppercase tracking-[3px]"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-full h-px bg-gray-200 my-8" />
  );
}

function Template3({ themeId, data }) {
  const { resume: contextResume } = useResume();

  const t = themes[themeId];
  const resume = data ?? contextResume;

  const contactItems = [
    resume.general.email,
    resume.general.mobile,
    resume.general.address,
    resume.general.github,
    resume.general.linkedIn,
  ].filter(Boolean);

  return (
    <div
      className="bg-white w-198.5 min-h-280.75 mx-auto grid grid-cols-[1.15fr_2fr]"
      style={{ fontFamily: "sans-serif" }}
    >
      {/* SIDEBAR */}
      <div
        className="px-7 py-9"
        style={{
          backgroundColor: t.sidebar,
        }}
      >
        <div className="mb-10">
          <div
            className="w-16 h-1.5 rounded-full mb-5"
            style={{
              backgroundColor: t.accent,
            }}
          />

          <h1
            className="text-[30px] font-black leading-none"
            style={{
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            {resume.general.firstName}
          </h1>

          <h1
            className="text-[30px] font-light leading-none mt-1"
            style={{
              color: "white",
              fontFamily: "Georgia, serif",
            }}
          >
            {resume.general.lastName}
          </h1>

          <p
            className="text-[10px] font-bold uppercase tracking-[3px] mt-4 leading-5"
            style={{
              color: t.sidebarText,
            }}
          >
            {resume.general.role}
          </p>
        </div>

        {contactItems.length > 0 && (
          <div className="mb-8">
            <SectionHeading color={t.sidebarText}>
              Contact
            </SectionHeading>

            <div className="space-y-2">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 rounded-md text-[10px] wrap-break-word"
                  style={{
                    backgroundColor: "rgba(255,255,255,.08)",
                    color: "white",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.skills?.length > 0 && (
          <div className="mb-8">
            <SectionHeading color={t.sidebarText}>
              Skills
            </SectionHeading>

            <div className="space-y-4">
              {resume.skills.map((skill, i) => (
                <div key={i}>
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider mb-3"
                    style={{
                      color: "white",
                    }}
                  >
                    {skill.skillType}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.skillsList.map((s, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-[9px]"
                        style={{
                          backgroundColor: "rgba(255,255,255,.1)",
                          color: "white",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {resume.education?.length > 0 && (
          <div>
            <SectionHeading color={t.sidebarText}>
              Education
            </SectionHeading>

            <div className="space-y-5">
              {resume.education.map((edu, i) => (
                <div
                  key={i}
                  className="relative pl-4"
                  style={{
                    borderLeft: `2px solid ${t.accent}`,
                  }}
                >
                  <p
                    className="text-[11px] font-bold leading-5"
                    style={{
                      color: "white",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {edu.educationTitle}
                  </p>

                  <p
                    className="text-[9.5px] mt-1"
                    style={{
                      color: "#d1d5db",
                    }}
                  >
                    {edu.educationPlace}
                  </p>

                  <p
                    className="text-[8.5px] uppercase font-bold tracking-wide mt-2"
                    style={{
                      color: t.sidebarText,
                    }}
                  >
                    {edu.educationStart} - {edu.educationEnd}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MAIN */}
      <div className="px-9 py-9">
        {resume.about?.aboutYou && (
          <>
            <SectionHeading color={t.accent}>
              Profile
            </SectionHeading>

            <p
              className="text-[12px] leading-7 text-gray-700"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              {resume.about.aboutYou}
            </p>

            <Divider />
          </>
        )}

        {resume.experience?.length > 0 && (
          <>
            <SectionHeading color={t.accent}>
              Experience
            </SectionHeading>

            <div className="space-y-6">
              {resume.experience.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-6"
                  style={{
                    borderLeft: `2px solid ${t.accent}30`,
                  }}
                >
                  <div
                    className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: t.accent,
                    }}
                  />

                  <div className="flex justify-between gap-4">
                    <h3
                      className="text-[14px] font-bold"
                      style={{
                        color: t.heading,
                      }}
                    >
                      {exp.role}
                    </h3>

                    <span
                      className="text-[9px] font-semibold whitespace-nowrap"
                      style={{
                        color: t.accent,
                      }}
                    >
                      {exp.start} – {exp.end || "Present"}
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium mt-1">
                    {exp.companyName}
                  </p>

                  {exp.description && (
                    <p className="text-[11px] text-gray-700 mt-2 leading-6">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <Divider />
          </>
        )}

        {resume.projects?.length > 0 && (
          <>
            <SectionHeading color={t.accent}>
              Projects
            </SectionHeading>

            <div className="space-y-6">
              {resume.projects.map((project, i) => (
                <div
                  key={i}
                  className="relative pl-6"
                  style={{
                    borderLeft: `2px solid ${t.accent}30`,
                  }}
                >
                  <div
                    className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: t.accent,
                    }}
                  />

                  <h3
                    className="text-[15px] font-bold"
                    style={{
                      color: t.heading,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {project.projectName}
                  </h3>

                  <p className="text-[11px] text-gray-700 mt-3 leading-6">
                    {project.projectDescription}
                  </p>

                  {project.additionalDetails?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.additionalDetails.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[9px]"
                          style={{
                            backgroundColor: "#f3f4f6",
                            color: t.accent,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col gap-1 mt-4">
                    {project.liveUrl && (
                      <p
                        className="text-[10px]"
                        style={{
                          color: t.accent,
                        }}
                      >
                        ↗ {project.liveUrl}
                      </p>
                    )}

                    {project.githubUrl && (
                      <p
                        className="text-[10px]"
                        style={{
                          color: t.accent,
                        }}
                      >
                        ↗ {project.githubUrl}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Template3;
