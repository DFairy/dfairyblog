module.exports = {
    title: 'dfairy的博客', // 设置网站标题
    description: '人生是一场永不止步的前进',
    base: '/dfairyblog/',

    head: [
        ['link', { rel: 'icon', href: `/img/favicon.ico` }]
    ],
    markdown: {
        lineNumbers: true // 代码行数
    },
    themeConfig: {
        serviceWorker: {
            updatePopup: {
                // 刷新内容的弹窗
                message: '就在刚刚,dfairy更新了内容',
                buttonText: '点这里'
            }
        },
        lastUpdated: 'Last Updated', // 最后更新时间
        nav: [
            { text: '前端积累', link: '/accumulate/' },
            { text: '文档速记', link: '/document/' },
            { text: 'Bug库', link: '/errorAccumulate/' },
            { text: '推荐', link: '/tools/' },
            { text: 'github', link: 'https://github.com/DFairy/dfairyblog' }
        ],
        sidebar: {
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/accumulate/': [
                '/accumulate/', // accumulate文件夹的README.md 
                // {
                //     title: 'Js',
                //     children: [
                //         '/accumulate/Js/算法' // 以docs为根目录来查找文件 
                //     ]
                // },
                {
                    title: 'Css',
                    children: [
                        '/accumulate/Css/清除默认样式',
                        '/accumulate/Css/media参考',
                        '/accumulate/Css/纸页效果',
                        '/accumulate/Css/毛玻璃效果',
                        '/accumulate/Css/1px',
                        '/accumulate/Css/优惠券',
                        '/accumulate/Css/不规则',
                        '/accumulate/Css/投影',
                        '/accumulate/Css/底部自适应',
                        '/accumulate/Css/文字特效',
                        '/accumulate/Css/文字输入效果',
                        '/accumulate/Css/hover',
                        '/accumulate/Css/加载动画',
                        '/accumulate/Css/搜索框',
                        '/accumulate/Css/tab',
                        '/accumulate/Css/滚动条进度',
                        '/accumulate/Css/滚动吸顶',
                        '/accumulate/Css/flex'
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        '/accumulate/Vue/根据环境配置url',
                        '/accumulate/Vue/通信',
                        '/accumulate/Vue/路由切换效果',

                    ]
                },
                {
                    title: 'Node',
                    children: [
                        '/accumulate/Node/七牛云上传'
                    ]
                },
                {
                    title: '面试',
                    children: [
                        '/accumulate/Interview/闭包',
                        '/accumulate/Interview/缓存',
                        '/accumulate/Interview/回调函数'
                    ]
                },

            ],
            '/document/': [
                '/document/',
                '/document/documents/重学前端',
                '/document/documents/markdown教程',
                '/document/documents/markdownEmoji',
                '/document/documents/github教程',
                '/document/documents/mongodb教程',
                '/document/documents/vue-cli3教程'
            ],
            '/errorAccumulate/': [
                '/errorAccumulate/',
                {
                    title: 'Bug库',
                    children: [
                        '/errorAccumulate/error/expres取不到值',
                        '/errorAccumulate/error/跨域'
                    ]
                }
            ],
            '/tools/': [
                '/tools/',
                {
                    title: '工具',
                    children: [
                        '/tools/tool/vueTool',
                        '/tools/tool/vsc技能1'
                    ]
                },
                {
                    title: '插件',
                    children: [
                        '/tools/plugin/懒加载插件',
                        '/tools/plugin/better-scroll',
                    ]
                }
            ],
        },
        sidebarDepth: 3,

    }
}