import request from './request'
import axios from 'axios'
//登录接口
export  const reqLogin = (query)=>request(
  {
    url:`/login/cellphone?phone=${query.phone}&password=${query.password}`,

  }
)
//更新头像，请求头像
export  const reqAvatarImg = (query)=>request(
  {
    url:`/avatar/upload?imgSize=${query}`,
  }
)
//获取全部的歌单
export  const reqPlayList = (query)=>request(
  {
    url:`/user/playlist?uid=${query}`,
  }
)
//获取一个歌单内的所有歌曲
///playlist/track/all?id=24381616&limit=10&offset=1
export  const reqMusicList = (id)=>request(
  {
    url:`/playlist/track/all?id=${id}&limit=20&offset=1`,
  }
)