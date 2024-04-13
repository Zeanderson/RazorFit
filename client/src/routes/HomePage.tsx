import HamburgerMenu from "../components/MainBanner";

function Header() {
    return (
        <div className="flex flex-row bg-darkRed p-4 w-screen justify-between items-center">
            <div className="flex flex-row gap-4">
                <HamburgerMenu />
                <h1>Razor Fit</h1>
            </div>
            <div>
                <p>Image</p>
            </div>
            <div>
                <p>Currency: 100 Piggies</p>
            </div>
        </div>
    )
}

function Body() {
    return (
        <div>
            {"Hello :)"}
        </div>
    )
}

function Home() {
    return (
        <div className="flex flex-col gap-2">
            <Header />
            <Body />
        </div>
    )
}
export default Home;