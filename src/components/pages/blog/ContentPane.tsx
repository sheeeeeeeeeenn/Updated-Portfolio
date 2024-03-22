// ContentPane.tsx
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { NewsArticle } from "../../../../services/_type"; // Update the path as necessary
import { fade } from "../../../animations/fade";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { ThemeMode } from "../../../themes";
import ArticleCard from "./ArticleCard";

type Articles = {
  Technology: NewsArticle[]; // Adjust as per your structure
};

type ContentPaneProps = {
  articles: Articles;
  activePlatform: keyof Articles; // Ensuring the activePlatform matches the keys in Articles
};

export default function ContentPane({ articles, activePlatform }: ContentPaneProps) {
  const articleList = articles[activePlatform] || []; // Fallback to an empty array if undefined

  // Theme handling, adjust useMatchTheme and ThemeMode according to your theme implementation
  const theme = useMatchTheme(ThemeMode.Tron) ? "transparent" : "background";

  return (
    <div sx={{ bg: theme, p: 4, flex: 1 }}>
      <AnimatePresence exitBeforeEnter>
        {articleList.map((article, index) => (
          <motion.div
            key={article.url} // Using article URL as a unique key
            {...fade} // Assuming fade animation is defined and imported correctly
            transition={{ staggerChildren: 0.1 }}
          >
            {/* ArticleCard is a child component used to render each article */}
            {/* Ensure ArticleCard accepts a NewsArticle type and renders it accordingly */}
            <ArticleCard article={article} isLast={index === articleList.length - 1} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
