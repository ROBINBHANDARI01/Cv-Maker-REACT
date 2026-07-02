import { saveResume, loadResume } from "../../api/api";

const STORAGE_KEY = "resume_draft";
const isLoggedIn = () => !!localStorage.getItem('token');
 
export function useResumeStorage(){

   const save = async (resumeData) => {
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));

    if (isLoggedIn()) {
      try {
        const {title, templateId, themeId, ...dataContent} = resumeData;
        await saveResume({
          title: title || "My Resume",
          templateId: templateId || "1",
          themeId: themeId || "blue",
          data: dataContent,
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
        const dbResponse = await loadResume();
        if(dbResponse){
          return{
            title: dbResponse.title,
            templateId: dbResponse.templateId,
            themeId: dbResponse.themeId,
            ...dbResponse.data
          };
        }
      } catch(err) {
        console.log('Backend load failed, falling back to local storage: ', err)
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
