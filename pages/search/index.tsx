import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";


export default function Page() {
  const router = useRouter();
  const q = router.query.q as string;
  
  return <div>
    {books.filter(book=>book.title.includes(q)).map((book) => <BookItem key={book.id} {...book} />)}
  </div>;
}


Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}