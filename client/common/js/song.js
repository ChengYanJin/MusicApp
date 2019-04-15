export default class Song {
  constructor ({id, mid, singer, name, album, durating, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = durating
    this.image = image
    this.url = url
  }
}

export function createSong (tracks) { // factory pattern
  return new Song({
    id: tracks.ksong.id,
    mid: tracks.ksong.mid,
    singer: filterSingers(tracks.singer),
    name: tracks.title, // song name
    album: tracks.album, // array: id, mid, name, subtitle, time_public, title
    durating: tracks.interval, // time for the music
    image: `https//y.gtimg.cn/music/photo_new/T002R300x300M000${tracks.album.mid}.jpg?max_age=2592000`,
    url: `http://124.193.230.23/amobile.music.tc.qq.com/C400003GpDDd44aEYf.m4a?guid=3962349784&vkey=9486DCFA011D14843213E5798C1805746F64FD8C587D7427F421DCF8E99873B3F969FC3F8830CECFAB6F19456D7B7497E0E40AEF0D15B0F2&uin=0&fromtag=66`
  })
}
/**
 *
 * @param {Array} singers
 * @return singer1/singer2
 */
function filterSingers (singers) {
  let retSinger = []
  if (!singers) {
    return ''
  }
  singers.forEach(s => {
    retSinger.push(s.name)
  })
  return retSinger.join('/')
}
