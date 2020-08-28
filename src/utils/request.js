
import axios from 'axios';

const install = function (Vue) {
	let httpArr = [];

	axios.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.resolve(error.response);
		}
	);

	function checkStatus(response) {
		// 如果http状态码正常，则直接返回数据
		if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
			let resData = response.data;

			return resData;
    }
    if(response && response.status===401){
      Vue.$router.push('/user/login')
      Vue.$store.dispatch("logoutSync");
      
    }
		// 异常状态下，把错误信息返回去
		return {
			status: -404,
			msg: '网络异常'
		};
	}

	function checkCode(res) {
    if(res.errcode!=0){
      Vue.$message.error(res.msg);
    }
		// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户	
    return res
	}

	Vue.$post = Vue.prototype.$post = function (url, data) {

		return axios({
				method: 'post',
				url: url,
				data: JSON.stringify(data),
				timeout: 10000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/json;charset=UTF-8',
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			.then((res) => {
				return checkCode(res);
			});
	};

	Vue.$get = Vue.prototype.$get = function (url, params) {
		return axios({
				method: 'get',
				url: url,
				params, // get 请求时带的参数
				timeout: 10000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			.then((res) => {
				return checkCode(res);
			});
	};

	Vue.$postForm = Vue.prototype.$postForm = function (url, data) {
		return axios({
				method: 'post',
				url: url,
				data: data,
				timeout: 100000,
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then((response) => {
				return checkStatus(response);
			})
			.then((res) => {
				return checkCode(res);
			});
	};
};

export default install;