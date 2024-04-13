import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


// async function registerUser(username: string, pass: string, firstName: string, lastName: string) {
//     try {
//         const response = await axios.post("api/v1/user/register", {
//             firstName: firstName,
//             lastName: lastName,
//             username: username,
//             password: pass
//             weight: weight
//             height: height
//         })
//         console.log("Response: " + response)
//     } catch (error) {
//         console.error("Error: ", error)
//     }
// }

function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        <h1 className="mt-10 font-bold text-3xl text-darkRed text-center">Sign Up</h1>
      </div>
      <div className=" bg-darkRed p-10 rounded-lg">
        <form id="form" className="flex flex-col gap-2">
          <label htmlFor="firstName" className="block text-medium text-black">First Name:</label>
          <input
            id="firstName"
            placeholder="First Name"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <label htmlFor="lastName" className="block text-medium text-gray-600">Last Name:</label>
          <input
            id="lastName"
            placeholder="Last Name"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <label htmlFor="username" className="block text-medium text-gray-600">Username:</label>
          <input
            id="username"
            placeholder="Username"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label htmlFor="password" className="block text-medium text-gray-600">Password: </label>
          <input
            id="pass"
            placeholder="Password"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor="confPassword" className="block text-medium text-gray-600">Confirm Password: </label>
          <input
            id="confirm-pass"
            placeholder="Confirm Password"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={confPassword}
            type="password"
            onChange={(event) => setConfPassword(event.target.value)}
          />

          <label htmlFor="weight" className="block text-medium text-gray-600">Weight: </label>
          <input
            id="weight"
            placeholder="Weight"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />

          <label htmlFor="height" className="block text-medium text-gray-600">Optional: Height</label>
          <input
            id="height"
            placeholder="Optional: Height"
            className="max-w-xs rounded-lg p-2 bg-slate-300 text-black"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />

          {inputError ? <p className="text-red-500 text-center text-xs italic">{error}</p> : null}
          {success ? <p className="text-green-500 text-center">Success</p> : null}
        </form>
      </div>
      <button
        onClick={() => {
          if (
            firstName === "" ||
            lastName === "" ||
            username === "" ||
            password === "" ||
            confPassword === "" ||
            weight === ""
          ) {
            setInputError(true)
            setSuccess(false)
            setError("One or more fields are empty")
          } else if (password !== confPassword) {
            setInputError(true)
            setSuccess(false)
            setError("Passwords do not match")
          } else {
            // registerUser(username, password, firstName, lastName, weight, height)
            setSuccess(true)
            setInputError(false)
            window.location.href = "/"
          }
        }}
        className="border border-solid rounded-xl p-2 text-xl bg-black hover:border-Corp3"
      >
        Sign Up
      </button>
    </div>
  )
}

export default Register;