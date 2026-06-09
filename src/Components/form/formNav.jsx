import logo from "../../assets/logo.png";
import { Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormNav({ onDownload , handleSave , saveStatus = "idle" }) {
  const navigate = useNavigate();
  const saveConfig = {
    idle: {
      label: "Save",
      className: "bg-white border border-gray-200 text-gray-700",
    },
    saving: {
      label: "Saving...",
      className: "bg-white border border-gray-200 text-gray-400",
    },
    saved: {
      label: "✓ Saved",
      className: "bg-green-50 border border-green-200 text-green-600",
    },
    error: {
      label: "Failed",
      className: "bg-red-50 border border-red-200 text-red-600",
    },
  };

  const config = saveConfig[saveStatus]
  return (
    <>
      <div className="flex justify-between mx-4 py-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            className="h-7 cursor-pointer md:h-8 mr-2"
          ></img>
          <h1 className="hidden sm:block">MakeMyResume</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 border hover:bg-blue-50 p-1.5  px-4  items-center rounded-2xl text-blue-700">
            <Save className="h-4.5" strokeWidth={1.7} />
            <button
            onClick={handleSave}
            disabled={saveStatus == "saving"}
            className="text-[0.8rem] font-medium font-inter lg:text-[0.95rem]">
              {config.label}
            </button>
          </div>

          <button
            onClick={onDownload}
            className="text-[0.8rem]  bg-(--color-primary) text-white hover:bg-blue-100 hover:text-blue-900 px-4 hover:border-blue-500 font-inter border inline-flex items-center  p-2 rounded-2xl lg:text-sm"
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}
