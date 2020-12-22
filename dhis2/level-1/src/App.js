import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <div className="container">
        <style jsx>{`
            .container {
                position: absolute;
                top: 48px;
                bottom: 0px;
                left: 0px;
                right: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
            }
        }`}</style>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                      <p>Hello World!</p>
                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
