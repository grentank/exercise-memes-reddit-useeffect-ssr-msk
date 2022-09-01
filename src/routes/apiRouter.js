import express from 'express';
import Post from '../db';

const router = express.Router();

router.get('/:page', async (req, res) => {
  const { page } = req.params;
  const posts = await Post.findByPage(page);
  res.json(posts);
});

export default router;
