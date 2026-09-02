import { QuestionCardList } from "../../components/QuestionCardList";
import styles from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const [questions, setQuestions, error] = useState([]);

  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  return (
    <div className={styles.HomePage}>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </div>
  );
};
