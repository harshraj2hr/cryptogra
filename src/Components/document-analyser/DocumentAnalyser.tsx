import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import backButtonImg from '../../Icons/arrow_back_ios_new.png';
import '../../App.css';
import arrowImg from '../../Icons/east.png';
import PlusButton from '../../Icons/add.png'
import filterImg from '../../Icons/filter_alt.png'
import barsImg from '../../Icons/bars.png';
import scrollImg from '../../Icons/expand_content.png';
import '../document-analyser/DocumentAnalyser.css';
import mockData from '../document-analyser/Constants';
import calendarToday from '../../Icons/calendar_today.png';
import arrowDownImg from '../../Icons/keyboard_arrow_down.png';
import folderImg from '../../Icons/folder.png';
import contentCopyImg from '../../Icons/content_copy.png';
import iosShareImg from '../../Icons/ios_share.png';
import FileUploadPopup from './FileUploadPopup';

function DocumentAnalyser() {
  
      const tradeData: any[]=[];


      const [columns, setColumns] = useState([
        "Document",
        "Trade",
        "Date",
        "Exchange",
        "Type of Trade",
        "Trade Size",
        "Type of Instrument",
        "Profit/Loss %"
      ]); 
    
      const [showUploadPopup, setShowUploadPopup] = useState<boolean>(false);

      const handleUpload = (files: File[]) => {
        console.log('Files to be uploaded:', files);
        // Here, you can call your API to upload the files
        uploadFiles(files);
      };
    
      const uploadFiles = async (files: File[]) => {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append('documents', file);
        });
    
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          const result = await response.json();
          console.log('Upload success:', result);
        } catch (error) {
          console.error('Error uploading files:', error);
        }
      };

      
      const addColumn = () => {
        const newColumn = `New Column ${columns.length + 1}`;
        setColumns([...columns, newColumn]);
      };
    
      return (
        <div className="document-analyser-wrapper">
          <div className="page-header-container">
            <div className="header-page-info-wrapper">
              <div className="page-header-wrapper">
                <div className="button-info-wrapper">
                  <button className="back-button-DA-wrapper">
                    <img src={backButtonImg} className="back-button-DA"></img>
                  </button>
                </div>
                <div className="page-info-header">
                  <div className="header-data-sizing gap-10">
                    <span className="font-size-16px font-weight-500 ">
                      Analyzing Agreement Details: Parties, Dates, Renewal,
                      Terminations
                    </span>
                    <span className="font-size-14px light-black-font font-weight-500">
                      Processed 137 of 137 files - Processing started less than
                      a minute ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="cancel-control-DA-wrapper">
                <button className="cancel-control-DA font-weight-400px">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <div className="DA-header-container">
            <div className="left-DAHeader-wrapper">
              <div className="left-vertex-input-wrapper">
                <input
                  placeholder="Ask Vertex"
                  className="no-border vertex-input display-flex-center"
                  type="search"
                />
                <button
                  type="submit"
                  className="no-border img-search-color-bg display-flex-center"
                >
                  <img src={arrowImg}></img>
                </button>
              </div>
            </div>
            <div className="right-DAheader-wrapper">
              <div className="use-internet-wrapper">
                <label className="toggle-label">
                  Use Internet
                  <input type="checkbox" className="toggle-input" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <button className="add-columns-wrapper" onClick={() => setShowUploadPopup(true)}>
        <img src={PlusButton} alt="plus" /> Add Documents
      </button>
      {showUploadPopup && (
        <FileUploadPopup
          onClose={() => setShowUploadPopup(false)}
          onUpload={handleUpload}
        />
      )}
              <button onClick={addColumn} className="add-columns-wrapper">
                <img src={PlusButton}></img> Add Columns
              </button>
            </div>
          </div>

          <div className="actions-buttons-container">
            <div className="filter-buttons-wrapper display-flex-center">
              <div className="size-32px bg-color-grey display-flex-center border-radius-4px">
                <img src={barsImg}></img>
              </div>
              <span>Short Answer</span>
              <div className="size-32px bg-color-grey display-flex-center border-radius-4px">
                <img src={scrollImg}></img>
              </div>
            </div>

            <div className="filter-buttons-wrapper-right display-flex-center border-radius-4px">
              <div>
                <img src={filterImg}></img>{" "}
              </div>
              <div>
                {" "}
                <span>Filter</span>
              </div>
            </div>
          </div>

          <div className="folder-upload-container">
            <div>
              <img src={arrowDownImg}></img>
            </div>
            <div className="gap-7px display-flex-center">
              <img src={folderImg}></img>
              <span className="font-weight-600">commercial contracts . </span>
              <span>Processed 137 of 137 files</span>
            </div>
          </div>

          <div className="table-container">
            <div className="scrollable-table">
              <table className="data-table">
                <thead>
                  <tr>
                    {columns.map((col, index) => (
                      <th key={index} className="font-weight-600">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tradeData.map((row: any, rowIndex: any) => (
                    <tr key={rowIndex}>
                      {columns.map((col, colIndex) => (
                        <td key={colIndex} className="font-weight-400">
                          {row[col.toLowerCase()] || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>



          <div className="summary-card-container">
            <div className="summary-card">
              <button type="submit" className="submit-button-wrapper">
                Summary
              </button>
            </div>

            <div className="summary-card-info">
              <div className="summary-output-wrapper ">
                <span className='font-weight-400'>
                  {/* //summary from api. */}
                </span>
              </div>
              <div className='copy-share-buttons'>
                <div><img src={contentCopyImg}></img></div>
                <div><img src={iosShareImg}></img></div>
              </div>
            </div>
          </div>
        </div>
      );

}

export default DocumentAnalyser
