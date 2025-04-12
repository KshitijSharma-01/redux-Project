import "./Home.css"
import { useState, useEffect } from "react"

function Home(props) {

    console.log("Home data:", props.data)

    const [data, setData] = useState([])

    // function apiData() {
    //     try {
    //         axios.get(`https://dummyjson.com/products/search?q=phone`).then((getData) => {
    //             console.log(getData.data)
    //             setData(getData.data)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function apiData() {
        const getFetchData = await fetch('https://dummyjson.com/products/search?q=phone')
        // const getFetchData = await fetch('https://dummyjson.com/products/1')
        // console.log(getFetchData)
        const getApiData = await getFetchData.json()
        console.log(getApiData.products)
        setData(getApiData.products)
    }

    useEffect(() => {
        apiData()
    }, [])

    return (
        <>
            <div className="mainWrapper">
                <div className="cartDetail">
                    <div className="cartImg">
                        <span>{props.data.length}</span>
                        <img src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg" />
                    </div>
                </div>

                <div className="productMainWrapper">
                    {data.map((product, index) => {
                        return <div className="productDetails" key={index}>
                            <div className="productImg">
                                <img src={product.thumbnail} />
                            </div><br/>
                            <div className="productName">
                                {product.title}
                            </div><br/>
                            <div className="productPrice">
                                $ {product.price}
                            </div><br/>
                            <div className="buttonSection">
                                <button onClick={() => props.addToCartEvent({product})}>Add To Cart</button>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>



        </>
    )
}

export default Home