// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// // import "./Upload.css";

// const Upload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       alert(`File ${selectedFile.name} uploaded successfully!`);
//     } else {
//       alert("Please select a file to upload.");
//     }
//   };

//   return (
//     <Container className="upload-container text-center">
//       <h2>Upload Your Prescription or Documents</h2>
//       <Form>
//         <Form.Group>
//           <Form.File 
//             id="fileUpload" 
//             label="Choose file to upload" 
//             onChange={handleFileChange} 
//             accept=".jpg,.jpeg,.png,.pdf,.docx"
//           />
//         </Form.Group>
//         <Button variant="primary" onClick={handleUpload}>Upload</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Upload;

import React, { useState } from "react";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Sample Prescription Guidelines
  const prescriptionGuidelines = [
    "Ensure the prescription is issued by a certified doctor.",
    "Upload clear images of the prescription (PDF, JPG, PNG).",
    "The prescription must include the doctor's signature & date.",
    "Medicines will be dispensed as per the prescribed dosage.",
    "Expired prescriptions are not accepted.",
    "Handwritten or illegible prescriptions will be rejected."
  ];

  // Sample Medical Highlights
  const medicalHighlights = [
    "💊 New diabetes medicine launched with better efficacy.",
    "🩺 Free health check-ups available in select cities.",
    "⚕ WHO announces new vaccine updates for 2025.",
    "🧬 AI-driven diagnostics are improving early cancer detection."
  ];

  // Handle File Selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  // Handle File Upload
  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("Please select a file to upload!");
      return;
    }
    alert(`${selectedFiles.length} file(s) uploaded successfully!`);
    setSelectedFiles([]);
  };

  // Handle Pagination
  const totalPages = Math.ceil(prescriptionGuidelines.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedGuidelines = prescriptionGuidelines.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      {/* Promotional Offers */}
      <div style={{ backgroundColor: "#008CBA", color: "white", padding: "15px", borderRadius: "10px", textAlign: "center", marginBottom: "20px" }}>
        <h2>🔥 Special Offer! Get 10% OFF on Prescription Upload Orders 🔥</h2>
        <p>Use code <b>MEDI10</b> at checkout. Offer valid till March 31st.</p>
      </div>

      {/* File Upload Section */}
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2>📤 Upload Your Prescription</h2>
        <p>Accepted formats: <b>PDF, JPG, PNG, DOC</b></p>

        <input type="file" multiple onChange={handleFileChange} accept=".pdf, .jpg, .jpeg, .png, .doc, .docx"
          style={{ width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        />

        {/* Selected Files Preview */}
        {selectedFiles.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <h4>Selected Files:</h4>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Upload Button */}
        <button onClick={handleUpload} style={{
          marginTop: "10px", padding: "10px", backgroundColor: "#008CBA", color: "white",
          border: "none", borderRadius: "5px", cursor: "pointer", width: "100%"
        }}>
          Upload Files
        </button>
      </div>

      {/* Prescription Guidelines with Pagination */}
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
        <h2>📜 Prescription Upload Guidelines</h2>
        <ul>
          {displayedGuidelines.map((guideline, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>{guideline}</li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}
            style={{ padding: "5px 10px", marginRight: "10px", cursor: currentPage === 1 ? "not-allowed" : "pointer" }}>
            ◀ Prev
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}
            style={{ padding: "5px 10px", marginLeft: "10px", cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}>
            Next ▶
          </button>
        </div>
      </div>

      {/* Medical Highlights */}
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", backgroundColor: "#f8f8f8" }}>
        <h2>🩺 Medical Highlights</h2>
        <ul>
          {medicalHighlights.map((highlight, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Upload;
