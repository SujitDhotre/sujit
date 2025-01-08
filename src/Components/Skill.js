import React from "react";

function Skill(props) {
    
    return (
        <div className="col d-flex align-items-start skill-card">
        {/* <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg> */}
        <img src={props.logo} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
        <div >
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    )
}

export default Skill;