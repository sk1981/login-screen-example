export function createLoginAction(username, password) {
  return {
    type: "LOGIN",
    username,
    password
  }
}

export function createLogoutAction() {
  return {
    type: "LOGOUT"
  }
}