<template>
  <div>
    <div>
      <a-button type="primary" @click="onAdd">添加文章</a-button>
    </div>
    <a-table :columns="columns" :data="list" :pagination="false" bordered>
      <template #avatr="{ record }">
        <a-image v-if="record.avatr" width="50" :src="record.avatr" />
      </template>
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
    <a-pagination
      :total="page.total"
      v-model="page.current"
      :page-size="page.size"
      @change="onPageChange"
    />
    <a-modal
      :visible="visible"
      :title="title"
      @cancel="onClose"
      :footer="false"
    >
      <dialogForm @close="onClose" :injectData="dialogData" v-if="visible" />
    </a-modal>
  </div>
</template>
<script>
import dataFilter from "./filter.vue";
import dialogForm from "./dialog";

export default {
  components: {
    dataFilter,
    dialogForm,
  },
  data() {
    return {
      title: "",
      page: {
        current: 1,
        size: 10,
        total: 0,
      },
      dialogData: {},
      visible: false,
      list: [],
      columns: [
        {
          title: "序号",
          align: "center",
          dataIndex: "rowIndex",
          render({ rowIndex }) {
            return rowIndex + 1;
          },
        },
        {
          title: "标题",
          align: "center",
          dataIndex: "account",
          render({ record }) {
            return record.account || "-";
          },
        },
        {
          title: "创建时间",
          align: "center",

          dataIndex: "createTime",
        },
        {
          title: "更新时间",
          align: "center",
          dataIndex: "updateTime",
        },
        {
          title: "操作",
          align: "center",
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
      const res = await this.$api.getUserDetail({
        id: row.id,
      });
      this.visible = true;
      this.title = "编辑";
      this.dialogData = { ...res.data, isEdit: true };
    },
    onAdd() {
      this.visible = true;
      this.title = "新增";
      this.dialogData = {};
    },
    async onDel(row) {
      const res = await this.$api.delUser({ id: row.id });
      this.getList();
    },
    onPageChange(current) {
      this.page.current = current;
      this.onSearch();
    },
    async getList() {
      const res = await this.$api.getUserList(this.filter);
      this.list = res.data.records || [];
      this.page.current = res.data.current;
      this.page.size = res.data.size;
      this.page.total = res.data.total;
    },
  },
};
</script>