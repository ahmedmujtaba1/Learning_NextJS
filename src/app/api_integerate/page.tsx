const getData = async () => {
    const res = await fetch("simple-books-api.glitch.me/books/")
    const data = await res.json()
    return data
}

export default async function Home() {
    const data = await getData()
    return(
        <>
        testing {data[1].name}
        </>
    )
}