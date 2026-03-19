import axiosInstance from "../../utils/axiosInstance";

export const getHolidayCalendarList = () => {
    return axiosInstance.get("api/ms/holiday-calendar");
}
