<template>
  <Card>
    <p slot="title" style="height: 100%">
      课程资料
      <Button type="primary" size="small" @click="showMoreHandler" style="float: right">
        更多
        <Icon type="md-arrow-forward"/>
      </Button>
    </p>
    <div>
      <List border size="small" :border="false" item-layout="vertical">
        <ListItem v-for="(value, index) in $store.state.resourceManage.resourceList" :key="index">
          <Avatar shape="square" :src="value.typeIcon"/>&nbsp;
          {{value.name}}
          <template slot="extra">
            <a style="text-align:right;" @click="download(value.addr)">下载</a>
          </template>
        </ListItem>
      </List>
    </div>
  </Card>
</template>

<script>
    export default {
        name: "index",
      mounted() {
        this.$store.dispatch("resourceManage/doQueryNewest")
      },
      methods: {
        download(value) {
          window.location.href = value
        },
        showMoreHandler() {
          this.$router.push("/resource/all")
        }
      }
    }
</script>

<style scoped>

</style>
