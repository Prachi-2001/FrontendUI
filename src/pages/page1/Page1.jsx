import React, { useEffect, useState } from "react";
import "./page1.css";
import Sidebox from "../../components/Page1components/Sidebox";
import Sidebar from "../../components/Page1components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import { MdMoveUp, MdOutlinePhishing } from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import {
  SiAmazonsimpleemailservice,
  SiSecurityscorecard,
  SiWebmoney,
} from "react-icons/si";
import { IoSpeedometerOutline } from "react-icons/io5";
const Page1 = () => {
  const [showSidebox, setShowSidebox] = useState(true);
  const [showLeftBox, setShowLeftBox] = useState(true);
  const circleColors = [
    "black",
    "rgb(31, 155, 31)",
    "rgb(31, 155, 31)",
    "rgb(249, 97, 123)",
    "rgb(249, 97, 123)",
    "yellow",
    "yellow",
    "rgb(140, 20, 140)",
  ];

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setShowLeftBox(false); // Close left menu for mobile screens
        setShowSidebox(false); // Close right menu for mobile screens
      } else {
        setShowLeftBox(true); // Open left menu for larger screens
        setShowSidebox(true); // Open right menu for larger screens
      }
    };
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleSidebox = () => {
    setShowSidebox(!showSidebox);
  };

  const toggleLeftMenu = () => {
    setShowLeftBox(!showLeftBox);
  };

  return (
    <div className="cymate-body">
      {/* Concentric circles representing the solar system */}
      <div className="solar-system-background">
        {/* Eight circles */}
        <div className="orbit orbit1">
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin">68</span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">OVERALL SCORE</span>
          <span className="orbit-1-data-cymulate-demo">CYMULATE DEMO</span>
        </div>
        <div className="orbit orbit2"></div>
        <div className="orbit orbit3"></div>
        <div className="orbit orbit4">
          <div className="Lowermost-texts-body">
            <span style={{ color: "green" }}>POST EXPLOITATION</span>
            <span style={{ color: "#4f8bd1" }}>EXPLOITATION</span>
            <span style={{ color: "#4d2754" }}>PRE EXPLOITATION</span>
          </div>
        </div>
        <div className="orbit orbit5"></div>
        <div className="orbit orbit6"></div>

        {/* Circles over specific orbits */}
        <div className="overlaid-circle1">
          <span>APT</span>
        </div>
        <div className="overlaid-circle2">
          <div className="overlaid-circle-top-image-container">
            <MdMoveUp size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin">76</span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">LATERAL MOVEMENT</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[1] }}
          >
            <FaRegBell size={22} />
          </div>
        </div>
        <div className="overlaid-circle3">
          <div className="overlaid-circle-top-image-container">
            <FaFilterCircleDollar size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span
              className="circle-marks-numin"
              style={{ textAlign: "center" }}
            >
              76
            </span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">DATA EXFILTRATION</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[2] }}
          >
            <FaRegBell size={22} />
          </div>
        </div>
        <div className="overlaid-circle4">
          <div className="overlaid-circle-top-image-container">
            <MdOutlinePhishing size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin" style={{ color: "yellow" }}>
              49
            </span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">PHISHING AWARENESS</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[3] }}
          >
            <FaRegBell size={22} color={circleColors[3]} />
          </div>
        </div>
        <div className="overlaid-circle5">
          <div className="overlaid-circle-top-image-container">
            <SiSecurityscorecard size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin" style={{ color: "yellow" }}>
              34
            </span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">ENDPOINT SECURITY</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[4] }}
          >
            <FaRegBell size={22} color={circleColors[4]} />
          </div>
        </div>
        <div className="overlaid-circle6">
          <div className="overlaid-circle-top-image-container">
            <SiAmazonsimpleemailservice size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin">96</span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">EMAIL GATEWAY</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[5] }}
          >
            <FaRegBell size={22} color={circleColors[5]} />
          </div>
        </div>
        <div className="overlaid-circle7">
          <div className="overlaid-circle-top-image-container">
            <SiWebmoney size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span className="circle-marks-numin">63</span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">WEB GATEWAY</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[6] }}
          >
            <FaRegBell size={22} color={circleColors[6]} />
          </div>
        </div>
        <div className="overlaid-circle8">
          <div className="overlaid-circle-top-image-container">
            <MdMoveUp size={22} />
          </div>
          <div style={{ display: "flex" }}>
            <span
              className="circle-marks-numin"
              style={{ color: "yellowgreen" }}
            >
              76
            </span>
            <span className="circle-marks-denomi">/100</span>
          </div>
          <span className="circle-text">LATERAL MOVEMENT</span>
          <div
            className="overlaid-circle-bottom-image-container"
            style={{ borderColor: circleColors[7] }}
          >
            <FaRegBell size={22} color={circleColors[7]} />
          </div>
        </div>
      </div>

      <div className="cymate-body-sidebar">{showLeftBox && <Sidebar />}</div>
      <div className="cymate-body-right">
        <button
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          Alerts
        </button>
        <button onClick={toggleSidebox}>Attack Trace</button>
        {showSidebox && <Sidebox />}
      </div>
    </div>
  );
};

export default Page1;
