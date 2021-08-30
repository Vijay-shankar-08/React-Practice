import React from 'react';
import './Todo.css';
import ListItems from './List/ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem = (key) => {
    const filterItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filterItems
    })

  }
  setUpdate = (text, key) => {
    // console.log("items:"+this.state.items);
    const items = this.state.items;
    items.forEach(item => {
      if (item.key === key) {
        // console.log(item.key +"    "+key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })


  }
  render() {
    return (
      <div className="Todo">
        <header>
          <form id="to-do-form" onSubmit={this.addItem} aria-label='todo-form'>
            <input type="text" placeholder="Enter task" aria-label="taskValue" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>

        </header>
        
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
        {console.log(this.state.items)}
        {console.log(this.state.currentItem)}
      </div>
    );
  }
}


export default Todo;

