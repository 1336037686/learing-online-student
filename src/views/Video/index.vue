<template>
  <Row style="margin-top: 20px">
    <Col span="18" offset="1">
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    style="margin-top: 5px"/>
    </Col>
    <Col span="5" style="padding-left: 10px">
      <Card>
        <Collapse>
          <Panel :name="key" v-for="(value, key) in $store.state.courseManage.courseCatalog" :key="key">
            <Tag color="primary">章节</Tag> {{key}}
            <p slot="content" v-for="(k, index) in value.list"> <Button type="text" @click="watch(k.addr)"><Tag color="success">视频</Tag> {{k.name}}</Button></p>
          </Panel>
        </Collapse>
      </Card>
    </Col>
  </Row>
</template>

<script>
  export default {
    name: "index",
    mounted() {
      this.$store.dispatch("courseManage/doQueryCatalogAllById", this.$route.params.id).then(() => {
        for(let key in this.$store.state.courseManage.courseCatalog) {
          console.log(key)
          let videos = this.$store.state.courseManage.courseCatalog[key].list
          if(videos.length > 0) {
            console.log(videos[0])
            this.playerOptions.sources[0].src = videos[0].addr
            break
          }
        }
      })
    },
    methods: {
      watch(url) {
        this.$refs.videoPlayer.player.pause()
        this.playerOptions.sources[0].src = url
      }
    },
    data() {
      return {
        // 视频参数
        playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0],            // 可选的播放速度
          autoplay: false,                                // 如果为true,浏览器准备好时开始回放。
          muted: false,                                   // 默认情况下将会消除任何音频。
          loop: false,                                    // 是否视频一结束就重新开始。
          preload: 'auto',                                // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9',                            // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true,                                    // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",                            // 类型
            src: ''                                       // url地址
          }],
          poster: '',                                     // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,                            // 当前时间和持续时间的分隔符
            durationDisplay: true,                        // 显示持续时间
            remainingTimeDisplay: false,                  // 是否显示剩余时间功能
            fullscreenToggle: true                        // 是否显示全屏按钮
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
