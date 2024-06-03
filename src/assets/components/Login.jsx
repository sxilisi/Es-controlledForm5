import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export default function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin() {
    console.log(data);

    onLogin(data);
  }

  function handleReset() {
    setData(createData());
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleLogin();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>My Form</h1>
        <input
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          name="session"
          type="checkbox"
          checked={data.session}
          onChange={handleInputChange}
        />
        <button
          disabled={!data.username || !data.password}
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </form>
    </div>
  );
}
