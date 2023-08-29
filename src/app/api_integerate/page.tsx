const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    method: "GET",
    next: {
        revalidate: 5
    }
    // cache: "no-store",
  });
  console.log(res);
  const data = await res.json();
    return data;

  }


// interface IBook {
//   id: number;
//   name: string;
//   type: string;
//   avaliable: boolean;
// }

interface IQuote {
    content: string,
}

export default async function Home() {
  //   const data: IBook[] = await getBooksData();
  const quote:IQuote = await getData();
  console.log(quote);
  
  return <div>{quote.content}</div>;
}
