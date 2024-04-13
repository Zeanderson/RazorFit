import HamburgerMenu from "../components/HamburgerMenu";
import logoImage from "../images/MainLogoTrans1.png"

let globalAllHogs: PriceData[]
let globalMyHogs: PriceData[]
//------------------------------------------------------------------------------------------------------
// Standard page header
function Header() {
    return (
        <div className="flex flex-row bg-darkRed pl-4 pr-4 w-screen justify-between items-center">
            <div className="flex flex-row gap-4">
                <HamburgerMenu />
                <h1>Razor Fit</h1>
            </div>
            <div>
                <img src={logoImage} style={{ width: '300px', height: '120px' }}/>
            </div>
            <div>
                <p>Currency: 100 Piggies</p>
            </div>
        </div>
    )
}
//------------------------------------------------------------------------------------------------------
// grab individual hog image
function getImage(Hog: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const imagePath = "/Image/" + Hog + "/1.jpg" //TODO fix this shit
        const image = new Image()

        image.onload = () => {
            resolve(image.src)
        }

        image.onerror = (error) => {
            reject(error)
        }
        image.src = imagePath
    })
}

interface PriceData {
    Hog: string
    Cost: number
}

async function getAllHogs(): Promise<PriceData[]> {
    const response = await fetch('/getPrices()')
    const data = await response.json()
    const array: PriceData[] = data.map((item: any) => (
        {
            Hog: item.Hog,
            Cost: item.Cost
        }
    ))
    return array
}

async function getMyHogs(): Promise<PriceData[]> {
   const response = await fetch('/getPrices()')
    const data = await response.json()
    const array: PriceData[] = data.map((item: any) => (
        {
            HogOwned: item.Hog,
            //User: item.Cost
        }
    ))
    return array
}

function SetUp() {
    // return (
    //     _globalAllHogs: PriceData[]
    //     globalAllHogs = getAllHogs()
    // )
}

function Menu() {
    return (
        <div className="container mx-auto p-4">
          <ul className="list-disc">
            <li className="mb-2">
                <div>

                </div>
            </li>
            <li className="mb-2">
                Item 2
            </li>
            <li className="mb-2">
                Item 3
            </li>
            <li className="mb-2">
                Item 4
            </li>
            <li className="mb-2">
                Item 5
            </li>
          </ul>
        </div>
      );
    };

function Shop() {
    return (
      <div className="flex flex-col gap-4">
        <Header />
        {/* <SetUp /> */}
        <Menu />
      </div>
    )
}
export default Shop;