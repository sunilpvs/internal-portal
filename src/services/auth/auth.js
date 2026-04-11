import axiosInstance from "../../utils/axiosInstance.js";
import {getDefaultAccessStatus} from "../admin/accessReqService.js";


// ------------------
// Login
// ------------------
const loginUser = async ({ username, password }) => {
  const payload = { username, password };
  return await axiosInstance.post("auth/login.php", payload);
};

export default loginUser;

// ------------------
// Logout
// ------------------
export const logoutUser = async () => {
  try {
    await axiosInstance.post("auth/logout.php");
  } catch (error) {
    console.error("Logout failed", error);
  } finally {
    window.location.href = "/";
  }
};

// Only check default access for home portal
// if($type == 'default'){
//     $defaultAccess = $accessReq->checkDefaultAccess($email, 'Access Request', $email);
//     if($defaultAccess>0){
//         http_response_code(200);
//         echo json_encode([
//             "default_access" => "granted",
//         ]);
//         exit();
//     } else {
//         http_response_code(403);
//         echo json_encode([
//             "error" => "Access denied",
//         ]);
//         exit();
//     }
// }

export const checkAuth = async () => {
  try {
    const auth_response = await axiosInstance.get("auth/check.php");

    if (auth_response?.status === 200) {
      try {
        const access_response = await getDefaultAccessStatus();

        if (access_response?.status === 200) {
          return { authenticated: true, status: "Granted" };
        }
      } catch (accessErr) {
        if (accessErr.response?.status === 403) {
          return { authenticated: true, status: 'Denied' };
        }
        throw accessErr; // other errors bubble up
      }
    }

    return { authenticated: false, status: null };
  } catch (err) {
    console.error("checkAuth failed:", err);
    return { authenticated: false, status: null };
  }
};



