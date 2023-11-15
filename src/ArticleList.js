import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
