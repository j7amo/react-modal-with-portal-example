const UserItem = ({ user }) => {
  return <li>{`${user.name} (${user.age}year(s) old)`}</li>;
};

export default UserItem;
