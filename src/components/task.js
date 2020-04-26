import React,{ useState }  from 'react'
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import {Col, Form, Input , Typography } from 'antd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const { Title } = Typography;
const Task=()=>{
  const [newtodo, setTodo] = useState("");
  const [todo, addTodo] = useState([]);
  const [cible, setcible] = useState("");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
 const handleShow = (e) => {
   setShow(true);
   setcible(e.target.value);
   console.log(todo[cible])
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    todo
      ? newtodo
        ? addTodo([...todo, newtodo])
        : alert("please write a todo")
      : addTodo([newtodo]);
    setTodo("");
  
  };
  const deletetodo = (e) => {
    todo.splice(e.target.name, 1);
    addTodo([...todo]);
  };
  const change = (e) => {
    setTodo(e.target.value);
  };
  const addChange = () => {
    console.log(todo[cible])  
    console.log(newtodo)
    newtodo ? (todo[cible] = newtodo) : alert("please write a todo");
    addTodo([...todo]);
    setTodo("");
    handleClose();
  };
  
  return (
    <React.Fragment>
       <Title data-testid="todo" level={4}>
          Add TODO item
        </Title>
        <br/>
        <TextField
            variant="outlined"
            size="small"
            placeholder="Add task"
            onChange={handleChange}
            value={newtodo}
            />
            <Button variant="contained" margin="normal" color="secondary" onClick={add}>ADD</Button>
            <List>
              {todo.map((item, i)=>{
                return(
                    <>
                    <ListItem key={i + 100}>
                      <ListItemText primary={item} />
                    </ListItem>
                    <Button
                      key={i + 10000}
                      variant="primary"
                      name={i}
                      onClick={handleShow}
                    >
                      <UpdateIcon/>
                    </Button>
                    <Button 
                      key={i + 1000000}
                      variant="secondary"
                      name={i}
                      onClick={deletetodo}
                    >
                      <DeleteIcon />
                    </Button >
                    </>
                )})}
            </List>
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
            variant="outlined"
            size="small"
              onChange={change}
              placeholder={todo[cible]}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addChange}>
              Edit Todo
            </Button>
          </Modal.Footer>
        </Modal>
     </React.Fragment>
     
    );    
}

export default Task;