function Dashboard({ username, jobs, setPage }) {
  const total = jobs.length;

  const applied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const selected = jobs.filter(
    (job) => job.status === "Selected"
  ).length;

  return (
    <div className="page-box">
      <h1>Welcome, {username}</h1>

      <h2>Job Application Dashboard</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Total Applications</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Applied</h3>
          <p>{applied}</p>
        </div>

        <div className="card">
          <h3>Interviews</h3>
          <p>{interview}</p>
        </div>

        <div className="card">
          <h3>Selected</h3>
          <p>{selected}</p>
        </div>
      </div>

      <button onClick={() => setPage("addjob")}>
        Add Job Application
      </button>

      <button onClick={() => setPage("jobs")}>
        View Applications
      </button>
    </div>
  );
}

export default Dashboard;