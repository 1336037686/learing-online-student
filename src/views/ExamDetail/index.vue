<template>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {

      }
    },
    created() {
      this.$store.dispatch("courseManage/doQueryStudentExamByExamAndStudent", this.$route.params.id).then(() => {
        if(this.$store.state.courseManage.studentExamDetail != null) {
          // 未批改
          if(this.$store.state.courseManage.studentExamDetail.checkState === '0') {
            this.$router.push("/learn/examDetail/update/" + this.$route.params.id)
          }
          // 已批改
          if(this.$store.state.courseManage.studentExamDetail.checkState === '1') {
            this.$router.push("/learn/examDetail/show/" + this.$route.params.id)
          }
        } else {
          // 未提交
          this.$router.push("/learn/examDetail/save/" + this.$route.params.id)
        }
      })
    },
  }
</script>

<style scoped>

</style>
