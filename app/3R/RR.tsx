

import { TbPointFilled } from "react-icons/tb";
const RR = () => {
      return (
            <div className="sub more ">
                  <div>A high amount of plastic waste affects the ecosystem through landfilling: soil pollution and marine/water pollution.
                  </div>
                  <div>Plastic waste conversion: Waste-to-Energy (WtE) and Waste-to-Production (WtP)
                  </div>
                  <div className="ulHome">
                        <div className="checkmarks">  <TbPointFilled /> <p className="w-[90%]">Recycling includes recovery of energy (Waste to Energy, WtE) and resources or products (waste to products, WtP).
                        </p></div>
                        <div className="checkmarks">  <TbPointFilled /><p className="w-[90%]">WtE: Energy recovered by incineration: It is predicted that almost 50% of total plastic waste will be curated by incineration by 2050. The main incineration products are water and  <span>CO<sub>2</sub></span>
                        </p></div>

                  </div>
            </div>
      )
}

export default RR;