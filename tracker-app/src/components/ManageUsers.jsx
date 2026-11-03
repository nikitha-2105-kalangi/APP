function ManageUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="page-box">
      <h1>Registered Users</h1>

      {users.map((user, index) => (
        <div className="card" key={index}>
          <h3>{user.username}</h3>
        </div>
      ))}
    </div>
  );
}

export default ManageUsers;