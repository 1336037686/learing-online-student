<template>
  <div>
    <Row>
      <!-- 走马灯 -->
      <BackTop :height="100"/>
      <Row>
        <Col span="24">
          <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="https://p.ananas.chaoxing.com/star3/1920_227c/bbf554a0c6ce50ece05189e06804c62a.png" alt=""
                     height="400px" width="100%">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="https://p.ananas.chaoxing.com/star3/1920_227c/550a5ed0a31038def78257ff.png" alt=""
                     height="400px" width="100%">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="https://p.ananas.chaoxing.com/star3/1920_227c/a39038fc0a36ae4212e67236a6dd7a34.png" alt=""
                     height="400px" width="100%">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="https://p.ananas.chaoxing.com/star3/1920_227c/550a5e9ea31038def78257fe.png" alt=""
                     height="400px" width="100%">
              </div>
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
      <!--详情页-->
      <Row style="margin-top: 10px">
        <Col span="24">
          <Alert show-icon>课程详情.</Alert>
        </Col>
        <Col span="18">
          <Row style="margin-top: 10px" v-for="(value, key) in $store.state.courseManage.homeCourseData" :key="key">
            <Col span="24">
              <Card>
                <p slot="title" style="height: 100%;">
                  <Icon type="ios-book" style="color: #1989FA"/>
                  {{key}}
                  <span @click="showMoreHandler(value.id)">
                    <Button type="primary" size="small" style="float: right">
                      更多
                      <Icon type="md-arrow-forward"/>
                    </Button>
                  </span>
                </p>
                <div>
                  <Row>
                    <!--标签-->
                    <Col span="4" style="padding: 5px" v-for="(k, index) in value.list" :key="index">
                      <Card style="width:100%">
                        <div style="text-align:center">
                          <img :src="k.cover" width="180" height="180" @click="showCourseDetail(k.id)">
                          <h4 @click="showCourseDetail(k.id)">{{k.name}}</h4>
                          <h5 @click="showCourseDetail(k.id)">{{k.teacher}}</h5>
                          <h6 @click="showCourseDetail(k.id)">课程编号: {{k.id}}</h6>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <!--侧边栏-->
        <Col span="6" style="padding-left: 20px">
          <!--系统公告-->
          <Row style="margin-top: 10px">
            <Col span="24">
              <Announcement/>
            </Col>
          </Row>
          <!--人气课程-->
          <Row style="margin-top: 10px">
            <Col span="24">
              <Card>
                <p slot="title" style="height: 100%">人气课程</p>
                <div>
                  <MoodsCourse/>
                </div>
              </Card>
            </Col>
          </Row>
          <!--热门资料-->
          <Row style="margin-top: 10px">
            <Col span="24">
              <Resource/>
            </Col>
          </Row>
          <!--日历-->
          <Row style="margin-top: 10px">
            <Col span="24">
              <Card>
                <div>
                  <DateComponent/>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  </div>
</template>

<script>
  import MoodsCourse from '../../components/MoodsCourse/index'
  import Announcement from '../../components/Announcement/index'
  import DateComponent from '../../components/DateComponent/index'
  import Resource from '../../components/Resource/index'

  export default {
    name: "content",
    components: {
      DateComponent,
      Announcement,
      MoodsCourse,
      Resource
    },
    data() {
      return {
        value2: 0
      }
    },
    mounted() {
      this.$store.dispatch("courseManage/doQueryCategoryAndCourse")
    },
    methods: {
      showCourseDetail(value) {
        this.$router.push("/courseDetail/" + value)
      },
      showMoreHandler(value) {
        this.$router.push("/course/" + value)
      }
    }
  }
</script>

<style scoped>
  .demo-carousel {
    background-color: midnightblue;
    color: #f5f7f9;
    font-size: 20px;
    text-align: center;
    height: 400px;
  }

</style>
