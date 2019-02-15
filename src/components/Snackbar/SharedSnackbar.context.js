import React, { Component } from 'react';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: '',
    };
  }

  openSnackbar = message => {
    this.setState({
      isOpen: true,
      message,
    });
  };

  closeSnackbar = () => {
    this.setState({
      isOpen: false,
      message: '',
    });
  };

  render() {
    const { children } = this.props;

    return (
      <SharedSnackbarContext.Provider
        value={{
          closeSnackbar: this.closeSnackbar,
          message: this.state.message,
          openSnackbar: this.openSnackbar,
          snackbarIsOpen: this.state.isOpen,
        }}
      >
      
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;