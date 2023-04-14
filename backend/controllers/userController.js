import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js';

const getUserProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(user);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    console.log(user)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
        user.profilePic = req.body.profilePic || user.profilePic
        user.aboutme = req.body.aboutme || user.aboutme
        user.linkedin = req.body.linkedin || user.linkedin
        user.github = req.body.github || user.github
        user.facebook = req.body.facebook || user.facebook
        user.twitter = req.body.twitter || user.twitter
        user.website = req.body.website || user.website

        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            updatedUser
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const followers = asyncHandler(async (req, res) => {
    User.findByIdAndUpdate(req.body.followId, {
        $push: { followers: req.user._id }
    }, {
        new: true
    }, (err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        User.findByIdAndUpdate(req.user._id, {
            $push: { following: req.body.followId }

        }, { new: true }).select("-password").then(result => {
            res.json(result)
        }).catch(err => {
            return res.status(422).json({ error: err })
        })

    }
    )

});

const unfollowers = asyncHandler(async (req, res) => {
    User.findByIdAndUpdate(req.body.unfollowId, {
        $pull: { followers: req.user._id }
    }, {
        new: true
    }, (err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        }
        User.findByIdAndUpdate(req.user._id, {
            $pull: { following: req.body.unfollowId }

        }, { new: true }).select("-password").then(result => {
            res.json(result)
        }).catch(err => {
            return res.status(422).json({ error: err })
        })

    }
    )
})


export {

    getUserProfile,
    updateUserProfile,
    followers,
    unfollowers
}
