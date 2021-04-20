import React from 'react'
import img from '../../Asset/AjayiCrowther.jpg'

const HomePage = () => {
    return (
        <div
        style={{
            display: "flex",
            border: "1px solid lightgray",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "20px"
        }}
        >
            <div style={{
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "10px",
                marginRight: "20px"
            }}>
                <img src={img}
                alt="img"
                style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "30px",
                    border: "2px solid black"
                }}
                />
            </div>
            <div style={{
                marginBottom: "10px",
                marginTop: "10px"
                }}>
                
                <div>
                    <input placeholder="What's Happening?"
                    style={{
                        width: "300px",
                        height: "100px",
                        border: "none",
                        borderRadius: "5px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "flex-start",
                        top: "0"
                    }}/>
                </div>
                <div>Everyone can reply</div>
                <div
                style={{
                    display: "flex",
                    width: "300px",
                    justifyContent: "space-between"
                }}
                >
                    <div 
                    style= {{
                        marginBottom: "10px",
                        width: "150px",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <button>B</button>
                        <button>B</button>
                        <button>B</button>
                        <button>B</button>
                    </div>
                    <button style={{
                        color: "#fff",
                        backgroundColor: "#aef2fc",
                        width: "80px",
                        height: "25px",
                        borderRadius: "10px",
                        border: "none"
                    }}>Tweet</button>
                    </div>
            </div>
        </div>
    )
}

export default HomePage