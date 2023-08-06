import React, { useState, useEffect } from "react";

import GoalInput from "./components/goals/GoalInput";
import CourseGoals from "./components/goals/CourseGoals";
import ErrorAlert from "./components/UI/ErrorAlert";
import Card from "./components/UI/Card";
import Research from "./components/research/research";

function App() {
  const [loadedGoals, setLoadedGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch("http://localhost/goals");

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || "Fetching the goals failed.");
        }

        setLoadedGoals(resData.goals);
      } catch (err) {
        setError(
          err.message ||
            "Fetching goals failed - the server responsed with an error."
        );
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function addGoalHandler(goalText) {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost/goals", {
        method: "POST",
        body: JSON.stringify({
          text: goalText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Adding the goal failed.");
      }

      setLoadedGoals((prevGoals) => {
        const updatedGoals = [
          {
            id: resData.goal.id,
            text: goalText,
          },
          ...prevGoals,
        ];
        return updatedGoals;
      });
    } catch (err) {
      setError(
        err.message ||
          "Adding a goal failed - the server responsed with an error."
      );
    }
    setIsLoading(false);
  }

  async function deleteGoalHandler(goalId) {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost/goals/" + goalId, {
        method: "DELETE",
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Deleting the goal failed.");
      }

      setLoadedGoals((prevGoals) => {
        const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
        return updatedGoals;
      });
    } catch (err) {
      setError(
        err.message ||
          "Deleting the goal failed - the server responsed with an error."
      );
    }
    setIsLoading(false);
  }

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Khanitta</h1>
      <h3 style={{ color: "white", textAlign: "center" }}>65130488</h3>
      <Card>
        <img
          style={{ width: "24rem", objectFit: "contain", alignItems: "center" }}
          src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t39.30808-6/323557048_2966907313615391_8423888818852768294_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlh3fiq4_67alK5uGX3a943LJ_JEUHLKzcsn8kRQcsrF3YClzFVhYZsSHbG4s7jgnZiNoPbpXuZXK3JLrJVPW8&_nc_ohc=O-_OHbzDnIMAX-vqjv-&_nc_ht=scontent.fbkk2-6.fna&oh=00_AfAoZacacHPUm6tSnEezFK3edSfKN793M-nO7I-kkU1qLg&oe=64D37C62"
        />
      </Card>
      <Card>
        <Research />
      </Card>
      {error && <ErrorAlert errorText={error} />}
      <GoalInput onAddGoal={addGoalHandler} />
      {!isLoading && (
        <CourseGoals goals={loadedGoals} onDeleteGoal={deleteGoalHandler} />
      )}
    </div>
  );
}

export default App;
