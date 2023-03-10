import { useState } from "react";

export default function SMSearchbar(props) {
  const { searchList, label, onSearch } = props;

  const [selected, setSelected] = useState("");

  let searchVal = (e) => {
    onSearch(selected, e);
  };

  return (
    <>
      <div className="d-flex searchBox justify-content-center">
        <div className="text-center">
          <input
            className="searchInp border rounded bg-light mx-3 fs-6"
            onChange={(e) => searchVal(e.target.value)}
            placeholder={label ?? "Search ..."}
          />
        </div>
        <div>
          <select
            className="searchSelect border rounded fs-6 text-center bg-light"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select</option>
            {searchList.map((x, i) => (
              <option key={i} value={x.key}>
                {x.displayName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}