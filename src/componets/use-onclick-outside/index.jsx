import { useRef, useState } from "react";
import UseOnClickOutSideTest from "./test";


export default function UseOnClickOutSide() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOnClickOutSideTest(ref, () => setShowContent(false))
    return (
        <div ref={ref}>
            {
                showContent ? <div>
                    <h1>This is a random content</h1>
                    <p>Please click outside of this paragrah to close this.it won't close if click inside of this content

                    </p>
                </div>
                    : <button onClick={() => setShowContent(true)}>show content</button>
            }
        </div>
    )
}