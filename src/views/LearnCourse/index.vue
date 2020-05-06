<template>
  <Row style="margin-top: 20px">
    <Col span="3" offset="1">
      <Menu theme="light" active-name="2">
        <MenuGroup title="课程学习">
          <router-link to="/userCenter/courseManage" style="color: #515a6e">
            <MenuItem name="1">
              <Icon type="ios-book" />
              课程管理
            </MenuItem>
          </router-link>
          <router-link :to="'/learn/video/' + id" style="color: #515a6e">
            <MenuItem name="2">
              <Icon type="ios-desktop" />
              视频学习
            </MenuItem>
          </router-link>
          <router-link :to="'/learn/resource/' + id" style="color: #515a6e">
            <MenuItem name="3">
              <Icon type="ios-barcode" />
              资源下载
            </MenuItem>
          </router-link>
          <router-link :to="'/learn/courseJob/' + id" style="color: #515a6e">
            <MenuItem name="4">
              <Icon type="ios-brush" />
              作业管理
            </MenuItem>
          </router-link>
          <router-link :to="'/learn/exam/' + id" style="color: #515a6e">
            <MenuItem name="5">
              <Icon type="ios-cog" />
              考试管理
            </MenuItem>
          </router-link>
          <router-link :to="'/learn/attendance/' + id" style="color: #515a6e">
            <MenuItem name="6">
              <Icon type="ios-finger-print" />
              签到管理
            </MenuItem>
          </router-link>
        </MenuGroup>
      </Menu>
    </Col>
    <Col span="20">
      <router-view/>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        id: '',
      }
    },
    created() {
      this.id = this.$route.params.id
      this.$router.push("/learn/video/" + this.id)
    }
  }
</script>

<style scoped>

</style>
