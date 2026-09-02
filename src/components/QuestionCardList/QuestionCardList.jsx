import { QuestionCard } from "../../components/QuestionCard";
import styles from "./QuestionCardList.module.css";

export const QuestionCardList = ({cards}) => {
  return (
    <div className={styles.cardList}>
        {cards.map((card) => (
        <QuestionCard card={card} key={card.id} />
      ))}
    </div>
  );
};