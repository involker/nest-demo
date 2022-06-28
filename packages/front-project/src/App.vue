<template>
  <div>
    <el-input v-model="form.account" style="width: 100px"></el-input>
    <el-input v-model="form.password" style="width: 100px"></el-input>
    <el-button @click="submit">提交</el-button>
    <el-button @click="search">查询</el-button>
    <el-button @click="update">更新</el-button>
    <el-button @click="del">删除</el-button>
  </div>
</template>

<script>
import requset from './request/index';
export default {
  name: 'App',
  components: {},
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    del() {
      requset
        .post('/user/del', {
          id: 1,
        })
        .then((res) => {
          console.log(res);
        });
    },
    update() {
      requset
        .post('/user/update', {
          id: 1,
          ...this.form,
        })
        .then((res) => {
          console.log(res);
        });
    },
    search() {
      requset.post('/user/query', {}).then((res) => {
        console.log(res);
      });
    },
    submit() {
      requset
        .post('/user/add', {
          ...this.form,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
</style>
