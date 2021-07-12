import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface data {
  includes(searchInput: string): string;
  index: number;
  name: string;
}

function App() {
  const [data, setData] = useState<data[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const getdata = () => {
    axios.get("https://api.publicapis.org/categories").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="App">
      <header className="App-header" style={{ padding: "10px" }}>
        <input
          style={{ width: "30%" }}
          placeholder="Enter name for fillter"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <table
            style={{
              width: "30%",
              textAlign: "left",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <th></th>
              </tr>
              {data!
                .filter((name) => name.includes(searchInput))
                .map((name, index) => (
                  <tr
                    key={index}
                    style={{ textAlign: "center", border: "1px solid black" }}
                  >
                    <th>{name}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
