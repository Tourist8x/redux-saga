import * as React from 'react'
import { TheContent } from './TheContent'
import { TheHeader } from './TheHeader'
import { TheSidebar } from './TheSidebar'
import { BrowserRouter as Router } from 'react-router-dom'
export const TheLayout = () => {
    return (
        <Router>
            <TheHeader></TheHeader>
            <div className="container-fluid">
                <div className="row">
                    <TheSidebar></TheSidebar>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <TheContent></TheContent>
                    </main>
                </div>
            </div>
        </Router>
    )
}
