import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend() {
    // const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const url = 'api/getRecommend'
    const data = Object.assign({}, commonParams, {
        plateform: 'h5',
        needNewCode: 1,
        uin: 0,
        _: 1549076206911,
    })

    return axios.get(url, {
        param: data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}