import { useState } from "react";


export default function UseOnClickOutSide() {
    const [showContent, setShowContent] = useState(false);
    return (
        <div>
            {
                showContent ? <div>
                    <h1>This is a random content</h1>
                    <p>Please click outside of this paragrah to close this.it won't close if click inside of this content

                    </p>
                </div>
                    : <button onClick={setShowContent(true)}>show content</button>
            }
        </div>
    )
}