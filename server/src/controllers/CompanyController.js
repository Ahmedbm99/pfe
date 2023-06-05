const { Company , Contract} = require('../models')

module.exports = {
	async getCompany(req, res) {
		try {
			const company = await Company.findByPk(req.params.companyId);

			res.send(company)
		} catch (err) {
			res.status(500).send({
				error: 'An error occured when trying to fetch company.'
			})
		}
	} ,
	async createCompany(req,res){
		try {
			const company = await Company.create(req.body);
			console.log(company);
			res.send(company);
		}catch(err) {
			res.status(500).send({
				error : 'An error occured when trying to create company.'
			})
		}
	},
	async createContract(req,res){
		try {
			const contract = await Contract.create(req.body);
			res.send(contract);
		}catch(err) {
		res.status(500).send({
			error : 'An error occured when trying to create company.'
		})
	}
	},
	async getCompanyByName(req,res){
		try{
			const company = await Company.findOne({
                where: {
                    name: req.params.name
                },
                attributes: ['id']
            })
			if (!company) {
                return res.status(403).send({
                    error: "Company not registered."
                })
            }
            res.send(company)
        } catch (error) {
            res.status(500).send({
                error: "An error occured when trying to get a company."
            })
	}
}
}
