import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UserForm from '../pages/UserForm'
import GameApp from '../pages/GameApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../hooks/firebase'

export default function App() {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return 'loading ...'
    }
    if (error) {
        return 'There was an error'
    }
    if (!user) {
        return <UserForm />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/game/:id' element={<GameApp />} />
            </Routes>
        </BrowserRouter>
    )
}