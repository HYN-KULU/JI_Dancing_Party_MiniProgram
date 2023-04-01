# Readme File for 2021 Enigma Project

## General Info

- All rights reserved : UMJI Arttack & SSTIA
- Project Developer: Kulu

## 目录

- 项目介绍
- 传承
- 致谢

---

<br>

## 项目介绍

大致介绍一下，我写的所有代码都在 mycodes 文件夹中，每一个小文件夹中都会有 4 个小文件

- 后缀名为 .wxml 的是 HTML 语言，是标记语言，用于渲染页面。
- 后缀名为 .js 的是 Java Script 语言，是编程语言，在那里完成所有的参数绑定，回调函数，数据库的增删查改，用户信息的提取存储。
- 后缀名为 .wxss 的是 CSS 语言，是样式语言，用于页面布局排版美化，是我最薄弱的语言。
- 后缀名为 .json 的是页面或组件的配置文件，是我几乎不用修改的文件。
- 具体代码不在此赘述。

## 传承

这个项目不仅仅适用于 2021 Enigma 幻境舞会，每次只要简单遵循一些步骤，就能把这个舞会小程序沿用下去。

- 在微信公众号平台上注册公众号
- 在微信公众号平台上申请小程序
- 下载微信开发者工具
- 打开微信开发者工具，输入微信公众号平台上的 appid，创建一个小程序项目
- 在云开发中新建 4 个空数据库，对它们重命名，名字分别是 User,ActiveUser, Invitations, Accept。
- 在云开发中上传舞会的海报照片，记录它的 url 地址
- 删除您的小程序文件夹中的所有文件
- 复制这个文件夹中的所有文件，粘贴到您的小程序文件夹中
- 把 mycodes/pages/login/login.js 的 data 对象中 imageurl 冒号后面的那个链接修改成您之前记录的海报照片的 url 地址
- 把报名表格（仅包含性别、姓名、电话号码、学校学院）通过https://tableconvert.com 网站转成.json 文件，然后导入云开发数据库的 User 数据库中。需要的数据库索引是：gender、name、phone、school。（全部是字符串格式即可）。
- 上传，经微信平台工作人员审核通过后发表即可
- 可以不断更新版本，发布新的版本

如果您能看懂我的代码，那么也鼓励您自由修改优化，然后继续传承下去哦。

## 致谢

- 感谢 2021 文艺部的每一位朋友的鼓励支持！
- 感谢 向一铭同学提供的灵感和帮助！
