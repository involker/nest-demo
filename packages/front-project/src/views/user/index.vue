<template>
  <div>
    <dataFilter @search="onSearch" />
    <div>
      <a-button type="primary" @click="onAdd">添加用户</a-button>
    </div>
    <a-table :columns="columns" :data="list">
      <template #op="{ record }">
        <a-popconfirm content="确定删除?" @ok="onDel(record)">
          <a-button status="danger">删除</a-button>
        </a-popconfirm>
        <a-button
          type="primary"
          @click="onEdit(record)"
          style="margin-left: 10px"
          >编辑</a-button
        >
      </template>
    </a-table>
    <a-modal :visible="visible" title="新增" @cancel="onClose" :footer="false">
      <dialogForm @close="onClose" :injectData="dialogData" v-if="visible" />
    </a-modal>
  </div>
</template>
<script>
import dataFilter from "./filter.vue";
import dialogForm from "./dialog";
import * as UserApi from "@/api/user.js";

export default {
  components: {
    dataFilter,
    dialogForm,
  },
  data() {
    return {
      dialogData: {},
      visible: false,
      list: [],
      columns: [
        {
          title: "id",
          dataIndex: "id",
        },
        {
          title: "账号",
          dataIndex: "account",
          render({ record }) {
            return record.account || "-";
          },
        },
        {
          title: "昵称",
          dataIndex: "nickName",
        },
        {
          title: "操作",
          slotName: "op",
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    onClose(flag) {
      this.visible = false;
      flag && this.getList();
    },
    async onEdit(row) {
      const res = await UserApi.getUserDetail({
        id: row.id,
      });
      this.visible = true;
      this.dialogData = { ...res.data, isEdit: true };
    },
    onAdd() {
      this.visible = true;
    },
    async onDel(row) {
      const res = await UserApi.delUser({ id: row.id });
      this.getList();
    },
    onSearch(param) {
      this.filter = { ...param };
      this.getList();
    },
    async getList() {
      const res = await UserApi.getUserList(this.filter);
      this.list = res.data || [];
    },
  },
};
</script>