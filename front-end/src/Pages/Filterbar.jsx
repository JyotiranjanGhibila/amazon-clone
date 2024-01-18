import "../Styles/Filterbar.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Filterbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initBrand = searchParams.getAll("brand");
  const initMate = searchParams.getAll("material");

  const [material, setMaterial] = useState(initMate || []);
  const [brand, setBrand] = useState(initBrand || []);

  const handleFilter = (e) => {
    let newFilter = [...brand];
    if (newFilter.includes(e.target.value)) {
      newFilter.splice(newFilter.indexOf(e.target.value), 1);
    } else {
      newFilter.push(e.target.value);
    }
    setBrand(newFilter);
  };
  const handleMate = (e) => {
    const newMate = [...material];
    if (newMate.includes(e.target.value)) {
      newMate.splice(newMate.indexOf(e.target.value), 1);
    } else {
      newMate.push(e.target.value);
    }
    setMaterial(newMate);
  };
  useEffect(() => {
    const params = {
      brand,
      material,
    };
    setSearchParams(params);
  }, [brand, material]);

  return (
    <div className="filter__section">
      <h3>Brand</h3>
      <div>
        <input
          type="checkbox"
          value="jocky"
          onChange={handleFilter}
          checked={brand.includes("jocky")}
        />
        <span>jocky</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="lux lyra"
          onChange={handleFilter}
          checked={brand.includes("lux lyra")}
        />
        <span>Lux Lyra</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="zeyo"
          onChange={handleFilter}
          checked={brand.includes("zeyo")}
        />
        <span>Zeyo</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="vbuyz"
          onChange={handleFilter}
          checked={brand.includes("vbuyz")}
        />
        <span>Vbuyz</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="nivah fashion"
          onChange={handleFilter}
          checked={brand.includes("nivah fashion")}
        />
        <span>Nivah fashion</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="sgf11"
          onChange={handleFilter}
          checked={brand.includes("sgf11")}
        />
        <span>Sgf11</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="fabricorn"
          onChange={handleFilter}
          checked={brand.includes("fabricorn")}
        />
        <span>Fabricorn</span>
      </div>
      <div>
        <input
          type="checkbox"
          value="nainvish"
          onChange={handleFilter}
          checked={brand.includes("nainvish")}
        />
        <span>Nainvish</span>
      </div>
      <h3>Material</h3>
      <div>
        <input
          type="checkbox"
          value={"cotton"}
          onChange={handleMate}
          checked={material.includes("cotton")}
        />
        <span>Cotton</span>
      </div>
      <div>
        <input
          type="checkbox"
          value={"slik"}
          onChange={handleMate}
          checked={material.includes("slik")}
        />
        <span>Silk</span>
      </div>
      <div>
        <input
          type="checkbox"
          value={"ryaon"}
          onChange={handleMate}
          checked={material.includes("ryaon")}
        />
        <span>Ryaon</span>
      </div>
      <div>
        <input
          type="checkbox"
          value={"georgette"}
          onChange={handleMate}
          checked={material.includes("georgette")}
        />
        <span>Georgette</span>
      </div>
      <div>
        <input
          type="checkbox"
          value={"fleece"}
          onChange={handleMate}
          checked={material.includes("fleece")}
        />
        <span>Fleece</span>
      </div>
      <div>
        <input
          type="checkbox"
          value={"crepe"}
          onChange={handleMate}
          checked={material.includes("crepe")}
        />
        <span>Crepe</span>
      </div>
    </div>
  );
};
export default Filterbar;
