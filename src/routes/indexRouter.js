import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';
import Post from '../db';

const router = express.Router();

router.get('/:page', async (req, res) => {
  const { page } = req.params;
  const posts = await Post.findByPage(page);
  const initState = { path: req.originalUrl, posts };
  const layoutComponent = React.createElement(Layout, { initState });
  const html = renderToString(layoutComponent);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/', async (req, res) => {
  res.redirect('/1');
});

export default router;
