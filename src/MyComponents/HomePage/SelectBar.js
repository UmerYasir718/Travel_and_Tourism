import React from 'react'

export default function SelectBar() {
    return (
        <div>
            <div className="row SelectSetting">
                <div className="col- col-sm-12 col-md-6 col-lg-6 SelectBar">
                    <select
                        className="form-select form-select-lg "
                        aria-label="Large select example"
                    >
                        <option selected>Select Country</option>
                        <option value="1">Pakistan</option>
                        <option value="2">Dubai</option>
                        <option value="3">Canada</option>
                        <option value="1">Pakistan</option>
                        <option value="2">Dubai</option>
                        <option value="3">Canada</option>
                    </select>
                </div>
                <div className="col- col-sm-12 col-md-6 col-lg-6 SelectBtn">
                    <button type="button" className="btn btn-primary btn-lg">Search</button>
                </div>
            </div>
        </div>
    )
}
