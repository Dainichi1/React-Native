import axios from "axios";

const API_KEY = "AIzaSyBkN8zaWRbw-o_YAbU_u3DON7jMEYTwOmU";

async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
