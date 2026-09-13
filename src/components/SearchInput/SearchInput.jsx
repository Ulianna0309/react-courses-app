import { useId } from "react";
import styles from "./SearchInput.module.css";
import { SearchIcon } from "../SearchIcon";
export const SearchInput = ({ value, onChange }) => {
  const inputId = useId();
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={inputId} className={styles.searchIcon}>
        <SearchIcon />
      </label>
      <input
        type="text"
        id={inputId}
        placeholder="search"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};
