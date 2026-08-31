import { QuestionCard } from "../../components/QuestionCard";
import styles from "./HomePage.module.css";
import cards from "../../../db.json";
export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      {cards.react.map((card) => (
        <QuestionCard card={card} key={card.id} />
      ))}
    </div>
  );
};
