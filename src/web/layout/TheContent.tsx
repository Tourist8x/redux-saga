import * as React from 'react'
import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../routes'


const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
export const TheContent = () => {
    return (
        <Suspense fallback={loading}>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.component />}
                    />
                ))}
            </Switch>
        </Suspense>
    )
}