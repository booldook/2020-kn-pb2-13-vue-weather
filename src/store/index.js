import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex)

export default new Vuex.Store({ state, getters, mutations, actions });

// $(".a").css("display");					// getter
// $(".a").css("display", "none");  // setter
// state     - 변수를 등록
// getters   - Getter 변수값 가져오기
// mutations - 변수 값의 변화를 감지
// actions   - Setter 변수값 저장하기