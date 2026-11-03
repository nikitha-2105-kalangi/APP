function Reports() {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  const total = jobs.length;

  const applied = jobs.filter(
    job => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    job => job.status === "Interview"
  ).length;

  const selected = jobs.filter(
    job => job.status === "Selected"
  ).length;

  const rejected = jobs.filter(
    job => job.status === "Rejected"
  ).length;

  return (
    <div className="page-box">
      <h1>Application Reports</h1>

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

        <div className="card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;