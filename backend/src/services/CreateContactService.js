import { prisma } from "../prisma.js"


class CreateContactService {
    async exec({ name, phone, email, message }) {

        if (!name || name.trim() == "") {
            throw new Error("Nome inválido!")
        }


        const phoneReGex = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g

        if (!phone || !phoneReGex.test(phone)) {
            throw new Error("Telefone inválido!")
        }


        const emailReGex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

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

export { CreateContactService }