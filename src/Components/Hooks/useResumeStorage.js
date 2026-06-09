const STORAGE_KEY = "resume_draft";
export function useResumeStorage(){

    const saveResume = (resumeData) => {
        try{
            localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
            return{ success: true};
        } catch(err){
            return {success: false, error: err.message};
        }
    };

    const loadResume = () => {
        try{
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch{
            return null;
        }
    };

    return {saveResume, loadResume}
}