import React from "react";
import "./JobCard.css";

const JobCard = (props) => {

  //  const {image,designation,companyName,location, applicant,postedTime, moreIcon,notificationIcon} = props;


  return (
    <>
      <div className="post-row">
        <div class="column-post">
          <div class="card-post">
            <div className="card-container">
              <img
                src={props.image}
                width="40px"
                height="40px"
                className="small-image"
              />

              <div className="col">
                <div className="job-title-conatiner">
                  <div>
                    <div className="job-card-heading">
                      {props.designation}
                    </div>
                    <p className="jobcard-com-name">{props.companyName}</p>
                    <p className="jobcard-com-name">{props.location}</p>

                    <div className="application-status">
                      <div>
                        <div className="jobcard-com-name">{props. applicant} Application</div>
                        <div className="application-post">Posted {props.postedTime} Ago</div>
                      </div>
                    </div>
                  </div>

                  <div className="icon-container-post">
                    <img
                      src={props.moreIcon}
                      alt="more"
                      className="more-icon"
                    />

                    <img
                      src={props.notificationIcon}
                      alt="notification"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
