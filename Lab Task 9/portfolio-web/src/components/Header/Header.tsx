import React from 'react'; 

const Header: React.FC = () => {
  return (
    <header style={{  alignItems: "center" }}>
      <div>      
        <img src='../public/image.jpg' alt='Profile' style={{ width: "200px", height: "200px",   }} />

        <h1>MD. Rakibul Hasan</h1>
        <h4>BSc. in Computer Science & Engineering</h4>
       <hr></hr>
      </div>
 
</header>
  );
};

export default Header;