
function User(props)
{
    return(
<div>
    <h1>Name : {props.name}</h1>
    <h1>Age : {props.age}</h1>
    <p>
        {props.children}
    </p>
</div>
);
}

export default User;