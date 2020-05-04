<template>
  <!---->
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <!--类别-->
      <Row>
        <Col span="24">
          <Card>
            搜索关键字: <span style="color: red">{{$route.params.data}}</span>
          </Card>
        </Col>
      </Row>
      <!--课程展示-->
      <Row style="margin-top: 20px">
        <Col span="24">
          <!--标签-->
          <Col span="4" style="padding: 5px" v-for="(k, index) in $store.state.courseManage.courseList" :key="index">
            <Card style="width:100%">
              <div style="text-align:center">
                <img :src="k.cover" width="180" height="180" @click="showCourseDetail(k.id)">
                <h4 @click="showCourseDetail(k.id)">{{k.name}}</h4>
                <h5 @click="showCourseDetail(k.id)">{{k.teacherName}}</h5>
              </div>
            </Card>
          </Col>
          <div v-if="$store.state.courseManage.courseList.length === 0" style="margin-left: 20px">查无课程</div>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "index",
        mounted() {
          this.$store.dispatch("courseManage/doQueryCourseByCondition",  this.$route.params.data)
        },
      methods: {
          showCourseDetail(value) {
            this.$router.push("/courseDetail/" + value)
          },
        }
    }
</script>

<style scoped>

</style>
