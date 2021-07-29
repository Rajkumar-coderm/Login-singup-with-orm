const {Model}=require('objection')
const knex=require('../config/db')
Model.knex(knex);

class Users extends Model{
    static get tableName(){
        return 'users'
    }
    static get jsonSchema(){
        return{
            type:'object',
            required:['email'],
            properties:{
                id:'integer',
                name:{type:'string'},
                password:{type:'string'},
            }
        }
    }
}

module.exports=Users;
