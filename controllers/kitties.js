import { Kitty } from "../models/kitty.js"

function create(req, res) {
  req.body.owner = req.user.profile
  Kitty.create(req.body)
  .then(kitty => {
    Kitty.findById(kitty._id)
    .populate('owner')
    .then(populatedKitty => {
      res.json(populatedKitty)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
}