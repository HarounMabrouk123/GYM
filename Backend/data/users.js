import bcrypt from 'bcryptjs'

const users = [{
    name:'Admin User',
    email:'admin@gmail.com',
    password:bcrypt.hashSync('123456', 10),
    isAdmin:true
},{
    name:'Haroun Mabrouk',
    email:'haroun@gmail.com',
    password:bcrypt.hashSync('123456', 10),
    isAdmin:false
},{
    name:'Arslen Hedhli',
    email:'arslen@gmail.com',
    password:bcrypt.hashSync('123456', 10),
    isAdmin:false
}];

export default users ;