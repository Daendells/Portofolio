import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import { CgWebsite, CgFileDocument } from "react-icons/cg";
import { BsGithub, BsDownload } from "react-icons/bs";
import { RELATIVE_PATH_TO_PORTO } from "../../Constants";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ProjectCards(props) {
  function onDocumentLoadSuccess() {
    // PDF loaded successfully
  }

  // Find the first PDF to show as preview if available
  const pdfFile = props.files?.find(f => f.type === 'pdf' || f.name.endsWith('.pdf'));
  const pdfPath = pdfFile ? `${RELATIVE_PATH_TO_PORTO}/${pdfFile.link}` : null;

  return (
    <Card className="project-card-view">
      {/* If it's a PDF project, show the first page as preview */}
      {props.isPdf && pdfPath ? (
        <div className="pdf-preview-container" style={{ height: '200px', overflow: 'hidden', marginBottom: '15px' }}>
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading PDF..."
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={0.5} renderTextLayer={false} />
          </Document>
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render a button for each file in the project */}
        {props.files && props.files.map((file, idx) => (
          <div key={idx} style={{ marginTop: '10px' }}>
            <Button
              variant="primary"
              href={`${RELATIVE_PATH_TO_PORTO}/${file.link}`}
              target="_blank"
              size="sm"
            >
              {file.type === 'pdf' ? <CgFileDocument /> : <BsDownload />} &nbsp;
              {file.name}
            </Button>
          </div>
        ))}

        {/* Existing buttons logic if ghLink passed differently (legacy) */}
        {props.ghLink && !props.files && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo Link Logic */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
