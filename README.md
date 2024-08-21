# Just the Octo

这是一个简单、优雅的博客/文档模版，参考自 [Just the Docs](https://github.com/just-the-docs/just-the-docs) 、[Just the Class](https://github.com/kevinlin1/just-the-class)、[CS 61B Website](https://github.com/Berkeley-CS61B/skeleton-sp24)。

## 模版特点

基于 Just the Docs，具有以下功能：

- 响应式设计
- 侧边栏导航
- 全文搜索与索引
- Markdown + CSS
- 高度可定制

## 使用方法

1. 编辑 `_config.yml` 以配置网站
2. 创建并编辑 `.md` 文件，添加到 `docs` 目录中
3. 使用 [GitHub Pages](https://pages.github.com) 自动部署

更多信息请参阅 [Just the Docs](https://just-the-docs.com) 文档。

## 本地构建

1. 安装 [Ruby](https://www.ruby-lang.org)、[Jekyll](https://jekyllrb.com) 和 [Bundler](https://bundler.io)

2. 克隆本项目

```bash
git clone https://github.com/Obelusod/octo.git
```

3. 使用 `bundle` 安装依赖

```bash
bundle install
```

4. 运行本地 Jekyll 服务器（默认端口为 4000）

```bash
bundle exec jekyll serve
```

5. 在浏览器中打开 `127.0.0.1:4000`
