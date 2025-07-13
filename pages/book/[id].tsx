
import books from "@/mock/books.json";
import { useRouter } from "next/router";
import style from "./[id].module.css";
import { BookData } from "@/types";


export default function Page() {
  const router = useRouter();
  const id = router.query.id as string;

  const book: BookData | undefined = books.find(book => book.id === parseInt(id, 10));

  const {
    title,
    subTitle,
    author,
    publisher,
    coverImgUrl,
    description
  } = book as BookData;
  return <div className={style.container}>
    <div
      className={style.cover_img_container}
      style={{ backgroundImage: `url('${coverImgUrl}')` }} >
      <img src={coverImgUrl} alt={`${title} cover`} />
    </div>

    <div className={style.title}>{title}</div>
    <div className={style.subTitle}>{subTitle}</div>
    <div className={style.author}>{author} | {publisher}</div>
    <div className={style.description}>
      {description}
    </div>
  </div>;
}

