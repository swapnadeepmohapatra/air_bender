import logo from "./logo.png";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [dialog, setDialog] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Handle csv file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target.result;
      console.log(result);
      setFile(result);
    };
    reader.readAsText(file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="backdrop">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Welcome to Air Bender</h1>
          <button
            className="upload_button"
            onClick={() => {
              setDialog(true);
            }}
          >
            Upload a file
          </button>
        </div>
      </header>
      {dialog && (
        <div className="dialog">
          <div className="dialog_content">
            <h1>Upload a file</h1>
            <input
              type="file"
              className="fileUploadButton"
              onChange={handleFileUpload}
            />
            <div>
              <button
                className="close_button"
                onClick={() => {
                  setDialog(false);
                }}
              >
                Close
              </button>
              {file && (
                <button
                  className="submit_button"
                  onClick={() => {
                    navigate("/metrics");
                    setDialog(false);
                  }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
