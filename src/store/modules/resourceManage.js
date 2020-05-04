import axios from "axios";
import { Notice } from 'view-design';
import store from "../index";
import moment from "moment";

const state = {
  resourceList: [],
  resourceData: {},
  saveLoding: false
}

const mutations = {
  SET_RESOURCE_LIST:(state, data) => {
    state.resourceList = data
  },
  SET_RESOURCE_DATA:(state, data) => {
    state.resourceData = data
  },
  SET_SAVE_LODING:(state, data) => {
    state.saveLoding = data
  }
}

const actions = {

  /**
   * 按照课程与章节ID查询课程资源
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryAll({commit}, data) {
    console.log(JSON.stringify(data))
    await axios.get("/api/v1/resource/query/" + data.course + "/" + data.section).then(response => {
      if(response.data.head.responseCode != "200") this.$Notice.error({title: response.data.head.message , desc: ''});
      commit("SET_RESOURCE_LIST", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 按照课程ID查询课程资源
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryMapByCourse({commit}, data) {
    console.log(JSON.stringify(data))
    await axios.get("/api/v1/resource/query/" + data).then(response => {
      if(response.data.head.responseCode != "200") this.$Notice.error({title: response.data.head.message , desc: ''});
      commit("SET_RESOURCE_DATA", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },


  /**
   * 按照课程与章节ID查询课程资源
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryNewest({commit}) {
    let typeIcon = {"rar": "http://fjut.fanya.chaoxing.com/images/icons/rar.gif", "pdf": "http://fjut.fanya.chaoxing.com/images/icons/pdf.gif", "word": "http://fjut.fanya.chaoxing.com/images/icons/word.gif", "ppt": "http://fjut.fanya.chaoxing.com/images/icons/ppt.gif", "video": "http://fjut.fanya.chaoxing.com/images/icons/video.gif"}
    await axios.get("/api/v1/resource/query/newest/" + 5).then(response => {
      if(response.data.head.responseCode != "200") this.$Notice.error({title: response.data.head.message , desc: ''});
      // 文件类型判断
      for(let i = 0; i < response.data.body.data.length;i++) {
        let url = response.data.body.data[i].addr.split("?")[0]
        let type = url.substring(url.lastIndexOf("."), url.length)
        if(type === '.zip' || type === '.rar') response.data.body.data[i].typeIcon = typeIcon["rar"]
        if(type === '.pdf') response.data.body.data[i].typeIcon = typeIcon["pdf"]
        if(type === '.ppt' || type === '.pptx') response.data.body.data[i].typeIcon = typeIcon["ppt"]
        if(type === '.doc' || type === '.docx') response.data.body.data[i].typeIcon = typeIcon["word"]
        if(type === '.mp4' || type === '.avi') response.data.body.data[i].typeIcon = typeIcon["video"]
      }
      commit("SET_RESOURCE_LIST", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
