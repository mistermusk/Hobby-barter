import './editProfile.css';
import React, { Component } from 'react';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      photo: null,
      email: null,
      login: null,
      wish: null,
      hobby: null,
      phone: null,
      profession: null,
    };
  }

  nameInState = e => {
    this.setState({ name: e.target.value });
  };

  photoInState = e => {
    this.setState({ photo: e.target.value });
  };

  emailInState = e => {
    this.setState({ email: e.target.value });
  };
  loginInState = e => {
    this.setState({ login: e.target.value });
  };

  wishInState = e => {
    this.setState({ wish: e.target.value });
  };

  hobbyInState = e => {
    this.setState({ hobby: e.target.value });
  };


  linksInState = e => {
    this.setState({ links: e.target.value });
  };

  phoneInState = e => {
    this.setState({ phone: e.target.value });
  };
  professionInState = e => {
    this.setState({ profession: e.target.value });
  };


  editProfile = async e => {
    e.preventDefault();
    console.log('work form')
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
    height: '80vh',
    padding:'5%',
    'margin-top': '10%',
    'border-radius': '0.5rem',
    background: '#fff'
    }
    return (
      <div className="container emp-profile" style={styles}>
        <form onSubmit={this.editProfile}>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
  
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                                <input type="file" name="file" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>I CAN TEACH YOU</p>
                <input type="text" className="profile-edit-btn" name="btnAddMore" placeholder="Edit work link" onChange={this.hobbyInState}/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-work">
                <p>I WANT TO LEARN</p>
                <input type="text" className="profile-edit-btn" name="btnAddMore" placeholder="Edit wishes" onChange={this.wishInState}/>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                      <input className="profile-edit-btn" name="btnAddMore" placeholder="                     Edit Name" onChange={this.nameInState}/>
                    </div>
                    <div className="col-md-6">
                      <p></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                      <input className="profile-edit-btn" name="btnAddMore" placeholder="                      Edit email" onChange={this.emailInState} />
                    </div>
                    <div className="col-md-6">
                      <p></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                      <input className="profile-edit-btn" name="btnAddMore" placeholder="                    Edit phone" onChange={this.phoneInState} />
                    </div>
                    <div className="col-md-6">
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                      <input type="text" class="profile-edit-btn" name="btnAddMore" placeholder="            Edit professional" onChange={this.professionInState} />
                    </div>
                    <div className="col-md-6">
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                </div>
              </div>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>

    )
  }
}