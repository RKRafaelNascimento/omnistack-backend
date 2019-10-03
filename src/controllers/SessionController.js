module.exports = {
    store(req,res){
        const { email } = req.body
        return res.json({message:` Email ${email}` })
    }
}