import { CreateContactService } from "../services/CreateContactService.js"

export const contactController = {
    async create(req, res) {
        const data = req.body

        const createContactService = new CreateContactService()

        try {
            const contato = await createContactService.exec(data)

            return res.json(contato)
        } catch (err) {

            return res.status(401).json({ error: err.message })
        }
    }
}