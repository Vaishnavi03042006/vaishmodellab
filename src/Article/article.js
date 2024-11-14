import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h2>Articles</h2>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
