<template>
  <Row style="margin-top: 20px">
    <Col span="22" offset="1">
      <Tabs value="tab1">
        <TabPane label="个人资料" name="tab1">
          <Row>
            <Col span="10" offset="7">
              <div style="background:#eee;padding: 20px">
                <Card :bordered="false">
                  <p slot="title" style="height: 30px">
                    <span>个人资料</span>
                    <Button type="primary" size="small" shape="circle" style="float: right" @click="cancle" v-if="!isUpdate">
                      <span >取消</span>
                    </Button>
                    <Button :type="isUpdate ? 'error': 'primary'" size="small" shape="circle" style="float: right;margin-right: 10px" @click="update(isUpdate)">
                      <span v-if="isUpdate">修改个人资料</span>
                      <span v-if="!isUpdate">保存个人资料</span>
                    </Button>
                  </p>
                  <Form :label-width="80">
                    <FormItem label="学生 ID">
                      <Input v-model="$store.state.userInfo.userInfo.id" placeholder="输入学生 ID" disabled/>
                    </FormItem>
                    <FormItem label="学生学号">
                      <Input v-model="$store.state.userInfo.userInfo.userName" placeholder="输入学生账号" disabled/>
                    </FormItem>
                    <FormItem label="学生名称">
                      <Input v-model="$store.state.userInfo.userInfo.name" placeholder="输入学生名称" disabled/>
                    </FormItem>
                    <FormItem label="学生性别">
                      <RadioGroup v-model="$store.state.userInfo.userInfo.sex">
                        <Radio label="男" disabled>男</Radio>
                        <Radio label="女" disabled>女</Radio>
                      </RadioGroup>
                    </FormItem>
                    <FormItem label="学生电话" >
                      <Input v-model="$store.state.userInfo.userInfo.phone"
                             placeholder="输入学生电话" :disabled="isUpdate"/>
                    </FormItem>
                    <FormItem label="学生邮箱">
                      <Input v-model="$store.state.userInfo.userInfo.email"
                             placeholder="输入学生邮箱" :disabled="isUpdate"/>
                    </FormItem>
                  </Form>
                </Card>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="密码修改" name="tab2">
          <Row>
            <Col span="10" offset="7">
              <div style="background:#eee;padding: 20px">
                <Card :bordered="false">
                  <p slot="title" style="height: 30px">
                    <span>修改密码</span>
                  </p>
                  <Form :label-width="150">
                    <FormItem label="输入新密码">
                      <Input v-model="formItem.password1" type="password" placeholder="输入密码" password/>
                    </FormItem>
                    <FormItem label="再次输入新密码">
                      <Input v-model="formItem.password2" type="password" placeholder="输入密码" password/>
                    </FormItem>
                    <FormItem>
                      <Button type="primary" @click="updatePassword">提交</Button>
                    </FormItem>
                  </Form>
                </Card>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        isUpdate: true,
        formItem: {
          password1: '',
          password2: ''
        }
      }
    },
    mounted() {
      this.$store.dispatch("userInfo/doQueryUserInfoById")
    },
    methods: {
      // 更新基本信息
      update(isUpdate) {
        if(isUpdate) {
          this.isUpdate = !isUpdate;
          return;
        } else {
          this.$store.dispatch("userInfo/doUpdate", this.$store.state.userInfo.userInfo).then(() => {
            this.isUpdate = !isUpdate
          })
        }
      },
      // 取消更新
      cancle() {
        this.isUpdate = true
      },
      // 修改密码
      updatePassword() {
        if(this.formItem.password1 !== this.formItem.password2) {
          this.$Message.error("两次输入密码不同!")
          return;
        }
        this.$store.dispatch("userInfo/doUpdatePassword", {"password": this.formItem.password1, "id": this.$store.state.loginManage.id}).then(() => {
          this.formItem = {password1: '', password2: ''}
        })
      }
    }
  }
</script>

<style scoped>

</style>
