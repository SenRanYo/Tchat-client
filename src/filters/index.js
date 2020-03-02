/* eslint-disable no-unused-vars */
/*
 * @Author: 时间过滤器
 * @Date: 2020-02-26 09:52:15
 * @LastEditTime: 2020-03-01 22:44:14
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
// 消息时间格式化
export function formatMessageDate(date) {
  let time = moment(date).calendar(null, {
    beforeYear: "YYYY/MM/DD",
    beforeThreeDay: "MM/DD",
    vorgestern: "[前天] HH:mm",
    yesterday: "[昨天] HH:mm",
    today: "HH:mm"
  });
  return time;
}
// 好友消息格式化
export function formatFriendMessage(data) {
  let type = data.message_type;
  let content = data.content;
  if (!type) {
    return "暂无消息内容";
  } else if (type == "text") {
    return content;
  } else if (type == "image") {
    return "[图片]";
  } else if (type == "share") {
    return "[分享]";
  } else if (type == "voice") {
    return "[语音消息]";
  } else if (type == "system") {
    return "[系统消息]";
  }
}
// 群聊消息格式化
export function formatGroupMessage(data) {
  let type = data.message_type;
  let user = data.send_user;
  let content = data.content;
  if (!type) {
    return "暂无消息内容";
  } else if (type == "text") {
    return `${user}:${content}`;
  } else if (type == "image") {
    return `${user}:[图片]`;
  } else if (type == "share") {
    return `${user}:[分享]`;
  } else if (type == "voice") {
    return `${user}:[语音消息]`;
  } else if (type == "system") {
    return "[系统消息]";
  }
}
