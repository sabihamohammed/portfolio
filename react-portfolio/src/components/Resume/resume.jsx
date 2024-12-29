import React from "react";
import { FaDownload } from "react-icons/fa";
import resumePath from "/assets/resume/sabiha_mohamad_.pdf";
import "./resume.css";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Sabiha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="resume-container">
      <button onClick={handleDownload} className="buttonStyle">
        <FaDownload className="icon" /> Download Resume
      </button>
    </div>
  );
};

export default DownloadResumeButton;
