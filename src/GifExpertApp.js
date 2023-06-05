import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import './index.css'

const GiftExpertApp = ({ value }) => {

    const [categories, setCategories] = useState(['Dragon Ball'])


    return (
        <>
            <h1>App de Gift</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GiftExpertApp; 