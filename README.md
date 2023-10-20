# Design-System-template-aula

Template no codesandbox:
https://codesandbox.io/s/template-aula-design-systems-chakra-mpcifz


1. Instalar o Chakra:
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

2. Importar o ChakraProvider na raiz da aplicação (App):
import { ChakraProvider } from '@chakra-ui/react'

3. No return, envolver todo o código com o <ChakraProvider>. Apagar o h1 e o p, pois não são tags do Chakra

4. Ir no link do Chakra indicado no material (https://chakra-templates.dev/components/cards) e copiar todo o código. Criar a pasta components e o arquivo Card.js. 

5. Trocar o nome da função por Card.

6. Chamar o componente <Card/> dentro do App após o ChakraProvider.

7. No App, a função fetchUsers tem uma requisição que pega os usuário do jsonplaceholder e colocando no estado users. Pegar o users e fazer um map dele, embaixo do CrakraProvider no JSX (pode ser feito também antes do return). O map vai retornar o Card para cada usuário.
No Card passar uma key com id, o name para poder alterar no Card (pode ser o username), o company.

8. No Card.js receber as props:
export default function Card(props)

9. Substituir o nome do Card por {props.name} -> Linha 45.

10. Substituir o nome da empresa por {props.company} -> Linha 47.

11. Trocar imagem do perfil: No Avatar -> src={`https://picsum.photos/seed/${props.name}/200/200`}. Pode fazer a mesma coisa com o Image mudando p/ {props.company}

12. Trocar cor dos botões: 
- Criar arquivo theme.js
- Ir no Chakra > Styled System > Theming > Customize Theme: copiar e colar dentro do arquivo o código (colocar export na frente do nome da função)
- Mudar a palavra brand para primary
- No App importar o theme. Dentro do ChakraProvider passar a props theme={theme}
- No Button > bg: digitar bg={"primary.100"}


