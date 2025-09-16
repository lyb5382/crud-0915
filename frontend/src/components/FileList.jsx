import React from 'react'
import api from '../api'
import './FileList.scss'

const FileList = () => {
    return (
        <ul className='file-list'>
            <li>
                <h3>sample img</h3>
                <div className="img-wrap">
                    <img src="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" alt="" />
                </div>
                <p>설명</p>
                <div className="btn-wrap">
                    <a href="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" className='open-btn'>open</a>
                    <button className='delete-btn'>delete</button>
                </div>
            </li>
            <li>
                <h3>sample img</h3>
                <div className="img-wrap">
                    <img src="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" alt="" />
                </div>
                <p>설명</p>
                <div className="btn-wrap">
                    <a href="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" className='open-btn'>open</a>
                    <button className='delete-btn'>delete</button>
                </div>
            </li>
            <li>
                <h3>sample img</h3>
                <div className="img-wrap">
                    <img src="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" alt="" />
                </div>
                <p>설명</p>
                <div className="btn-wrap">
                    <a href="https://crud-0915.s3.ap-northeast-2.amazonaws.com/uploads/1757937238492-sRtlcM-test.png" className='open-btn'>open</a>
                    <button className='delete-btn'>delete</button>
                </div>
            </li>
        </ul>
    )
}

export default FileList
