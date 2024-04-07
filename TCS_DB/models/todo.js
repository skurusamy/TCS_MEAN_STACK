module.exports = function(sequelize,DataTypes){
    // myTask is  name of the table
    return sequelize.define('myTask',{
        uname:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            
            validate:{
                len:[1,200]
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
                len:[1,200]
            }
        }
        // unique --> but its case sensitive
        
    },
    {
        hooks:{
            beforeValidate:function(myTask,options){
                if(typeof myTask.uname === 'string'){
                    myTask.uname=myTask.uname.toLowerCase();
                }
            }
        }
    }
    ) 

}