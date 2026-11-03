import { useState } from "react";

function AddJob({ username, jobs, setJobs, setPage }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [reminder, setReminder] = useState("");

  const addJob = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      username,
      company,
      role,
      status,
      reminder
    };

    const updatedJobs = [...jobs, newJob];

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );

    alert("Job Application Added Successfully");

    setCompany("");
    setRole("");
    setStatus("Applied");
    setReminder("");

    setPage("jobs");
  };

  return (
    <div className="form-box">
      <h2>Add Job Application</h2>

      <form onSubmit={addJob}>
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Job Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

        <label>Follow-up Reminder</label>

        <input
          type="date"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />

        <button type="submit">Save Application</button>
      </form>
    </div>
  );
}

export default AddJob;