<template>
    <div class="article-list-item">
      <router-link
        :to="{
          name: 'DetailView',
          params: { id: article.id }
        }"
        class="article-link"
      >
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-content">{{ article.content }}</p>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleListItem',
    props: {
      article: Object
    }
  }
  </script>
  
  <style scoped>
  .article-list-item {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .article-link {
    text-decoration: none;
    color: #333;
  }
  
  .article-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .article-content {
    font-size: 16px;
    line-height: 1.5;
  }
  </style>
  