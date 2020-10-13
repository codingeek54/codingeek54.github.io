import React from 'react'
import ReactDOM from 'react-dom'
import Files from 'react-files'


class Camera extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
  
      return (
        <div className="previewComponent">
              <input className="fileInput" 
              type="file"
              id="take-picture" 
              accept="image/*" 
              onChange={(e)=>this.handleImageChange(e)} />
          <div className="imgPreview">
            {imagePreview}
          </div>
        </div>
      )
    }
  }
    

export default Camera;
