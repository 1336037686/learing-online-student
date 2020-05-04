<template>
  <Row>
    <Col span="24">
      <Carousel autoplay v-model="value2" loop>
          <CarouselItem v-for="(value, index) in $store.state.courseManage.moodsCourse.slice(0, 3)" :key="index">
            <div class="demo-carousel-course">
              <img :src="value.cover" alt="" height="200px" width="100%" @click="showCourseDetail(value.id)">
            </div>
          </CarouselItem>
      </Carousel>

      <List border size="small" :border="false" style="margin-top: 10px">
        <ListItem v-for="(value, index) in $store.state.courseManage.moodsCourse.slice(3, 8)" :key="index">
          <p @click="showCourseDetail(value.id)">{{value.name}}</p>
        </ListItem>
      </List>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        value2: 0
      }
    },
    mounted() {
      this.$store.dispatch("courseManage/doQueryMoodsCourse")
    },
    methods: {
      showCourseDetail(value) {
        this.$router.push("courseDetail/" + value)
      }
    }
  }
</script>

<style scoped>
  .demo-carousel-course {
    background-color: midnightblue;
    color: #f5f7f9;
    font-size: 20px;
    text-align: center;
    height: 200px;
  }
</style>
