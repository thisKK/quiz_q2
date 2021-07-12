import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

interface data {
  includes(searchInput: string): string;
  index: number;
  name: number;
}

function App() {
  const [data, setData] = useState<data[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const getdata = () => {
    axios.get(" https://api.publicapis.org/categories").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          style={{ width: "500px" }}
          placeholder="Enter name for fillter"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <table
          style={{
            textAlign: "left",
            width: "30%",
          }}
        >
          <tbody>
            {data!
              .filter((name) => name.includes(searchInput))
              .map((name, index) => (
                <tr key={index}>
                  <th>
                    <li>{name}</li>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
