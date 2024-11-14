import React, { useState } from 'react';
import ArticleList from './Article/article';
import Filter from './Article/filter';


const articlesData = [
  { id: 1, title: 'React Hooks Tutorial', description: 'Learn how to use React hooks effectively.', category: 'Technology' },
  { id: 2, title: 'Introduction to Physics', description: 'Basic concepts of physics explained.', category: 'Science' },
  { id: 3, title: 'Football World Cup 2022', description: 'Recap of the latest football World Cup.', category: 'Sports' },
];

const App = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  const handleFilter = (category, keyword) => {
    const filtered = articlesData.filter((article) => {
      const matchesCategory = category ? article.category === category : true;
      const matchesKeyword = keyword ? article.title.toLowerCase().includes(keyword.toLowerCase()) : true;
      return matchesCategory && matchesKeyword;
    });
    setFilteredArticles(filtered);
  };

  return (
    <div>
      <h1>Article Filter App</h1>
      <Filter onFilter={handleFilter} />
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

export default App;



