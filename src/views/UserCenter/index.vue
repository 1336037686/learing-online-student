<template>
  <Row style="margin-top: 20px">
    <Col span="4" offset="1">
      <Menu theme="light" active-name="1">
        <MenuGroup title="个人中心">
          <MenuItem name="1">
            <Icon type="md-document" />
            账号管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-book" />
            课程管理
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-brush" />
            作业管理
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-cog" />
            考试管理
          </MenuItem>
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
        name: "index"
    }
</script>

<style scoped>

</style>
