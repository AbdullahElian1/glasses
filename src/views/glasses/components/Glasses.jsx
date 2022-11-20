import React, { useEffect, useState, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SidenavContext, GlassesContext } from "../../../context/index";
import { GlassesService } from "../service/index";

import "../style/glasses.css";

function Glasses() {
  const { gender, collection } = useContext(SidenavContext);
  const { filterColor, filterShape } = useContext(GlassesContext);

  const [glasses, setGlasses] = useState([]);

  let page = 1;
  const fetchData = async (setGlasses, glasses) => {
    const collectionType = `${collection.toLowerCase()}-${gender.toLowerCase()}`;
    const data = await GlassesService.list(
      page,
      filterColor,
      filterShape,
      collectionType
    );

    glasses
      ? setGlasses([...glasses, ...data.glasses])
      : setGlasses([...data.glasses]);

    page = page + 1;
  };

  useEffect(() => {
    fetchData(setGlasses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterColor, filterShape, collection, gender]);

  return (
    <InfiniteScroll
      dataLength={glasses.length}
      next={() => {
        fetchData(setGlasses, glasses);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={() => setGlasses({})}
    >
      <div className="glassContainer">
        {glasses?.map((glass, index) => (
          <div className="glassBox" key={index}>
            <h4>{`${glass?.name} `}</h4>
            <img src={glass?.glass_variants[0]?.media[0]?.url} alt="glass" />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Glasses;
