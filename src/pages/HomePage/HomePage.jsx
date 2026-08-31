import { QuestionCard } from "../../components/QuestionCard";
import styles from "./HomePage.module.css";
export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <QuestionCard />
    </div>
  );
};
