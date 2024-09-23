import { useId } from "react";
import fieldsCss from "../styles/fields.module.css";
import css from "./SearchBox.module.css";

const SearchBox = ({ search, onChange }) => {
  const searchFieldId = useId();

  const handleChange = (event) => {
    onChange(event.target.value);
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
