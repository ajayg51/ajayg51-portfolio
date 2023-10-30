import './App.css';
import React from 'react';
import avatar from './images/avatar.jpeg'
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div className='SMALLER-SCREEN'>
        <p>Please use bigger screen for better view.</p>
      </div>
      <div className='App'>
        <header className='App-header'>
          <p className='HELLO-WORLD'>hello world !!</p>
        <div className='late'>
          <p className='late-hoverMetext'>Hover over me !!</p>
          <div className='ITSME'>
            <div className="AVATAR">
                <img src={avatar} width='200px' height='200px' style={{borderRadius:50+'%',backgroundColor:'black'}}/>
            </div>
            <div className='INTRO'>
            <h1>Ajay Kumar Gond</h1>
               <p className='CONTACT'>+91 <a href='https://t.me/ajayg51' target='_blank' rel="noopener noreferrer">
               8090485110</a> , 
               <a href='https://wa.me/+916307542669?text=Hi' target='_blank' rel="noopener noreferrer">
               6307542669</a></p>
               <p><a href='mailto:ajayg.ug18.cs@nitp.ac.in' target='_blank' rel="noopener noreferrer">ajayg.ug18.cs@nitp.ac.in</a> , <a href='mailto:hi.ajay51@gmail.com' target='_blank' rel="noopener noreferrer">hi.ajay51@gmail.com</a></p>
            </div>
          </div>
          <div className='RESUME'>
             <div className='EDUCATION'>
             <ul>
               <li>EDUCATION
                 <ul>
                  <div className='NITP'>
                    <li><p><a href='http://nitp.ac.in' target='_blank' rel="noopener noreferrer">NIT PATNA</a>
                        <span className='NITP-MODAL'>
                          <ul>
                            <dl>B.TECH CSE</dl>
                            <dd>Expected 2022 | Patna, India CGPA: 8.47 (Till 5th Semester)</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  <div className='RLB'>
                    <li><p><a href='http://rlb14in.com' target='_blank' rel="noopener noreferrer">RLB MEMORIAL SCHOOL</a>
                      <span className='RLB-MODAL'>
                          <ul>
                            <dl>XII (HIGHER SECONDARY), CBSE</dl>
                            <dd>Grad. 2018 | Lucknow, India Percentage: 93.2%</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  <div className='NDA'>
                    <li><p><a href='http://ndagkp.com' target='_blank' rel="noopener noreferrer">NETAJEE DEFENCE ACADEMY</a>
                      <span className='NDA-MODAL'>
                          <ul>
                            <dl>X (SECONDARY SCHOOL), CBSE</dl>
                            <dd>Grad. 2016 | Gorakhpur, India CGPA: 9.4</dd>
                          </ul>
                        </span>
                    </p></li>
                  </div>
                  </ul>
                </li>
                <li>LINKS
                  <ul>
                    <li><p><a href='https://github.com/ajayg51' target='_blank' rel="noopener noreferrer">Github://ajayg51</a></p></li>
                    <li><p><a href='https://www.linkedin.com/in/ajayg51' target='_blank' rel="noopener noreferrer">Linkedin://ajayg51</a></p></li>
                    <li><p><a href='https://codeforces.com/profile/Heyajay' target='_blank' rel="noopener noreferrer">Codeforces://Heyajay</a></p></li>
                    <li><p><a href='https://www.codechef.com/users/heyajay' target='_blank' rel="noopener noreferrer">Codechef://heyajay</a></p></li>
                  </ul>
                </li>
                <li>SKILLS
                  <ul>
                    <li>Experienced :
                        <ul>
                          <li>C++</li>
                        </ul>
                    </li>
                    <li>Familiar :
                        <ul>
                          <li>Java</li>
                          <li>React.js</li>
                        </ul>
                    </li>
                  </ul>
                </li>
                <li>HOBBIES</li>
                  <ul>
                      <li>Coding</li>
                      <li>Music</li>
                  </ul>
              </ul>
             </div> 
             <div className="PROJECTS">
              <ul>
                <li>PROJECTS
                  <ul>
                    <li>
                      <dl>
                        <a href='https://github.com/ajayg51/MessageApp'>
                           beGlobal
                        </a>
                        <a className='APK-DOWNLOAD' href='https://github.com/ajayg51/MessageApp/blob/master/app/install/beGlobal.apk?raw=true'>
                           &#35;Download
                        </a>
                        
                      </dl>
                      <dd>
                        A blog based android application where anyone can share their 
                        thoughts created using JAVA and FIREBASE.
                      </dd>
                    </li>
                    <li>
                      <dl>
                        <a href='https://github.com/ajayg51/portfolio'>
                           Portfolio
                        </a>
                      </dl>
                      <dd>
                        Duplicated layout of resume using react.js and css.
                      </dd>
                    </li>
                    <li>
                      <dl>
                        <a href='https://github.com/ajayg51/Justwhatsapp'>
                           Justwhatsapp
                        </a>
                        <a className='APK-DOWNLOAD' href='https://github.com/ajayg51/Justwhatsapp/blob/master/app/install/Justwhatsapp.apk?raw=true'>
                           &#35;Download
                        </a>
                      </dl>
                      <dd>
                        An android application which lets you open Whatsapp chat of anyone on Whatsapp without any need of saving their mobile number, created using JAVA and XML. </dd>
                    </li>
                  </ul>
                </li>
              </ul>
             </div>
          </div>
        </div>
        </header>
        <footer className='FOOTER'>
            <p className='CLICKABLE-INFO'>All underlined texts are clickable</p>
            <p><a href='https://drive.google.com/file/d/1yZYH_xbGzEHmP7mwEmTMIkIwUNHsPCa3/view?usp=sharing'><span className='CLICK-PDF'>Click here</span></a> to get pdf version of my resume.</p>
        </footer>
      </div>
    </div>
    );  
}



export default App;
