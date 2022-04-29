import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import React, { Component } from 'react';

const PremiumPage = () => {
    return (
        <Authenticator className='centerSignin'>
            {({ signOut }) => (
                <div>
                    <h1>Hello, welcome to my store</h1>
                    <h3>You are authenticated, this is the store page</h3>
                    <h3>This is new content</h3>

                    <div>
                        <h2>Oisin Lynch File Upload System</h2>
                        <h3>File Upload with React and Serverless API</h3>
                        <div>
                            <input type="file" onChange/>
                            <button onClick>
                                Upload File
                            </button>
                        </div>
                    </div>

                    <br />

                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default PremiumPage;