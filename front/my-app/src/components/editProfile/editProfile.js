import './editProfile.css';
import React, { Component } from 'react';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      wish: null,
      hobby: null,
      age: null,
      city: null,
      sex: null,
    };
  }

  nameInState = e => {
    this.setState({ name: e.target.value });
  };
  cityInState = e => {
    this.setState({ city: e.target.value });
  };
  ageInState = e => {
    this.setState({ age: e.target.value });
  };
  sexInState = e => {
    this.setState({ sex: e.target.value });
  };

  emailInState = e => {
    this.setState({ email: e.target.value });
  };

  wishInState = e => {
    this.setState({ wish: e.target.value });
  };

  hobbyInState = e => {
    this.setState({ hobby: e.target.value });
  };

  phoneInState = e => {
    this.setState({ phone: e.target.value });
  };

  editProfile = async e => {
    e.preventDefault();
    const dataUser = this.state;
    const response = await fetch('/api/edit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: dataUser }),
    });
    const user = await response.json();
    this.props.history.push('/profile');
  };

  render() {
     const styles = {
    'text-align': 'left',
    'font-size': '20px'
     };
    return (

      <form onSubmit={this.editProfile}>
      <div class="resume">

        <div class="r-sidebar">
          <div class="r-sidebar-item">

            <div class="img">
              <a><img src="https://i.pinimg.com/736x/3f/68/41/3f6841442ce599874f3d247ae438736b.jpg" alt="" class="img-responsive" /></a>
            </div>

            <div class="name">
                <h3>Изменить профиль</h3>
              
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="r-detail">
            <table>
              <tr>
                <th style = {styles}>Имя</th>
                  <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Введите имя"
                 onChange={this.nameInState}
               />
              </tr>
              <tr>
                  <th style={styles}>Пол</th>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите пол"
                    onChange={this.sexInState}
                  />
              </tr>
              <tr>
                  <th style={styles}>Возраст</th>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите возраст"
                    onChange={this.ageInState}
                  />
              </tr>
              <tr>
                  <th style={styles}>Mогу научить</th>
                
                  <input
                 type="text"
                 class="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Введите навык"
                 onChange={this.hobbyInState}
            />
              </tr>
              <tr>
                  <th style={styles}>Xочу научиться</th>
                  <input
                 type="text"
                 class="form-control"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 placeholder="Введите навык"
                 onChange={this.wishInState}
               />
              </tr>
              <tr>
                  <th style={styles}>Телефон</th>
                  <input
                 type="text"
               class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
               placeholder="Введите номер"
                onChange={this.phoneInState}
              />
              </tr>
              <tr>
                  <th style={styles}>Почта</th>
                  <input
                type="text"
                 class="form-control"
                 id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Введите имя"
                 onChange={this.emailInState}
              />
              </tr>
              <tr>
                  <th style={styles}>Город</th>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите навык"
                    onChange={this.cityInState}
                  />
              </tr>
            </table>
          </div>

          <div class="social">
            <button type="submit" className="btn btn-link">
               Сохранить
               </button>

          </div>
        </div>

      </div>
    
      </form>
      );
    }
  }
  