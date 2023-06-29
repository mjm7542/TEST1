const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const Users = require("../schemas/user.js");

router.post("/", async (req, res) => {
    const { name, ID, pw } = req.body;
    try {
        const createdUsers = await Users.create({ name, ID, pw })
    } catch (err) { return res.status(400).json({ message: '데이터 형식이 올바르지 않습니다.' }) }
    res.json({ Message: "사용자를 생성하였습니다." });
})

router.get("/", async (req, res) => {
    try {
        const users = await Users.find({})
        const results = users.map((item) => {
            return {
                "userId": item._id,
                "name": item.name,
                "email": item.ID,
                "pw": item.pw
            }
        })
        res.status(200).json(results)
    }
    catch (err) {
        res.status(400).json({ message: "회원 목록 조회 실패" })
    }
})

router.get("/:userid", async (req, res) => {
    try {
        const { userid } = req.params;
        let users
        users = await Users.find({ _id: userid })

        const result = users.map((item) => {
            return {
                "userId": item._id,
                "name": item.name,
                "email": item.ID,
                "pw": item.pw
            }
        })
        res.status(200).json(...result)
    } catch (error) { return res.status(400).json({ message: "회원 상세 조회 실패" }) }
})



module.exports = router
