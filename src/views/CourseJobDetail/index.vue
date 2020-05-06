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
      this.$store.dispatch("courseManage/doQueryStudentJobByJobAndStudent", this.$route.params.id).then(() => {
        if(this.$store.state.courseManage.studentJobDetail != null) {
          // 未批改
          if(this.$store.state.courseManage.studentJobDetail.checkState === '0') {
            this.$router.push("/learn/courseJobDetail/update/" + this.$route.params.id)
          }
          // 已批改
          if(this.$store.state.courseManage.studentJobDetail.checkState === '1') {
            this.$router.push("/learn/courseJobDetail/show/" + this.$route.params.id)
          }
        } else {
          // 未提交
          this.$router.push("/learn/courseJobDetail/save/" + this.$route.params.id)
        }
      })
    },
  }
</script>

<style scoped>

</style>
