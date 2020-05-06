<template>
  <Row>
    <Col span="22" offset="1">
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
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "index",
        mounted() {
          // 根据课程ID查询资源列表
          this.$store.dispatch("resourceManage/doQueryMapByCourse", this.$route.params.id)
        },
        methods:{
          download(value) {
            window.location.href = value
          }
        }
    }
</script>

<style scoped>

</style>
