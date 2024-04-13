import { useState, useEffect } from "react";
import axios from "axios";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [shown, setShown] = useState<boolean>(false);
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
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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

      <button className='mt-2 text-white bg-darkRed p-1 rounded-md' style={{ width: '70px' }}
        onClick={() => {
          console.log("Sign in attempted")
        }}
      >Sign in</button>
      <button className='mt-1 text-white bg-darkRed p-1 rounded-md' style={{ width: '70px' }}
        onClick={() => { location.href = '/signup' }}>
        <p>Sign up</p></button>


      {/* <button className='text-red-500'  style={{width: '70px' }}
              onClick={() => {
                console.log("Red attempted")
              }}
            ><p>Red</p></button> */}
    </div>
  )
}
export default SignIn;