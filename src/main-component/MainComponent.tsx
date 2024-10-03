import React from "react";
import SideNav from "../Components/side-nav/SideNav";
import DocumentAnalyser from "../Components/document-analyser/DocumentAnalyser";
import './MainComponent.css';

function MainComponent() {
  return (
    <div className="main-component-wrapper">
        <SideNav/>
        <DocumentAnalyser/>
    </div>
  )
}

export default MainComponent
