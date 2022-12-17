import { useRef, useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../../../shared/Button/Button";
import Card from "../../../shared/Card/Card";
import ErrorModal from "../../../shared/ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // the alternative to using state to store input values is REF,
  // this is especially good when we don't need controlled inputs,
  // and we also want to reduce re-rendering of the component because we won't be updating state on each keystroke anymore!
  const nameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState(null);

  // we don't need these handlers IF we are working with REFs
  // const nameInputHandler = (evt) => {
  //   setName(evt.target.value);
  // };
  //
  // const ageInputHandler = (evt) => {
  //   setAge(evt.target.value);
  // };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;

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
    // setName("");
    // setAge("");

    // this is not very good... basically we should avoid manipulating DOM directly but in this case we have to
    // because we no longer use state
    nameRef.current.value = "";
    ageRef.current.value = "";
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
            {/*<input*/}
            {/*  type="text"*/}
            {/*  id="user-name"*/}
            {/*  value={name}*/}
            {/*  onChange={nameInputHandler}*/}
            {/*/>*/}
            <input type="text" id="user-name" ref={nameRef} />
          </div>
          <div>
            <label htmlFor="user-age">Age (years)</label>
            {/*<input*/}
            {/*  type="number"*/}
            {/*  id="user-age"*/}
            {/*  value={age}*/}
            {/*  onChange={ageInputHandler}*/}
            {/*/>*/}
            <input type="number" id="user-age" ref={ageRef} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
