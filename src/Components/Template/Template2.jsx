
import { data } from "react-router-dom";
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
        className="text-[10px] font-black uppercase tracking-[2px]"
        style={{ color }}
      >
        {title}
      </span>
      <div style={{ flex: 1, height: "1px", backgroundColor: color, opacity: 0.3 }} />
    </div>
  );
}

function Template2({ themeId = "green", data}) {
  const { resume: contextResume } = useResume();
  const t = themes[themeId];
  const resume = data ?? contextResume;

  return (
   <div className="bg-white text-gray-900 w-198.5 min-h-280.75 mx-auto">
  {/* HEADER */}
  <div
    className="px-8 pt-8 pb-5"
    style={{ borderBottom: `2px solid ${t.accent}` }}
  >
    <div className="flex">
      <div className="">
        <h1
          className="text-[32px] font-black uppercase leading-none"
          style={{
            color: t.heading,
            fontFamily: "Georgia, serif",
          }}
        >
          {resume.general.firstName}
          <span style={{ color: t.accent }}>
            {" "}
            {resume.general.lastName}
          </span>
        </h1>

        <p
          className="text-[11px] uppercase tracking-[3px] font-bold mt-2"
          style={{
            color: t.accent,
            fontFamily: "sans-serif",
          }}
        >
          {resume.general.role}
        </p>
      

    
    <div className="inline-block">
    {resume.about.aboutYou && (
      <p
        className="max-w-[90%] text-[11px] leading-5.5 italic text-gray-600 mt-5"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {resume.about.aboutYou}
      </p>
    )}
    </div>
    </div>

     <div
        className=" text-[10px] leading-5 inline-block text-gray-500"
        style={{ fontFamily: "sans-serif" }}
      >
        {resume.general.email && <p>{resume.general.email}</p>}
        {resume.general.mobile && <p>{resume.general.mobile}</p>}
        {resume.general.address && <p>{resume.general.address}</p>}
        {resume.general.github && <p>{resume.general.github}</p>}
        {resume.general.linkedIn && <p>{resume.general.linkedIn}</p>}
        
      </div>
  </div>
  </div>

  {/* MAIN CONTENT */}
  <div className="grid grid-cols-[2.2fr_1fr] gap-8 px-8 py-8">
    
    {/* LEFT COLUMN */}
    <div className="space-y-8">

      {/* EXPERIENCE */}
      
      {/* PROJECTS */}
      <SectionHeading title="Projects" color={t.accent} />
        

        <div className="mt-4   space-y-6">
          {resume.projects.map((project, i) => (
            <div key={i}>
              <h3
                className="text-[15px] font-bold"
                style={{
                  color: t.heading,
                  fontFamily: "Georgia, serif",
                }}
              >
                {project.projectName}
              </h3>

              <p className="text-[11px] text-gray-600 mt-2 leading-6">
                {project.projectDescription}
              </p>

              {project.additionalDetails?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.additionalDetails.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-1 rounded"
                      style={{
                        backgroundColor: t.tag,
                        color: t.tagText,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {project.liveUrl && (
                <p className="text-[10px] mt-2 text-gray-400">
                  ↗ {project.liveUrl}
                </p>
              )}

               {project.liveUrl && (
                <p className="text-[10px] mt-2 text-gray-400">
                  ↗ {project. githubUrl}
                </p>
              )}
            </div>
          ))}
        </div>
  
    </div>

    {/* RIGHT COLUMN */}
    <div
      className="pl-6 space-y-8"
      style={{
        borderLeft: `1px solid ${t.accent}20`,
        fontFamily: "sans-serif",
      }}
    >
      {/* SKILLS */}
      <SectionHeading title="Skills" color={t.accent} />
      <section>
        

        <div className="space-y-4 mt-4">
          {resume.skills.map((skill, i) => (
            <div key={i}>
              <p
                className="text-[10px] font-black uppercase tracking-wider mb-2"
                style={{ color: t.heading }}
              >
                {skill.skillType}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.skillsList.map((s, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-2 py-1 rounded"
                    style={{
                      backgroundColor: t.tag,
                      color: t.tagText,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <SectionHeading title="Education" color={t.accent} />
      <section>
        

        <div className="space-y-5 mt-4">
          {resume.education.map((edu, i) => (
            <div key={i}>
              <p
                className="text-[12px] font-bold"
                style={{
                  color: t.heading,
                  fontFamily: "Georgia, serif",
                }}
              >
                {edu.educationTitle}
              </p>

              <p className="text-[10px] text-gray-500 mt-1">
                {edu.educationPlace}
              </p>

              <p
                className="text-[9px] uppercase font-semibold mt-1"
                style={{ color: t.accent }}
              >
                {edu.educationStart} - {edu.educationEnd}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
</div>
  )
}

export default Template2;