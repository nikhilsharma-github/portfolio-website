import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Use a relative path for the worker
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const pdfFiles = [
    { name: "Resume", path: "/NikhilSharma_Resume.pdf" },
    { name: "AWS Cloud", path: "/AWS_CP.pdf" },
    { name: "Edureka React", path: "/Edureka_React.pdf" },
    { name: "Hackeerrank", path: "/Hackerrank_PS.pdf" },
    { name: "Coursera GCP", path: "/Coursera_GCP.pdf" },
];

const ResumeViewer = () => {
    const [selectedPdf, setSelectedPdf] = useState(pdfFiles[0].path);
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        <div className="border-b border-neutral-900 pb-4 min-h-96">
            <div className="flex flex-wrap justify-center mb-4 gap-2">
                {pdfFiles.map((pdf, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedPdf(pdf.path)}
                        className={`sm:text-sm md:text-lg mr-1 rounded  px-2 py-1 text-xs font-medium ${
                            selectedPdf === pdf.path
                                ? "bg-amber-500 text-black"
                                : "bg-neutral-800"
                        }`}
                    >
                        {pdf.name}
                    </button>
                ))}
            </div>
            <div className="flex justify-center mb-4 gap-2">
                <button
                    onClick={() => setScale(scale + 0.2)}
                    className="sm:text-sm md:text-lg mr-2 rounded  px-2 py-1 text-xs font-medium bg-teal-700"
                >
                    Zoom In
                </button>
                <button
                    onClick={() => setScale(scale - 0.2)}
                    className="sm:text-sm md:text-lg mr-2 rounded  px-2 py-1 text-xs font-medium bg-fuchsia-900 "
                >
                    Zoom Out
                </button>
            </div>
            <div className="flex justify-center">
                <Document
                    file={"/pdfs"+selectedPdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <div className="block md:hidden">
                        <Page pageNumber={pageNumber} width={300 * scale} />
                    </div>
                    <div className="hidden md:block">
                        <Page pageNumber={pageNumber} width={800 * scale} />
                    </div>
                </Document>
            </div>
        </div>
    );
};

export default ResumeViewer;
