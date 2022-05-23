import React,{useState,useEffect} from "react";

function App() {
const [time, settime] = useState(0)
const [timeron, settimeron] = useState(false)

useEffect(() => {
  let interval = null;

   if (timeron) {
     interval = setInterval(() => {
       settime(prevTime=>prevTime+10)
     }, 10);
   }else{
    clearInterval(interval)
   }
   return ()=> clearInterval(interval)
}, [timeron])

  return (
    <div className="App text-center mt-5">
      <span>{("0"+Math.floor((time/60000)% 60)).slice(-2)}</span>:
      <span>{("0"+Math.floor((time/1000)% 60)).slice(-2)}</span>:
      <span>{("0"+((time/10)% 100)).slice(-2)}</span>
      <div>
        { time == 0?(<button className="btn btn-success m-2" onClick={()=> settimeron(true ) }>Start</button>):""}
        {timeron&&(<button className="btn btn-danger m-2" onClick={()=> settimeron(false ) }>Stop</button>)}
        { time!= 0 ?(<button className="btn btn-info m-2" onClick={()=> settimeron(true ) }>Resume</button>):""}
        { time > 0?(<button className="btn btn-warning m-2" onClick={()=> settime(0)}>Reset</button>):""}
      </div>
    </div>
  );
}

export default App;
