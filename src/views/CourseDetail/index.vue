<template>
  <Row>
    <Col span="20" offset="3">
      <!--头部介绍-->
      <Row style="margin-top: 20px">
        <Col span="14">
          <Avatar shape="square" :src="$store.state.courseManage.courseDetail.cover" size="large" style="width: 85%;height: 400px"/>
        </Col>
        <Col span="10">
          <div style="font-size: 30px;font-weight: bold">{{$store.state.courseManage.courseDetail.name}}</div>
          <div style="margin-top: 20px;background:#eee;padding: 20px">
            <p style="margin: 10px;font-size: 15px">课程编号:<span>{{$store.state.courseManage.courseDetail.id}}</span></p>
            <p style="margin: 10px;font-size: 15px">课程类别:<span>{{$store.state.courseManage.courseDetail.typeName}}</span></p>
            <p style="margin: 10px;font-size: 15px">任课老师:<span>{{$store.state.courseManage.courseDetail.teacherName}}</span></p>
            <p style="margin: 10px;font-size: 15px">开课时间:<span>{{$store.state.courseManage.courseDetail.time}}</span></p>
          </div>
          <div style="margin-top: 20px">
            <Button type="primary" long size="large" style="height: 60px" @click="addCourse($store.state.courseManage.courseDetail.id)">申请加入课程</Button>
          </div>
        </Col>
      </Row>
      <!--简介/目录展示-->
      <Row>
        <Col span="24" style="margin-top: 20px">
          <Tabs value="name1">
            <TabPane label="课程详情" name="name1">
              <div v-html="$store.state.courseManage.courseDetail.intro"></div>
            </TabPane>
            <TabPane label="课程目录" name="name2">
              <Collapse>
                <Panel :name="key" v-for="(value, key) in $store.state.courseManage.courseCatalog" :key="key">
                  <Tag color="primary">章节</Tag> {{key}}
                  <p slot="content" v-for="(k, index) in value.list"> <Tag color="success">视频</Tag> {{k}}</p>
                </Panel>
              </Collapse>
            </TabPane>
          </Tabs>
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

      }
    },
    created() {
      this.$store.dispatch("courseManage/doQueryCourseById", this.$route.params.id)
      this.$store.dispatch("courseManage/doQueryCatalogById", this.$route.params.id)
    },
    methods: {
      addCourse(value) {
        // 判断用户是否登录
        if (this.$store.state.loginManage.userName === '' && this.$store.state.loginManage.token === '') {
          alert("请先登录!!!")
          return
        }
        this.$store.dispatch("userInfo/doQueryUserInfoById").then(() => {
          this.$store.dispatch("courseManage/doSave", {"student": this.$store.state.userInfo.userInfo.userName, "course": value}).then(() => {
            this.$router.push("/userCenter/courseManage")
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
