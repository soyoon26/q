<template>
  <div>
    <h3>댓글 목록</h3>
    <div v-if="filteredComments.length === 0">
      생성된 댓글이 없습니다.
    </div>
    <div v-else>
      <CommentListItem
        v-for="comment in filteredComments"
        :key="comment.id"
        :comment="comment"
      />
      </div>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem'

export default {
    name : 'CommentList',
    components : {
      CommentListItem,
    },
    props: {
      boardId: String
    },
    computed: {
    comments() {
      return this.$store.state.comments || []; 
    },
    filteredComments() {
      return this.comments.filter(comment => {
        return comment.board === parseInt(this.boardId);
      });
    },
  },
  mounted() {
    // 마운트후에 computed 속성이 계산
    this.filteredComments;
  },
};

</script>

<style>

</style>