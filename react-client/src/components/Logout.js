// Importing necessary dependencies
import { useHistory } from "react-router-dom";

// Creating UserLogout component
const UserLogout = () => {
  // Initializing useHistory hook to manipulate browser history
  const history = useHistory();
  
  // Removing user information from local storage
  localStorage.removeItem('userCategory');
  localStorage.removeItem('name');
  
  // Redirecting user to login page
  history.push('/login');
  
  // Returning success message
  return "User Logged out successfully";
}

// Exporting UserLogout component
export default UserLogout;