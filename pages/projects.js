import Head from 'next/head';
import styles from '../styles/project.module.css';
import Link from 'next/link';
import { Button, Card } from '../components';
import Img from '../public/assets/bookmark/images/desktop-preview.jpg';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>
          <h2>Welcome to the projects page</h2>
        </div>
        <div>
          <div className={styles.cardContainer}>
            <Card
              title='Bookmark Landing'
              details=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque cupiditate nisi modi distinctio voluptatem dignissimos est rerum nesciunt illo.'
              img={Img}
            >
              <Button>
                <Link href='/bookmark-landingpage'>
                  <a>Live view </a>
                </Link>
              </Button>
            </Card>
          </div>
          <Button>
            <Link href='/'>
              <a>Go Home</a>
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};
export default Projects;