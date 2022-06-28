

function CreateList(props) {
    
    let listItems = props.inputArray.map((item) => <li>{item}</li>);
    return (
        <ul>
           {listItems}
        </ul>
    )
}

export default CreateList;