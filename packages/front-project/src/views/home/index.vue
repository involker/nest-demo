<template>
  <div>{{userInfo.account}}</div>
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
    async getCurrentUser() {
      const res = await this.$api.getCurrentUser();
      this.userInfo = res.data;
    }
  }
}
</script>