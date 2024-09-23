import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import fieldsCss from "../styles/fields.module.css";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const searchFieldId = useId();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <div className={fieldsCss.field}>
        <label htmlFor={searchFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="search"
          value={value}
          id={searchFieldId}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
