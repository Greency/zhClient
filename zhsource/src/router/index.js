/**
 * 路由数据配置
 *  */
import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

import Home from '../view/Home';
import HomeIndex from '../view/secondView/Index'

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '',
                    component: HomeIndex
                }
            ]
        }
    ]
});
