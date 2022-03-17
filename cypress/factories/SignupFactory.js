//var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        //var firstName = faker.name.firstName()
        //var lastName = faker.name.lastName()

        var data = {
            name: 'Leonardo Carvalho Vilela',
            cpf: cpf.generate(),
            email: 'leovilela100@gmail.com',
            whatsapp: '34991817415',
            address: {
                postalcode: '38412442',
                street: 'Avenida Babel',
                number: '353',
                details: 'Casa',
                district: 'Jardim Canaã',
                city_state: 'Uberlândia/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    
    }
}