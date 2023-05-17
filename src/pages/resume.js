import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/img/busyVAVresumecopy.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
  

return (
    
    <div>
    <Container fluid className="resume-section">

      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </Row>

    </Container>
  </div>
    
  );
}

export default Resume;