/* eslint-disable no-unused-vars */
/*
 * @Author: 时间过滤器
 * @Date: 2020-02-26 09:52:15
 * @LastEditTime: 2020-02-26 22:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tchat-client\src\filters\time.js
 */
import moment from "moment";
moment.locale("zh-cn");
moment.calendarFormat = function(myMoment, now) {
  const dayDiff = myMoment.diff(now, "days", true);
  const nowYear = now.year();
  const myYear = myMoment.year();
  if (myYear < nowYear) {
    return "beforeYear";
  } else if (dayDiff < -2) {
    return "beforeThreeDay";
  } else if (dayDiff < -1) {
    return "vorgestern";
  } else if (dayDiff < 0) {
    return "yesterday";
  } else if (dayDiff < 1) {
    return "today";
  }
};
// 列表时间格式化
export function formatListDate(date) {
  let time = moment(date).calendar(null, {
    beforeYear: "YYYY/MM/DD",
    beforeThreeDay: "MM/DD",
    vorgestern: "[前天]",
    yesterday: "[昨天]",
    today: "HH:mm"
  });
  return time;
}
