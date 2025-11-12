import React, { useState, useEffect } from "react";
import "./App.css";
import { picList } from './List.js';

export default function App() {
  const [index, setIndex] = useState(0);
  const [click, setClick] = useState([false, false, false, false]);
  const [open, setOpen] = useState([false, false, false, false]);
  let list = picList[index];

  useEffect(() => {
    setClick([false, false, false, false]);
  }, [list])

  function handleClickPlus(){
    if(index<7){
      const newIndex = index + 1
    setIndex(newIndex);
    // setClick(Array(picList[newIndex].url.length).fill(false))
    }
  };
  
  function handleClickMinus(){
    if(index>0){
      const newIndex = index - 1
      setIndex(newIndex);
      // setClick(Array(picList[newIndex].url.length).fill(false))
    }
  };

  function flipPic(index){
    const everyClick = click.map((pic,i) => {
      if(i === index) {
        return pic === false
      }else{
        return pic ===true
      }
  
    })
    setClick(everyClick)
  }
  
  function openInfo(index){
    const everyOpen = open.map((expand, i) => {
      if(i === index) {
        return expand === false
      }else{
        return expand === true
      }
    })
    setOpen(everyOpen)
  }
  
  
  // const random = (min, max) => Math.random() * (max - min) + min

  return (
    <>
 <div className = "container">
   <audio autoPlay loop>
     <source src="bg.m4a" type="audio/mpeg" />
  </audio>
 <div className = "yearShift">
    <div className = "numControl">
        <p id = "left" style={{fontSize : "60px", color : "azure"}} 
             onClick={() => {
             handleClickMinus();
             setClick(false)
            }}
          >
        ↞
        </p>
        <div className = "fontContainer">
           <div className = "font">
              <p>{picList[index].number}</p>
           </div> 
        </div>
        <p id = "right" 
       style={{ fontSize: "60px", color : "azure" }}
       onClick={() => {
       handleClickPlus();   
       setClick(false);    
      }}
     >
        ↠
      </p>
    </div>
  </div>

  {index === 0 ? 
      (<div className="openPage"><h2>TO +1🐟</h2>
        <p>Happy Birthday!</p>
      </div>
      ):  
   (
   <>
  {index === 7 ? 
    (<div className="birthday-card">
      <div className="card-front">
        <h2>🎂 Happy Birthday!</h2>
      </div>
      <div className="card-inside">
        <p>To李嘉宜，</p>
        <p>在和你相处的6年中，每年都在认识一个新的你。我始终相信一个成熟的灵魂兼备了上天给予的眷顾还有困难。虽然我们经常聊天谈心，但是你所经历和承受的也许我很难理解。
           因此我单纯的羡慕你有强大的内核，却少有的关注背后灵性的修炼。直到今年，当我发现工作无法弥补自己的不安全感和情绪问题，才意识到平静的心性是无法被代替的。
           以往我会祝你获得世俗的成功，今年我希望你万事胜意，所愿皆所得，在灵性的觉醒中找到自我。
        </p>
        <p>— By zym 🎁</p>
      </div>
    </div>    
    ):(
    <div>
      {list.url
        .map((imgSrc, i) => (
        <div 
          key={i} 
          className = {`flip-card card-${i} ${click[i] ? "flipped" : ""}`}
          onClick={() => {
            flipPic(i);
            
          }}>
             <span id="bow">🎀</span>
             
             <div className = "flip-inner">
                <div
                  className = "flip-front">
                  <span style={{fontFamily : "Courier New, monospace", fontSize : "20px", fontWeight: "900"}}>{list.title[i]}</span>
                  <span style={{fontFamily : "Courier New, monospace", fontSize : "15px", fontWeight: "900"}}>Click to Flip</span>
                </div>
                  <div className = "flip-back">
                     <img src={imgSrc} alt={list.alt}/>
                       <div className = "pop-up">
                         <button id = "expand" onClick ={(e) => {openInfo(i);
                           e.stopPropagation()}}>
                            Expand
                         </button>
                       </div>
                        {open[i] ? <p id = "subtitle" >
                          {`${list.subtitle[i]}`}</p> : null
                        }
                  </div>
             </div>
        </div>
        ))
      }
    </div>
      )}
  </>
   )
  }
  
   
 <div className="scene">
  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className={`tree-img trees-${i}`}
    ></div>
  ))}

  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className={`shadow-img shadow-${i}`}
   ></div>
  ))}
 <div className="ground"></div>
 
 <div className = "mountainClass">
   <div className="mountain-1"></div>
   <div className="mountain-2"></div>
   <div className="mountain-3"></div>
 </div> 
  
   <div className="cloudName">
   {Array.from({ length: 6 }).map((_,i) =>(
        <div
        key={i}
        className="cloud"
        style = {{
          left: `${i * 15}%`,
          top: `${Math.random() * i * 5}%`,
          animationDuration: `${20 + Math.random() * i * 3}s`
        }}/>
      ))}
   </div>
     

   {index === 7 ? 
      (<div class="sun"></div>
      ):  
   (
       <div className="snowClass">
        {Array.from({ length: 20 }).map((_,i) => (
         <div className="snow" 
         style = {{
           left: `${8 + i * Math.random() * 20}%`,
           animationDuration: `${3 + Math.random() * 4}s`,
           transform: `${5 + i * 20}%`
        }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
               key={i}
               className="trapezoid-img"
               style={{
                transform: `rotate(${i * (360 / 6)}deg)`
             }}
    
              ></div>
           ))}
         </div>
         ))}
       </div>
   )}
</div>
   
    
      
 </div>
    </>
  )
    
  
}