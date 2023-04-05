const { Post, Comment } = require("../models");
const PostRepository = require("../repositories/PostRepository");

const postRepository = new PostRepository(Post);

const index = async (req, res) => {
  try {
    const posts = await postRepository.findAll();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const create = async (req, res) => {
  try {
    const post = await postRepository.create(req.body);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const show = async (req, res) => {
  try {
    const post = await postRepository.findById(req.params.id);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const update = async (req, res) => {
  try {
    const post = await postRepository.update(req.params.id, req.body);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const destroy = async (req, res) => {
  try {
    const post = await postRepository.delete(req.params.id);
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPostsWithComments = async (req, res) => {
  try {
    const posts = await postRepository.getPostsWithComments();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
  getPostsWithComments,
};
