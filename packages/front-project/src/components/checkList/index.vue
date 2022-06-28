<template>
  <div ref="container" class="container">
    <el-checkbox-group v-model="localValue" class="left">
      <el-checkbox
        :label="item.label"
        :value="item.label"
        v-for="(item, i) in renderList"
        :key="i"
      ></el-checkbox>
    </el-checkbox-group>
    <el-popover
      placement="bottom"
      title=""
      width="200"
      trigger="click"
      content=""
      v-if="dropdownList.length"
    >
      <template v-slot:reference>
        <el-button>更多菜单</el-button>
      </template>
      <template v-slot>
        <el-checkbox-group v-model="dropdownValue">
          <el-checkbox
            :label="item.label"
            :value="item.label"
            v-for="(item, i) in dropdownList"
            :key="i"
          ></el-checkbox>
        </el-checkbox-group>
      </template>
    </el-popover>
  </div>
</template>
<script>
export default {
  name: 'checkList',
  data() {
    return {
      renderList: [],
      dropdownList: [],
      localValue: [],
      dropdownValue: [],
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {
    this.calculate();
    window.addEventListener('resize', this.calculate);
  },
  methods: {
    calculate() {
      if (!this.$refs.container) return;
      let containerWidth = this.$refs.container.clientWidth;
      //减去更多菜单宽度，具体自己调整
      containerWidth -= 80;
      console.log(containerWidth);
      let width = 0;
      let flag = true;
      let dropdownList = [];
      let renderList = this.data.reduce((prev, curr) => {
        //文字12px,10的间距，具体自己调整
        const currentWidth = curr.label.length * 12 + 10;
        if (
          width < containerWidth &&
          width + currentWidth < containerWidth &&
          flag
        ) {
          width += currentWidth;
          prev.push(curr);
        } else {
          flag = false;
          dropdownList.push(curr);
        }
        return prev;
      }, []);
      this.renderList = renderList;
      this.dropdownList = dropdownList;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.left {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
}
</style>