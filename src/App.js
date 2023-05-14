import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounterValue } from './store/sliceCounter';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter);

  const activeTree = useSelector(state => state.activeTree);
  return (
    <Container textAlign={'center'}>
        <Heading>Counter</Heading>
        <Box display='flex' justifyContent={'center'} alignItems='center'>
          <Button variant="primary" onClick={() => dispatch(changeCounterValue({amount: 1}))}>+</Button>
          <Text fontSize="2rem" width='2rem' textAlign={'center'}>{value}</Text>
          <Button variant="primary" onClick={() => dispatch(changeCounterValue({amount: -1}))}>-</Button>
        </Box>
    </Container>
  );
}

export default App;
