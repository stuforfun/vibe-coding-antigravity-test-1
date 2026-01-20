import React, { useState } from 'react'
import './App.css'
import ParticleBackground from './components/ParticleBackground'
import CyberdeckScene from './components/CyberdeckScene'

function App() {
    const [count, setCount] = useState(0)
    const [status, setStatus] = useState('Online')
    const [mode, setMode] = useState('Cyberdeck')

    const toggleMode = () => {
        setMode(prev => prev === 'Cyberdeck' ? 'Stealth' : 'Cyberdeck')
    }

    const cycleStatus = () => {
        setStatus(prev => prev === 'Online' ? 'Offline' : 'Online')
    }

    return (
        <>
            <CyberdeckScene mode={mode} />
            <ParticleBackground />
            <div className="scanlines"></div>

            <div className={`card-container mode-${mode.toLowerCase()}`}>
                <h1 className="antigravity-title">Vibe Coding<br />Antigravity</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Cloud SDLC Environment
                </p>

                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        ACTIVATE // {count}
                    </button>

                    <div className="feature-grid">
                        <div className="feature-item" onClick={cycleStatus}>
                            <strong>System Status</strong>
                            <p className={`status-${status.toLowerCase()}`}>{status}</p>
                        </div>
                        <div className="feature-item" onClick={toggleMode}>
                            <strong>Mode</strong>
                            <p>{mode}</p>
                        </div>
                    </div>
                </div>

                <p className="read-the-docs">
                    Click features to interact. Edit <code>src/App.jsx</code> to deploy functionality.
                </p>
            </div>
        </>
    )
}

export default App
