import { Router } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles';

const App = () => {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
