import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import CardHome from "../Component/CardHome";
import SmallCard from "../Component/SmallCard";

const Home = () => {
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        // fetch("http://localhost:4000/");
        fetch("https://node-blog-3n9c.onrender.com/")
        .then(res=>(res.json()))
        .then((res)=>setDetail(res))
    },[])
    console.log(detail)
    return (
        <div>
            <div className="Home">
                
                <div className="home__container">
                    <div className="home__first">
                        <Link to="/Technology">
                            {" "}
                            <img width={"80%"}
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dybGBKXpNLtsORBwSreScM0yJdTzZscLRw&usqp=CAU"}
                                alt="not found"
                            />
                        </Link>
                    </div>
                    <div className="home_right_container">
                        <div className="home__sec">
                            <Link to="/fitness">
                                {" "}
                                <img
                                    src={"https://images.healthshots.com/healthshots/en/uploads/2022/03/20121414/fitness-woman-1600x900.jpg"}
                                    alt="not found"
                                />
                            </Link>
                        </div>

                        <div className="home__thir">
                            <Link to="/Food">
                                {" "}
                                <img
                                    src={"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"}
                                    alt="not found"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <h1 style={{ marginTop: "40px" }}>The Latest</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "bollywood";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "technology";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>
                <div className="home__left left1">
                    {detail
                        .filter((article) => {
                            return article.category === "food";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Articles
                </h1>

                <h1 className="Top">Top Posts</h1>
                <hr style={{ width: "200px", thickness: "20px" }} />

                <div className="rightbar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((item) => (
                            <Card
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>
                <div className="sidebar2">
                    {detail
                        .filter((article) => {
                            return article.category === "mix";
                        })
                        .map((item) => (
                            <SmallCard
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 200)}
                                title={item.title.slice(0, 25)}
                                author={item.author}
                            />
                        ))}

                    <div className="advertisement">
                        <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{ marginTop: "40px", display: "inline-block" }}>
                    Latest Stories
                </h1>
                <hr />

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer1";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer2";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>

                <div className="home__left">
                    {detail
                        .filter((article) => {
                            return article.category === "footer3";
                        })
                        .map((item) => (
                            <CardHome
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;