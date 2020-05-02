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


function Task() {
  const { Title } = Typography;
  const [newtodo, setTodo] = useState("");
  const [todo, addTodo] = useState([]);
  const [show, setShow] = useState(false);
  const [cible, setcible] = useState("");
  const changeTask = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    todo.push(newtodo)
    addTodo([...todo]);
  };
  const deletetodo = (e) => {
    todo.splice(e.target.name, 1);
    addTodo([...todo]);
  };
  const valueUpdate = (e) => {
    setTodo(e.target.value);
  };
  const updateTask = () => {
    newtodo ? (todo[cible] = newtodo) : alert("Write your task");
    addTodo([...todo]);
    setTodo("");
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setcible(e.target.name);
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
            onChange={changeTask}
            value={newtodo}
            />
            &nbsp;&nbsp;
            <Button variant="contained" margin="normal" color="secondary" 
            style={{backgroundColor:'blue'}} onClick={add}>ADD</Button>
            <List>
              {todo.map((item, i)=>{
                return(
                    <>
                    <ListItem key={i}>
                      <ListItemText primary={item} style={{marginLeft:800}} />
                      <Button
                      variant="primary"
                      name={i}
                      onClick={handleShow}
                      style={{marginRight:10}}
                    >
                      <UpdateIcon/>
                    </Button>
                    <Button 
                      variant="secondary"
                      name={i}
                      onClick={deletetodo}
                      style={{marginRight:800}}
                    >
                      <DeleteIcon />
                    </Button >
                    </ListItem>
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
              onChange={valueUpdate}
              placeholder={todo[cible]}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateTask}>
              Edit Todo
            </Button>
          </Modal.Footer>
        </Modal>
     </React.Fragment>
  );
}

export default Task;