import React from "react";
import Card from "./Card";
import "./Branches.css";
import com from "../photos/computer.png";
import elec from "../photos/electrical.png";
import ece from "../photos/ece.png";
import chem from "../photos/chemical.png";
import civil from "../photos/civil.png";
import maths from "../photos/maths.png";
import prod from "../photos/prod.png";
import { Link, useParams } from 'react-router-dom';
import mech from "../photos/mechanical.png";
import "../App.css";

import phy from "../photos/Physics.png";
  
function Branches() {
  const { year } = useParams();
  return (
    <div className="scrollable-component">
      <div className=" container year-container">
        <h2 className="my-3">Select Your Branch</h2>

        <div class="container game-board" style={{marginTop:"1rem"}}>
         
          <div class="box">
          <Link to={`/links/${year}/CSE`} >
            <Card name="CSE" image={com} />
            </Link>
          </div>
         
          <div class="box">
          <Link to={`/links/${year}/ECE`}>
            <Card name="ECE" image={ece} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/ELECTRICAL`}>
            <Card name="ELECTRICAL" image={elec} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/ME`}>
            <Card name="ME" image={mech} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/PE`}>
            <Card name="PE" image={prod} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/CIVIL`}>
            <Card name="CIVIL" image={civil} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/CHEMICAL`} style={{textDecoration:"none"}}>
            <Card name="CHEMICAL" image={chem} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/Mathematics`}>
            <Card name="Mathematics" image={maths} />
            </Link>
          </div>
          <div class="box">
          <Link to={`/links/${year}/Physics`}>
            <Card name="Physics" image={phy} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branches;
