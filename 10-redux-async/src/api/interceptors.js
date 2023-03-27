import { cartActions } from "../store/cart-slice";
import { API } from "./index";

const setUpInterceptors = (store) => {
    API.interceptors.request.use(
        function (config) {
            // 요청성공시
            return config;
        },
        function (error) {
            // 요청실패시
            console.log(error);
            return Promise.reject(error);
        },
    );

    API.interceptors.response.use(
        function (response) {
            // 응답성공시
            // index.js 에서 넣어준 store 사용가능
            store.dispatch(cartActions.test())
            return response;
        },
        function (error) {
            // 응답실패시
            console.log(error);
        },
    );
}
export default setUpInterceptors;

