import { CreateContactModel } from "../models/CreateContactModel.js"

export const contactController = {
    async create(req, res) {
        const {name, phone, email, message} = req.body
        const createContactModel = new CreateContactModel()

        try {
            const contato = await createContactModel.exec({name, phone, email, message})

            return res.json(contato)
        } catch (err) {
        
            return res.status(401).json({ error: err.message })
        }
    }
}