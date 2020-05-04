import axios from "axios";
import { Notice } from 'view-design';
import moment from 'moment'
import store from "../index";

const state = {
  courseList: [],
  courseDetail: {},
  courseCatalog: {},
  homeCourseData: {},
  moodsCourse: [],
  saveLoding: false,
  size: 20,
}

const mutations = {
  SET_SAVE_LODING:(state, data) => {
    state.saveLoding = data
  },
  SET_COURSE_LIST:(state, data) => {
    state.courseList = data
  },
  SET_HOME_COURSE_DATA:(state, data) => {
    state.homeCourseData = data
  },
  SET_COURSE_DETAIL:(state, data) => {
    state.courseDetail = data
  },
  SET_COURSE_CATALOG:(state, data) => {
    state.courseCatalog = data
  },
  SET_MOODS_COURSE:(state, data) => {
    state.moodsCourse = data
  },

}

const actions = {

  /**
   * 查找首页推荐课程
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryCategoryAndCourse({dispatch, state, commit}) {
    await axios.get("/api/v1/course/query/categoryAndCourse/" + 6).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_HOME_COURSE_DATA", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据ID查找课程
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryCourseById({dispatch, state, commit}, data) {
    await axios.get("/api/v1/course/query/course/" + data).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      response.data.body.data.time = moment(response.data.body.data.time).format('YYYY-MM-DD h:mm:ss')
      commit("SET_COURSE_DETAIL", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据ID查询目录
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryCatalogById({dispatch, state, commit}, data) {
    await axios.get("/api/v1/course/query/catalog/" + data).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_COURSE_CATALOG", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 查询人气课程
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryMoodsCourse({dispatch, state, commit}) {
    await axios.get("/api/v1/course/query/course/moods/" + 8).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_MOODS_COURSE", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据分类查询课程
   * @param dispatch
   * @param state
   * @param commit
   * @param type
   * @returns {Promise<void>}
   */
  async doQueryTypeCourse({dispatch, state, commit}, type) {
    await axios.get("/api/v1/course/query/" + type).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_COURSE_LIST", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据关键字查询课程
   * @param dispatch
   * @param state
   * @param commit
   * @param type
   * @returns {Promise<void>}
   */
  async doQueryCourseByCondition({dispatch, state, commit}, data) {
    await axios.get("/api/v1/course/condition/" + data).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_COURSE_LIST", response.data.body.data)
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
