import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard";
import AddJob from "./components/AddJob";
import JobList from "./components/JobList";
import ManageUsers from "./components/ManageUsers";
import AdminJobs from "./components/AdminJobs";
import Reports from "./components/Reports";

import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  const [currentUser, setCurrentUser] = useState("");

  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  const logout = () => {
    setCurrentUser("");
    setPage("login");
  };

  const isAdminPage = [
  "admin",
  "users",
  "adminjobs",
  "reports"
].includes(page);

  return (
    <div>
      <header>
  {isAdminPage ? (
    <>
      <h1>JobTrack Admin Panel</h1>

      <nav className="admin-nav">
        <button onClick={() => setPage("admin")}>
          Dashboard
        </button>

        <button onClick={() => setPage("users")}>
          Manage Users
        </button>

        <button onClick={() => setPage("adminjobs")}>
          Applications
        </button>

        <button onClick={() => setPage("reports")}>
          Reports
        </button>

        <button onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  ) : (
    <>
      <h1>Online Job Application Tracker</h1>

      <nav>
        <button onClick={() => setPage("login")}>Login</button>
        <button onClick={() => setPage("register")}>Register</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("jobs")}>My Applications</button>
        <button onClick={logout}>Logout</button>
      </nav>
    </>
  )}
</header>

      <main>
        {page === "login" && (
          <Login
            setPage={setPage}
            setCurrentUser={setCurrentUser}
          />
        )}

        {page === "register" && <Register />}

         {page === "admin" && <Admin setPage={setPage} />}

{page === "users" && <ManageUsers />}

{page === "adminjobs" && <AdminJobs />}

{page === "reports" && <Reports />}

        {page === "dashboard" && (
          <Dashboard
            username={currentUser}
            jobs={jobs.filter(
              (job) => job.username === currentUser
            )}
            setPage={setPage}
          />
        )}

        {page === "addjob" && (
          <AddJob
            username={currentUser}
            jobs={jobs}
            setJobs={setJobs}
            setPage={setPage}
          />
        )}

        {page === "jobs" && (
          <JobList
            jobs={jobs}
            setJobs={setJobs}
            username={currentUser}
          />
        )}
      </main>
    </div>
  );
}

export default App;