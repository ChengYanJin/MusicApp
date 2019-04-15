
import {
  commonParams
} from './config'
import axios from 'axios'

/**
 *
 * @param {Number} index
 */
export function getSingerList (index) {
  const url = 'api/getSingerList'
  const hyphen = '-'
  const hyphenValue = 'getUCGI008151473100680873'
  const dataValueHot = `%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D`
  const dataValue = `%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A${index}%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D`
  const data = Object.assign({}, commonParams, {
    inCharset: 'utf8',
    platform: 'yqq.json',
    needNewCode: 0,
    loginUin: 0,
    hostUin: 0,
    [hyphen]: hyphenValue,
    data: (index) ? dataValue : dataValueHot
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
/**
 *
 * @param {Number} singerId get the singer detail information according to the singerId.
 * @return {Promise} res.data
 */
export function getSingerDetail (singerId) {
  const url = 'api/postSingerDetail'
  const data = {
    _: 1550125885520,
    singerId: singerId
  }
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}


