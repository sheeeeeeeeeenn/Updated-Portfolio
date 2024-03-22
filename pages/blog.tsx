// pages/blog.tsx
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Flex } from 'theme-ui';
import { getTechnologyArticles } from '../services/newsapi'; // Adjust import path as needed
import { NewsArticle, BlogPlatform } from '../services/_type'; // Adjust import path as needed
import Window from '../src/components/molecules/Window';
import ContentPane from '../src/components/pages/blog/ContentPane';
import NavigationPane from '../src/components/pages/blog/NavigationPane';
import Layout from '../src/components/pages/Layout';

type PageProps = {
  technologyArticles: NewsArticle[];
  lastUpdated?: string;
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const technologyArticles = await getTechnologyArticles();
  return {
    revalidate: 604800, // Example: revalidate once a week
    props: {
      technologyArticles,
      lastUpdated: new Date().toLocaleDateString(),
    },
  };
};

export default function Blog({ technologyArticles, lastUpdated }: PageProps) {
  const router = useRouter();
  // Use a query parameter to determine the active platform
  const activePlatform = router.query.platform || BlogPlatform.Technology;

  return (
    <Window title="Technology News">
      <Flex sx={{ flexDirection: ["column", null, "row"] }}>
        <NavigationPane
          activePlatform={activePlatform as BlogPlatform}
          lastUpdated={lastUpdated}
          onNavigate={(platform) => router.push(`/?platform=${platform}`, undefined, { shallow: true })}
        />
        <ContentPane
          activePlatform={activePlatform as BlogPlatform}
          articles={{ [BlogPlatform.Technology]: technologyArticles }}
        />
      </Flex>
    </Window>
  );
}

Blog.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
