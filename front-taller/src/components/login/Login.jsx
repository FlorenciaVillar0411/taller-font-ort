import "./Login.css"
const Login = () => {
return <div>
    <h2>Hola soy el login</h2>
    <hr/>
    <label>User</label>
    <input type="text" placeholder="username"/>
    <br/>
    <label>Password</label>
    <input type="text" placeholder="contrasena"/>
    <br/>
    <button type="submit">Submit</button>
</div>
}

export default Login;