import styles from "./Header.module.css";
import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button";
export const Header = () => {
  return (
    <header className={styles.header}>
      <p>
        <img src={ReactLogo} alt="react logo" />
        <span>ReactCards</span>
      </p>
      <div className={styles.headerButtons}>
       <Button isActive>Add</Button>
       <Button>login</Button>
      </div>
    </header>
  );
};
