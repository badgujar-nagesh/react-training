import React, {Component} from 'react';

class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textField: "",
            textArea: "",
            selectBox: "",
            isChecked: "",
            radioButton: "yes"
        };
    }

    submitForm = () => {
        console.log(this.state)
    }

    render() {
        let { textField, textArea, selectBox, isChecked, radioButton} = this.state;
        return (<>
        <div className="row">
            <div className="col-sm-6">
                <form>
                    <div className="form-group">
                        <label>Textfield:</label>
                        <input type="email" className="form-control" value={textField} name="textField"
                            onChange={e => this.setState({textField: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label>Textarea:</label>
                        <textarea className="form-control" value={textArea} name="textArea" 
                            onChange={e => this.setState({textArea: e.target.value})}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Selectbox:</label>
                        <select className="form-control" value={selectBox} name="selectBox" onChange={e => this.setState({selectBox: e.target.value})}>
                            <option value="">Select Box</option>
                            <option value="abc">ABC</option>
                            <option value="xyz">XYZ</option>
                            <option value="pqr">PQR</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="radio-inline">
                            <input type="radio" name="radioButton" value="yes" checked={radioButton === 'yes'}
                                onChange={e => this.setState({radioButton: e.target.value})} />Yes
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name="radioButton" value="no" checked={radioButton === 'no'} 
                                onChange={e => this.setState({radioButton: e.target.value})} />No
                        </label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" checked={isChecked} onChange={() => this.setState({isChecked: !this.state.isChecked})}  /> Checkbox</label>
                    </div>
                    <button type="button" onClick={this.submitForm} className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </>);
    }    
}

export default LifeCycle;