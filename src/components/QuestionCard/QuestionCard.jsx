import styles from "./QuestionCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
export const QuestionCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.cardLabels}>
        <div className=""> Level 1</div>
        <div className=""> Level 1</div>
      </div>

      <h5 className={styles.cardTitle}>
        {/* {card.question} */}
        khj
      </h5>

      <div className={styles.cardAnswers}>
        <label>short answer: </label>
        <p className={styles.cardAnswer}>kjhk</p>
      </div>

      <Button onClick={() => navigate(`/question/${card.id}`)}>View</Button>
    </div>
  );
};
