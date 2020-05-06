<template>
  <Row>
    <Col span="22" offset="1">
      <!--作业内容-->
      <Row>
        <Col span="24">
          <Card>
            <p slot="title">{{courseJob.title}}</p>
            <div v-html="courseJob.content"></div>
              <Button type="success" style="margin-top: 20px" long @click="download(courseJob.resource)" icon="ios-arrow-round-down" v-if="courseJob.resource !== ''">下载附件</Button>
          </Card>
        </Col>
      </Row>

      <!--作业展示-->
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
                    <Input v-model="$store.state.courseManage.studentJobDetail.title" placeholder="填写标题" disabled/>
                  </Col>
                </Row>
                <!--附件-->
                <Row style="margin-top: 20px">
                  <Col span="2">
                    <span style="color: red;font-size: 20px">*</span>
                    <span style="font-size: 20px">附件地址</span>
                  </Col>
                  <Col span="22">
                    <Input v-model="$store.state.courseManage.studentJobDetail.resource" placeholder="" disabled/>
                  </Col>
                </Row>
                <Row style="margin-top: 10px">
                  <Col span="24">
                    <Button type="success" style="margin-top: 20px" long @click="download($store.state.courseManage.studentJobDetail.resource)" icon="ios-arrow-round-down" v-if="$store.state.courseManage.studentJobDetail.resource !== ''">下载附件</Button>
                  </Col>
                </Row>
              </Row>
              <Row style="margin-top: 10px">
                <Col span="24">
                  <div v-html="$store.state.courseManage.studentJobDetail.content"></div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <!--教师评价-->
      <Row style="margin-top: 20px">
        <Col span="24">
          <Card>
            <!--分数-->
            <Row style="margin-top: 20px">
              <Col span="2">
                <span style="color: red;font-size: 20px">*</span>
                <span style="font-size: 20px"> 教师评分 </span>
              </Col>
              <Col span="22">
                <Input v-model="$store.state.courseManage.studentJobDetail.score" placeholder="填写分数（数字）" disabled/>
              </Col>
            </Row>
            <!--评语-->
            <Row style="margin-top: 20px" >
              <Col span="2">
                <span style="color: red;font-size: 20px">*</span>
                <span style="font-size: 20px"> 教师评语 </span>
              </Col>
              <Col span="22">
                <Input v-model="$store.state.courseManage.studentJobDetail.evaluate" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="填写评语..." disabled/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        courseJob: {},
      }
    },
    created() {
      for (let key in this.$store.state.courseManage.courseJobData) {
        let jobs = this.$store.state.courseManage.courseJobData[key]
        for (let i = 0; i < jobs.length; i++) {
          if (jobs[i].id === this.$route.params.id) {
            this.courseJob = jobs[i]
            break
          }
        }
      }
    },
    methods: {
      //下载
      download(url) {
        window.location.href = url
      },
    }
  }
</script>

<style scoped>

</style>
