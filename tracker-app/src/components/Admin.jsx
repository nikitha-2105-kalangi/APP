function Admin({ setPage }) {
  return (
    <div className="page-box">
      <h1>Welcome, Admin!</h1>

      <p>Manage your JobTrack application from here.</p>

      <div className="admin-grid">

        <div
          className="card clickable"
          onClick={() => setPage("users")}
        >
          <h3>Manage Users</h3>
          <p>View registered users</p>
          <button>View Users</button>
        </div>

        <div
          className="card clickable"
          onClick={() => setPage("adminjobs")}
        >
          <h3>Job Applications</h3>
          <p>Monitor all applications</p>
          <button>View Applications</button>
        </div>

        <div
          className="card clickable"
          onClick={() => setPage("reports")}
        >
          <h3>Reports</h3>
          <p>View application statistics</p>
          <button>View Reports</button>
        </div>

      </div>
    </div>
  );
}

export default Admin;