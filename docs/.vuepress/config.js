module.exports = {
    title:'GitHub测试',
    themeConfig:{
        sidebar:[
            '',
            {
                title:'Group1',
                path:'/Group1',
                sidebarDepth: 2,
                children:[
                    '/Group1/doc1',
                    '/Group1/doc2'
                ]
            }
            
        ]
    }
 }