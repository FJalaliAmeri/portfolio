import "./ResumeContent.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pdf/dist/esm/Page/TextLayer.css";
import resumePdf from "../files/Resume_FarshadJalaliAmeri.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeContent = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [scale, setScale] = useState("1");

  let scaleNumber = parseFloat(scale);
  if (Number.isNaN(scaleNumber)) scaleNumber = 1;
  return (
    <div className="resume-content">
      <div className="resume-content__container">
        <div className="resume-content__header">
          <p className="resume-content__title">Resume</p>
          <div className="resume-content__dl">
            <Link
              className="resume-content__download"
              to="./files/Resume_FarshadJalaliAmeri.pdf"
              target="_blank"
              download
            >
              Download
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              wrap
              renderTextLayer={false}
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              scale={scaleNumber}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default ResumeContent;
