<template>
  <div>{{userInfo.account}}

    <a-button @click="sendArticle">去发表文章</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    sendArticle(){
      this.$router.push({
        path:"/article"
      })
    },
    async getCurrentUser() {
      const res = await this.$api.getCurrentUser();
      this.userInfo = res.data;
    }
  }
}
</script>