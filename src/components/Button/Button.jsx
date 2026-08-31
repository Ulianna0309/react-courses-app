import styles from "./Button.module.css";
export const Button = ({ children, isActive, onClick, isDisabled }) => {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
