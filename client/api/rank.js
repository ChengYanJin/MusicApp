import { commonParams } from './config'
import axios from 'axios'

export function getTopList(){
  const url = 'api/getTopList'

  const data = Object.assign({}, commonParams,{
    platform: 'h5',
    _: 1555295191488,
    uin: 0,
    inCharset: 'utf-8',
    needNewCode: 1
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })


}

