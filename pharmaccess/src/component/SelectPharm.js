import React, { useState } from 'react'
import favicon from '../img/favicon.ico'
const teams_data = [
  'AAA Pharmplace ',
  'BBB Pharmplace ',
  'CCC Pharmplace ',
  'DDD Pharmplace ',
  'EEE Pharmplace ',
];
const address=[
  '123 Pharmplace St, ON A12 B3A',
]
const SelectPharm = ({navigation}) => {
  const [teams, setTeams] = useState(teams_data);
  const [search, setSearch] = useState("");
    return (
          <div>
            
          <header>
              <h1>
                  <img src={favicon} style={{height:"1.25rem"}}/>
                  Pharm<span >Access</span>
              </h1>
          </header>
          <h3 className="topic">Select your Pharmacy</h3>
          <div class="progress" style={{height:"2px",borderRadius:"0"}}>
              <div class="progress-bar" role="progressbar" style={{width:"20%",height:"2px",borderRadius:"0",backgroundColor:"rgb(3,175,182)"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>  
          </div>
                
                <div class="input-group md-form form-sm form-1 pl-0" style={{position:"relative",left:"-7px"}}>
                  <i class="fas fa-search text-black"
                      aria-hidden="true" style={{position:"relative",top:"9px",right:"-34px"}}></i>
                      <input class="form-control" placeholder="Search" aria-label="Search" 
                    style={{width:'91%', height:'2rem',fontSize:'1rem',paddingLeft:"2.5rem" ,borderRadius:"20px",border:"1px solid #80808069",boxShadow:"none"}}
                          onChange={e => {  const test = teams_data.filter(team => {
                            return team.toLowerCase().includes(e.target.value.toLowerCase());
                          });
                console.log("test: ", test);
                setTeams(test);
                setSearch(e.target.value);
              }}
            type="text"
            value={search}
          ></input>
          
          </div>
          <ol style={{listStyle:"none",position:'relative',width:'100%',textAlign:"left",padding:'0px',}}>
              {teams.map(team => (
                <li style={{fontSize:"1rem",marginBottom:'5px',boxShadow: "2px 2px 2px rgb(0 0 0 / 3%)", paddingLeft:'1rem',fontFamily: 'Roboto-Medium',fontSize:"15px",fontWeight:"600",color:"rgb(66,66,66)"}}
                onClick={()=>navigation.next()} >
                    <i class="bi bi-geo-alt-fill" style={{color:"rgb(3,175,182)",fontSize:"1.25rem",padding:"3px"}}></i>
                    {team}
                    <br/>
                    <span style={{fontFamily:"Roboto-Regular",fontWeight:"lighter",fontSize:"13px"}}>{address}</span>
                    <button style={{background:"transparent",border:"none",outline:"none",float:'right'}}><i class="bi bi-chevron-compact-right" style={{fontSize:"2.5rem",color:"#8080806b",position:"relative",top:"-38px"}}></i></button>
                    <hr style={{color:"white"}}/>
                </li>
              
                  
              ))}
          </ol>    
     </div>
    )
}

export default SelectPharm
