const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticle,
  getArticleByName,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

router.route("/").get(getArticles).post(createArticle);
router.route("/name/:name").get(getArticleByName);
router.route("/:id").get(getArticle).put(updateArticle).delete(deleteArticle);

module.exports = router;
