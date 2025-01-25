import React, { useEffect, useState } from "react";
import 
import fetchArticles from "../services/ArticleService";

const Dashboard = () => {
    const [articles, setArticles] = useState([]);
    const handleSearch = (keyword: string) => {
        dispatch(fetchArticles({ keyword }));
    };
    useEffect(() => {
        const loadArticles = async () => {
            try {
                const data = await fetchArticles();
                setArticles(data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        loadArticles();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {articles.map((article: any) => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
