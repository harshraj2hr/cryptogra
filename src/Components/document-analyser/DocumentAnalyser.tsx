import React, { useState } from 'react';
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

function DocumentAnalyser() {
  const { generateTradeData } = mockData; 
    const data = [
        {
          document: "Trade Log 1",
          trade: "Reliance Industries",
          date: "Jan 05, 2024",
          exchange: "NSE",
          "type of trade": "Long Position",
          "trade size": 100000,
          "type of instrument": "Indian Stock",
          "profit/loss %": -1.3,
        },
      ];
      const tradeData = generateTradeData();


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
              <button className="add-columns-wrapper">
                <img src={PlusButton}></img> Add Documents
              </button>
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
                <span className='font-wight-400'>
                  75% long positions Avg trade side= 27.3 lakh Total profit in
                  15 days 10.4% Bullish Strategy: The high percentage of long
                  positions reflects a bullish view on the market, focusing on
                  buying opportunities. Local Market Focus: With nearly 70% of
                  trades focused on Indian stocks, the trader has a clear
                  emphasis on domestic markets, likely leveraging his/her
                  familiarity with local trends and conditions. Efficient
                  Execution: The preference for market orders indicates the
                  trader has prioritized speed over waiting for ideal price
                  conditions, potentially benefiting from quick market
                  movements. Strong Performance: Achieving a 10.4% profit in
                  just 15 days highlights the effectiveness of the trading
                  strategy and the timely market decisions made.
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
