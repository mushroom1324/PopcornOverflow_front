import React, {useEffect, useState} from 'react';

export default function SendForm() {
    return (
        <div>
            {/* should implement action im form tag. */}
            <form method="post">
                <input type="text" name="usename" id="name_input" placeholder="input name here.."/>
                <input type="text" name="content" id="content_input" placeholder="input content here.."/>
                <input type="button" value="send"/>
            </form>
        </div>
    )
}
