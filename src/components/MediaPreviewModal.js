import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsBoxArrowUpRight } from "react-icons/bs";

function MediaPreviewModal({ onHide, preview }) {
  if (!preview) {
    return null;
  }

  const isPdf = preview.type === "pdf";

  return (
    <Modal
      show
      onHide={onHide}
      size="xl"
      centered
      dialogClassName="media-preview-modal"
      aria-labelledby="media-preview-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="media-preview-title">{preview.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isPdf ? (
          <iframe
            className="media-preview-frame"
            src={`${preview.src}#view=FitH`}
            title={`${preview.title} preview`}
          />
        ) : (
          <img
            className="media-preview-image"
            src={preview.src}
            alt={`${preview.title} preview`}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          href={preview.src}
          target="_blank"
          rel="noreferrer"
        >
          <BsBoxArrowUpRight aria-hidden="true" /> Open full file
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MediaPreviewModal;
