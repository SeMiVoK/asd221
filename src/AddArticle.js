import React, { useState } from 'react';

const AddArticle = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      title,
      content,
      image,
    };
    addArticle(newArticle);
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div>
      <h1>Добавить новую статью</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Текст статьи"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL изображения (опционально)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Добавить статью</button>
      </form>
    </div>
  );
};

export default AddArticle;
