<template>
  <Row style="margin-top: 20px">
    <Col span="4" offset="1">
      <Menu theme="light" active-name="2">
        <MenuGroup title="个人中心">
          <router-link to="/userCenter/userAccountManage" style="color: #515a6e">
            <MenuItem name="1">
              <Icon type="md-document" />
              账号管理
            </MenuItem>
          </router-link>
          <router-link to="/userCenter/courseManage" style="color: #515a6e">
            <MenuItem name="2">
              <Icon type="ios-book" />
              课程管理
            </MenuItem>
          </router-link>
        </MenuGroup>
      </Menu>
    </Col>
    <Col span="17">
      <router-view/>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "index",
    }
</script>

<style scoped>

</style>
