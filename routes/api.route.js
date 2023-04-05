const router = require("express").Router();
const postController = require("../controllers/PostController");

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/posts", postController.index);
router.post("/posts", postController.create);
router.get("/posts/:id", postController.show);
router.patch("/posts/:id", postController.update);
router.delete("/posts/:id", postController.destroy);
router.get("/posts/comments", postController.getPostsWithComments);

module.exports = router;
