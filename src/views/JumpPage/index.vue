<!--跳转中间页-->
<template>
    <div></div>
</template>

<script>
    export default {
        name: "index",
        created() {
          this.$router.push("/" + this.$route.query.type + "/" + this.$route.params.data)
        }
    }
</script>

<style scoped>

</style>
