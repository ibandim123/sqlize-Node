//Model representa uma tabela no Banco de Dados.

const { Model, DataTypes } = require('sequelize');//Importar o model e o DataType

class User extends Model {
    static init(sequelize) {
        super.init ({
            name: DataTypes.STRING,//O dado e o tipo do dado.
            email: DataTypes.STRING,

        },{
            sequelize
        }
        )
    }
}

module.exports = User;