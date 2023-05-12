const data = require("../utils/users")

function login(req, res){  
           //estructura de controlador en express
    const {username, password}= req.query;       //recibe datos por query
    
    const userFound = data.find((user)=>{          // busca el 1er elemento que cumpla con requisito
        user.username === username && user.password === password;
    });

    userFound ? res.status(200).json({access: true})
    :res.status(200).json({access: false});
}

module.exports = login;