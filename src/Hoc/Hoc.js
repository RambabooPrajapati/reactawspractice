
import { useState } from 'react'

const Hoc = (WrappedComponents) => {
    return function Counter(props) {
        const [count, setCount] = useState(0);

        return (
            <>
                <WrappedComponents{...props} count={count} increaseCountFunction={() => setCount(count + 1)} decreaseCountFunction={() => setCount(count -1)}/>
            </>
        )
    }
}

export default Hoc
