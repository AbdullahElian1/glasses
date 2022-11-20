import React, { useContext, useEffect, useState } from "react";
import "../style/sidenav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

import { SidenavContext } from "../context/index";

function Sidenav({ isHovering, handleMouseOver, handleMouseOut }) {
  const [goBack, setGoBack] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedCollection, setSelectedCopllection] = useState();
  const { setColection, setGender } = useContext(SidenavContext);

  useEffect(() => {
    setSelectedGender(undefined);
    setSelectedCopllection(undefined);
  }, [goBack, isHovering]);

  const handleSelectCollection = (collection) => {
    setColection(collection);
    setGender(selectedGender);
  };

  return (
    <div
      className={
        isHovering && !selectedCollection ? "sidebar sidebarOpen" : "sidebar"
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {selectedGender ? (
        <>
          <li className="goBack" onClick={() => setGoBack(!goBack)}>
            <FontAwesomeIcon icon={faLessThan} /> GO BACK{" "}
          </li>
          <li
            onClick={() => {
              handleSelectCollection("SPECTACLES");
              setSelectedCopllection("SPECTACLES");
            }}
          >
            SPECTACLES <FontAwesomeIcon icon={faGreaterThan} />
          </li>
          <li
            onClick={() => {
              handleSelectCollection("SUNGLASSES");
              setSelectedCopllection("SUNGLASSES");
            }}
          >
            SUNGLASSES <FontAwesomeIcon icon={faGreaterThan} />
          </li>
        </>
      ) : (
        <>
          <li onClick={() => setSelectedGender("Women")}>
            Women <FontAwesomeIcon icon={faGreaterThan} />
          </li>
          <li onClick={() => setSelectedGender("Men")}>
            Men <FontAwesomeIcon icon={faGreaterThan} />
          </li>
        </>
      )}
    </div>
  );
}

export default Sidenav;
