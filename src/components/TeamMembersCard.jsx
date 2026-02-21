import React from "react";
function TeamMembers({name,role, exp,img}){
    console.log(name,role,exp,img)
   return(
    <div>
        <h4>Name: {name}</h4>
        <h4>Role: {role}</h4>
        <h4>Experience: {exp}</h4>
        <h4>Image: {img}</h4>
      <img src={member.img} alt={member.name} />

    </div>
   )
}
export default TeamMembers;