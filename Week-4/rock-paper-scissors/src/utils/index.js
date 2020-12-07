import React from "react";

export const hands = ["rock", "paper", "scissors"];

// win = 1, lose = -1, draw = 0
export const roundOutcome = {
  rock: { rock: 0, paper: -1, scissors: 1 },
  paper: { rock: 1, paper: 0, scissors: -1 },
  scissors: { rock: -1, paper: 1, scissors: 0 },
};

export const initialProps = {
  choice: "unknown",
  title: "",
  win: 0,
  score: 0,
};

export const useLocalStorageState = (
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
