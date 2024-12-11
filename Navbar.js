import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          Pace Match
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/update-status" style={styles.navLink}>
            Update Status
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/view-statuses" style={styles.navLink}>
            View Statuses
          </Link>
        </li>
        <li style={styles.navItem}>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#1F509A",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Ensures perfect vertical alignment
    padding: "10px 20px",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  logoLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "700",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
    gap: "20px", // Even spacing between items
    alignItems: "center", // Ensures perfect vertical alignment for all items
  },
  navItem: {
    fontSize: "18px",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 16px", // Balanced padding for a cleaner look
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  navLinkHover: {
    backgroundColor: "#003F7F",
    color: "#FFFFFF",
  },
  logoutButton: {
    backgroundColor: "#FF4C4C",
    color: "#FFFFFF",
    border: "none",
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  logoutButtonHover: {
    backgroundColor: "#CC0000",
  },
};

export default Navbar;
