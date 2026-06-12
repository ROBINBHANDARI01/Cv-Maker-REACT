import { saveResume, loadResume } from "../../api/api";

const STORAGE_KEY = "resume_draft";
const isLoggedIn = () => !!localStorage.getItem('token');
 
export function useResumeStorage(){

   const save = async (resumeData) => {
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));

    if (isLoggedIn()) {
      try {
        await saveResume({
          templateId: resumeData.templateId,
          themeId: resumeData.themeId,
          data: resumeData,
        });
      } catch (err) {
        console.error('Backend save failed:', err);
      }
    }

    return { success: true };
  };

  const load = async () => {

    if (isLoggedIn()) {
      try {
        const data = await loadResume();
        if (data?.data) return data.data;
      } catch {
      }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  return { save, load };
}
