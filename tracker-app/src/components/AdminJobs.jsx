function AdminJobs() {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  return (
    <div className="page-box">
      <h1>All Job Applications</h1>

      <div className="job-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.company}</h2>
            <p>Role: {job.role}</p>
            <p>User: {job.username}</p>
            <p>Status: {job.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminJobs;