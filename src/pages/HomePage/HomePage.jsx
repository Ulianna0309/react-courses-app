import { QuestionCard } from "../../components/QuestionCard";
import styles from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/react`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    getQuestions();
  }, []);

  return (
    <div className={styles.HomePage}>
      {questions.map((card) => (
        <QuestionCard card={card} key={card.id} />
      ))}
    </div>
  );
};