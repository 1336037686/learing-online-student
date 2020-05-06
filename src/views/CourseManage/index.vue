<template>
  <Row style="margin-top: 20px">
    <Col>
      <Tabs value="name1">
        <TabPane label="申请通过" name="name1">
          <Row style="margin-top: 20px">
            <!--标签-->
            <Col span="4" style="padding: 5px" v-for="(k, index) in $store.state.courseManage.studentCourse.pass" :key="index">
              <Card style="width:100%">
                <div style="text-align:center">
                  <img :src="k.cover" width="180" height="180" @click="showCourseDetail(k.id)">
                  <h4 @click="showCourseDetail(k.id)">{{k.name}}</h4>
                  <h5 @click="showCourseDetail(k.id)">{{k.teacherName}}</h5>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="正在审核" name="name2">
          <Col span="4" style="padding: 5px" v-for="(k, index) in $store.state.courseManage.studentCourse.check" :key="index">
            <Card style="width:100%">
              <div style="text-align:center">
                <img :src="k.cover" width="180" height="180">
                <h4>{{k.name}}</h4>
                <h5>{{k.teacherName}}</h5>
              </div>
            </Card>
          </Col>
        </TabPane>
        <TabPane label="申请失败" name="name3">
          <Col span="4" style="padding: 5px" v-for="(k, index) in $store.state.courseManage.studentCourse.fail" :key="index">
            <Card style="width:100%">
              <div style="text-align:center">
                <img :src="k.cover" width="180" height="180">
                <h4>{{k.name}}</h4>
                <h5>{{k.teacherName}}</h5>
              </div>
            </Card>
          </Col>
        </TabPane>
      </Tabs>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    mounted() {
      this.$store.dispatch("courseManage/doQueryCourseByStudentId")
    },
    methods: {
      showCourseDetail(value) {
        this.$router.push("/learn/" + value)
      }
    }
  }
</script>

<style scoped>

</style>
