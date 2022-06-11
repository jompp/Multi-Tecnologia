import { prisma } from "../prisma.js"


class CreateContactModel {
    async exec({ name, phone, email, message }) {

        const nameReGex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/

        if (!name || name.trim() == "" || !nameReGex.test(name)) {
            throw new Error("Nome inválido!")
        }


        const phoneReGex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

        if (!phone || !phoneReGex.test(phone)) {
            throw new Error("Telefone inválido!")
        }


        const emailReGex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if (!email || !emailReGex.test(email)) {
            throw new Error("email inválido!")
        }


        if (!message || message.trim() == "") {
            throw new Error("mensagem inválida!")
        }

        const contato = await prisma.contatos.create({
            data: {
                name: name,
                phone: phone,
                email: email,
                message: message
            }

        })

        return contato
    }
}

export { CreateContactModel }