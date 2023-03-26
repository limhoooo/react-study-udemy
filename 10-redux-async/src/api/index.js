import axios from 'axios';
/*
  instance : new axios 객체 
  requestSuccess : 요청 성공
  requestFail : 요청 실패
  responseSuccess : 응답 성공
  responseFail : 응답 실패 
*/

const githubAPI = 'https://api.github.com/'
const githubToken = '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';

const API = axios.create({
    baseURL: githubAPI,
    headers: {
        //   Authorization : githubToken
    }
});

export { API };
