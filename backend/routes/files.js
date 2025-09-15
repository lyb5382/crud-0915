import { Router } from "express";
import { nanoid } from "nanoid";
import FileItem from "../models/FileItem.js";
import { presignPut, presignGet, deleteObject } from "../src/s3.js";

const router = Router()

router.post('/presign', async (req, res) => {
    try {
        const { filename, contentType } = req.body
        if (!filename || !contentType) {
            return res.status(400).json({ message: 'filename과 contentType은 필수 입력' })
        }
        const key = `uploads/${Date.now()}-${nanoid(6)}-${filename}`
        const url = await presignPut(key, contentType)
        res.json({ url, key })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: '프리사인드 url 생성 실패' })
    }
})

export default router