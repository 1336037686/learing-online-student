<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%', zIndex:'9999'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <router-link to="/"><div class="layout-logo">智多星精品课程</div></router-link>
          <div class="layout-nav">
            <router-link to="/">
              <MenuItem name="1">
                <Icon type="ios-navigate"/>
                首页
              </MenuItem>
            </router-link>
            <router-link to="/course/all">
              <MenuItem name="2">
                <Icon type="ios-keypad"/>
                全部课程
            </MenuItem>
            </router-link>
            <router-link to="/resource/all">
              <MenuItem name="3">
                <Icon type="ios-cloud-circle"/>
                课程资源
              </MenuItem>
            </router-link>
            <MenuItem name="5" style="width: 400px">
              <Row>
                <Col span="18"><Input v-model="selectContent" clearable placeholder="搜索课程"/></Col>
                <Col span="5" offset="1">
                  <Button type="primary" @click="search">搜索</Button>
                </Col>
              </Row>
            </MenuItem>
          </div>
          <MenuItem name="6" class="login-btn">
            登录
          </MenuItem>
        </Menu>
      </Header>
      <!--内容 主体-->
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '1000px'}">
        <router-view/>
      </Content>
      <!--页尾-->
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
  import LayOutContent from './content'

  export default {
    name: "index",
    components: {
      LayOutContent
    },
    data() {
      return {
        selectContent: ''
      }
    },
    methods: {
      search() {
        if(this.selectContent == undefined || this.selectContent.trim() === '') {
          this.$router.push("/course/all")
          return
        }
        this.$router.push("/jumpPage/" + this.selectContent.trim() + "?type=selectCourse")
      }
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    /*background: #fff;*/
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 200px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
    color: white;
    text-align: center;
    font-size: 25px;
  }

  .layout-nav {
    width: 900px;
    text-align: center;
    margin: 0 auto;
  }

  .layout-footer-center {
    margin-top: 10px;
    text-align: center;
  }

  .login-btn {
    float: right;
    margin-right: 5px;
  }
</style>
