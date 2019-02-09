import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend() {
    // const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const url = 'api/getRecommend'
    const data = Object.assign({}, commonParams, {
        inCharset:'utf-8',
        platform: 'h5',
        needNewCode: 1,
        uin: 0,
        _: 1549076206911,
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}

export function getDiscList(){
    const url='api/getDiscList'
    const data = Object.assign({}, commonParams, {
        inCharset:'utf8',
        platform: 'yqq.json',
        needNewCode: 0,
        sin: 0,
        ein: 29,
        picmid: 1,
        sortId: 5,
        rnd: Math.random(),
        loginUin: 0,
        hostUin: 0,
        categoryId: 10000000
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}