// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

var axios = require('axios')
// var qs = require('qs')
const fetch = require('node-fetch')
const { URLSearchParams } = require('url')
// var apiRoutes = express.Router()

// apiRoutes.get('/getRecommend', function (req, res) {
//   var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   axios.get(url, {
//     headers: {
//       referer: 'https://y.qq.com/m/index.html'
//     },
//     params: req.query
//   }).then((response => {
//     res.json(response.data) // send [response] from axios to client end as [res]
//   }).catch(e => {
//     console.log(e)
//   }))
// })
// app.use('/api',apiRoutes)

// app.get("/random/:min/:max", function(req, res) {
//   var min = parseInt(req.params.min);
//   var max = parseInt(req.params.max);
//   if (isNaN(min) || isNaN(max)) {
//       res.status(400);
//       res.json({ error: "Bad request." });
//       return;
//   }

//   var result = Math.round((Math.random() * (max - min)) + min);
//   res.json({ result: result });
// });
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// //app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve(__dirname, '../dists')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

var express = require('express')
var app = express()

app.get('/getRecommend', function (req, res) {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/m/index.html'
    },
    params: req.query
  }).then(response => {
    res.json(response.data) // send [response] from axios to client end as [res]
  }).catch(e => {
    console.log(e)
  })
})

// get diss list
app.get('/getDiscList', function (req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/playlist.html',
      origin: 'https://y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})

// get singer list
app.get('/getSingerList', function (req, res) {
  var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/singer_list.html',
      origin: 'https://y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch(e => {
    console.log(e)
  })
})


// get Top List 获取排行榜list
app.get('/getTopList', function(req,res){
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  axios.get(url,{
    headers:{
      origin: 'https://m.y.qq.com',
      referer: 'https://m.y.qq.com'
    },
    params: req.query
  }).then(response => {
    res.json(response.data)
  }).catch( e => {
    console.log(e)
  })
})

/**
 * post singer to get singer detail list
 * Param {Number} req from front end - singerId.
 */
// app.get('/postSingerDetail', function (req, res) {
//   var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
//   var querys = req.query
//   var data = {'req_0': {'module': 'vkey.GetVkeyServer', 'method': 'CgiGetVkey', 'param': {'guid': '3664231960', 'songmid': ['002u0fTY2HoJJp', '000LZuSb16dIgb', '003yo4qQ0RSqFO', '004I2qcH4WlSuq', '004KOkVK4WmdGq', '003oBNMH0zeBDE', '003Mx0fG2LK0Cf', '004Pk5qG3xoGCt', '003YoBEI4cERMj', '003k94v730qD9i', '004V6Ufv00gcXf', '000Jp9j13HD0TH', '001Bm7xb3CJVyc', '01x8Tf72tDioU', '003wZDa115PV92'], 'songtype': [], 'uin': '835702580', 'loginflag': 1, 'platform': '23', 'h5to': 'speed'}}, 'comm': {'g_tk': 1402580005, 'uin': 835702580, 'format': 'json', 'ct': 23, 'cv': 0}} || {}
//   // var formdata = new FormData()
//   // formdata.append(null, '{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"3664231960","songmid":["002u0fTY2HoJJp","000LZuSb16dIgb","003yo4qQ0RSqFO","004I2qcH4WlSuq","004KOkVK4WmdGq","003oBNMH0zeBDE","003Mx0fG2LK0Cf","004Pk5qG3xoGCt","003YoBEI4cERMj","003k94v730qD9i","004V6Ufv00gcXf","000Jp9j13HD0TH","001Bm7xb3CJVyc","001x8Tf72tDioU","003wZDa115PV92"],"songtype":[],"uin":"835702580","loginflag":1,"platform":"23","h5to":"speed"}},"comm":{"g_tk":1402580005,"uin":835702580,"format":"json","ct":23,"cv":0}}: ')
//   axios.post(url, {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Content-Length': data.length,
//       referer: `https://y.qq.com/n/m/detail/singer/index.html?ADTAG=newyqq.singer&source=ydetail&singerId=${querys.singerId}`
//     },
//     method: 'POST',
//     data: qs.stringify(data),
//     // data: formdata,
//     params: querys._
//   }).then(response => {
//     console.log(response)
//     res.json(response.data)
//   }).catch(e => {
//     console.log(e)
//   })
// })

// app.get('/postSingerDetail', function (req, res) {
//   // var formdata = new FormData()
//   // formdata.append(null, '{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"3664231960","songmid":["002u0fTY2HoJJp","000LZuSb16dIgb","003yo4qQ0RSqFO","004I2qcH4WlSuq","004KOkVK4WmdGq","003oBNMH0zeBDE","003Mx0fG2LK0Cf","004Pk5qG3xoGCt","003YoBEI4cERMj","003k94v730qD9i","004V6Ufv00gcXf","000Jp9j13HD0TH","001Bm7xb3CJVyc","001x8Tf72tDioU","003wZDa115PV92"],"songtype":[],"uin":"835702580","loginflag":1,"platform":"23","h5to":"speed"}},"comm":{"g_tk":1402580005,"uin":835702580,"format":"json","ct":23,"cv":0}}: ')
//   const params = new URLSearchParams()
//   params.append(null, '{"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"3664231960","songmid":["002u0fTY2HoJJp","000LZuSb16dIgb","003yo4qQ0RSqFO","004I2qcH4WlSuq","004KOkVK4WmdGq","003oBNMH0zeBDE","003Mx0fG2LK0Cf","004Pk5qG3xoGCt","003YoBEI4cERMj","003k94v730qD9i","004V6Ufv00gcXf","000Jp9j13HD0TH","001Bm7xb3CJVyc","001x8Tf72tDioU","003wZDa115PV92"],"songtype":[],"uin":"835702580","loginflag":1,"platform":"23","h5to":"speed"}},"comm":{"g_tk":1402580005,"uin":835702580,"format":"json","ct":23,"cv":0}}')

//   fetch('https://u.y.qq.com/cgi-bin/musicu.fcg?_=1550451280253', { method: 'POST', body: params })
//     .then(res => res.json())
//     .then(json => console.log(json))
// })
/**
 * post singer to get singer detail list
 * Param {Number} req from front end - singerId.
 */
app.get('/postSingerDetail', function (req, res) {
  const data = JSON.parse('{"req_0":{"data":{"ct":23,"cv":0,"ip":254201724,"musicid":-4294967296,"tracks":[{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":1211728,"mid":"002Nt51E0q8Zoo","name":"Faded","subtitle":"","time_public":"2015-12-04","title":"Faded"},"bpm":89,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"000jF0b70x9gDf","size_128mp3":3403241,"size_192aac":5380412,"size_192ogg":5143811,"size_24aac":696088,"size_320mp3":8507137,"size_48aac":1388945,"size_96aac":2954837,"size_ape":26873099,"size_dts":0,"size_flac":27001869,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":105030812,"index_album":1,"index_cd":0,"interval":212,"isonly":1,"ksong":{"id":203965,"mid":"001GHPQK0zJgOj"},"label":"4611686018444171280","language":5,"mid":"002NkERn2LNVI4","modify_stamp":0,"mv":{"id":667303,"name":"","title":"","vid":"f00220xguur"},"name":"Faded","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":141804,"mid":"003FxALO1Drz48","name":"Iselin Solheim","title":"Iselin Solheim","type":1,"uin":0}],"status":0,"subtitle":"","time_public":"2015-12-04","title":"Faded","trace":"","type":0,"url":"http://stream8.qqmusic.qq.com/117030812.wma","version":0,"volume":{"gain":-10.253000259399414,"lra":6.935999870300293,"peak":1}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":2232289,"mid":"002Nf4ht3NmYIO","name":"The Spectre","subtitle":"","time_public":"2017-09-15","title":"The Spectre"},"bpm":127,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"0031wrub06889c","size_128mp3":3101917,"size_192aac":4686717,"size_192ogg":4698584,"size_24aac":601365,"size_320mp3":7754133,"size_48aac":1180158,"size_96aac":2356091,"size_ape":24326925,"size_dts":0,"size_flac":24251055,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":203810208,"index_album":1,"index_cd":0,"interval":193,"isonly":1,"ksong":{"id":2991536,"mid":"003wHROz4donow"},"label":"0","language":5,"mid":"004WYNc84TSHJ6","modify_stamp":0,"mv":{"id":1366196,"name":"","title":"","vid":"s00244on2oh"},"name":"The Spectre","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2017-09-15","title":"The Spectre","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/215810208.wma","version":0,"volume":{"gain":-7.414999961853027,"lra":6.127999782562256,"peak":0.9850000143051149}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":5216619,"mid":"001MD8qL3o8Wej","name":"Different World","subtitle":"","time_public":"2018-11-30","title":"Different World"},"bpm":130,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"003DLTtu1mdZrN","size_128mp3":3247800,"size_192aac":4912730,"size_192ogg":4922699,"size_24aac":628911,"size_320mp3":8119115,"size_48aac":1232766,"size_96aac":2468504,"size_ape":0,"size_dts":0,"size_flac":0,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":221999637,"index_album":1,"index_cd":0,"interval":202,"isonly":1,"ksong":{"id":5062734,"mid":"003FFiEL0gDRLv"},"label":"0","language":5,"mid":"000rdpuk2T9la3","modify_stamp":0,"mv":{"id":1497912,"name":"","title":"","vid":"n00292rkaz0"},"name":"Different World","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":1007639,"mid":"004bkgRA2eGJyK","name":"K-391","title":"K-391","type":0,"uin":0},{"id":1010066,"mid":"000btzkl3ZMncs","name":"Sofia Carson","title":"Sofia Carson","type":1,"uin":0},{"id":197898,"mid":"004569pS4AaBj8","name":"CORSAK","title":"CORSAK","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2018-11-30","title":"Different World","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/233999637.wma","version":0,"volume":{"gain":-7.175000190734863,"lra":7.889999866485595,"peak":0.8289999961853027}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":1708107,"mid":"003ArgKV3mjzwp","name":"Alone","subtitle":"","time_public":"2016-12-02","title":"Alone"},"bpm":96,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"001T1E3J3SjWNr","size_128mp3":2580280,"size_192aac":4055377,"size_192ogg":3932265,"size_24aac":531318,"size_320mp3":6450373,"size_48aac":1062018,"size_96aac":2279711,"size_ape":21280067,"size_dts":0,"size_flac":21330494,"size_hires":0,"size_try":0,"try_begin":39326,"try_end":62280,"url":""},"fnote":4009,"genre":20,"id":109364695,"index_album":1,"index_cd":0,"interval":161,"isonly":1,"ksong":{"id":2440524,"mid":"003e8qqh0cc14i"},"label":"4611686018435776528","language":5,"mid":"001nHOrr49sHM7","modify_stamp":0,"mv":{"id":1062975,"name":"","title":"","vid":"j0022nz9g8g"},"name":"Alone","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2016-12-02","title":"Alone","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/121364695.wma","version":0,"volume":{"gain":-11.649999618530272,"lra":6.829999923706055,"peak":0.9879999756813048}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":2390770,"mid":"00459X8Y1wfcQ7","name":"All Falls Down","subtitle":"","time_public":"2017-10-27","title":"All Falls Down"},"bpm":98,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"000ZBB1W0kT5Qf","size_128mp3":3187192,"size_192aac":4819699,"size_192ogg":4853756,"size_24aac":617727,"size_320mp3":7967184,"size_48aac":1211644,"size_96aac":2420558,"size_ape":25976309,"size_dts":0,"size_flac":26037504,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":1,"id":205127505,"index_album":1,"index_cd":0,"interval":199,"isonly":1,"ksong":{"id":3044946,"mid":"003ZoThV2Hs9jD"},"label":"0","language":5,"mid":"0014ahiq40MFQ5","modify_stamp":0,"mv":{"id":1377693,"name":"","title":"","vid":"a0025zoxx90"},"name":"All Falls Down","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":1286217,"mid":"001v07wQ46Dhns","name":"Noah Cyrus","title":"Noah Cyrus","type":1,"uin":0},{"id":1016414,"mid":"001z4wG52jMWRj","name":"Digital Farm Animals","title":"Digital Farm Animals","type":2,"uin":0},{"id":1552078,"mid":"003V7jay4TdZGk","name":"Juliander","title":"Juliander","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2017-10-27","title":"All Falls Down","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/217127505.wma","version":0,"volume":{"gain":-10.659000396728516,"lra":7.323999881744384,"peak":0.9769999980926512}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17409795},"album":{"id":4222603,"mid":"000JIuih0i0mIy","name":"Darkside","subtitle":"","time_public":"2018-07-27","title":"Darkside"},"bpm":84,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"002ZihOY4f9QhQ","size_128mp3":3391132,"size_192aac":5128794,"size_192ogg":4869141,"size_24aac":658095,"size_320mp3":8477487,"size_48aac":1292225,"size_96aac":2579497,"size_ape":26037481,"size_dts":0,"size_flac":26054047,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":214956931,"index_album":1,"index_cd":0,"interval":211,"isonly":1,"ksong":{"id":0,"mid":""},"label":"0","language":5,"mid":"000lKV2G0PEkc3","modify_stamp":0,"mv":{"id":1483416,"name":"","title":"","vid":"j00279t00km"},"name":"Darkside","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":1372272,"mid":"001rBCR64KNiBb","name":"Au/Ra","title":"Au/Ra","type":1,"uin":0},{"id":1197747,"mid":"0045KLQj2JMH6q","name":"Tomine Harket","title":"Tomine Harket","type":1,"uin":0}],"status":0,"subtitle":"","time_public":"2018-07-27","title":"Darkside","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/226956931.wma","version":0,"volume":{"gain":-10.147000312805176,"lra":7.448999881744384,"peak":0.9769999980926512}},{"action":{"alert":2,"icons":139132,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":4041848,"mid":"002xsHEV0y3vLe","name":"Ignite","subtitle":"","time_public":"2018-05-11","title":"Ignite"},"bpm":89,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"002vbWwe3ZmffT","size_128mp3":3366049,"size_192aac":5058488,"size_192ogg":5068107,"size_24aac":649220,"size_320mp3":8414787,"size_48aac":1271632,"size_96aac":2550767,"size_ape":45973050,"size_dts":0,"size_flac":45338061,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":213907427,"index_album":1,"index_cd":0,"interval":210,"isonly":1,"ksong":{"id":3732274,"mid":"000lBJ1d3yjWPR"},"label":"0","language":5,"mid":"002vbWwe3ZmffT","modify_stamp":0,"mv":{"id":1463421,"name":"","title":"","vid":"q0026qu7slf"},"name":"Ignite","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":1007639,"mid":"004bkgRA2eGJyK","name":"K-391","title":"K-391","type":0,"uin":0},{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":177705,"mid":"000bbgD62cvQuI","name":"Julie Bergan","title":"Julie Bergan","type":1,"uin":0},{"id":25588,"mid":"002IhuV147Q7FA","name":"승리","title":"승리 (胜利)","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2018-05-11","title":"Ignite","trace":"","type":0,"url":"http://stream8.qqmusic.qq.com/225907427.wma","version":0,"volume":{"gain":-10.83199977874756,"lra":6.267000198364258,"peak":0.9769999980926512}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":1211728,"mid":"002Nt51E0q8Zoo","name":"Faded","subtitle":"","time_public":"2015-12-04","title":"Faded"},"bpm":89,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"0031bwia2If4YH","size_128mp3":3474316,"size_192aac":5317965,"size_192ogg":5213940,"size_24aac":689463,"size_320mp3":8684973,"size_48aac":1372308,"size_96aac":2814416,"size_ape":0,"size_dts":0,"size_flac":0,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":200526212,"index_album":3,"index_cd":0,"interval":217,"isonly":1,"ksong":{"id":203965,"mid":"001GHPQK0zJgOj"},"label":"0","language":5,"mid":"0031bwia2If4YH","modify_stamp":0,"mv":{"id":0,"name":"","title":"","vid":""},"name":"Faded","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2015-12-04","title":"Faded (Restrung)","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/212526212.wma","version":0,"volume":{"gain":-9.880000114440918,"lra":8.161999702453614,"peak":1}},{"action":{"alert":11,"icons":135752,"msgdown":0,"msgfav":0,"msgid":0,"msgpay":0,"msgshare":0,"switch":81683},"album":{"id":1501478,"mid":"003qDIIH08wfaM","name":"Hymn For The Weekend [Remix]","subtitle":"","time_public":"2016-07-01","title":"Hymn For The Weekend [Remix]"},"bpm":96,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"002X3RjI43O8qj","size_128mp3":3687545,"size_192aac":5489932,"size_192ogg":5970964,"size_24aac":757354,"size_320mp3":9218399,"size_48aac":1539812,"size_96aac":3209494,"size_ape":0,"size_dts":0,"size_flac":0,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":8013,"genre":20,"id":107541252,"index_album":1,"index_cd":0,"interval":230,"isonly":0,"ksong":{"id":2318302,"mid":"001CYZ3b01cjEq"},"label":"4611686018431582224","language":5,"mid":"002X3RjI43O8qj","modify_stamp":0,"mv":{"id":772059,"name":"","title":"","vid":"d0020ktkard"},"name":"Hymn For The Weekend","pay":{"pay_down":0,"pay_month":0,"pay_play":0,"pay_status":0,"price_album":0,"price_track":0,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":290,"mid":"001MXQUi1tlLon","name":"Coldplay","title":"Coldplay","type":2,"uin":0}],"status":0,"subtitle":"","time_public":"2016-07-01","title":"Hymn For The Weekend (Remix)","trace":"","type":0,"url":"http://stream8.qqmusic.qq.com/119541252.wma","version":6,"volume":{"gain":-11.05500030517578,"lra":6.796000003814697,"peak":1}},{"action":{"alert":2,"icons":139132,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":5381333,"mid":"000lRdq83SUp5N","name":"Faded (即刻电音版)","subtitle":"","time_public":"2018-12-01","title":"Faded (即刻电音版)"},"bpm":89,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"003fibGr21H2ov","size_128mp3":3545883,"size_192aac":5327830,"size_192ogg":5224989,"size_24aac":685339,"size_320mp3":8864205,"size_48aac":1344620,"size_96aac":2689270,"size_ape":0,"size_dts":0,"size_flac":45271867,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":22,"id":223484147,"index_album":1,"index_cd":0,"interval":221,"isonly":1,"ksong":{"id":5063759,"mid":"002ihshf2LWlR9"},"label":"0","language":5,"mid":"003fibGr21H2ov","modify_stamp":0,"mv":{"id":0,"name":"","title":"","vid":""},"name":"Faded","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":2169599,"mid":"000Rh4DK4MmxIU","name":"火箭少女101","title":"火箭少女101","type":2,"uin":0}],"status":0,"subtitle":"","time_public":"2018-12-01","title":"Faded (即刻电音版)","trace":"","type":0,"url":"http://stream3.qqmusic.qq.com/235484147.wma","version":6,"volume":{"gain":-9.222000122070313,"lra":13.730999946594239,"peak":0.9549999833106994}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":1456626,"mid":"0032bxR52m4cgY","name":"Sing Me to Sleep","subtitle":"","time_public":"2016-06-03","title":"Sing Me to Sleep"},"bpm":88,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"0026yzhQ1ONbeC","size_128mp3":3022942,"size_192aac":4713638,"size_192ogg":4582274,"size_24aac":610689,"size_320mp3":7556964,"size_48aac":1229286,"size_96aac":2617876,"size_ape":24122837,"size_dts":0,"size_flac":24200971,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":107157506,"index_album":1,"index_cd":0,"interval":188,"isonly":1,"ksong":{"id":2309196,"mid":"00336ady4OlZvP"},"label":"4611686018435778576","language":5,"mid":"003neI902C7eqX","modify_stamp":0,"mv":{"id":740899,"name":"","title":"","vid":"x0020s95l52"},"name":"Sing Me to Sleep","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":141804,"mid":"003FxALO1Drz48","name":"Iselin Solheim","title":"Iselin Solheim","type":1,"uin":0}],"status":0,"subtitle":"","time_public":"2016-06-03","title":"Sing Me to Sleep","trace":"","type":0,"url":"http://stream6.qqmusic.qq.com/119157506.wma","version":0,"volume":{"gain":-9.489999771118164,"lra":9.619000434875489,"peak":0.9900000095367432}},{"action":{"alert":2,"icons":139132,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17409795},"album":{"id":929547,"mid":"00472CVU4VP4I3","name":"Fade","subtitle":"","time_public":"2014-08-14","title":"Fade"},"bpm":90,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"003XaoG40fD0iE","size_128mp3":4225363,"size_192aac":6393324,"size_192ogg":7147005,"size_24aac":821560,"size_320mp3":10562825,"size_48aac":1610110,"size_96aac":3222377,"size_ape":0,"size_dts":0,"size_flac":34317605,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":101800569,"index_album":1,"index_cd":0,"interval":264,"isonly":1,"ksong":{"id":0,"mid":""},"label":"4611686018431584288","language":9,"mid":"0015PB9N15aKo2","modify_stamp":0,"mv":{"id":0,"name":"","title":"","vid":""},"name":"Fade","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2014-08-14","title":"Fade","trace":"","type":0,"url":"http://stream7.qqmusic.qq.com/113800569.wma","version":0,"volume":{"gain":-11.083000183105469,"lra":4.796999931335449,"peak":1}},{"action":{"alert":2,"icons":139132,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17409795},"album":{"id":1137155,"mid":"003Q0oCr17Waiu","name":"Spectre","subtitle":"","time_public":"2015-01-06","title":"Spectre"},"bpm":127,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"004JTTeY0zeJSz","size_128mp3":3691166,"size_192aac":5554631,"size_192ogg":6043839,"size_24aac":715525,"size_320mp3":9227563,"size_48aac":1398831,"size_96aac":2805696,"size_ape":0,"size_dts":0,"size_flac":29532376,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":104129385,"index_album":1,"index_cd":0,"interval":230,"isonly":1,"ksong":{"id":0,"mid":""},"label":"4611686018431584288","language":9,"mid":"000YnU180HTMUN","modify_stamp":0,"mv":{"id":0,"name":"","title":"","vid":""},"name":"Spectre","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2015-01-06","title":"Spectre","trace":"","type":0,"url":"http://stream5.qqmusic.qq.com/116129385.wma","version":0,"volume":{"gain":-10.121000289916993,"lra":4.4679999351501469,"peak":1}},{"action":{"alert":21,"icons":147324,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":4608599,"mid":"004HosZS2ELqDH","name":"Diamond Heart","subtitle":"","time_public":"2018-09-28","title":"Diamond Heart"},"bpm":89,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"001ZM3DG0hxK4t","size_128mp3":3838787,"size_192aac":5814598,"size_192ogg":5683859,"size_24aac":743959,"size_320mp3":9596593,"size_48aac":1462381,"size_96aac":2922503,"size_ape":0,"size_dts":0,"size_flac":0,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":20,"id":217157321,"index_album":1,"index_cd":0,"interval":239,"isonly":1,"ksong":{"id":4879648,"mid":"003SYfs81YEr2X"},"label":"0","language":5,"mid":"0049ALqT23c20L","modify_stamp":0,"mv":{"id":1487524,"name":"","title":"","vid":"y0027zdrdph"},"name":"Diamond Heart","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0},{"id":32288,"mid":"001og7CS4fVXRP","name":"Sophia Somajo","title":"Sophia Somajo","type":1,"uin":0}],"status":0,"subtitle":"","time_public":"2018-09-28","title":"Diamond Heart","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/229157321.wma","version":0,"volume":{"gain":-8.201000213623047,"lra":8.147000312805176,"peak":0.8820000290870668}},{"action":{"alert":2,"icons":139132,"msgdown":0,"msgfav":0,"msgid":14,"msgpay":6,"msgshare":0,"switch":17413891},"album":{"id":4492888,"mid":"001npIdc3jaqAE","name":"Sheep (Alan Walker Relift)","subtitle":"","time_public":"2018-08-31","title":"Sheep (Alan Walker Relift)"},"bpm":90,"data_type":0,"file":{"b_30s":0,"e_30s":0,"hires_bitdepth":0,"hires_sample":0,"media_mid":"004Hqctl1qPU8j","size_128mp3":2497132,"size_192aac":3775485,"size_192ogg":3765131,"size_24aac":485235,"size_320mp3":6242111,"size_48aac":950443,"size_96aac":1897390,"size_ape":34111062,"size_dts":0,"size_flac":33963116,"size_hires":0,"size_try":0,"try_begin":0,"try_end":0,"url":""},"fnote":4009,"genre":1,"id":216392758,"index_album":1,"index_cd":0,"interval":156,"isonly":1,"ksong":{"id":4491288,"mid":"003YpNxM3bagjT"},"label":"0","language":0,"mid":"003Uvfiu3YKxtS","modify_stamp":0,"mv":{"id":1483696,"name":"","title":"","vid":"t0027n9cn5i"},"name":"Sheep","pay":{"pay_down":1,"pay_month":1,"pay_play":0,"pay_status":0,"price_album":0,"price_track":200,"time_free":0},"singer":[{"id":60894,"mid":"002MfEld3FWp0R","name":"张艺兴","title":"张艺兴","type":0,"uin":0},{"id":944940,"mid":"0020PeOh4ZaCw1","name":"Alan Walker","title":"Alan Walker","type":0,"uin":0}],"status":0,"subtitle":"","time_public":"2018-08-31","title":"Sheep (Alan Walker Relift)","trace":"","type":0,"url":"http://stream0.qqmusic.qq.com/228392758.wma","version":0,"volume":{"gain":-6.775000095367432,"lra":7.210999965667725,"peak":0.9879999756813048}}]},"code":0},"code":0,"ts":1550480112404}')
  res.json(data)
})
module.exports = app


