import {useState} from "react";
import validation from "./validation";
import "./form.css";

// const validation = (form, setErrors, errors) => {
//  if(!form.username) setErrors({...errors, username: "ingrese su usuario"});
//  else setErrors({...errors, username: ""});

//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.username)) setErrors({...errors, username: ""});
// else setErrors({...errors, username: "Nombre de usuario inválido"});
// };

export default function Form({login}) {

  //Estado de errores
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  //Estado de inputs
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  //función que cambia los estados
  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
    // validation({ ...userData, [property]: value }, setErrors, errors);
  };

  //login

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    
  }

  

  return (
    <div>
      <form  className="formContent" onSubmit={handleSubmit}>
        <h2 className="title">Hola, identificate</h2>
        <div>
          <label htmlFor="username" className="labels">
            Username:
          </label>
          <input
            type="text"            
            name="username"
            placeholder="user@example.com"
            value={userData.username}
            onChange={handleChange}
            className="inputs"
          />
          {errors.username ? <span>{errors.username}</span> : null}
        </div>

        <div>
          <label htmlFor="password" className="labels">
            Password:
          </label>
          <input
            type="password"            
            name="password"
            placeholder="Type your password"
            value={userData.password}
            onChange={handleChange}
            className="inputs"
          />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button type="submit" className="submitButton" >
          Login
        </button>
      </form>
    </div>
  );
}
