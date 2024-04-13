import { useState } from "react";
import axios from "axios";
async function checkAuth(user: string, pass: string): Promise<boolean> {
  try {
    const response = await axios.get('http://localhost:5000/Authenticate_user', {
      params: {
        User: user,
        Pwd: pass
      }
    })
    return response.data === "Pass";
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

function Signin() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [shown, setShown] = useState<boolean>(false);
  return (
    <div
      className="flex items-center justify-center h-screen font-Arvo"
    >
      <div
        className={
          "flex flex-col gap-5 p-10 bg-darkRed rounded-2xl shadow-inner shadow-black"
        }
      >
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl text-center">Sign In</h1>
        </div>
        <div className="flex flex-col gap-4">
          <input
            id="user"
            placeholder="Username"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />

          <input
            id="pass"
            placeholder="Password"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {shown ? (
            <p className="text-red-500">Invalid credintials</p>
          ) : null}
        </div>

        <button
          onClick={() => {
            checkAuth(user, password).then((authenticated) => {
              if (authenticated) {
                const userParam = user;
                window.location.href = '/home?user=' + encodeURIComponent(userParam);
              } else {
                setShown(true)
              }
            }).catch(error => {
              console.error("Error:", error);
              // Handle error
            });
          }}
          className="border border-solid rounded-xl p-1 hover:bg-lightRed "
        >
          Sign In
        </button>

        <button
          className="border border-solid rounded-xl p-1 hover:bg-lightRed"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Sign Up
        </button>
      </div>

    </div>
  );
}

export default Signin;
