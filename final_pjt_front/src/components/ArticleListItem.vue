<template>
    <div>
        <h3>ArticleListItem</h3>
        <router-link
            :to="{
                name: 'DetailView',
                params: { id: article.id }
            }"
        >
        <p>게시글 번호 : {{ article.id }}</p>
        <p>게시글 제목 : {{ article.title }}</p> 
        </router-link>
        

    </div>
</template>

<script>
export default {
    name: 'ArticleListItem',
    props : {
        article: Object
    },
}
</script>

<style>

</style>