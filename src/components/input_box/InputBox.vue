<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    placeholder="Please input"
    @select="globalSearch"
    :select-when-unmatched="true"
    :clearable="true"
    :debounce="500"
    style="width: 100%"
    :fit-input-width="true"
  >
    <template #prefix>
      <el-icon class="el-input__icon" @click="globalSearch">
        <Search />
      </el-icon>
    </template>
    <template #default="{ item }">
      <span class="hot-search-index">{{ item.index }}</span>
      <span class="hot-search-value">{{ item.value }}</span>
    </template>
  </el-autocomplete>
</template>

<script setup>
import { onMounted, ref } from "vue"
const state = ref("")
const hotSearch = ref([
  { index: 1, value: "vue" },
  { index: 2, value: "element" },
  { index: 3, value: "cooking" },
  { index: 4, value: "mint-ui" },
  { index: 5, value: "vuex" },
  { index: 6, value: "vue-router" },
  { index: 7, value: "babel" },
])

const globalSearch = (item) => {
  console.log('全局查询：' + state.value)
}


/**
 * 输入框的回调函数，选中时、输入时触发
 * @param {输入框的数据} queryString
 * @param {返回给输入框的数据} cb
 */
const querySearchAsync = (queryString, cb) => {
  console.log('查询推荐：' + queryString)
  cb(hotSearch.value)
}
</script>
