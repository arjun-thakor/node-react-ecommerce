const models = require("../models");
const User = models.User;

module.exports = {
	getAllUsers: (req, res) => {
		const _users = User.findAll()
			.then((data) => res.send(data))
			.catch((err) =>
				res.status(500).send({
					message:
						err.message || "Some error occurred while retrieving users.",
				})
			);
	},
	createUser: (req, res) => {
		// Validate request
		if (!req.body.firstName || !req.body.lastName) {
			res.status(400).send({
				message: "Content can not be empty!",
			});
			return;
		}

		const _userName = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
		};

		User.create(_userName)
			.then((data) => res.send(data))
			.catch((err) => {
				res.status(500).send({
					message:
						err.message || "Some error occurred while creating the user.",
				});
			});
	},
   getSingleUser: (req, res) => {
      const id = req.params.id;
		User.findByPk(id)
			.then((data) => res.send(data))
			.catch((err) =>
				res.status(500).send({
					message:"Error retrieving user with id=" + id,
				})
			);
	}
};
