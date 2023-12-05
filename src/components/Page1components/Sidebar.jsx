import React from "react";
import "./Sidebar.css"; // Create a CSS file for your styles
import { BsFire } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { SiWebmoney } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdOutlinePhishing } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";
import { MdMoveUp } from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdEventNote } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSpeedometerOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <IoSpeedometerOutline />
          DASHBOARD
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <BsFire />
          IMMEDIATE THREATS INTELLIGENCE
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <SiAmazonsimpleemailservice />
          EMAIL GATEWAY
          <RiArrowDropDownLine />
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <SiWebmoney />
          WEB GATEWAY
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <GiWireframeGlobe />
          WEB APPLICATION FIREWALL
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <MdOutlinePhishing />
          PHISING AWARENESS
          <RiArrowDropDownLine />
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <SiSecurityscorecard />
          ENDPOINT SECURITY
          <RiArrowDropDownLine />
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <MdMoveUp />
          LATERAL MOVEMENT
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <FaFilterCircleDollar />
          DATA EXFILTRATION
          <RiArrowDropDownLine />
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <GiBreakingChain />
          FULL-KILL CHAIN APT
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <TfiAnnouncement />
          ACTIVITY CENTER
        </li>
        <li
          onClick={() => {
            alert("Not Available right now!");
          }}
        >
          <MdEventNote />
          REPORTS
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
