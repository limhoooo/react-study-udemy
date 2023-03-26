import { cartActions } from "../store/cart-slice";
import { API } from "./index";

const setUpInterceptors = (store) => {
    API.interceptors.request.use(
        function (config) {
            return config;
        },
        function (error) {
            console.log(error);
            return Promise.reject(error);
        },
    );

    API.interceptors.response.use(
        function (response) {
            // index.js 에서 넣어준 store 사용가능
            store.dispatch(cartActions.test())
            return response;
        },
        function (error) {
            console.log(error);
        },
    );
}
export default setUpInterceptors