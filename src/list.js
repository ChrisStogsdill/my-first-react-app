

function CreateList(props) {
    
    let listItems = props.inputArray.map((item, index) => <li key={"List"+index}>{item}</li>);
    return (
        <ul>
           {listItems}
        </ul>
    )
}

export default CreateList;