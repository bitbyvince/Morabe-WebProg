const Article = require("../models/Article");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    const { name, title, content, image, status } = req.body;

    if (!name || !title) {
      return res.status(400).json({ message: "Name and title are required" });
    }

    const article = await Article.create({
      name,
      title,
      image: image || "",
      content: Array.isArray(content)
        ? content
        : typeof content === "string"
          ? content.split("\n").filter(Boolean)
          : [],
      status: status || "Active",
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { name, title, content, image, status } = req.body;
    const update = {
      ...(name !== undefined && { name }),
      ...(title !== undefined && { title }),
      ...(image !== undefined && { image }),
      ...(status !== undefined && { status }),
    };

    if (content !== undefined) {
      update.content = Array.isArray(content)
        ? content
        : typeof content === "string"
          ? content.split("\n").filter(Boolean)
          : [];
    }

    const article = await Article.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).json({ message: "Article not found" });
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
