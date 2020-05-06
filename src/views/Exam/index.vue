<template>
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <Tabs value="name1">
        <TabPane label="待完成考试" name="name1">
          <Row>
            <Col span="4" style="padding: 5px" v-for="(value, index) in $store.state.courseManage.courseExamData.miss" :key="index">
              <Card>
                <p slot="title">{{value.title}}</p>
                <p>起始时间：{{moment(value.startTime).format('YYYY-MM-DD h:mm')}}</p>
                <p>结束时间：{{moment(value.endTime).format('YYYY-MM-DD h:mm')}}</p>
                <p style="text-align: right;margin-top: 10px"><Button type="success" size="small" long :disabled="new Date(Date.parse(value.endTime)) < new Date()" @click="watch(value.id)">查看</Button></p>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="已完成考试" name="name2">
          <Row>
            <Col span="4" style="padding: 5px" v-for="(value, index) in $store.state.courseManage.courseExamData.pass" :key="index">
              <Card>
                <p slot="title">{{value.title}}</p>
                <p>起始时间：{{moment(value.startTime).format('YYYY-MM-DD h:mm')}}</p>
                <p>结束时间：{{moment(value.endTime).format('YYYY-MM-DD h:mm')}}</p>
                <p style="text-align: right;margin-top: 10px"><Button type="success" size="small" long @click="watch(value.id)">查看</Button></p>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Col>
  </Row>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "index",
        created() {
          this.$store.dispatch("courseManage/doQueryStudentExamByCourseAndStudent", this.$route.params.id)
        },
        methods: {
          moment,
          watch(value) {
            this.$router.push("/learn/examDetail/" + value)
          }
        }
    }
</script>

<style scoped>

</style>
