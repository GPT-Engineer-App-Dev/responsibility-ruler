import { Box, Button, Checkbox, Input, VStack, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
      <VStack spacing={4}>
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddTask}>Add Task</Button>
        {tasks.map(task => (
          <HStack key={task.id}>
            <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(task.id)} />
            <Text as={task.completed ? 's' : 'span'}>{task.text}</Text>
            <Button colorScheme="red" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default TodoApp;