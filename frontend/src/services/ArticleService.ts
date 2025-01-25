import axiosInstance from "./axiosInstance";

const fetchArticles = async (filters = {}) => {
    const response = await axiosInstance.get("/articles", { params: filters });
    return response.data;
};

export default fetchArticles;
