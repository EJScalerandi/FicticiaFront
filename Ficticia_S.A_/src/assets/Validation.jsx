export function validateFields(username, password) {
    if (!username || !password) {
      return "Por favor, completa ambos campos.";
    }
    return "";
  }
  
  export function validatePasswordLength(password) {
    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    return "";
  }