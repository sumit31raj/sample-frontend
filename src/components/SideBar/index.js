import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarInner" >
        <div className="progressBar">
          <CircularProgressbarWithChildren strokeWidth={1} value={75}>
            <p className="accuracyLabel">ACCURACY</p>
            <p><span className="percentageLabel">75</span><span className="percentageSymbol"> %</span></p>
          </CircularProgressbarWithChildren>
        </div>
        <div className="completedDiv" >
          <div className="completedHeading" > 
            Completed
          </div>
          <div className="completedNumber" > 
            100 <span className="problemsTitle" > problems </span>
          </div>
        </div>
        <div className="completedDiv" >
          <div className="completedHeading" > 
            Correct
          </div>
          <div className="completedNumber" > 
            75 <span className="problemsTitle" > problems </span>
          </div>
        </div>
        <div className="pastData" > past 24 hours, 2020  2/20 </div>
      </div>
    </div>
  );
}

export default SideBar;
