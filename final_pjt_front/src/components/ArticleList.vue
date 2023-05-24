<template>
  <div class="article-list">
    <ArticleListItem
    v-for="article in articles"
    :key="article.id"
    :article="article"   
    />
    <!-- state에서 articles데이터 가져오기 pass props -->

  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
    name : 'ArticleList',
    components: {
    ArticleListItem,
    },
    computed: {
        articles() {
        return this.$store.state.articles //state에서 articles데이터 가지고 오기
        }
    }
    }

</script>

<style>
.article-list {
  text-align : start;
}
</style>