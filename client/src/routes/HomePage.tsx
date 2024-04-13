import HamburgerMenu from "../components/HamburgerMenu";
import BubbleBox from "../components/BubbleBox";
import GameBox from "../components/GameBox";
import hogImage from "../images/MainLogoBig.png"
import axios from "axios";
import { useState, useEffect } from "react";

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
type infoProps = {
    user: string
}

function InformationTabs({ user }: infoProps) {
    return (
        <div className="flex flex-col gap-4">
            <BubbleBox>
                <div>
                    <p>{user}</p>
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

type bodyProps = {
    user: string
}

function Body({ user }: bodyProps) {
    return (
        <div className="flex flex-row gap-4 justify-evenly">
            <InformationTabs user={user} />
            <GameBox />
        </div>
    )
}

function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/getFname?User=ZachA`);
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Render loading state
    if (loading) return <div>Loading...</div>;

    // Render error state
    if (error) return <div>Error </div>;

    return (

        <div className="flex flex-col gap-4">
            <Header />
            <Body user={data ?? ''} />
        </div>
    )
}
export default Home;