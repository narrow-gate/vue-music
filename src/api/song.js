import { commonParams } from './config'
import axios from 'axios'

export function getLyric(mid) {
    const url = '/api/lyric'
    const data = Objaect.assign({}, commonParams, {
        songmid:mid,
        hostUin: 0,
       needNewCode:0,
        platform: 'yqq',
        g_tk: 67232076,
        format: 'json',
        pcachetime:+new Date()
    })
    return axios.get(url, {
        params:data
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}