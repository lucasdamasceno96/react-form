import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  };
  const handleAddPrompt = () => {
    setPrompts([...prompts], {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    });
  };

  console.log(userInfo);
  return (
    <div className="App">
      <div className="container mt-20">
        <div className="header"></div>
        <div className="body">
          <form className="w-5/6 max-w-md mx-auto font-mono">
            <fieldset className="flex flex-col py-2 px-4 border">
              <legend className="text-2xl pb-1">About You</legend>
              <label className="text-xl px-1 pb-2">What's your name? </label>
              <input
                className="border rounded text-lg px-1 py-1"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleInput}
              />
              <input
                className="border rounded text-lg px-1 py-1 mt-5"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInput}
              />
              <label className="text-xl px-1 pb-2 mt-5">
                What's your email?{" "}
              </label>
              <input
                className="border rounded text-lg px-1 py-1 mt-5"
                type="email"
                id="email"
                name="email"
                placeholder="email"
                onChange={handleInput}
              />
              <label className="text-xl px-1 pb-2 mt-5">
                What's your date of birth?
              </label>
              <input
                className="border rounded text-lg px-1 py-1 mt-5"
                type="date"
                id="dob"
                name="dob"
                max="2023-03-10"
                placeholder="date of birth"
                onChange={handleInput}
              />
              <label className="text-xl px-1 pb-2 mt-5 ">
                What's your gender ?
              </label>
              <select id="gender" name="gender" onChange={handleInput}>
                <option value="male"> Male</option>
                <option value="Female">Female </option>
                <option value="FTM"> FTM </option>
                <option value="MTF">MTF </option>
                <option value="Non-Binary">No binary </option>
              </select>
            </fieldset>
            <fieldset className="flex flex-col py-2 px-4 border mt-5">
              <legend className="text-2xl pb-1">Personal Questions</legend>
              {prompts.map((prompt, i) => (
                <div key={prompt.timestamp} className="">
                  <select
                    id="prompt"
                    name="prompt"
                    onChange={(e) => handlePrompt(e, i)}
                  >
                    <option value="Favorite movie?"> Favorite movie? </option>
                    <option value="Favorite Food"> Favorite food?</option>
                    <option value="Favorite book?"> Favorite book? </option>
                  </select>
                  <textarea
                    className="mt-5 border rounded text-xl  bg-zinc-200"
                    id="answer"
                    name="answer"
                    rows={5}
                    placeholder="Write here..."
                    onChange={(e) => handlePrompt(e, i)}
                  />
                </div>
              ))}
              <div className="flex justify-center items-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                        py-2 px-6 border border-blue-700 rounded"
                  type="button"
                  onClick={handleAddPrompt}
                >
                  Add
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
