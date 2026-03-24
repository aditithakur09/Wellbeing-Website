function Account() {
  const isLoggedIn = false;

  return (
    <div className="container mt-5">
      <h2>Account</h2>

      {!isLoggedIn ? (
        <button className="btn btn-dark">Create Account</button>
      ) : (
        <p>User Profile Data</p>
      )}
    </div>
  );
}

export default Account;