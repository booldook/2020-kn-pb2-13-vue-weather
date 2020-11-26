import { axCity, getLocation, axDaily, axWeekly } from '../api';


export default {
	async ACT_CITY({ commit }) {
		commit('MUT_CITY', await axCity());
	},
	async ACT_POSITION({ commit }) {
		commit('MUT_POSITION', await getLocation());
	},
	async ACT_DAILY({ commit }, val) {
		if(typeof val === 'object')
			commit('MUT_DAILY', await axDaily({ lat: val.lat, lon: val.lon }));
		else if(typeof val === 'string')
			commit('MUT_DAILY', await axDaily(val));
	},
	async ACT_WEEKLY({ commit }, val) {
		commit('MUT_WEEKLY', await axWeekly(val));
	}
}