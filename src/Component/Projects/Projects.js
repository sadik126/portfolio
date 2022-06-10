import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { themeContext } from '../../Context';
import Header from '../Header/Header';
import Project from './Project';

const Projects = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const nevigate = useNavigate();

    const nevigatedetail = (id) => {
        nevigate(`/products/${id}`)
    }
    const data = [
        {
            id: 1,
            category: "Photography website",
            dis: " A photography website with multiple use Support crud operations of many service User can book their service ",

            title: "WILD STUDIO ",
            image: "https://i.ibb.co/R4bbRvN/wildfull.png",
        },
        {
            id: 2,
            category: "Book Shop website",

            title: "BOOK LOVER",
            image: "https://i.ibb.co/JcnbRnq/1c666e8b-8a5d-417b-9a4b-742b9de9e6ad.png",
        },
        {
            id: 3,
            category: "Tools website",

            title: "TOOLS WORLD  ",
            image: "https://i.ibb.co/hXqg44X/React-App.png",
        }

    ]
    return (
        <div>
            <Header></Header>

            <div className="container" style={{ height: "100rem" }}>
                <h1 className="text-center" style={{ color: darkMode ? "white" : "" }}>
                    Our collection
                </h1>
                <div className="row g-4" style={{ width: "100%", height: "100%" }}>
                    {
                        data.map(d => <div className='col-md-6 d-flex justify-content-center'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={d.image} height="318" />
                                <Card.Body>
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text>
                                        {d.dis}
                                    </Card.Text>

                                    <Button variant="primary" onClick={() => nevigatedetail(d.id)}>Show detail</Button>

                                </Card.Body>
                            </Card>


                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default Projects;