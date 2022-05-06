// import * as React from 'react';
import React from "react";
// import 'react-tabs/style/react-tabs.css';
// import 'font-awesome/css/font-awesome.min.css';
import "./project.css";
import "./slidermenu.css"
import "./projectcard.css"
import Cards from "./cards"



export default function project() {



  return (
    <div className="container-fluid dis-container">
      <div className="container-main-pms">
        {/* heading */}
        <div className="row pad_pms">
          <div className="col-12">
            <div className="row dis-title">Project</div>
            {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="pms_headline"></div></div>
        {/* headline */}

        <div className="row pms_sub_heading">Display your projects and portfolios</div>

        <div className="row">
          <form className="">
            <input className="nosubmit_pms" type="search" placeholder="Search" />
          </form>
        </div>


        <div className='row'>
          <div className='slider_container'>
            <nav>
              <ul>
                <li className='project_slide'>Projects</li>
                <li classname="portfolios_slide">Portfolios</li>
                <li className='thesis_slide'>Thesis & Dissertations</li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  )
}
