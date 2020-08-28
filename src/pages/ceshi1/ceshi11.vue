<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-07 11:08:06
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-27 15:49:19
-->
<template>
  <page-container>
    <!-- <a-spin :spinning="loading"> -->
      <a-card>
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="12" :lg="8">
                <a-form-item label="规则编号">
                  <a-input v-model="queryParam.id" />
                </a-form-item>
              </a-col>
              <a-col :md="12" :lg="8">
                <a-form-item label="使用状态">
                  <a-select placeholder="请选择" default-value="0" v-model="queryParam.status">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">关闭</a-select-option>
                    <a-select-option value="2">运行中</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :md="24" :lg="8" style="text-align:right">
                <a-form-item>
                  <a-button type="primary" style="margin-right:8px" htmlType="submit" @click="searchData">搜索</a-button>
                  <a-button @click="resetSearch">重置</a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="table-operator">
          <a-button type="primary" icon="plus" @click="goDetail">新建</a-button>
        </div>
        <a-table
          :rowKey="(record,index)=>{return index}"
          :columns="columns"
          :data-source="list"
          :loading="loading"
          :pagination="pagination"
          @change="handleTableChange"
        >
          <a slot="title1" slot-scope="text">{{ text }}</a>
          <span slot="action" slot-scope="text, record">
            <a>Delete</a>
          </span>
        </a-table>
      </a-card>
    <!-- </a-spin> -->
  </page-container>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "标题",
          dataIndex: "title",
          key: "title",
          scopedSlots: { customRender: "title1" }
        },
        {
          title: "副标题",
          dataIndex: "sub_title",
          key: "sub_title",
          ellipsis: true
        },
        {
          title: "金额",
          key: "price",
          dataIndex: "price"
        },
        {
          title: "Action",
          key: "action",
          scopedSlots: { customRender: "action" }
        }
      ],
      queryParam:{},
      list: [],
      form: this.$form.createForm(this),
      loading: false,
      pagination: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    searchData(){
      console.log(this.queryParam)
    },
    resetSearch(){
      this.queryParam={}
    },
    handleTableChange(expandedRows){
      this.getData(expandedRows)
    },
    async getData(page={}) {
      const data = {
        content: {
          type: "mallindex",
          maxRecordNum: 53,
          pageNo: page.current||1,
          pageSize: page.pageSize||10
        }
      };
      this.loading = true
      const res = await this.$post("/mall29/itemlist.html", data);
      this.loading = false
      if (res.errcode == 0) {
        this.list = res.content.list;
        this.pagination = {
          showSizeChanger: true,
          showQuickJumper: true,
          defaultCurrent: 1,
          current: res.content.pageNo,
          total: res.content.totalNums,
          pageSize: page.pageSize||10
        };
      }
    },
    goDetail(){
      this.$router.push('/ceshi1/ceshidetail11')
    }
  }
};
</script>