import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Text from './Text';


class Formdialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      description: '',
      error: {name: false, email: false, description: false}
    }
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);

  }


  inputName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  inputEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  inputDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }


  submitForm = () => {
    
    const emailExp = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const nameExp = /^[a-z]{3,5}$/;

    if (emailExp.test(this.state.email) === false) {
      this.setState({
        error: {email: true}
      })
    } else if (nameExp.test(this.state.name) === false) {
      this.setState({
        error: {name: true}
      })
    } else {
      this.setState({
        error: false,
        name: '',
        email: '',
        description: ''
      })
      this.props.handleClose()
    }
  }


  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"お問い合わせフォーム"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Text
                error={this.state.error.name}
                label={'name'}
                rows={1}
                multiline={false}
                type={'text'}
                value={this.state.name}
                onChange={this.inputName}
              />
              <Text
                error={this.state.error.email}
                label={'email'}
                rows={1}
                multiline={false}
                type={'email'}
                value={this.state.email}
                onChange={this.inputEmail}
              />
              <Text
                error={this.state.error.description}  
                label={'descrption'}
                rows={5}
                multiline={true}
                type={'description'}
                value={this.state.description}
                onChange={this.inputDescription}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              キャンセル
          </Button>
            <Button onClick={this.submitForm} color="primary" autoFocus>
              送信
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Formdialog;