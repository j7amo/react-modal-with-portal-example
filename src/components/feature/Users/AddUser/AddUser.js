import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../../../shared/Button/Button";
import Card from "../../../shared/Card/Card";
import ErrorModal from "../../../shared/ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const nameInputHandler = (evt) => {
    setName(evt.target.value);
  };

  const ageInputHandler = (evt) => {
    setAge(evt.target.value);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    const userInput = {
      id: Math.random().toString(),
      age,
      name,
    };

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Values cannot be empty",
      });
      return;
    }

    if (Number(age.trim()) <= 0) {
      setError({
        title: "Invalid age",
        message: "Age should be greater than 0",
      });
      return;
    }

    setError(null);
    onAddUser(userInput);
    setName("");
    setAge("");
  };

  const modalCloseHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onModalClose={modalCloseHandler}
        />
      )}
      <Card className={styles.form}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="user-name">Username</label>
            <input
              type="text"
              id="user-name"
              value={name}
              onChange={nameInputHandler}
            />
          </div>
          <div>
            <label htmlFor="user-age">Age (years)</label>
            <input
              type="number"
              id="user-age"
              value={age}
              onChange={ageInputHandler}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
