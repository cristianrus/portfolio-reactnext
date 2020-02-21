import React from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

const BaseLayout = (props) => {
    const { className, children } = props;
    return (
        <React.Fragment>
            <Head>
                <title>My awesome title</title>
                <link rel="stylesheet" href="https://use.typekit.net/fop8mza.css" />
            </Head>
            <div className="layout-container" >
                <Header />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default BaseLayout