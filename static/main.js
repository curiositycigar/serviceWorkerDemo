// 天气数据请求地址 http://tj.nineton.cn/Heart/index/all?city=CHSH000000
// 注册服务工作线程

// axios.get('http://192.168.213.201:8234/Heart/index/all?city=CHSH000000').then(({data}) => {
//   console.log(data)
// })
let data = { "status": "OK", "weather": [{ "city_name": "上海", "city_id": "CHSH000000", "last_update": "2018-05-28T10:08:00+08:00", "now": { "text": "多云", "code": "4", "temperature": "26", "feels_like": "25", "wind_direction": "西", "wind_speed": "2.88", "wind_scale": "1", "humidity": "66", "visibility": "6.10", "pressure": "1010", "pressure_rising": "未知", "air_quality": { "city": { "aqi": "135", "pm25": "103", "pm10": "0", "so2": "15", "no2": "54", "co": "1.130", "o3": "70", "last_update": "2018-05-28T09:00:00+08:00", "quality": "轻度污染" }, "stations": null }, "alarms": [] }, "today": { "sunrise": "", "sunset": "", "suggestion": { "dressing": { "brief": "热", "details": "天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。" }, "uv": { "brief": "弱", "details": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。" }, "car_washing": { "brief": "较适宜", "details": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。" }, "travel": { "brief": "适宜", "details": "天气较好，但丝毫不会影响您出行的心情。温度适宜又有微风相伴，适宜旅游。" }, "flu": { "brief": "较易发", "details": "天气转凉，空气湿度较大，较易发生感冒，体质较弱的朋友请注意适当防护。" }, "sport": { "brief": "较适宜", "details": "天气较好，较适宜进行各种运动，但因湿度偏高，请适当降低运动强度。" } } }, "future": [{ "date": "2018-05-28", "high": "29", "low": "20", "day": "周一", "text": "多云/多云", "code1": "4", "code2": "4", "cop": "", "wind": "风力2级" }, { "date": "2018-05-29", "high": "26", "low": "21", "day": "周二", "text": "小雨/小雨", "code1": "13", "code2": "13", "cop": "", "wind": "风力2级" }, { "date": "2018-05-30", "high": "25", "low": "20", "day": "周三", "text": "小雨/小雨", "code1": "13", "code2": "13", "cop": "", "wind": "风力2级" }, { "date": "2018-05-31", "high": "27", "low": "18", "day": "周四", "text": "多云/阴", "code1": "4", "code2": "9", "cop": "", "wind": "风力2级" }, { "date": "2018-06-01", "high": "28", "low": "19", "day": "周五", "text": "多云/多云", "code1": "4", "code2": "4", "cop": "", "wind": "风力2级" }, { "date": "2018-06-02", "high": "28", "low": "20", "day": "周六", "text": "晴/晴", "code1": "0", "code2": "1", "cop": "", "wind": "风力2级" }, { "date": "2018-06-03", "high": "29", "low": "20", "day": "周日", "text": "晴/小雨", "code1": "0", "code2": "13", "cop": "", "wind": "风力2级" }, { "date": "2018-06-04", "high": "26", "low": "21", "day": "周一", "text": "小雨/小雨", "code1": "13", "code2": "13", "cop": "", "wind": "风力3级" }, { "date": "2018-06-05", "high": "26", "low": "21", "day": "周二", "text": "小雨/小雨", "code1": "13", "code2": "13", "cop": "", "wind": "风力2级" }, { "date": "2018-06-06", "high": "23", "low": "20", "day": "周三", "text": "小雨/小雨", "code1": "13", "code2": "13", "cop": "", "wind": "风力2级" }] }] }
console.log(data)
// fetch('https://baidu.com').then(res => {
//   console.log(res)
// })
// const cardTemplate = `
//   <div></div>
// `
// window.onload = function () {

// }