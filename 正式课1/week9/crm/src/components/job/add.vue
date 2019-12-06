<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="myform">
    <el-form-item label="职务名称" prop="name">
      <el-input v-model.trim="form.name" style="width:300px"></el-input>
    </el-form-item>
    <el-form-item label="职务描述" prop="desc">
      <el-input type="textarea" rows="6" v-model="form.desc" style="width:300px"></el-input>
    </el-form-item>

    <el-form-item label="拥有权限:">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="员工操作权"></el-checkbox>
        <el-checkbox label="部门操作权"></el-checkbox>
        <el-checkbox label="职务操作权"></el-checkbox>
        <el-checkbox label="部门全部客户"></el-checkbox>
        <el-checkbox label="公司全部客户"></el-checkbox>
        <el-checkbox label="重置密码"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-row>
      <el-button class="submit" @click="onSubmit" type="success">确认提交</el-button>
    </el-row>
  </el-form>
</template>
<script>
import { addJobList, updateJobList } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      checkList: []
    };
  },
  created() {
    let id = this.$route.query.id;
    /*1./uex缺点：刷新的时候 数据就没了
      //解决 存到$route的同时  有存了一下在localStorage里 state.js中就放
       2.不用vuex 直接从localStorage里拿数据
       设置的时候可以在：1.请求数据的时候 2. action.js中 3.mutations.js 中
      */
    let obj = this.$store.state.jobList.filter(item => item.id == id)[0];
    console.log(obj); //拿到了数据
    this.form = obj ? obj : this.form; //直接给form 就好了
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$refs.form.validate(flag => {
        //flag是true 证明 验证规则都通过了
        console.log(flag);
        if (flag) {
          let id = this.$route.query.id;
          this.form.jobId = id;
          addJobList(this.form).then(data => {
            if (data.code == 0) {
              //新增成功
              this.$confirm("恭喜创建成功", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              })
                .then(() => {
                  this.$router.push("/org/job");
                })
                .catch(() => {});
            } else {
              this.$message.error("添加失败");
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.myform {
  text-align: left;
  background: #fff;
  padding: 20px;
  min-height: 100%;
  .submit {
    margin: 30px 0px 0 80px;
  }
}
</style>
