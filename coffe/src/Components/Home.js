import React from 'react'
import './Home.css'
import {CardMedia} from '@mui/material'
const Home = () => {
  return (
    <div>
    <section class="home" id="home">
        <div class="home-text">
            <h1>Good Coffee</h1>
            <h3>Will Always Find The Audience</h3>
            <p>We provide a variety of unique and best coffee.</p>
            <div class="button">
                <a href="#" class="btn">Order Now </a>
            </div>
        </div>
    </section>
    <section class="about" id="about">
        <div class="about-img">
        <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/c5/3e/e3/c53ee3d913a5d47bd2993ae4ca766383.jpg"
              title="Sample Image 2"
            />
        </div>

        <div class="about-text">
            <h2>About<span> us</span></h2>
            <h4>A Coffee Shop</h4>
            <p>Caffeo, a cozy coffee haven nestled on the corner of Main Street, greets you with the rich aroma of freshly roasted beans. Its warm, rustic decor and dimly lit ambiance make it the perfect retreat for coffee connoisseurs and casual visitors alike. From velvety cappuccinos to robust pour-over brews, Caffeo offers a diverse menu that caters to every caffeine craving.Whether you're seeking a quick pick-me-up or a serene spot to savor your latte, Caffeo has your coffee needs covered. </p>
                <a href="#" class="btn">More About</a>
        </div>
    </section>
    <section class="coffee" id="coffee">
        <div class="main-text">
            <h2><span>Our</span> Coffees</h2>
            <p style={{marginTop: '20px'}}>What we provide</p>
        </div>
        <div class="coffee-content">
            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/fe/7f/57/fe7f5757ea42b555a33eb40804fecc4e.jpg"
              title="Sample Image 2"
            />
                <h3>Espresso</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹70.00</p>
            </div>

            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/63/c7/2c/63c72c1bf187d91e9a7e699d8b8d01f0.jpg"
              title="Sample Image 2"
            />
                <h3>Caffè mocha</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹120.00</p>
            </div>

            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/14/63/a8/1463a8b6d5f54a6bd4b10cbd3f9a0ce3.jpg"
              title="Sample Image 2"
            />
                <h3>Turkish Coffee</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹160.00</p>
            </div>
            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/87/e5/d3/87e5d30ac3855fb8e862db1d191547d2.jpg"
              title="Sample Image 2"
            />
                <h3>Affogato</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹110.00</p>
            </div>

            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/2f/15/bf/2f15bf620628090eedcece52dd95ad85.jpg"
              title="Sample Image 2"
            />
                <h3>Cortado</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹90.00</p>
            </div>

            <div class="row">
            <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/58/7f/1a/587f1a0645cc104992359b36fdff37ed.jpg"
              title="Sample Image 2"
            />
                <h3>Flat White Coffee</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <p>₹140.00</p>
            </div>
        </div>
        <a href="#" class="btn" style={{marginTop:'20px'}}>View More </a>
    </section>
    <section class="contact" id="contact">
        <div class="contact-img">
        <CardMedia
              component="img"
              alt="Sample Image 2"
              height="200"
              src="https://i.pinimg.com/564x/bd/7b/67/bd7b67f2db91b4bb841f925217a666ca.jpg"
              title="Sample Image 2"
            />
        </div>
        <div class="contact-text">
            <div style={{marginBottom:'70px'}}>
           <h2>Contact<span> us</span></h2></div>
           <h4>Address: <p>Caffeo,Erode.</p></h4>
           <h4>Mail:<p>caffeo@gmail.com</p></h4>
           <h4>Phone:<p>+91 8765432871</p></h4>
        </div>
    </section>
    </div>
  )
}

export default Home























