<template>
  <!---->
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <!--面包屑-->
      <Row>
        <Col span="24">
          <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem>课程资源</BreadcrumbItem>
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
                <img :src="k.cover" width="180" height="180" @click="showResourceDetail(k.id)">
                <h4 @click="showResourceDetail(k.id)">{{k.name}}</h4>
                <h5 @click="showResourceDetail(k.id)">{{select === 'all' ? k.teacherName: k.teacher}}</h5>
              </div>
            </Card>
          </Col>
        </Col>
      </Row>
      <!--资源展示-->
      <Drawer title="资源展示" :closable="false" v-model="showResourceModelState" width="25%">
        <Card  style="margin-top: 10px">
          资源列表
        </Card>
        <Collapse style="margin-top: 10px">
          <Panel :name="key" v-for="(value, key) in $store.state.resourceManage.resourceData" :key="key">
            <Tag color="primary">章节</Tag>
            {{key}}
            <p slot="content" v-for="(k, index) in value.list" :key="index">
              <Tag color="success">资源</Tag>&nbsp; {{k.name}}
              <span style="float: right" @click="download(k.addr)"><Icon type="md-arrow-down" /></span>
            </p>
          </Panel>
        </Collapse>
      </Drawer>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        select: 'all',
        showResourceModelState: false
      }
    },
    mounted() {
      this.$store.dispatch("categoryManage/doQueryAll")
      this.$store.dispatch("courseManage/doQueryTypeCourse", this.$route.params.type)
      this.select = this.$route.params.type
    },
    methods: {
      showResourceDetail(value) {
        // 根据课程ID查询资源列表
        this.$store.dispatch("resourceManage/doQueryMapByCourse", value)
        this.showResourceModelState = true
      },
      changeSelect(value) {
        this.$store.dispatch("courseManage/doQueryTypeCourse", value)
      },
      download(value) {
        window.location.href = value
      }
    }
  }
</script>

<style scoped>

</style>
