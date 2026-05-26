import { useEffect, useState } from "react";
import Button from "../../components/Button.jsx";
import ArticleList from "../../components/ArticleList.jsx";
import { fetchArticles } from "../../services/ArticleService.js";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadArticles = async () => {
      try {
        const response = await fetchArticles();
        if (!active) return;
        // API returns { articles: [...] } so use that array
        setArticles((response.data && response.data.articles) || []);
      } catch (err) {
        console.error("Failed to load articles:", err);
        if (!active) return;
        setError("Unable to load articles. Please try again later.");
      } finally {
        if (active) setLoading(false);
      }
    };

    loadArticles();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Featured articles in a simple card grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          A clean wireframe section for article thumbnails, titles, short
          descriptions, and one clear action per card.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500"></p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card
          </h2>
        </div>

        {loading ? (
          <p className="text-sm text-zinc-600">Loading articles...</p>
        ) : error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : (
          <ArticleList articles={articles} />
        )}
      </section>
    </div>
  );
};

export default ArticleListPage;
