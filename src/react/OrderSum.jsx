import vibeImgMobile from "../assets/images/illustration-hero.svg";

function OrderSum() {
  return (
    <div className="container">
      <picture>
        <img src={vibeImgMobile} alt="" />
      </picture>
      <article>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="stats flex">
          <div className="flex">
            <div className="icon"></div>
            <div>
              <div>Annual Plan</div>
              <span>$59.99/year</span>
            </div>
          </div>
          <button>Change</button>
        </div>
        <button className="primary-btn"> Proceed to Payment</button>
        <button>Cancel Order</button>
      </article>
    </div>
  );
}

export default OrderSum;
