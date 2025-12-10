const Product = ({name="Default", age="Unknown", gender="Unknown"})=>
{
    return (
        <div>
            <h2>This is Product Component</h2>
            Name:{name}<br></br>
            Age:{age}<br></br>
            Gender:{gender}
        </div>
    )
}
export default Product