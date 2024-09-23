import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import fieldsCss from "../styles/fields.module.css";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchFieldId = useId();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <div className={fieldsCss.field}>
        <label htmlFor={searchFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="search"
          value={search}
          id={searchFieldId}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
