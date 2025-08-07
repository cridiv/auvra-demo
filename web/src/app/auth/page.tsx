import SignUp from './SignUp';
import React from 'react';

const page = () => {
    return (
        <div>
            <SignUp isOpen={true} onClose={() => {}} />
        </div>
    )
}

export default page;