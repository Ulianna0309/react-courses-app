import styles from "./Badge.module.css";
export const Badge = ({ variant, children }) => {
    return (
      <div className={`${styles.badge} ${styles[variant] || ""}`}>
        {children}
      </div>
    );
  };