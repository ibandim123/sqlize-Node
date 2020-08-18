const User = require('../models/User')

//Funções do BD.
module.exports = {
    async index(req, res) { //Método Index para encontrar dados no BD
        const users = await User.findAll()

        return res.json(users)
    },
    async store(req,res) { //Método Store criar duas info: nome e email.
        const { name, email } = req.body;

        const user = await User.create({ name,email })

        return res.json(user)
    }
}