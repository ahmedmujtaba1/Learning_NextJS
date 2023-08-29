const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    method: "GET",
    next: {
      revalidate: 5,
    },
    // cache: "no-store",
  });
  console.log(res);
  const data = await res.json();
  return data;
};
interface IQuote {
  content: string;
}

// interface IBook {
//   id: number;
//   name: string;
//   type: string;
//   avaliable: boolean;
// }

async function Fetching() {
  const quote: IQuote = await getData();
  console.log(quote);
}
