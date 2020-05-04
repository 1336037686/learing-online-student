<template>
  <Card>
    <p slot="title" style="height: 100%">系统公告</p>
    <div>
      <List border size="small" :border="false" item-layout="vertical">
        <ListItem v-for="(value, index) in $store.state.announcementManage.announcementList" :key="index">
          <a @click="show(index)" style="color: black;font-size: 20px">{{value.title}}</a>
          <template slot="extra">
            <p style="text-align:right;color: red">{{value.time}}</p>
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
      this.$store.dispatch("announcementManage/doQueryAnnouncementList")
    },
    methods: {
      show(value) {
        let data = this.$store.state.announcementManage.announcementList[value]
        this.$Modal.info({
          title: data.title,
          content: data.content
        });
      }
    }
  }
</script>

<style scoped>

</style>
