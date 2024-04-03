
import { TbPointFilled } from "react-icons/tb";
const AboutPlastic = () => {
      return (
            <div className="sub more">
                  <p> Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics
                  </p>
                  <div className="ulHome">
                        <div className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]">It is estimated that around <b>343 million tonnes (MT) of plastic is produced every year</b>.</p>
                        </div>
                        <div className="checkmarks">  <TbPointFilled color="#000000" size={25} />
                              <p className="w-[90%]"><b>Plastic Wastes (PW)</b> are produced <b>by massive manufacturing, processing, and packaging industries</b>.</p></div>
                        <div className="checkmarks">  <TbPointFilled size={25} />
                              <p className="w-[90%]"><b>More than 20 billion plastic bottles</b> are tossed on earth.</p>
                        </div>
                        <div className="checkmarks">  <TbPointFilled size={25} /><p className="w-[90%]">Only <b>approximately 10% of total world plastic is recycled</b>.</p></div>
                        <div className="checkmarks">  <TbPointFilled size={25} /><div className="w-[90%]"><b>Plastic visibility</b> is increasing due to plastic accumulation and its harmful influence on the environment and human health.</div>
                        </div>
                  </div>
            </div >
      )
}

export default AboutPlastic;