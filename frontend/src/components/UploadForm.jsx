import React, { useState } from 'react'
import api from '../api'
import './UploadForm.scss'

const UploadForm = ({ onDone }) => {
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [load, setLoad] = useState(false)
    const upload = async (e) => {
        e.preventDefault()
        if (!file) return alert('파일 없음')
        setLoad(true)
        try {
            console.log('start upload', file)
            const { data: { url, key } } = await api.post('/files/presign', {
                filename: file.name,
                contentType: file.type
            })
            console.log('presign', { url, key })
            const putRes = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': file.type },
                body: file
            })
            if (!putRes.ok) throw new Error('s3 업로드 실패')
            console.log('성공', key)
            const metaRes = await api.post('/files', {
                key,
                originalName: file.name,
                contentType: file.type,
                size: file.size,
                title,
                description: desc
            })
            console.log('db 성공', metaRes.data)
            onDone?.()
            setTitle('')
            setDesc('')
            setFile(null)
            console.log('업로드 완료')
        } catch (error) {
            console.error(error)
            alert('failed')
        } finally {
            setLoad(false)
        }
    }
    return (
        <form className='form-list' onSubmit={upload}>
            <input type="file" onChange={e => setFile(e.target.files?.[0] ?? null)} accept='image/*' className='file-btn' />
            <div className="left">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='description' />
                <button type='submit' disabled={load} className='upload-btn'>{load ? 'uploading' : 'upload'}</button>
            </div>
        </form>
    )
}

export default UploadForm
