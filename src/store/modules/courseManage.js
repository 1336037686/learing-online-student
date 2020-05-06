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
  studentCourse:{},
  courseJobData: {},
  studentJobDetail: {},
  courseExamData: {},
  studentExamDetail: {},
  attandanceDetail: [],
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
  SET_STUDENT_COURSE:(state, data) => {
    state.studentCourse = data
  },
  SET_COURSE_JOB_DATA:(state, data) => {
    state.courseJobData = data
  },
  SET_STUDENT_JOB_DETAIL:(state, data) => {
    state.studentJobDetail = data
  },
  SET_COURSE_EXAM_DATA:(state, data) => {
    state.courseExamData = data
  },
  SET_STUDENT_EXAM_DETAIL:(state, data) => {
    state.studentExamDetail = data
  },
  SET_ATTANDANCE_DATA:(state, data) => {
    state.attandanceDetail = data
  },
}

const actions = {

  /**
   * 保存选课学生
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doSave({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.post("/api/v1/course/save", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode !== "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    });
    commit("SET_SAVE_LODING", false)
  },

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
      if(response.data.head.responseCode !== "200") {
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
   * 根据ID查询目录全部信息
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryCatalogAllById({dispatch, state, commit}, data) {
    await axios.get("/api/v1/course/query/catalog/all/" + data).then(response => {
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

  /**
   * 根据ID查找学生课程
   * @param commit
   * @returns {Promise<void>}
   */
  async doQueryCourseByStudentId({dispatch, state, commit}) {
    await axios.get("/api/v1/course/query/student/" + store.state.loginManage.id).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_STUDENT_COURSE", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据课程以及学生ID查找作业
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryStudentJobByCourseAndStudent({dispatch, state, commit}, data) {
    await axios.get("/api/v1/courseJob/query/studentJob/" + data + "/" + store.state.loginManage.id).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_COURSE_JOB_DATA", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据作业以及学生ID查找学生作业信息
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryStudentJobByJobAndStudent({dispatch, state, commit}, data) {
    await axios.get("/api/v1/courseJob/query/studentJob/detail/" + data + "/" + store.state.loginManage.id).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_STUDENT_JOB_DETAIL", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  //保存学生作业信息
  async doSaveStudentJob({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.post("/api/v1/courseJob/save", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode !== "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    });
    commit("SET_SAVE_LODING", false)
  },

  /**
   * 修改学生作业
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doUpdateStudentJob({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.put("/api/v1/courseJob/update", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode != "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    })
    commit("SET_SAVE_LODING", false)
  },

  // ============ 考试
  /**
   * 根据课程以及学生ID查找试卷
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryStudentExamByCourseAndStudent({dispatch, state, commit}, data) {
    await axios.get("/api/v1/exam/query/studentExam/" + data + "/" + store.state.loginManage.id).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_COURSE_EXAM_DATA", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 根据作业以及学生ID查找学生试卷信息
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryStudentExamByExamAndStudent({dispatch, state, commit}, data) {
    await axios.get("/api/v1/exam/query/studentExam/detail/" + data + "/" + store.state.loginManage.id).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_STUDENT_EXAM_DETAIL", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 保存学生试卷信息
   * @param dispatch
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doSaveStudentExam({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.post("/api/v1/exam/save", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode !== "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    });
    commit("SET_SAVE_LODING", false)
  },

  /**
   * 修改学生试卷
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doUpdateStudentExam({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.put("/api/v1/exam/update", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode != "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    })
    commit("SET_SAVE_LODING", false)
  },

  // ======= 签到
  /**
   * 根据课程查找签到列表
   * @param dispatch
   * @param state
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doQueryAttandanceByCourse({dispatch, state, commit}, data) {
    await axios.get("/api/v1/attendance/query/course/" + data).then(response => {
      if(response.data.head.responseCode != "200") {
        this.$Notice.error({title: response.data.head.message , desc: ''});
        return;
      }
      commit("SET_ATTANDANCE_DATA", response.data.body.data)
    }).catch(error => {
      console.log(error)
    })
  },

  /**
   * 保存学生签到
   * @param commit
   * @param data
   * @returns {Promise<void>}
   */
  async doSaveAttandance({dispatch, commit}, data) {
    commit("SET_SAVE_LODING", true)
    await axios.post("/api/v1/attendance/save", {"head": {"token": store.state.loginManage.token}, "body":{"data": data}}).then(response => {
      if(response.data.head.responseCode !== "200") {
        Notice.error({title: response.data.head.message , desc: ''});
      } else {
        Notice.success({title: response.data.head.message , desc: ''});
      }
    }).catch(error => {
      console.log(error)
    });
    commit("SET_SAVE_LODING", false)
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
