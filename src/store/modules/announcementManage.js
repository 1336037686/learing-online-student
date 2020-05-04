import axios from "axios";
import { Notice } from 'view-design';
import moment from 'moment'
import store from "../index";

const state = {
  announcementList: [],
  saveLoding: false,
  size: 20,
}

const mutations = {
  SET_ANNOUNCEMENT_LIST: (state, data) => {
    state.announcementList = data
  },
  SET_SAVE_LODING:(state, data) => {
    state.saveLoding = data
  },

}

const actions = {

  /**
   * 查找首页公告列表
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryAnnouncementList({dispatch, state, commit}) {
    await axios.get("/api/v1/announcement/query/" + 6).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      for(let i = 0; i < response.data.body.data.length;i++) {
        response.data.body.data[i].time = moment(response.data.body.data[i].time).format('YYYY-MM-DD')
      }
      commit("SET_ANNOUNCEMENT_LIST", response.data.body.data)
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
