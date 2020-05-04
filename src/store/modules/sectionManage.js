//人脸检测API
import axios from "axios";
import { Notice } from 'view-design';
import store from "../index";

const state = {
  sectionList: [],
  saveLoding: false
}

const mutations = {
  SET_SECTION_LIST:(state, data) => {
    state.sectionList = data
  },
  SET_SAVE_LODING:(state, data) => {
    state.saveLoding = data
  }
}

const actions = {

  /**
   * 按照课程ID查询章节
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryAll({commit}, data) {
    await axios.get("/api/v1/section/query/course/" + data).then(response => {
      if(response.data.head.responseCode != "200") this.$Notice.error({title: response.data.head.message , desc: ''});
      commit("SET_SECTION_LIST", response.data.body.data)
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
