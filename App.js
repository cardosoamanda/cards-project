import React from "react"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
            
        )
    })        
    
    return (
        <div>
        
            <div className="card-list">
                {cards}
            </div>
        </div>
    )
}