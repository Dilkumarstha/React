import Card from "./Card";
import "./App.css";

function App() {


  return (

    <div className="container">

      <h1 className="text-4xl font-bold text-green-700 ">Application List</h1>

      <div className="card-container">
        <Card title="Coutner App" description="This is the simple counter app that increatement the count and descrement and reset the value " link="counter" />
        <Card title="Coutner App" description="This is the simple counter app that increatement the count and descrement and reset the value " link="counter" />
        <Card title="Coutner App" description="This is the simple counter app that increatement the count and descrement and reset the value " link="counter" />  <Card title="Coutner App" description="This is the simple counter app that increatement the count and descrement and reset the value " link="counter" />
        
      </div>
    </div>

  )
}

export default App;