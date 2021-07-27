import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, Button, ButtonLabel, Input } from "./Searchbar.styled";

export class SearchBar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

// локальный state. храним пока набираем инпут
  state = { value: "" };

// обновляет значение input при каждом изменении
  handleInputChange = (e) => {
    
  this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();

// нет рендера картинок при пробеле если trim. не отправляем пустую сторку
    if (this.state.value.trim() === '') { 
     return toast.error("Enter search query");
    }
// очиста формы сразу после Submit 
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });

  };

  render() {
    const { value } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button>
            <ButtonLabel>Search</ButtonLabel>
          </Button>
          <Input
            value={value} // устанавливает значение input взависимости от state
            onChange={this.handleInputChange} // тут привязываем метод который обновляет значение stat
            placeholder="Search images"
          />
        </Form>
      </Header>
    );
  }
}



