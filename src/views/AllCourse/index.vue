<template>
  <!---->
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <!--面包屑-->
      <Row>
        <Col span="24">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>课程列表</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
      <!--类别-->
      <Row style="margin-top: 10px">
        <Col span="24">
          <Card>
            <RadioGroup v-model="select" @on-change="changeSelect(select)">
              <Radio label="all" style="margin: 10px" border>全部</Radio>
              <Radio :label="value.id" style="margin: 10px" border v-for="(value, index) in $store.state.categoryManage.categoryList" :key="index">{{value.categoryName}}</Radio>
            </RadioGroup>
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
                <h5 @click="showCourseDetail(k.id)">{{select === 'all' ? k.teacherName: k.teacher}}</h5>
              </div>
            </Card>
          </Col>
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
        select: 'all'
      }
    },
    mounted() {
      this.$store.dispatch("categoryManage/doQueryAll")
      this.$store.dispatch("courseManage/doQueryTypeCourse", this.$route.params.type)
      this.select = this.$route.params.type
    },
    methods: {
      showCourseDetail(value) {
        this.$router.push("/courseDetail/" + value)
      },
      changeSelect(value) {
        this.$store.dispatch("courseManage/doQueryTypeCourse", value)
      }
    }
  }
</script>

<style scoped>

</style>
