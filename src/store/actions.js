import { axCity } from '../api';


export default {
	async ACT_CITY({ commit }) {
		commit('MUT_CITY', await axCity());
	},
	ACT_POSITION({ commit }) {
		// commit('MUT_POSITION', []);
	},
	ACT_DAILY({ commit }, selectCity) {
		// commit('MUT_DAILY', {});
	},
	ACT_WEEKLY({ commit }, selectCity) {
		// commit('MUT_WEEKLY', []);
	}
}