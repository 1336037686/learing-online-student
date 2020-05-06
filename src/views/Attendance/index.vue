<template>
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <Card style="margin: 20px; font-size: 20px" v-for="(value, index) in $store.state.courseManage.attandanceDetail" :key="index">
        <Icon type="ios-alarm-outline" />&nbsp;签到&nbsp;&nbsp;&nbsp;&nbsp;
        {{moment(value.startTime).format('YYYY-MM-DD h:mm')}} - {{moment(value.endTime).format('YYYY-MM-DD h:mm')}}
        <Button type="text" style="float: right"><Icon type="ios-finger-print" @click="save(value.id)"/></Button>
      </Card>
    </Col>
  </Row>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "index",
        created() {
          this.$store.dispatch("courseManage/doQueryAttandanceByCourse", this.$route.params.id)
        },
        methods: {
          moment,
          save(value) {
            this.$store.dispatch("courseManage/doSaveAttandance", {"attendance": value, "student": this.$store.state.loginManage.id})
          }
        }
    }
</script>

<style scoped>

</style>
