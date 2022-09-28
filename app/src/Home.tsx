import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddJoke from "./AddJoke";
import { AppliedTheFavouriteJoke } from "./AppliedTheFavouriteJoke";
import JokeList from "./JokeList";
import NextButton from "./NextButton";

const newJokeToLaugh: NextBigJoke[] = [
  {
    text: "What do you call a yam with a broom ? A sweep potato.",
    complete: false,
  },
  {
    text: "Why did the ice cream van break down? Because there was a rocky road!",
    complete: true,
  },
];

export default function Home({ onClick }: { onClick: () => void }) {
  const [count, setCount] = useState(0);
  // create array state to store joke data
  const [newJokes, setNewJokes] = useState([]);

  const addJoke = (joke: any) => {
    setNewJokes([...newJokes], joke);
  };
  return (
    <>
      <AppStyle>
        <Link to={"/joke-randomiser"}>
          <NextButton {...onClick} />
        </Link>
        <StyledTitle>Giggle Click</StyledTitle>
        <ul>
          <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[0]} />
          <AppliedTheFavouriteJoke newJokeToLaugh={newJokeToLaugh[1]} />
        </ul>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <AddJoke addJoke={addJoke} />
          <JokeList newJokes={newJokes} />
        </div>
      </AppStyle>
    </>
  );
}

const AppStyle = styled.div`
  background-color: #add8e6;
  display: flex;
  // flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 100vh;
`;

const StyledTitle = styled.h1`
  color: #fd7094;
`;