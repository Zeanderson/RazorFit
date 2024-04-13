import HamburgerMenu from "../components/HamburgerMenu";
import BubbleBox from "../components/BubbleBox";
import GameBox from "../components/GameBox";
import hogImage from "../images/MainLogoBig.png"


function Header() {
    return (
        <div className="flex flex-row bg-darkRed pl-4 pr-4 w-screen justify-between items-center">
            <div className="flex flex-row gap-4">
                <HamburgerMenu />
                <h1>Razor Fit</h1>
            </div>
            <div>
                <img src={hogImage} style={{ width: '500px', height: '100px' }} />
            </div>
            <div>
                <p>Currency: 100 Piggies</p>
            </div>
        </div>
    )
}

function InformationTabs() {
    return (
        <div className="flex flex-col gap-4">
            <BubbleBox>
                <div>
                    {"User Info"}
                </div>
            </BubbleBox>
            <BubbleBox>
                <div>
                    {"Calories"}
                </div>
            </BubbleBox>
            <BubbleBox>
                <div>
                    {"Exercise"}
                </div>
            </BubbleBox>
        </div>
    )
}

function Body() {
    return (
        <div className="flex flex-row gap-4 justify-evenly">
            <InformationTabs />
            <GameBox />
        </div>
    )
}

function Home() {
    return (
        <div className="flex flex-col gap-4">
            <Header />
            <Body />
        </div>
    )
}
export default Home;