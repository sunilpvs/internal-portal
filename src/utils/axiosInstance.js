import axios from "axios";
import { toast } from "react-hot-toast";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});

const protectedPaths = ["/my-assets"];
const silentAuthEndpoints = ["api/user/me", "auth/check.php?portal=default"];

const isProtectedPath = (pathname) =>
    protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

const isSilentAuthRequest = (requestUrl = "") =>
    silentAuthEndpoints.some((endpoint) => requestUrl.includes(endpoint));

const refreshAxios = axios.create({
    baseURL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const pathname = window.location.pathname;

        if (pathname === "/") {
            return Promise.reject(error);
        }

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await refreshAxios.get("/auth/refresh.php?portal=default");

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh failed:", refreshError);
                const requestUrl = originalRequest?.url || "";
                const isSilentRequest = isSilentAuthRequest(requestUrl);

                if (!isSilentRequest) {
                    toast.error("Session expired. Please login again.");
                }

                if (isProtectedPath(pathname)) {
                    window.location.href = "/";
                }

                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
