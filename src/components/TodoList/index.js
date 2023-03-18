import { Col, Row, Input, Button, Select, Tag, Space } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, todoAction, todoList } from '../../redux/todoSlice';
import { useState } from 'react';
export default function TodoList() {
    const [valueTodo , setValueTodo] = useState()
    const [meThodValue , setMeThodValue] = useState('Medium')
    const todoListStore = useSelector(todoList)
    console.log(todoListStore)
    const distpatch = useDispatch()

    const handleAddTodo = () => {
        distpatch(todoAction.addTodo({ 
           name: valueTodo,
           priority: meThodValue,
           completed: false
        }))
        setValueTodo('')
    }

    const handlePrioriry = (value ) => {
      setMeThodValue(value)
    }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoListStore.map((todo, i) => {

         return <Todo key={i} name={todo.name} prioriry={todo.priority} />
        })
        }
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }}>
          <Input onChange={e => setValueTodo(e.target.value)} value={valueTodo}/>
          <Select defaultValue="Medium" onChange={handlePrioriry}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}