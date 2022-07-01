import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux";

const UserContainer = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      <h2>List of users</h2>
      {user.loading ? (
        "Loading..."
      ) : user.error ? (
        <p>{user.error}</p>
      ) : (
        user.users.map((item) => <p key={item.id}>{item.name}</p>)
      )}
    </div>
  );
};

export default UserContainer;
