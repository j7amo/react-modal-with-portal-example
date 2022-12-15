import styles from "./UsersList.module.css";
import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/Card/Card";

const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
