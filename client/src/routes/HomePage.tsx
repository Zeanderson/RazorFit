

function Header() {
    return (
        <div className="flex flex-row rounded bg-darkRed gap-2 py-2 pl-5 pr-5 items-center relative max-h-0.5">
            <h1>Hello</h1>
        </div>
    )
}

function Body() {
    return (
        <div>
            {'Body'}
        </div>
    )
}

function Home() {
    return (
        <div className="flex flex-row gap-2">
            <Header />
            <Body />
        </div>
    )
}
export default Home;