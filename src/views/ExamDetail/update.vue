<template>
  <Row>
    <Col span="22" offset="1">
      <!--作业内容-->
      <Row>
        <Col span="24">
          <Card>
            <p slot="title">{{courseExam.title}}</p>
            <div v-html="courseExam.content"></div>
            <Button type="success" style="margin-top: 20px" long @click="download(courseExam.resource)" icon="ios-arrow-round-down" v-if="courseExam.resource !== ''">下载附件
            </Button>
          </Card>
        </Col>
      </Row>

      <!--作业编辑-->
      <Row style="margin-top: 20px">
        <Col span="24">
          <Card>
            <div style="text-align:center">
              <Row style="background:#eee;padding: 20px">
                <!--标题-->
                <Row>
                  <Col span="2">
                    <span style="color: red;font-size: 20px">*</span>
                    <span style="font-size: 20px"> 标 题 </span>
                  </Col>
                  <Col span="22">
                    <Input v-model="form.title" placeholder="填写标题"/>
                  </Col>
                </Row>
                <!--附件-->
                <Row style="margin-top: 20px">
                  <Col span="2">
                    <span style="color: red;font-size: 20px">*</span>
                    <span style="font-size: 20px">附件上传</span>
                  </Col>
                  <Col span="22">
                    <Card>
                      <Upload ref="upload" :show-upload-list="false" :on-success="handleSuccess" type="drag"
                              action="/api/v1/upload/resource">
                        <div style="padding: 20px 0">
                          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"/>
                          <p>点击上传或者托住文件到此处</p>
                        </div>
                      </Upload>
                    </Card>
                  </Col>
                </Row>
                <Row style="margin-top: 20px">
                  <Col span="2">
                    <span style="color: red;font-size: 20px">*</span>
                    <span style="font-size: 20px">附件地址</span>
                  </Col>
                  <Col span="22">
                    <Input v-model="form.resource" placeholder="" disabled />
                  </Col>
                </Row>
              </Row>
              <Row style="margin-top: 10px">
                <Col span="24">
                  <TinymceEditer :height="700" ref="editor" v-model="form.content"/>
                </Col>
              </Row>
            </div>
          </Card>
          <!--提交按钮-->
          <Row span="24" style="margin-top: 20px">
            <Col>
              <Button type="primary" long @click="save" :loading="$store.state.courseManage.saveLoding">保存</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
  import TinymceEditer from '@/components/Editer/TinymceEditer/index.vue'
  export default {
    name: "update",
    components: {
      TinymceEditer,
    },
    data() {
      return {
        form: {
          content: '',
          resource: '',
          title: '',
        },
        courseExam: {}
      }
    },
    created() {
      for (let key in this.$store.state.courseManage.courseExamData) {
        let jobs = this.$store.state.courseManage.courseExamData[key]
        for (let i = 0; i < jobs.length; i++) {
          if (jobs[i].id === this.$route.params.id) {
            this.courseExam = jobs[i]
            break
          }
        }
      }
      this.form = JSON.parse(JSON.stringify(this.$store.state.courseManage.studentExamDetail))
    },
    methods: {
      //下载
      download(url) {
        window.location.href = url
      },
      handleSuccess (res, file) {
        this.$Notice.info({title: res.head.message , desc: ''});
        this.form.resource = res.body.data.url
      },
      save() {
        if(!this.dataValidate(this.form.title)) {
          this.$Message.error("标题不能为空")
        }
        this.$store.dispatch("courseManage/doUpdateStudentExam", {"id": this.form.id,"examination": this.courseExam.id, "student": this.$store.state.loginManage.id, "title": this.form.title, "resource": this.form.resource, "content": this.form.content})
      },
      // 表单验证
      dataValidate(value) {
        if(value === undefined || value.trim() === "") {
          return false;
        }
        return true;
      }
    }
  }
</script>

<style scoped>

</style>
