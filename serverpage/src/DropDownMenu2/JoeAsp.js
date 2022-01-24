import { useState } from 'react'
import './DropDown.css';


function JoeAsp () {

  const [selected, setSelected] =useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

    return (
      <div className="wrapper">
         <div className="accordion">     
           {data.map((item, i) => (
             <div className='item'>
               <div className='title' onClick={()=> toggle(i)}>
                 <h2>{item.question}</h2>
                 <span>{selected === i ? '-' : '+'} </span> 
               </div>
               <div className={selected === i ? 'content.show' : 'content'}>{item.answer}</div>
             </div>
           ))}  
         </div>
      </div>
    )
  }

const data = [

  {
    question: 'KIOSK VENDER 3',
    answer:
    'The study found that while interruptions can have a negative impact on a workers productivity, the social aspect of stopping work to talk to a coworker can help them feel more like they belong.'
  },
  {
    question: 'USER MENU SET',
    answer:
    'The study found that while interruptions can have a negative impact on a workers productivity, the social aspect of stopping work to talk to a coworker can help them feel more like they belong.'
  },
  {
    question: 'POS SET',
    answer:
    'The study found that while interruptions can have a negative impact on a workers productivity, the social aspect of stopping work to talk to a coworker can help them feel more like they belong.'
  },
  {
    question: 'ETC SET',
    answer:
    'The study found that while interruptions can have a negative impact on a workers productivity, the social aspect of stopping work to talk to a coworker can help them feel more like they belong.'
  }
]   
  export default JoeAsp;