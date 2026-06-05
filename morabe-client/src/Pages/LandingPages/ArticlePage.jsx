import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import { fetchArticleByName } from "../../services/ArticleService.js";

function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadArticle = async () => {
      try {
        const { data } = await fetchArticleByName(name);
        if (active) setArticle(data);
      } catch (err) {
        console.error("Failed to load article:", err);
        if (active) setArticle(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadArticle();

    return () => {
      active = false;
    };
  }, [name]);

  if (loading || !article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">
              {loading ? "Loading article..." : "Article not found"}
            </h1>
            <Button to="/articles" className="mt-6">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  // no forced errors here — render the article if found

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles">+ Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Article
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            {article.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200 mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </div>
          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            {(article.content || []).map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-zinc-700 whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
