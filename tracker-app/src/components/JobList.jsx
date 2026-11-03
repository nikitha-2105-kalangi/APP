function JobList({ jobs, setJobs, username }) {

  const userJobs = jobs.filter(
    (job) => job.username === username
  );

  const updateStatus = (id, newStatus) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id
        ? { ...job, status: newStatus }
        : job
    );

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <div className="page-box">
      <h1>My Job Applications</h1>

      <div className="job-grid">
        {userJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.company}</h2>

            <p>Role: {job.role}</p>

            <p>Status: {job.status}</p>

            <p>Reminder: {job.reminder || "Not Set"}</p>

            <select
              value={job.status}
              onChange={(e) =>
                updateStatus(job.id, e.target.value)
              }
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </div>
        ))}
      </div>

      {userJobs.length === 0 && (
        <p>No job applications added yet.</p>
      )}
    </div>
  );
}

export default JobList;