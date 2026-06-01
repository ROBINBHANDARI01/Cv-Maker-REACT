import { Outlet } from "react-router-dom";
import Navbar from "../form/formNavigation";
import Template1 from "../Template/Template1";
import FormNav from "../form/formNav";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import '../../Style/App.css';

export default function Dashboard(){
    const printRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef: printRef,
<<<<<<< Updated upstream
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
            html {
                margin: 0;
                padding: 0;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
        `
=======
      
>>>>>>> Stashed changes
    });

  return (
    <>
      <div className="border-gray-200 border-b-2">
        <FormNav
        onDownload={handlePrint}
        />
      </div>

      <div className="grid md:grid-cols-[250px_1.5fr_2fr] h-[calc(100vh-57px)] overflow-hidden">

        {/* Sidebar */}
        <aside className="border-r-2 border-gray-200 overflow-y-auto bg-gray-50">
          <Navbar />
        </aside>

        {/* Form */}
        <main className="overflow-y-auto border-r-2 border-gray-200">
          <Outlet />
        </main>

        {/* Preview Panel */}
        <section
         
        className="overflow-y-auto bg-gray-100 flex flex-col">

          {/* Preview toolbar */}
          <div
          
          className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 sticky top-0 z-10">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Live Preview</span>

            </div>

          {/* Resume preview — scaled to fit */}
          <div className="flex-1 flex items-start justify-center p-6 overflow-y-auto">
            <div
            ref={printRef}
<<<<<<< Updated upstream
            role="presentation"
              style={{
=======
              style={{

>>>>>>> Stashed changes
                width: "794px",
                minHeight: "1123px",  // A4 height in px at 96dpi
              }}
            >
              <Template1 />
            </div>
          </div>

        </section>
      </div>
    </>
  );
}