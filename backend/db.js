const mongoose = require('mongoose');

/*

        firstname : String,
        lastname : String ,
        pssword : String , 
 */
mongoose.connect("mongodb+srv://admin:GdkPbMqi9iASCz10@cluster0.tanlola.mongodb.net/")

const userSchema = new mongoose.Schema({
        username:{
            type : String ,
            required : true , 
            lowercase : true ,
            unique : true , 
            trim : true ,
            minLength : 3,
            maxLength : 30,
        },

        firstname :{
            type : String ,
            required : true , 
            trim : true ,
            minLength : 1,
            maxLength : 30,

        },
        lastname : {
            type : String ,
            required : true , 
            trim : true ,
            maxLength : 30,
        },
        password : {
            type: String,
            required: true,
            minLength: 6
        } , 

});

const accountSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,

        },
    balance :  
    {
        type : Number,
        require : true
    }
});

const User = mongoose.model('paytmUser' , userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {

    User,
    Account

}
