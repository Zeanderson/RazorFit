import HamburgerMenu from "../components/HamburgerMenu";
import logoImage from "../images/MainLogoTrans1.png"
import standardHog from "../images/baseHog/0.png"
import footballHog from "../images/fbHog/0.png"
import baseballHog from "../images/baHog/0.png"

//------------------------------------------------------------------------------------------------------
// Standard page header
function Header() {
    return (
        <div className="flex flex-row bg-darkRed pl-4 pr-4 w-screen justify-between items-center">
            <div className="flex flex-row gap-4">
                <HamburgerMenu />
                <h1>Shop</h1>
            </div>
            <div>
                <img src={logoImage} style={{ width: '300px', height: '120px' }} />
            </div>

        </div>
    )
}

function Menu() {
    return (
        <div className="container mx-auto p-4">
            <ul className="flex flex-wrap gap-5">
                <li className="flex flex-col items-center">
                    <div className="bg-darkRed p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Standard Hog</h2>
                        <img src={standardHog} style={{ width: '150px', height: '120px' }} alt="Standard Hog" />
                        <div className="flex flex-row gap-2 items-center">
                            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy
                            </button>
                            <p>5 coins</p>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col items-center">
                    <div className="bg-darkRed p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Football Hog</h2>
                        <img src={footballHog} style={{ width: '150px', height: '120px' }} alt="Standard Hog" />
                        <div className="flex flex-row gap-2 items-center">
                            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy
                            </button>
                            <p>12.5 coins</p>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col items-center">
                    <div className="bg-darkRed p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-2">Baseball Hog</h2>
                        <img src={baseballHog} style={{ width: '150px', height: '120px' }} alt="Baseball Hog" />
                        <div className="flex flex-row gap-2 items-center">
                            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy
                            </button>
                            <p>25 coins</p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
    );
};

function Shop() {
    return (
        <div className="flex flex-col gap-4">
            <Header />
            <Menu />
        </div>
    )
}
export default Shop;