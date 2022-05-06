import React from "react";
import BranchDropZone from "./branchDropZone";


const BranchUpload = () => {
  return (
    <>
      <div className="container-fluid pad-upload-form">
        <div className="col">
          <div className="row">
            <div className="col-md-6 button_download_name pl-0">
              <span>
                <img src="/icons/download-icon.png" height="19" width="20" />{" "}
                DOWNLOAD CSV FORMAT
              </span>
            </div>
            <div className="col-md-6 pr-0">
              <button type="button" className="howbutton float-right">
                How Does it Work?
              </button>
            </div>
          </div>
          <div className="row upload-title">Upload CSV here</div>
          <div className="row upload-dis">Only .CSV format is allowed</div>
          <div className="row">
            <BranchDropZone />
          </div>
          <div className="row">
            <button type="button" className="file-upload-button">
              UPLOAD FILE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BranchUpload;
