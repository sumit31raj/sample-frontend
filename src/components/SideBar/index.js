import React from 'react';
import './index.css';

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarInner" >

        <div className="progress progress-primary" data-percentage="20">
          <span className="progress-left">
            <span className="progress-bar"></span>
          </span>
          <span className="progress-right">
            <span className="progress-bar"></span>
          </span>
          <div className="progress-value">
            <div>
              1,000,000 
              <span>completed</span>
            </div>
          </div>
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
