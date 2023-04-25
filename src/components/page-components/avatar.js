import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const AvatarComponent = () => {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/images/avatar.jpeg" />
            </Stack>
        </div>
    );
}

export default AvatarComponent;



