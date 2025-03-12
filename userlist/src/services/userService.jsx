import axios from 'axios';



export const get_users = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  } catch (err) {
    console.error(err);
  }
}