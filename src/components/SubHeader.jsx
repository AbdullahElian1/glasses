import React, { useContext, useState } from "react";

import "../style/subheader.css";
import { SidenavContext, GlassesContext } from "../context/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function SubHeader() {
  const { gender, collection } = useContext(SidenavContext);
  const { handlefilterColor, handlefilterShape, filterColor, filterShape } =
    useContext(GlassesContext);
  const [openDropdownColor, setOpenDropdownColor] = useState(false);
  const [openDropdownShape, setOpenDropdownShape] = useState(false);

  const colors = ["black", "tortoise", "coloured", "crystal", "dark", "bright"];
  const shapes = ["square", "rectangle", "round", "cat-eye"];


  return (
    <div className="subHeader">
      <div className="subHeaderSection"></div>
      <div className="collectionGender subHeaderSection">
        <h4>{`${collection} ${gender?.toUpperCase()}`}</h4>
      </div>
      <div className="collectionFilter subHeaderSection">
        <div className="dropdown">
          <button
            className="filterButton"
            onClick={() => {
              setOpenDropdownColor(!openDropdownColor);
              setOpenDropdownShape(false);
            }}
          >
            COLOUR
          </button>
          <div
            className={`dropdownContent ${
              openDropdownColor ? "dropdownContentOpen" : ""
            }`}
          >
            {colors.map((item) => (
              <p key={item} onClick={() => handlefilterColor(item)}>
                {filterColor?.includes(item) ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} /> {item}
                  </>
                ) : (
                  item
                )}
              </p>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <button
            className="filterButton"
            onClick={() => {
              setOpenDropdownShape(!openDropdownShape);
              setOpenDropdownColor(false);
            }}
          >
            SHAPE
          </button>
          <div
            className={`dropdownContent ${
              openDropdownShape ? "dropdownContentOpen" : ""
            }`}
          >
            {shapes.map((item) => (
              <p key={item} onClick={() => handlefilterShape(item)}>
                {filterShape?.includes(item) ? (
                  <div className="checkedFilter">
                    <FontAwesomeIcon icon={faCheck} /> {item}
                  </div>
                ) : (
                  item
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
