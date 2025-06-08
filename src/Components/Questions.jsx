import React from 'react'
import '../Styles/questions.css'
function Questions() {
    const qbox=document.getElementsByClassName('qbox');
    for(let i=0;i<qbox.length;i++){
        qbox[i].addEventListener('click',function(){
            this.classList('active');
        })
    }
  return (
    <>
    <div className="questions">
    <div className="qq">

    <div className="qbox">
            <div className="question">
<h3>what is java</h3>
            </div>
            <div className="ans">
                <p>java is a object orianted programing language</p>
            </div>
            

        </div>
        <div className="qbox">
            <div className="question">
<h3>what is java</h3>
            </div>
            <div className="ans">
                <p>java is a object orianted programing language</p>
            </div>
            

        </div>
    </div>
    </div>
    </>
  )
}

export default Questions
