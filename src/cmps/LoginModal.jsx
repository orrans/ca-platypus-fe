import { useState, useEffect } from 'react'
import { userService } from '../services/user'
import { login } from '../store/actions/user.actions'

export function LoginModal({ onClose }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    async function onLogin(user) {
        try {
            await login({ username: user.username })
            onClose()
        } catch (err) {
            console.log('Login failed', err)
        }
    }

    return (
        <div className="login-modal-wrapper">
            <div className="backdrop" onClick={onClose}></div>
            <div className="login-modal">
                <header className="modal-header">
                    <button className="btn-close" onClick={onClose}>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 3, overflow: 'visible' }}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                    </button>
                    <div className="title">Log in</div>
                </header>

                <div className="modal-content">
                    <h3 className="welcome-msg">Welcome back</h3>
                    <div className="user-selection-list">
                        {users.map(user => (
                            <div key={user._id} className="user-item" onClick={() => onLogin(user)}>
                                <img src={user.imgUrl} alt={user.fullname} className="user-avatar" />
                                <div className="user-info">
                                    <span className="user-name">{user.fullname}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
