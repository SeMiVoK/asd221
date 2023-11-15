import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';
import AddArticle from './AddArticle';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  // Загрузка статей из localStorage при монтировании компонента
  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    setArticles(storedArticles);
  }, []);

  // Обновление localStorage каждый раз, когда статьи изменяются
  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(articles));
  }, [articles]);

  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/add-article">Добавить статью</a>
          </li>
        </ul>
      </nav>
      <div>
        {window.location.pathname === '/' && <ArticleList articles={articles} />}
        {window.location.pathname.startsWith('/article/') && (
          <ArticleDetail article={articles.find((a) => a.id === parseInt(window.location.pathname.split('/').pop()))} />
        )}
        {window.location.pathname === '/add-article' && <AddArticle addArticle={addArticle} />}
      </div>
    </div>
  );
}

export default App;
