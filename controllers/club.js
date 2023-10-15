import { Profile } from "../models/profile.js"
import { Club } from "../models/club.js"

async function index(req, res) {
  try {
    const clubs = await Club.find({}).populate('addedBy')
    res.status(200).json(clubs)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function create(req, res) {
  try {
    req.body.addedBy = req.user.profile
    const club = await Club.create(req.body)
    // Find profile and push club to array
    const profile = await Profile.findByIdAndUpdate(req.user.profile,
      { $push: { clubs: club } }, { new: true })
    // Add addedBy's profile to club's addedBy
    club.addedBy = profile
    res.status(201).json(club)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function show(req, res) {
  try {
    const selectedClub = await Club.findById(req.params.clubId)
      .populate('addedBy')
    res.status(200).json(selectedClub)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update(req, res) {
  try {
    const selectedClub = await Club.findByIdAndUpdate(
      req.params.clubId,
      req.body, { new: true }
    ).populate('addedBy')
    res.status(201).json(selectedClub)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function deleteClub(req, res) {
  try {
    const selectedClub = await Club.findByIdAndDelete(req.params.clubId)
    // Search and remove the club from profile
    const profile = await Profile.findById(req.user.profile)
    profile.clubs.remove({ _id: req.params.clubId })
    await profile.save()
    res.status(200).json(selectedClub)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  index, create, show, update, deleteClub
}