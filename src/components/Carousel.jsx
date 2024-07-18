import React from 'react';
import classNames from 'classnames';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {src: '/images/first.jpg', active: true},
                {src: '/images/second.jpg', active: false},
                {src: '/images/third.jpg', active: false}
            ]
        };
    }

    onClick = (direction) => {
        if (direction === 'next') {
            this.handleNext();
        } else if (direction === 'prev') {
            this.handlePrev();
        }
    };

    handleNext() {
        const images = this.state.images;
        for (let i = 0; i < images.length; i++) {
            if (images[i].active) {
                images[i].active = false;
                images[i === images.length - 1 ? 0 : i + 1].active = true;
                break;
            }
        }
        this.setState(() => ({images: images}));
    }

    handlePrev() {
        const images = this.state.images;
        for (let i = 0; i < images.length; i++) {
            if (images[i].active) {
                images[i].active = false;
                images[i === 0 ? images.length - 1 : i - 1].active = true;
                break;
            }
        }
        this.setState(() => ({images: images}));
    }

    render() {
        const images = this.state.images.map((image) => {
            const className = classNames('carousel-item', {active: image.active});
            return <div className={className} key={image.src}>
                <img alt="" className="d-block w-100" src={image.src}/>
            </div>;
        });

        return <div className="container">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner mh-600px">
                    {images}
                </div>
                <button onClick={() => {
                    this.onClick('prev');
                }} className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={() => {
                    this.onClick('next');
                }} className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>;
    }
}

export default Carousel;