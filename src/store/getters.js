export const socket = state => state.socket; // socket信息
export const token = state => state.token; // token信息
export const userInfo = state => state.user.userInfo; // 登陆用户信息

export const searchUserList = state => state.search.searchUserList; // 模糊搜索用户列表
export const searchGroupList = state => state.search.searchGroupList; // 模糊搜索用户列表

export const friendList = state => state.friend.friendList; // 好友列表
export const groupList = state => state.group.groupList; // 群聊列表
export const friendInfo = state => state.friend.friendInfo; // 好友信息
export const groupInfo = state => state.group.groupInfo; // 群聊信息
export const friendMessageList = state => state.friend.friendMessageList; // 好友聊天内容列表
export const groupMessageList = state => state.group.groupMessageList; // 群聊聊天内容列表
export const dialogueList = state => state.dialogue.dialogueList; // 所有聊天内容列表
