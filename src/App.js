import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { theme } from "./theme"
import CardDois from "./components/CardDois";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      {/* {users.map((user) => {
        return <Card key={user.id} name={user.name} company={user.company.name} />;
      })} */}
      {users.map((user) => {
        return <CardDois key={user.id} user={user} />;
      })}
    </ChakraProvider>
  );
}
