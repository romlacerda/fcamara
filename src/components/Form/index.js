import React, { Component } from 'react';
import {
  TextField, Button, Select, MenuItem, FormControl,
} from '@material-ui/core';
import InputMask from 'react-input-mask';
import {
  Form,
} from './style';
import { insertMessage, getSubjects } from '../../services/api';

class MessageForm extends Component {
  state = {
    name: null,
    email: null,
    subject: null,
    phone: null,
    body: null,
    date: new Date(),
    availableSubjects: [],
  }

  componentDidMount() {
    getSubjects().then((response) => this.setState({ availableSubjects: response.data }));
  }

  changeHandler = (e) => {
    if (e.target.name === 'name') {
      e.target.value = e.target.value.replace(/[^A-Za-z ]/, '');
    }

    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = () => {
    insertMessage(this.state);
  }

  render() {
    const {
      phone, availableSubjects, subject, name, body,
    } = this.state;
    return (
      <Form>
        <TextField
          label="Nome"
          variant="outlined"
          value={name}
          required
          onChange={this.changeHandler}
          name="name"
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          onChange={this.changeHandler}
          name="email"
          inputProps={{
            type: 'email',
          }}
        />
        <Select labelId="Assunto" name="subject" variant="outlined" displayEmpty value={subject} onChange={this.changeHandler}>
          <MenuItem value="" disabled selected>
            Assunto
          </MenuItem>
          {availableSubjects.map((subj) => <MenuItem value={subj}>{subj}</MenuItem>)}
        </Select>
        <InputMask
          mask="(99) 99999-9999"
          value={phone}
          onChange={this.changeHandler}
        >
          <TextField
            label="Telefone"
            variant="outlined"
            onChange={this.changeHandler}
            name="phone"
            value={phone}
          />
        </InputMask>
        <TextField
          placeholder="Digite sua mensagem aqui"
          multiline
          rows={2}
          rowsMax={4}
          variant="outlined"
          onChange={this.changeHandler}
          name="body"
          inputProps={{
            maxLength: 500,
          }}
        />
        <p>{body != null ? `${body.length}/500` : '0/500'}</p>
        <Button type="submit" variant="contained" color="primary" onClick={this.submitForm}>Cadastrar</Button>
      </Form>
    );
  }
}


export default MessageForm;
