import { QuestionCardList } from "../../components/QuestionCardList";
import styles from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";

export const HomePage = () => {
  const [questions, setQuestions, error] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();
    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSeachChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value)
  }

  return (
    <div className={styles.HomePage}>
      <input type="text" placeholder="search" value={searchValue} onChange={onSeachChangeHandler}/>
      {/* <button onClick={testRefHendler}>test ref</button> */}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </div>
  );
};
