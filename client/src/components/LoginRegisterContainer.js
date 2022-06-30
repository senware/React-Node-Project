import { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'

const LoginRegisterContainer = () => {
  const [registerReady, setRegisterReady] = useState(false)

  return (
    <form className="LoginRegisterContainer">
      <div id="formContainer">
        <label for="uname">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        ></input>
        {registerReady && (
          <>
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-Type Password"
              name="confirmPassword"
              required
            ></input>
          </>
        )}
        <div id="buttonContainer">
          <button
            type="button"
            onClick={() => {
              registerReady
                ? setRegisterReady(false)
                : () => {
                    // TODO: Call API
                  }
            }}
          >
            {registerReady ? <MdArrowBack /> : 'Login'}
          </button>
          <button
            type="button"
            onClick={() => {
              registerReady
                ? () => {
                    // TODO: Call API
                  }
                : setRegisterReady(true)
            }}
          >
            Register
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginRegisterContainer
