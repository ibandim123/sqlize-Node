//Configuração do Banco de Dados, usando o Postgres e visualizando com o Postbird
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'123',
    database: 'SQlize',
    define: {
        timestamps:true, //Create_at(armazena a data do registro ) e Updated_at(Registra a data da última atualização)
        underscored:true,//Nome das tabelas e das colunas no formato 

    },

}  