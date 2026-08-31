import styles from "./QuestionCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
export const QuestionCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.cardLabels}>
        <div className="">Level: {card.level}</div>
        <div className="">{card.completed ? "Completed" : "Not Completed"}</div>
      </div>

      <h5 className={styles.cardTitle}>
      {card.question}
      </h5>

      <div className={styles.cardAnswers}>
        <label>short answer: </label>
        <p className={styles.cardAnswer}>{card.answer}</p>
      </div>

      <Button onClick={() => navigate(`/question/${card.id}`)}>View</Button>
    </div>
  );
};
