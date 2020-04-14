const express = require('express');

const Posts = require('./data/db.js');

const router = express.Router();

router.get('/', (req, res) => {
    Posts.find(req.body)
    .then(posts => {res.status(200).json(posts); 
    })
    .catch(error => {res.status(500).json({error: "post lost"})
})
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Posts.findById(id)
    .then(post => {
        if (!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        } else {return res.status(200).json(post)}
    })
    .catch(error => {
        console.log(error);
        res.status(500)
        .json({error: 'The post information could not be retrieved.'});
    });
});

router.get('/:id/comments', (req, res) => {
    const id = req.params.id;
    Posts.findPostComments(id)
    .then(posts => {
        if (post.length === 0) {
            res.status(404).json({message: 'The post with the specified ID does not exist.'});
        } else {return res.status(200).json(post);}
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'The comments information could not be retrieved.'});
    });
});

router.post('/', (req, res) => {
    const { title, contents} = req.body;
    if(!title || !contents) {
        res.status(400).json({error: 'Please provide title and contents for the post.'})
    } else {
        Posts.insert(req.body)
        .then(post => {res.status(201.json({error: 'cannot save'})
        )}
        )
    }
});