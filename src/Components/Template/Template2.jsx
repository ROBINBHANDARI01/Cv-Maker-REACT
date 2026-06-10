
import { useResume } from "../../context/ResumeContext";

export const themes = {
  blue:   { accent: "#2563eb", heading: "#1e3a5f", tag: "#dbeafe", tagText: "#1d4ed8" },
  green:  { accent: "#16a34a", heading: "#14532d", tag: "#dcfce7", tagText: "#15803d" },
  purple: { accent: "#7c3aed", heading: "#4c1d95", tag: "#ede9fe", tagText: "#6d28d9" },
  dark:   { accent: "#334155", heading: "#0f172a", tag: "#f1f5f9", tagText: "#334155" },
};

function Divider({ color }) {
  return <div style={{ height: "1.5px", backgroundColor: color, opacity: 0.25, margin: "6px 0 10px" }} />;
}

function SectionHeading({ title, color }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        className="text-[9px] font-black uppercase tracking-[3px]"
        style={{ color }}
      >
        {title}
      </span>
      <div style={{ flex: 1, height: "1px", backgroundColor: color, opacity: 0.3 }} />
    </div>
  );
}

function Template2({ themeId = "blue" }) {
  const { resume } = useResume();
  const t = themes[themeId];

  return (
    <div
      className="bg-white text-gray-900 w-198 h-280.75 mx-auto overflow-hidden"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* ── TOP HEADER ── */}
      <div
        className="px-12 pt-10 pb-6"
        style={{ borderBottom: `3px solid ${t.accent}` }}
      >
        <div className="flex justify-between items-end">
          <div>
            <h1
              className="text-[38px] font-black uppercase leading-none tracking-tight"
              style={{ color: t.heading, fontFamily: "Georgia, serif", letterSpacing: "-0.5px" }}
            >
              {resume.general.firstName}
              <span style={{ color: t.accent }}> {resume.general.lastName}</span>
            </h1>
            <p
              className="text-[11px] font-bold uppercase tracking-[3px] mt-2"
              style={{ color: t.accent, fontFamily: "sans-serif" }}
            >
              {resume.general.role}
            </p>
          </div>

          {/* Contact block — right aligned */}
          <div className="text-right" style={{ fontFamily: "sans-serif" }}>
            {resume.general.email && (
              <p className="text-[10px] text-gray-500">{resume.general.email}</p>
            )}
            {resume.general.mobile && (
              <p className="text-[10px] text-gray-500">{resume.general.mobile}</p>
            )}
            {resume.general.address && (
              <p className="text-[10px] text-gray-500">{resume.general.address}</p>
            )}
            {resume.general.github && (
              <p className="text-[10px] text-gray-500">{resume.general.github}</p>
            )}
            {resume.general.linkedIn && (
              <p className="text-[10px] text-gray-500">{resume.general.linkedIn}</p>
            )}
          </div>
        </div>

        {/* Summary directly under header */}
        {resume.about.aboutYou && (
          <p
            className="text-[11.5px] text-gray-600 mt-4 leading-relaxed max-w-130"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            {resume.about.aboutYou}
          </p>
        )}
      </div>

      {/* ── BODY: LEFT + RIGHT COLUMNS ── */}
      <div className="flex px-12 pt-6 gap-10">

        {/* LEFT COLUMN — wider */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Experience */}
          {resume.experience.length > 0 && (
            <section>
              <SectionHeading title="Experience" color={t.accent} />
              {resume.experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3
                      className="text-[13px] font-bold"
                      style={{ color: t.heading, fontFamily: "Georgia, serif" }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-[9px] font-semibold uppercase tracking-wide"
                      style={{ color: t.accent, fontFamily: "sans-serif" }}
                    >
                      {exp.start}{exp.start && " — "}{exp.end || (exp.start ? "Present" : "")}
                    </span>
                  </div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-wide mb-1"
                    style={{ color: t.accent, fontFamily: "sans-serif" }}
                  >
                    {exp.companyName}
                  </p>
                  {exp.description && (
                    <p className="text-[11px] text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
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
              <SectionHeading title="Projects" color={t.accent} />
              {resume.projects.map((project, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3
                      className="text-[13px] font-bold"
                      style={{ color: t.heading, fontFamily: "Georgia, serif" }}
                    >
                      {project.projectName}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <span className="text-[9px] text-gray-400" style={{ fontFamily: "sans-serif" }}>
                          {project.githubUrl}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5" style={{ fontFamily: "Georgia, serif" }}>
                    {project.projectDescription}
                  </p>
                  {project.additionalDetails?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {project.additionalDetails.map((d, j) => (
                        <span
                          key={j}
                          className="text-[9px] px-2 py-0.5 rounded-sm font-semibold"
                          style={{
                            backgroundColor: t.tag,
                            color: t.tagText,
                            fontFamily: "sans-serif",
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.liveUrl && (
                    <p className="text-[9px] text-gray-400 mt-1" style={{ fontFamily: "sans-serif" }}>
                      ↗ {project.liveUrl}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* RIGHT COLUMN — narrower */}
        <div className="w-44 flex flex-col gap-5" style={{ fontFamily: "sans-serif" }}>

          {/* Skills */}
          {resume.skills.length > 0 && (
            <section>
              <SectionHeading title="Skills" color={t.accent} />
              {resume.skills.map((skill, i) => (
                <div key={i} className="mb-3">
                  <p
                    className="text-[9px] font-black uppercase tracking-[2px] mb-1.5"
                    style={{ color: t.heading }}
                  >
                    {skill.skillType}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skill.skillsList.map((s, j) => (
                      <span
                        key={j}
                        className="text-[9px] px-1.5 py-0.5 rounded-sm"
                        style={{ backgroundColor: t.tag, color: t.tagText }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {resume.education.length > 0 && (
            <section>
              <SectionHeading title="Education" color={t.accent} />
              {resume.education.map((edu, i) => (
                <div key={i} className="mb-3">
                  <p
                    className="text-[11px] font-bold leading-tight"
                    style={{ color: t.heading, fontFamily: "Georgia, serif" }}
                  >
                    {edu.educationTitle}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{edu.educationPlace}</p>
                  <p
                    className="text-[9px] font-semibold mt-0.5 uppercase tracking-wide"
                    style={{ color: t.accent }}
                  >
                    {edu.educationStart}{edu.educationStart && " — "}{edu.educationEnd || (edu.educationStart ? "Present" : "")}
                  </p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template2;