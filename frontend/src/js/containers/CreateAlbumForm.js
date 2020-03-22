import React, { Component } from "react";
import { connect } from 'react-redux';
import { addAlbum } from '../actions';

class CreateAlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            files: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.currentTarget.value,
        })
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.currentTarget.value,
        })
    }

    handleFilesChange(e) {
        this.setState({
            files: e.currentTarget.files,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { addAlbum } = this.props;
        const { userId } = this.props.match.params;
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        const files = [...this.state.files];
        files.forEach((file, index)=>{
            formData.append('image', file, `file${index}.jpg`);
        })
        formData.append('userId', userId); 
        addAlbum(formData);
        // 現在這個動作做完之後會reload
    }

    render() {
        // console.log(this.props);
        return(
            <form action="" method="post" encType="multipart/form-data" onSubmit={this.handleSubmit.bind(this)} >
                <div className="form__row form__title">
                    Create a New Album
                </div>
                <div className="form__row">
                    <label htmlFor="albumName">Album Name</label>
                    <input type="text" name="name" id="albumName" onChange={this.handleNameChange.bind(this)} />
                </div>
                <div className="form__row">
                    <label className="forTextarea" htmlFor="albumDescription">Album Description</label>
                    <textarea type="text" name="description" id="albumDescription" rows="5" onChange={this.handleDescriptionChange.bind(this)} />
                </div>
                <div className="form__row">
                    <label htmlFor="uploads">Upload Photos</label>
                    <input type="file" accept="image/jpeg" name="image" id="uploads" multiple onChange={this.handleFilesChange.bind(this)} />
                </div>
                <div className="form__row">
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  addAlbum: formData => dispatch(addAlbum(formData))
})

export default connect(null, mapDispatchToProps)(CreateAlbumForm)
