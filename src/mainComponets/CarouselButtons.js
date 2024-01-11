import React from "react";
import { Link } from "react-router-dom";

export default function CarouselButtons() {
  return (
    <>
      <div className="container">
        <Link>
          <button type="button" class="btn carouselBtn">
            Visas
          </button>
        </Link>
        <Link>
          <button type="button" class="btn carouselBtn">
            Flights
          </button>
        </Link>
        <Link>
          <button type="button" class="btn carouselBtn">
            Bank Offers
          </button>
        </Link>
        <Link>
          <button type="button" class="btn carouselBtn">
            Rewards
          </button>
        </Link>
      </div>
    </>
  );
}
