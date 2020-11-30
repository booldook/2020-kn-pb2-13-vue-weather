export default {
	GET_CITY(state) {
		return state.cityList;
	},
	GET_SEL_CITY(state) {
		return state.selectCity;
	},
	GET_POSITION(state) {
		return state.position;
	},
	GET_DAILY(state) {
		return state.daily;
	},
	GET_WEEKLY(state) {
		return state.weekly;
	},
}