import React from 'react';
import storimg from '../images/store-image-min.jpg'
import watch from '../images/watch.svg'
import star from '../images/star.svg'
import rupee from '../images/rupee.svg'
import imgitem from '../images/item-img.jpg'

export default function Product_List() {
    return (
        <div className="product-list-page">
            <div className="store-top-sec" id="storeHeader">
        <div className="container">
            <div className="store-details">
            <div className="store-img">
                <img src={storimg} alt="Yourdrop" />
            </div>
            <div className="store-name">
                <h1>Bhutani Super Store</h1>
                <p>
                    <span>Saket</span>
                    <span><img src={watch} className="watch" alt="Yourdrop" /> 20 mins</span>
                </p>
                <p>
                    <span><img src={star} className="star" alt="Yourdrop" /> 5.0 RATINGS</span>
                </p>
                <p>
                    <input type="text" placeholder="Search items" className="searchitems" />
                </p>
            </div>
            </div>
        </div>
        </div>
        <div className="store-item-sec">
            <div className="container">
            <div className="store-items">
                <div className="items-categories">
                    <ul>
                        <li><a href="#" className="active">Breakfast</a></li>
                        <li><a href="#">Beverages</a></li>
                        <li><a href="#">Dairy</a></li>
                        <li><a href="#">Groceries</a></li>
                        <li><a href="#">Personal care</a></li>
                        <li><a href="#">Snacks</a></li>
                    </ul>
                </div>
                <div className="item-list-sec">
                    <div className="inner-items">
                    <h3>Breakfast</h3>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-items">
                    <h3>Breakfast</h3>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                        <div className="items">
                            <img src={imgitem} className="itemsimg" alt="Yourdrop" />
                            <div className="item-name">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p><img src={rupee} className="rupee" alt="Yourdrop" />15</p>
                                <p>160 Gms</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="quick-cart">
                    <h3>Your Cart</h3>
                    <div className="item-selected">
                        <div className="select-productname">
                                <strong>Harvest Gold Sweet Buns</strong>
                                <p>160 Gms</p>
                        </div>
                        <div className="select-productqty">
                            Quanity
                        </div>
                        <div className="select-productprice">
                        <img src={rupee} className="rupee" alt="Yourdrop" />200
                        </div>
                    </div>
                    <div className="item-total">
                        <div className="totalhead">
                            <strong>Item total</strong>
                        </div>
                        <div className="totalprice">
                        <img src={rupee} className="rupee" alt="Yourdrop" />200
                        </div>
                    </div>
                    <div className="proceedbtn">
                        <input type="button" value="Proceed" className="proceed-btn" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
