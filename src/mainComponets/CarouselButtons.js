import React from "react";
import { Link } from "react-router-dom";

export default function CarouselButtons() {
  return (
    <>
      <div className="container carouselBtnRow">
        <h1>Best Deals</h1>
        <Link>
          <button type="button" className="btn carouselBtn">
            Visas
          </button>
        </Link>
        <Link>
          <button type="button" className="btn carouselBtn">
            Flights
          </button>
        </Link>
        <Link>
          <button type="button" className="btn carouselBtn">
            Bank Offers
          </button>
        </Link>
        <Link>
          <button type="button" className="btn carouselBtn">
            Rewards
          </button>
        </Link>
      </div>
    </>
  );
}
