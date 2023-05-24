<template>
  <div>
    <h3>왜 .... ㅋㅋ </h3>
    <CreateComment/>
    <CommentList :boardId="this.boardId"/>

  </div>
</template>

<script>

import CreateComment from '@/components/CreateComment.vue'
import CommentList from '@/components/CommentList.vue'

export default {
    name : 'Comment',
    data() {
    return {
      board_id : null
      };
    },
    components : {
        CreateComment,
        CommentList,
    },
    props: {
    boardId: String
    },
    created() {
      this.forSon() //인스턴스 생성된 직후 요청을 보내기 위해
      console.log(this.boardId)
    },
    methods: {
      forSon() {
        this.board_id = this.boardId //create에 한번에 넣어도 될 듯 
      } 
  }
}
</script>

<style>

</style>