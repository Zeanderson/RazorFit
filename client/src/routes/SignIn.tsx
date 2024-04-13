import { useState } from "react";

function SignIn() {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [shown, setShown] = useState<boolean>(false);



    return (
        <div className="flex flex-col gap-2  h-screen items-center">
          <div className="flex flex-col items-center gap-1">
            <h1 className="mt-10 text-5xl font-bold text-red-700">
                RazorFit
            </h1>
          </div>
          <div className="text-3xl text-center "></div>
            <hr></hr><hr></hr>
          <div>
            <input  
              id="userName"
              placeholder="Username"
              className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <br></br><br></br>
            <input
              id="pass"
              placeholder="Password"
              className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            {shown ? (
                <p className="text-red-500"> Invalid credentials</p>
            ) : null}
          </div>

            <button className='mt-2 text-white bg-darkRed p-1 rounded-md' style={{width: '70px' }}
              onClick={() => {
                console.log("Sign in attempted")
              }}
            >Sign in</button>
            <button className='mt-1 text-white bg-darkRed p-1 rounded-md'  style={{width: '70px' }}
              onClick={() => {
                console.log("Sign up attempted")
              }}
            ><p>Sign up</p></button>
            
            
            {/* <button className='text-red-500'  style={{width: '70px' }}
              onClick={() => {
                console.log("Red attempted")
              }}
            ><p>Red</p></button> */}
        </div>
    )
}
export default SignIn;