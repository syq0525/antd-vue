<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2020-08-27 15:11:56
 * @LastEditors: ShiYangquan
 * @LastEditTime: 2020-08-27 16:21:27
-->
<template>
  <page-container>
    <a-spin :spinning="loading">
      <a-card>
        <a-form @submit="handleSubmit" :form="form">
          <a-row :gutter="48">
            <a-col :md="12">
              <a-form-item label="标题">
                <a-input
                  v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入标题' }]}
            ]"
                  name="name"
                  placeholder="给目标起个名字"
                />
              </a-form-item>
            </a-col>

            <a-col :md="12">
              <a-form-item label="起止日期">
                <a-range-picker
                  name="buildTime"
                  style="width: 100%"
                  v-decorator="[
              'buildTime',
              {rules: [{ required: true, message: '请选择起止日期' }]}
            ]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="12">
              <a-form-item label="目标描述">
                <a-textarea
                  rows="4"
                  placeholder="请输入你阶段性工作目标"
                  v-decorator="[
              'description',
              {rules: [{ required: true, message: '请输入目标描述' }]}
            ]"
                />
              </a-form-item>
            </a-col>
            <a-col :md="12">
              <a-form-item label="权重">
                <a-input-number
                  :min="0"
                  :max="100"
                  v-decorator="[
              'quanzhong',
              {rules: [{ required: false, message: '请输入目标描述' }]}
            ]"
                />
                <span>%</span>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-form-item style="text-align: center">
                <a-button htmlType="submit" type="primary">提交</a-button>
                <a-button style="margin-left: 8px" @click="$router.go(-1)">返回</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </a-spin>
  </page-container>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      loading: false
    };
  },
  methods: {
    // handler
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>