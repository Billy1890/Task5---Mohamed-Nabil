// ARTICLES ROUTES
const express = require('express')
const router = express.Router()
const {Article} = require('../models/article.model')   


// /articles/getArticles
router.get('/getArticles',async(req,res)=>{
    const user = req.user;

    const articles = await Article.find({
        'createdBy' : user.id
    })

    res.status(200).json({
        articles
    })
})


// /articles/createArticles
router.post('/createArticles',async (req,res) => {
    const {title,contet} = req.body

    const user = req.user
        const article = new Article({
            title,
            content,
            createdBy: {
                id: user.id,
                name: user.name
            }
        })
        await article.save()

        res.status(201).json({
            article
        })
})

// /articles/updateArticle/{{articleId}}
router.put('/updateArticle/:id', async (req,res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    const user = req.user;
        const article = await Article.findOneAndUpdate({
            _id: id,
            'createdBy': user.id
        }, {
            title,
            content
        })
        if (!article) return res.status(404).json({msg: 'Article Not Found'})
        res.status(200).json({msg: 'Article Updated Successfully'})


})

// /articles/deleteArticle
router.delete('/deleteArticle/:id', async (req,res) => {
    const {id} = req.params;
    const user = req.user;
        const article = await Article.findOneAndDelete({
            _id: id,
            'createdBy': user.id
        }, {
            title,
            content
        })
        if (!article) return res.status(404).json({ msg: 'Article Not Found' })
        res.status(200).json({ msg: 'Article Deleted Successfully' })
    

})


module.exports = router;