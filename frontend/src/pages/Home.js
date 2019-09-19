import React from 'react'

import Upload from '../components/Upload'

class Home extends React.Component {
  state = {
    uploadModal: false,
  }

  uploadModal = () => {
    this.setState({ uploadModal: !this.state.uploadModal })
  }

  render() {
    console.log(this.state.uploadModal)
    return (
      <>
        Home Page
        <Upload handleClose={this.uploadModal} show={this.state.uploadModal}>
          Okee
        </Upload>
        <button onClick={this.uploadModal}>
          Open Modal
        </button>
      </>
    )
  }
}

export default Home