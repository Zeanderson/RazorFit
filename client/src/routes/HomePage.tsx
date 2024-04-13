import HamburgerMenu from "../components/HamburgerMenu";
import BubbleButton from "../components/BubbleBox";
import GameBox from "../components/GameBox";
import hogImage from "../images/MainLogoBig.png"
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faFireAlt, faStore, faUser } from "@fortawesome/free-solid-svg-icons";

type headProps = {
    currency: string
}

function Header({ currency }: headProps) {
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
                <p>Currency: {currency} coins</p>
            </div>
        </div>
    )
}
type infoProps = {
    user: string
    weight: string
    height: string
    calGoal: string
    calBurn: string
}

function InformationTabs({ user, calGoal, calBurn }: infoProps) {
    return (
        <div className="flex flex-col gap-4 p-2 pt-0">
            <BubbleButton>
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <p>{user}</p>
                </div>
            </BubbleButton>

            <BubbleButton link="/shop">
                <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faStore} />
                    <p>Store</p>
                </div>
            </BubbleButton>

            <BubbleButton link="/calorie">
                <div>
                    {"Health/Food"}
                    <div className="flex flex-col gap-1 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <FontAwesomeIcon icon={faFire} />
                            <p>{"Calorie Goal"}</p>
                        </div>
                        <p>{calGoal}</p>
                    </div>


                </div>
            </BubbleButton>
            <BubbleButton link="/exercise">
                <div>
                    {"Exercise/Fitness"}
                    <div className="flex flex-col gap-1 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <FontAwesomeIcon icon={faFireAlt} />
                            <p>{"Burned Calories"}</p>
                        </div>
                        <p>{calBurn}</p>
                    </div>
                </div>
            </BubbleButton>
        </div>
    )
}

type bodyProps = {
    user: string
    weight: string
    height: string
    calGoal: string
    calBurn: string
}

function Body({ user, weight, height, calGoal, calBurn }: bodyProps) {
    return (
        <div className="flex flex-row gap-4 justify-evenly">
            <InformationTabs user={user} weight={weight} height={height} calGoal={calGoal} calBurn={calBurn} />
            <GameBox />
        </div>
    )
}

function Home() {
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState(null);
    const [userData, setUserData] = useState(null);

    const [currLoading, setCurrLoading] = useState(true);
    const [currError, setCurrError] = useState(null);
    const [currData, setCurrData] = useState(null);

    const [weightLoading, setWeightLoading] = useState(true);
    const [weightError, setWeightError] = useState(null);
    const [weightData, setWeightData] = useState(null);

    const [heightLoading, setHeightLoading] = useState(true);
    const [heightError, setHeightError] = useState(null);
    const [heightData, setHeightData] = useState(null);

    const [calGoalLoading, setCalGoalLoading] = useState(true);
    const [calGoalError, setCalGoalError] = useState(null);
    const [calGoalData, setCalGoalData] = useState(null);

    const [calBurnLoading, setCalBurnLoading] = useState(true);
    const [calBurnError, setCalBurnError] = useState(null);
    const [calBurnData, setCalBurnData] = useState(null);

    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const user = urlParams.get('user')

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await axios.get(`http://localhost:5000/getFname?User=${user}`);
                setUserData(userData.data);
            } catch (error: any) {
                setUserError(error);
            } finally {
                setUserLoading(false);
            }
        };

        const fetchCurrency = async () => {
            try {
                const currData = await axios.get(`http://localhost:5000/getCurrency?User=${user}`);
                setCurrData(currData.data);
            } catch (error: any) {
                setCurrError(error);
            } finally {
                setCurrLoading(false);
            }
        };

        const fetchWeight = async () => {
            try {
                const weightData = await axios.get(`http://localhost:5000/getWeight?User=${user}`);
                setWeightData(weightData.data);
            } catch (error: any) {
                setWeightError(error);
            } finally {
                setWeightLoading(false);
            }
        };

        const fetchHeight = async () => {
            try {
                const heightData = await axios.get(`http://localhost:5000/getHeight?User=${user}`);
                setHeightData(heightData.data);
            } catch (error: any) {
                setHeightError(error);
            } finally {
                setHeightLoading(false);
            }
        };

        const fetchCalGoal = async () => {
            try {
                const calGoalData = await axios.get(`http://localhost:5000/getCalGoal?User=${user}`);
                setCalGoalData(calGoalData.data);
            } catch (error: any) {
                setCalGoalError(error);
            } finally {
                setCalGoalLoading(false);
            }
        };

        const fetchCalBurn = async () => {
            try {
                const calBurnData = await axios.get(`http://localhost:5000/getCalBurn?User=${user}`);
                setCalBurnData(calBurnData.data);
            } catch (error: any) {
                setCalBurnError(error);
            } finally {
                setCalBurnLoading(false);
            }
        };
        fetchUser();
        fetchCurrency();
        fetchWeight();
        fetchHeight();
        fetchCalGoal();
        fetchCalBurn();
    }, []);

    // Render loading state
    if (userLoading || currLoading || weightLoading || heightLoading || calGoalLoading || calBurnLoading) return <div>Loading...</div>;

    // Render error state
    if (userError || currError || weightError || heightError || calGoalError || calBurnError) return <div>Error </div>;

    return (

        <div className="flex flex-col gap-4">
            <Header currency={currData ?? ''} />
            <Body user={userData ?? ''} weight={weightData ?? ''} height={heightData ?? ""} calGoal={calGoalData ?? ''} calBurn={calBurnData ?? ''} />
        </div>
    )
}
export default Home;