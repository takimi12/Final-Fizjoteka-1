import Link from "next/link";
import Arrow from "../../../../public/assets/Blog/arrow.svg";
import ArrowBack from "../../../../public/assets/Blog/arrowBack.svg";
import Image from "next/image";
import styles from "./SinglePost.module.scss";
import Calendar from "../../../../public/assets/Blog/calendar.svg";
import Person from "../../../../public/assets/Blog/person.svg";
import Facebook from "../../../../public/assets/Blog/blogpost/facebook.svg";
import WhatsUpp from "../../../../public/assets/Blog/blogpost/whatsUp.svg";
import Author from "../../../../public/assets/Blog/blogpost/author (1).webp";

interface Blog {
  id: string;
  createdAt: string;
  author: string;
  tytul: string;
  slugs: string[];
  richText: {
    html: string;
  };
}

interface BlogId {
  id: string;
}

export default async function BlogPage({ params }: { params: { id: string | string[] } }) {
  const pathname = Array.isArray(params.id) ? params.id.join("/") : params.id;

  const blogResponse = await fetch(`https://fizjoteka.vercel.app/api/gql/blogposts?id=${pathname}`);
  const blogsResponse = await fetch(`https://fizjoteka.vercel.app/api/gql/blog`);

  if (!blogResponse.ok || !blogsResponse.ok) {
    return <div>Error: Failed to fetch data</div>;
  }

  const blog: Blog = await blogResponse.json();
  const blogs: BlogId[] = await blogsResponse.json();

  if (!blog) {
    return <div>Error: Blog post not found</div>;
  }
  if (!blogs) {
    return <div>Error: Blog posts not found</div>;
  }

  const publishedDate = new Date(blog.createdAt);
  const formattedDate = publishedDate.toLocaleDateString();

  const currentIndex = blogs.findIndex((b) => b.id === pathname);
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.blogContainer}>
        <h1>{blog.tytul}</h1>
        <div className={styles.iconWrapper}>
          <div className={styles.iconInner}>
            <Image src={Calendar} width={15} height={15} alt="Calendar" />
            {formattedDate}
          </div>
          <div className={styles.calendar}>
            <Image src={Person} width={15} height={15} alt="Person" />
          </div>
          <div>{blog.author}</div>
        </div>
        <div className={styles.richText} dangerouslySetInnerHTML={{ __html: blog.richText.html }} />

        <div className={styles.pagination}>
          {prevBlog && (
            <Link className={styles.step} href={`/pl/blog/${prevBlog.id}`}>
              <Image src={ArrowBack} alt="Previous post" width={10} height={10} />
              Poprzedni wpis
            </Link>
          )}
          {nextBlog && (
            <Link className={styles.step} href={`/pl/blog/${nextBlog.id}`} style={{ marginLeft: "10px" }}>
              Następny wpis
              <Image src={Arrow} alt="Next post" width={10} height={10} />
            </Link>
          )}
        </div>
      </div>
      <section className="Container">
        <div className={styles.authorShare}>
          <b>Udostępnij</b>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://efizjoteka.com/blog/post/prowadzanie-za-raczke">
            <Image src={Facebook} width={30} height={30} alt="Facebook" />
          </a>
          <a href="https://web.whatsapp.com/send?text=%20Zapraszam na %20https://efizjoteka.com/blog/post/prowadzanie-za-raczke">
            <Image src={WhatsUpp} width={30} height={30} alt="WhatsApp" />
          </a>
        </div>

        <div className={styles.authorContent}>
          <div>
            <Image src={Author} width={300} height={300} alt="Author" />
          </div>
          <div>
            <h5>Autorka: mgr Magdalena Adaś</h5>
            <p>
              Jestem fizjoterapeutką dziecięcą. Ta praca to moje marzenie i pasja. Poza bezpośrednim wsparciem
              pacjentów, staram się, aby wiedza na temat prawidłowej pielęgnacji dzieci trafiła do jak największej
              liczby rodziców. Stąd moje działania online. Z moich materiałów każdego miesiąca korzystają tysiące
              rodziców.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}