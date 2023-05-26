const data = require("../utils/users")

function login(req, res){  
    const { username,  password } = req.query;

    /*  const found = users.find((user) => {
       user.email === email && user.password === password;
     }); */ // verificamos si existe el usuario
   
     if(data[0].username === username && data[0].password === password ){
       res.status(200).json({access: true})
     }else {
       res.status(200).json({access: false})
     }





    //        //estructura de controlador en express
    // const {username, password}= req.query;       //recibe datos por query
    
    // const userFound = data.find((user)=>{          // busca el 1er elemento que cumpla con requisito
    //     user.username === username && user.password === password;
    // });

    // userFound ? res.status(200).json({access: true})
    // :res.status(200).json({access: false});
}

module.exports = login;