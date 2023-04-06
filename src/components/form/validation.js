export default function validation(userData) {
  let errors = {};
  if (!userData.username) {
    errors.username = "Ingrese su usuario";
  }

  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)
  ) {
    errors.username = "Ingrese un formato de usuario válido";
  }

  if (userData.username.length > 35) {
    errors.username = "Usuario es muy largo";
  }

  if (!userData.password) {
    errors.password = "Ingrese su password";
  }

  if (!/\d/.test(userData.password)){
    errors.password = "El password debe contener al menos un número";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
  }
  return errors;
}
