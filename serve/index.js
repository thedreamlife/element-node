const express = require('express')
const app = express()

app.use(require('cors')())
    //识别客户端提交的json
app.use(express.json())

const mongoose = require('mongoose')
    // 设计集合结构(表结构)

// 第一次录入数据才会创建数据库

mongoose.connect('mongodb://localhost:27017/element-admin', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
});
//将文档结构发布为模型
//第一个参数大写字符串来表示你的数据库名称最终变成users集合名称
// 第二个架构Schema 
// 放回值：模型构造函数


const Article = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
}))


app.get('/', async(req, res) => {
    res.send('index')
});
//新增文章接口
app.post('/api/articles', async(req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
});

app.listen(3001, () => {
    console.log('http://localhost:3001/');

})