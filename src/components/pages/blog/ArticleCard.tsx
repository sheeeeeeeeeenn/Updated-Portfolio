import { darken, lighten } from "@theme-ui/color";
import Link from "next/link";
import { ThemeUICSSObject } from "theme-ui";
import { NewsArticle } from "../../../../services/_type"; // Ensure correct path
import useInBreakpoint from "../../../hooks/useInBreakpoint";
import useMatchTheme from "../../../hooks/useMatchTheme";
import { format } from "../../../misc/utils"; // Ensure this utility can format dates appropriately
import { ThemeMode } from "../../../themes";
import ReactIcon from "../../atoms/IconReact"; // Icon component
import Tag from "../../atoms/Tag"; // Tag component for displaying metadata tags or categories
import { H3 } from "../../atoms/Typography";

type ArticleCardProps = {
  article: NewsArticle;
  isLast?: boolean;
};

export default function ArticleCard({ article, isLast }: ArticleCardProps) {
  const isMobile = useInBreakpoint(0);
  const publishedAt = format(article.publishedAt); // Assuming format() can handle NewsArticle's publishedAt formatting

  // Styling logic remains the same
  const hoverStyle = (color: any): ThemeUICSSObject => ({
    "&:hover": { h3: { color }, ".views": { color } },
  });

  const linkStyle: ThemeUICSSObject = {
    // Styling code as previously defined
  };

  const lineStyle: ThemeUICSSObject = {
    // Styling code as previously defined
  };

  // Assuming use of a generic icon for all articles, or logic to choose based on article content
  const iconToShow = "BsFillCameraVideoFill"; // Placeholder icon name, adjust based on actual icons and logic

  return (
    <>
      <Link href={article.url} passHref>
        <a sx={linkStyle} target="_blank">
          <div sx={{ mb: 6 }}>
            <H3 style={{ fontWeight: 600, fontSize: 18, mb: 2 }}>
              {/* Displaying an icon next to the article title */}
              <ReactIcon iconName={iconToShow} /> {article.title}
            </H3>
            <span>
              {publishedAt} - <i>{article.author || 'Unknown'}</i>
            </span>
            {/* Example of using Tag components, assuming article.sourceName can act as a tag */}
            <div sx={{ display: "flex", marginTop: 2 }}>
              <Tag>{article.sourceName}</Tag>
            </div>
          </div>
          {/* Adjust or extend content here */}
        </a>
      </Link>
      {!isLast && <hr sx={lineStyle} />}
    </>
  );
}
