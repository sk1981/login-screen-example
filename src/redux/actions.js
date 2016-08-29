export function createLoginAction(username, password) {
  return {
    type: "LOGIN",
    username,
    password
  }
}