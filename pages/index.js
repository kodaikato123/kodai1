import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[I’m Kodai Kato, a 20-year-old from Macabebe, Pampanga, who enjoys playing online games, basketball, and exploring Filipino cuisine, particularly kare-kare and adobo. I’m pursuing IT due to my fascination with technology and problem-solving, and I’m eager to delve into software development, cybersecurity, or data analysis after graduation, with a focus on system design, integration, and architecture in my studies.]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
