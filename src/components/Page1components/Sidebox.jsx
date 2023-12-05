import React from "react";
import data from "../../data/data";
import "./Sidebox.css";
import { MdDataExploration } from "react-icons/md";

const Sidebox = () => {
  return (
    <div className="cymate-body-right-menu">
      {data.map((item, index) => (
        <div className="right-side-menu-items" key={index}>
          <div className="adjustment">
            <div className="logo-container">
              <img
                src={item.image}
                alt={`Image ${index}`}
                className="logo-image"
              />
            </div>
            <div className="data-item">
              <p className="vector-p">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;VECTOR:{" "}
                <span style={{ color: "white" }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.Vector}
                </span>{" "}
              </p>
              <p>
                TARGET:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {item.Target}
              </p>
              <p>
                &nbsp;&nbsp;TIME:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {item.Time}
              </p>
            </div>
            <div className="document-icon">
              <MdDataExploration size={40} />
            </div>
          </div>
          {index !== data.length - 1 && (
            <div className={`slope-separator separator-${index}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebox;
