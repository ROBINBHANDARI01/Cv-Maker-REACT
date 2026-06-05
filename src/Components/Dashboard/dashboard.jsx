import { Outlet } from "react-router-dom";
import Navbar from "../form/formNavigation";
import Template1 from "../Template/Template1";
import FormNav from "../form/formNav";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import "../../Style/App.css";
import { Scale } from "lucide-react";

export default function Dashboard() {
  const printRef = useRef(null);

  {
    /* STATE TO SHOW THE POP UP BAR FOR DOWNLAODING A4 pdf */
  }
  const [showPrintNotice, setShowPrintNotice] = useState(false);
  const [guideImg, setGuideImg] = useState(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Resume",
    onAfterPrint: () => {
      console.log("PDF generated successfully");
    },
    pageStyle: `
            @page {
                size: A4;
                margin: 0;
                padding: 0;
            }
            body {
                margin: 0;
                padding: 0;
                background: white;
            }
             html, body {
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important; 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        `,
  });
  const handleDownload = async () => {
    const isMobile =
      window.innerWidth < 768 ||
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      if (!guideImg) {
        const [img1, img2] = await Promise.all([
          import("../../assets/ss1.jpg"),
          import("../../assets/ss2.jpg"),
        ]);

        setGuideImg({
          img1: img1.default,
          img2: img2.default,
        });
      }
      setShowPrintNotice(true);
    } else {
      handlePrint();
    }
  };

  return (
    <>
      <div className="border-gray-200 border-b-2">
        <FormNav onDownload={handleDownload} />
      </div>

      <div className="grid md:grid-cols-[250px_1.5fr_1fr] h-[calc(100vh-)] overflow-hidden">
        {/* Sidebar */}
        <aside className="border-r-2 border-gray-200  bg-gray-50">
          <Navbar />
        </aside>

        {/* Form */}
        <main className="overflow-y-auto border-r-2 border-gray-200">
          <Outlet />
        </main>

        {/* Preview Panel */}
        <section className=" overflow-x-auto bg-gray-100 flex flex-col">
          {/* Preview toolbar */}
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 sticky top-0 z-10">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Live Preview
            </span>
          </div>

          {/* Resume preview — scaled to fit */}
          <div className=" w-99.25 h-145 px-2 md:mb-5 py-2">
            <div
              className="transform scale-[0.52] md:scale-[0.52]  w-49.5 h-[280.75px] bg-white shadow-md 
                         print:transform-none print:scale-100! print:w-198.5!  print:h-280.75!"
              ref={printRef}
              role="presentation"
              style={{
                transformOrigin: "top left",
              }}
            >
              <Template1 />
            </div>
          </div>
        </section>
      </div>
      {showPrintNotice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-3 mx-4 max-w-sm w-full shadow-lg">
            <h2 className="text-lg font-semibold mb-3 mx-2">Download Resume</h2>

            <p className="text-gray-600 mx-2 mb-4">
              Please select <strong>ISO A4</strong> as the page size in the
              print dialog before saving the PDF.
            </p>

            <div className="flex mb-4 gap-1 ">
               <img className="h-60" src={guideImg.img1} alt="Step 1" />
            <img className="h-60 w-45" src={guideImg.img2} alt="Step 2" />
            </div>

            <div className="flex mx-2 gap-2">
             
              <button
                onClick={() => setShowPrintNotice(false)}
                className="flex-1 border rounded-lg py-2"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowPrintNotice(false);
                  handlePrint();
                }}
                className="flex-1 bg-blue-600 text-white rounded-lg py-2"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
