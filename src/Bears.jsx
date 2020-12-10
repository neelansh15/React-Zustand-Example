import React from 'react'
import { useStore } from './State'

export default function Bears(){
    const bears = useStore(state => state.bears)
    let arr = []
    for(let i = 0; i < bears; i++){
        arr.push(<span>🐻</span>)
    }
    return(
        <div style={{
            margin: '1em 0',
            background: '#eeeeee',
            padding: '1em',
            width: 'auto'
        }}>
            { arr }
        </div>
    )
}
