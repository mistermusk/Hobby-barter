import './startpage.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'bootstrap-4-react';
import { teachersInStoreFromSearchAC } from '../../redux/actions';


class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  }

  searchInState = e => {
    this.setState({ search: e.target.value });
  };
  
  searchTeacher = async e => {
    e.preventDefault();
    const { search } = this.state;
    console.log(search);

    const respSearch = await fetch('/api/searchTeacher', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchBody: search }),
    });
    const searchTeachers = await respSearch.json();
    this.props.teachersInStoreFromSearch(searchTeachers);
    this.props.history.push('/findTeachers');
  };

  render() {


    return (
  <div>
    <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav><div className="logo">СкиллБартер</div></Nav>
            <Nav.Link >
              <Link to="/login">Логин</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/registration">Регистрация</Link>
            </Nav.Link>
          </Nav>
          <Form onSubmit={this.searchTeacher} inline my="2 lg-0">
            <Form.Input type="search" onChange={this.searchInState} placeholder="Поиск" mr="sm-2" />
            <Button outline success my="2 sm-0">
              Поиск учителя
                </Button>
          </Form>
        </Navbar>
         
        <div className="container">
          <div className="row">
  
            <div className="col-sm">
              <div
                className="shrift"
                 style={{

                'font- family': 'Raleway, sans-serif',
                  'font-family': 'Kurale, serif',
               'font-size': '22px',
                        }}
                    >
                      Мечтаешь научиться программировать или выучить английский, стать гуру фотошопа или же монтировать крутые
                      видеоролики и выкладывать на ютюб? 
                      Хочешь научиться правильно обрабатывать звук, рисовать, разговаривать
                      на иностранном языке, петь, танцевать, но онлайн-курсы, студии и школы запрашивают баснословные деньги,
                      а просмотры видео на ютюбе не дают должных результатов? 
                      НАЙДЕНО РЕШЕНИЕ. Это приложение для тех, кто
                      хочет научиться чему-то новому, взамен предложив свои умения.
              </div>
            </div>
          </div>
        </div>
        </div>
     
    );
  }
}





function mapStateToProps(state) {
  return {
    teachersFromSearch: state.teachersFromSearch,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teachersInStoreFromSearch: teachers => dispatch(teachersInStoreFromSearchAC(teachers)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartPage);





