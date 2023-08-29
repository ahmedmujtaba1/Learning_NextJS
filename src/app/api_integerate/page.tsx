export const getBooksData = async () => {
    const res = await fetch("https://simple-books-api.glitch.me/books/")
    console.log(res);
}


export default async function Home() {
    const data = await getBooksData()
    return(
        <>
        testing {data}
        </>
    )
}