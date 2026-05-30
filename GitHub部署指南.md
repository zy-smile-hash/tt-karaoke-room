# GitHub Pages 部署指南

## 步骤 1：上传文件到 GitHub

1. 打开 GitHub 并登录：https://github.com
2. 点击右上角 "+" → "New repository"
3. 填写仓库名称：`tt-karaoke-room`
4. 选择 "Public"（公开仓库才能使用 GitHub Pages）
5. 点击 "Create repository"

## 步骤 2：上传文件

在新建的仓库页面：

1. 点击 "uploading an existing file" 或将文件拖拽到页面中
2. 上传以下文件：
   - `index.html`
   - `design_image.png`
   - `README.md`
   - 整个 `images` 文件夹（包含所有二级页面图片）

3. 点击 "Commit changes"

## 步骤 3：启用 GitHub Pages

1. 在仓库页面，点击 "Settings"（设置）
2. 滚动到 "GitHub Pages" 部分
3. 在 "Source" 下拉菜单中：
   - 选择 "Deploy from a branch"
   - Branch 选择 `main`
   - Folder 选择 `/ (root)`
4. 点击 "Save"

## 步骤 4：等待部署

1. 等待 1-2 分钟
2. 你的网站将上线：https://zy-smile-hash.github.io/tt-karaoke-room/
   （请将 `zy-smile-hash` 替换为你的 GitHub 用户名）

## 文件结构说明

```
tt-karaoke-room/
├── index.html          # 主页面
├── design_image.png    # 首页设计图
├── README.md          # 说明文档
└── images/            # 二级页面截图
    ├── 上麦.jpg
    ├── 下麦.jpg
    ├── 关闭.jpg
    ├── 分享.jpg
    ├── 在线人员.jpg
    ├── 已点.jpg
    ├── 我的段位.jpg
    ├── 打call.jpg
    ├── 收藏.jpg
    ├── 更多功能.jpg
    ├── 消息.jpg
    ├── 点歌.jpg
    ├── 点赞数.jpg
    ├── 聊天框.jpg
    ├── 运营活动.jpg
    ├── 运营活动2.jpg
    ├── 运营活动3.jpg
    ├── 送礼.jpg
    └── 音量.jpg
```

## 注意事项

1. **热点位置调整**：如果你之前调整了热点位置并保存了，这些调整保存在你本地浏览器的 localStorage 中。上传到 GitHub 后，其他用户访问时会使用默认位置。

2. **永久保存热点位置**：如果需要永久保存热点位置，请：
   - 在调整好位置后
   - 点击"复制CSS"按钮
   - 将复制的 CSS 代码更新到 index.html 文件中
   - 然后再上传

3. **更新网站**：修改文件后，直接在 GitHub 仓库中上传新文件即可。

## 常见问题

Q: 为什么其他人看不到我调整的热点位置？
A: 热点位置保存在本地浏览器中。如需共享，需要导出 CSS 并更新到 HTML 文件。

Q: 网站多久更新一次？
A: GitHub Pages 通常在提交后 1-2 分钟内生效。

Q: 可以使用自定义域名吗？
A: 可以，在 Settings → Pages → Custom domain 中设置。
