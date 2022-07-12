import React, { Component } from 'react' 

import './Portfolio.css'
import $ from 'jquery';
export default class Portfolio extends Component {
    state = {
        isShow: false,
        imgName: "",
        imgSrc: ""
    }
    render() {
        {
            $('body').click((e) => {
                console.log('clicked on body');
                e.stopPropagation();
                this.hidePortfolio();
            })
        }
        return (
            <>
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase  mb-0">Portfolio</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/cabin.png" name="LOG CABIN" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal2">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"> <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/cake.png" alt="" name="TASTY CAKE" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal3">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/circus.png" alt="" name="CIRCUS TENT" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal4">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/game.png" alt="" name="CONTROLLER" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal5">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"> <i className="fa-solid fa-plus"></i> </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/safe.png" alt="" name="LOCKED SAFE" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item mx-auto" onClick={this.getClickedDiv} data-toggle="modal" data-target="#portfolioModal6">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"> <i className="fa-solid fa-plus"></i> </div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/submarine.png" alt="" name="SUBMARINE" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {

                    }
                </section>


                <div className="portfolio-modal hide fade" id="portfolioModal1" aria-labelledby="portfolioModal1Label" >
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <button className="close" type="button" data-dismiss="modal" onClick={this.hidePortfolio} aria-label="Close">
                                <span aria-hidden="true">
                                    <i className="fa-solid fa-xmark"></i>  </span>
                            </button>
                            <div className="modal-body text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{this.state.imgName}</h2>
                                            <div className="divider-custom">
                                                <div className="divider-custom-line"></div>
                                                <div className="divider-custom-icon"> <i className="fas fa-star"></i>  </div>
                                                <div className="divider-custom-line"></div>
                                            </div>
                                            <img className="img-fluid rounded mb-5" src={this.state.imgSrc} alt="" />
                                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            <button className="btn btn-primary btn-closed" data-dismiss="modal" onClick={this.hidePortfolio}>
                                                <i className="fa-solid fa-xmark"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    getClickedDiv = (target) => {
        target.stopPropagation();
        console.log('clicked');
        this.setState({
            isShow: true,
            imgName: $(target.currentTarget).find('img').attr('name'),
            imgSrc: $(target.currentTarget).find('img').attr('src')
        });
        this.setState({
            isShow: true,
            imgName: $(target.currentTarget).find('img').attr('name'),
            imgSrc: $(target.currentTarget).find('img').attr('src')
        });
        console.log(this.state.isShow)
        console.log(this.state.imgName)
        console.log(this.state.imgSrc)
        if (this.state.isShow === true) {
            $('.portfolio-modal').removeClass("hide");
            $('.portfolio-modal').addClass("show");
            $('body').addClass("layer");

        }
        else {
            $('.portfolio-modal').addClass("hide");
            $('.portfolio-modal').removeClass("show");
            $('body').removeClass("layer");
        }

        console.log('clicked');

        console.log(this.state.isShow)
    }
    hidePortfolio = () => {
        // e.stopPropagation();
        console.log('clicked in hide')
        console.log(`values of state from hide before setState:  ${this.state.isShow}`) 
        this.setState({ isShow: true })
        console.log(`values of state from hide after setState: ${this.state.isShow}`)
        if (this.state.isShow === true) {
            $('.portfolio-modal').addClass("hide");
            $('.portfolio-modal').removeClass("show");
            $('body').removeClass("layer");

        }
        else {
            $('.portfolio-modal').removeClass("hide");
            $('.portfolio-modal').addClass("show");
            $('body').addClass("layer");
        }

    }


}


