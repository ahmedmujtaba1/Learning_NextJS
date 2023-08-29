export const getBooksData = async () => {
  const res = await fetch("https://simple-books-api.glitch.me/books/");
  console.log(res);
  if (res.ok) {
    console.log("Failed error to fetch Data");

    const data = await res.json();
    return data;
  }
};

interface IBook {
  id: number;
  name: string;
  type: string;
  avaliable: boolean;
}

export default async function Home() {
  const data: IBook[] = await getBooksData();
  return (
    <>
      {data.map((book) => {
        return (
            <h1>{book.name}</h1>
        )
      })}
    </>
  );
}
