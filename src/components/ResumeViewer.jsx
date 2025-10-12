import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Use a relative path for the worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";


const ResumeViewer = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
                <div className="flex justify-center">
                <Document file="/NikhilSharma_Resume.pdf">
                    <div className="block md:hidden">
                        <Page pageNumber={1} width={300} />
                    </div>
                    <div className="hidden md:block">
                        <Page pageNumber={1} width={800} />
                    </div>
                </Document>
            </div>  
        </div>
    );
};

export default ResumeViewer;
