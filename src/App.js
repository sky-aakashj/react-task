import './App.css';

function App(props) {
  // console.log(props);
  return (
    <div className="App">

      <h1 justify="space-between" // Add it here :)
        container
        spacing={24}

      >{props.data[0].header.mainHeader}</h1>
      <h2>{props.data[0].header.subHeader}</h2>
      <p>{props.data[0].header.para}</p>

    </div>

  );
}

export default App;
