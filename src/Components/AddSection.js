import React from 'react';




class AddSection extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='AddSection'>
                <h2>{this.props.title}</h2>
                <div className='formContainer'>
                    <form>{this.props.arrayProp.map(element=>                      
                        <label name={element}> {element}
                            <input type="text" />
                        </label>)}
                    </form>
                </div>
                <button>EDIT</button>
                <button>SUBMIT</button>
            </div>
    )};
}

export default AddSection;