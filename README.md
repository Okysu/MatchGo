# 什么是[MatchGo](https://github.com/Okysu/MatchGo)

**[MatchGo](https://github.com/Okysu/MatchGo)** 是 [我Okysu(一言)](https://yby.zone) 的第一个Vue和Python项目，也是第一次使用Python做后端。

至于它的功能，是专门用来提供创建比赛、收集报表等进行校级学生之间比拼的赛事平台。

我想为计算机专业的学生提供一个自由竞争的赛事平台，当然其他学生也可以利用这些功能创建属于他们的比赛，

未来，MatchGo，将有以下包括但不限于的功能，

- 编程赛事创建
- 活动任务收集报表
- 图文等赛事创建

当然，目前只有我一个人完成这些工作，不得不说它的工作量是庞大的，

所以我急需热爱编程的小伙伴一起加入开发，

目前来说，它依然是一个在制品，还没有确定最终的呈现方式和具体功能，

如果你有“妙手”希望可以提出Issue或者直接开干，新建Pull request。

它是我的第一个Vue程序，有着不可避免的粗糙，请谅解。

# 和CompetitionGo什么关系

MatchGo是CompetitionGo的重制版，采用了Vite + ts的方式，并且优化了代码，删减了Vue2的选项式API，全部改写为组合式API。

# 目前的进度

## 前端进度

| 内容          | 进度 |
| ------------- | ---- |
| 登录/注册主页 | 100% |
| 后台-后台主页 | 100% |
| 后台-比赛信息 | 100% |
| 后台-荣誉中心 | 100% |
| 后台-个人中心 | 100% |
| 后台-关于系统 | 100% |
| 后台-衍生页面 | 0%   |

## 后端进度

很遗憾，前端工作的所有任务完成之后，才开始着手后端的开发。

所以我急需热爱编程的小伙伴一起加入开发，

# 预览

![image-20220703172322230](https://source.yby.zone/upload/images/1656840203_OhCTpbeTrv0.png)

![image-20220703172355766](https://source.yby.zone/upload/images/1656840235_f7rLfnStqCO.png)

![image-20220703172416842](https://source.yby.zone/upload/images/1656840257_Naq2ViYK7lJ.png)

目前，MatchGo在桌面端/大屏设备拥有最佳的体验，我也在积极的调整移动端等小屏终端的体验。

# 声明

如果你想在此基础上进行你自己的开发，或者你想把它部署到你的服务器上，务必添加原作者信息，遵守GPLv3开源协议。

# Web端部署/开发指南

## 下载依赖

```sh
npm install
```

### 编译和热重载（Dev）

```sh
npm run dev
```

### 类型检查、编译和生成静态资源（Work）

```sh
npm run build
```
### 路由伪静态

需要设置此才能直链访问路由，目前仅提供NGINX服务端，其他服务端请参照Router官方文档。

#### NGINX

```
location / {
	try_files $uri $uri/ /index.html$is_args$args;
}
```