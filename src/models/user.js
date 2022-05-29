const sequelize = require("sequelize");
const DataTypes = sequelize.DataTypes;


const User = sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    encpass: DataTypes.STRING
});



export default User