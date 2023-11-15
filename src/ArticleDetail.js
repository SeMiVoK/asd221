import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <img src={article.image} alt={article.title} />
    </div>
  );
};

export default ArticleDetail;
